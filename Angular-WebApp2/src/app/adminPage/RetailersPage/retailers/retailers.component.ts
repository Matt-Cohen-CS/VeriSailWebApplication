import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateretailersComponent } from '../updateretailers/updateretailers.component';
import { CreateRetailersComponent } from '../create-retailers/create-retailers.component';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SendFormService } from 'src/app/Services/send-form.service';
import { RetailersService } from 'src/app/Services/API/retailers.service';
import { Retail } from 'src/app/Services/retailers';

@Component({
	selector: 'app-retailers',
	templateUrl: './retailers.component.html',
	styleUrls: [ './retailers.component.css' ]
})
export class RetailersComponent implements OnInit {
	retailer: Retail[];
	retailID;
	constructor(private _apiService: RetailersService, private dialog: MatDialog, private _sendForm: SendFormService) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [ 'retailID', 'retailName', 'street', 'city', 'state', 'zip', 'userID', 'Options' ];

	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postRetailList();
	}

	postRetailList() {
		this._apiService.getRetailList().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}

	onCreate() {
		const dialogConfig = this.dialog.open(CreateRetailersComponent, {
			width: '600px',
			height: '500px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Create was closed');
			setTimeout(() => this.postRetailList(), 100);
			this.postRetailList();
		});
	}
	onEdit(row) {
		this.retailID = row.retailID;
		this._sendForm.sendForm(this.retailID);
		this._apiService.sendData(this.retailID);
		this._apiService.setForm(row);
		const dialogConfig = this.dialog.open(UpdateretailersComponent, {
			width: '800px',
			height: '600px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Updating');
			setTimeout(() => this.postRetailList(), 500);
			this.postRetailList();
		});
	}
}
