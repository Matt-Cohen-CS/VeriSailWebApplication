import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateBoatOwnersComponent } from '../update-boat-owners/update-boat-owners.component';
import { CreateBoatOwnersComponent } from '../create-boat-owners/create-boat-owners.component';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SendFormService } from 'src/app/Services/send-form.service';
import { BoatOwnersService } from 'src/app/Services/API/boat-owners.service';
import { BoatOwners } from 'src/app/Services/boatOwnersInterface';

@Component({
	selector: 'app-boat-owners',
	templateUrl: './boat-owners.component.html',
	styleUrls: [ './boat-owners.component.css' ]
})
export class BoatOwnersComponent implements OnInit {
	owners: BoatOwners[];
	curOwnerID;
	constructor(
		private _apiService: BoatOwnersService,
		private dialog: MatDialog,
		private _sendForm: SendFormService
	) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [ 'ownerID', 'fName', 'lName', 'phone', 'email', 'userID', 'Options' ];
	// ownerID: string;
	// fName: string;
	// lName: string;
	// phone: string;
	// email: string;
	// userID: string;
	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postBoatOwnersList();
	}

	postBoatOwnersList() {
		this._apiService.getBoatOwner().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}

	onCreate() {
		const dialogConfig = this.dialog.open(CreateBoatOwnersComponent, {
			width: '600px',
			height: '500px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Create was closed');
			setTimeout(() => this.postBoatOwnersList(), 100);
			this.postBoatOwnersList();
		});
	}
	onEdit(row) {
		this.curOwnerID = row.ownerID;
		this._sendForm.sendForm(this.curOwnerID);
		this._apiService.sendData(this.curOwnerID);
		this._apiService.setForm(row);
		const dialogConfig = this.dialog.open(UpdateBoatOwnersComponent, {
			width: '800px',
			height: '600px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Updating');
			setTimeout(() => this.postBoatOwnersList(), 900);
			this.postBoatOwnersList();
		});
	}
}
