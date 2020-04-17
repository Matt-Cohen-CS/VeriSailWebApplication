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
import { CreateManuComponent } from '../create-manu/create-manu.component';
import { CreateManufacturerComponent } from '../create-manufacturer/create-manufacturer.component';
import { UpdateManufacturerComponent } from '../update-manufacturer/update-manufacturer.component';

@Component({
	selector: 'app-manufacturer',
	templateUrl: './manufacturer.component.html',
	styleUrls: [ './manufacturer.component.css' ]
})
export class ManufacturerComponent implements OnInit {
	manu: Test[];
	curManuID;
	constructor(
		private _apiService: ManufacturerService,
		private dialog: MatDialog,
		private _sendForm: SendFormService
	) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [
		'manufacturerID',
		'manuName',
		'street',
		'city',
		'state',
		'zip',
		'userID',
		'Options'
	];

	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postManufacturerList();
	}

	postManufacturerList() {
		this._apiService.getManufacturerList().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}

	onCreate() {
		const dialogConfig = this.dialog.open(CreateManufacturerComponent, {
			width: '600px',
			height: '500px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Create was closed');
		});
		// dialogConfig.disableClose = true;
		// dialogConfig.autoFocus = true;
		// dialogConfig.width = '100%';
		// dialogConfig.height = '100%';
		// this.dialog.open(CreateManufacturerComponent, {
		// 	width: '600px',
		// 	height: '500px'
		// });
	}
	onEdit(row) {
		this.curManuID = row.manufacturerID;
		this._sendForm.sendForm(this.curManuID);

		this._apiService.sendData(this.curManuID);
		// dialogConfig.disableClose = true;
		// dialogConfig.autoFocus = true;
		// dialogConfig.width = '100%';
		// dialogConfig.height = '100%';
		const dialogConfig = this.dialog.open(UpdateManufacturerComponent, {
			width: '800px',
			height: '600px',
			autoFocus: true
		});
	}
}
