import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import {
	MatTableDataSource,
	MatSort,
	MatPaginator,
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA,
	MatDialogConfig
} from '@angular/material';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
import { registerEscClick } from 'ngx-bootstrap/utils/triggers';
import { DistributorsService } from 'src/app/Services/API/distributors.service';
import { CreateDistributorsComponent } from '../create-distributors/create-distributors.component';
import { UpdateDistributorsComponent } from '../update-distributors/update-distributors.component';

@Component({
	selector: 'app-distributors',
	templateUrl: './distributors.component.html',
	styleUrls: [ './distributors.component.css' ]
})
export class DistributorsComponent implements OnInit {
	curOrderNum;
	constructor(
		private _apiService: DistributorsService,
		private dialog: MatDialog,
		private _sendForm: SendFormService
	) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [ 'distributorID', 'distName', 'street', 'city', 'state', 'zip', 'userID', 'Options' ];

	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postDistributorList();
	}

	postDistributorList() {
		this._apiService.getDistributor().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}

	onCreate() {
		const dialogConfig = this.dialog.open(CreateDistributorsComponent, {
			width: '600px',
			height: '500px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Create was closed');
			setTimeout(() => this.postDistributorList(), 100);
			this.postDistributorList();
		});
	}
	onEdit(row) {
		this.curOrderNum = row.orderNum;
		this._sendForm.sendForm(this.curOrderNum);
		this._apiService.sendData(this.curOrderNum);
		this._apiService.setForm(row);
		const dialogConfig = this.dialog.open(UpdateDistributorsComponent, {
			width: '800px',
			height: '600px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Updating');
			setTimeout(() => this.postDistributorList(), 500);
			this.postDistributorList();
		});
	}
}
