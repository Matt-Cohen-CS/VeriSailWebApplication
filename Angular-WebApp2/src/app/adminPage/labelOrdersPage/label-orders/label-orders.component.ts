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
import { UpdateLabelOrdersComponent } from '../update-label-orders/update-label-orders.component';
import { CreateLabelOrdersComponent } from '../create-label-orders/create-label-orders.component';
import { LabelordersService } from 'src/app/Services/API/labelorders.service';

@Component({
	selector: 'app-label-orders',
	templateUrl: './label-orders.component.html',
	styleUrls: [ './label-orders.component.css' ]
})
export class LabelOrdersComponent implements OnInit {
	manu: Test[];
	curOrderNum;
	lastQR = 0;
	constructor(
		private _apiService: LabelordersService,
		private dialog: MatDialog,
		private _sendForm: SendFormService
	) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [ 'orderNum', 'partName', 'QR_begin', 'QR_end', 'label_quantity', 'Options' ];

	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postLabelOrderList();
	}

	postLabelOrderList() {
		this._apiService.getLabelOrderList().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
			for (let end of data) {
				let partn = end.partName;
				if (+end.QR_end > this.lastQR) {
					this.lastQR = +end.QR_end;
				}
				
				this._apiService.sendQRCode(this.lastQR);
			}
			
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}

	onCreate() {
		const dialogConfig = this.dialog.open(CreateLabelOrdersComponent, {
			width: '600px',
			height: '500px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Create was closed');
			setTimeout(() => this.postLabelOrderList(), 100);
			this.postLabelOrderList();
		});
	}
	onEdit(row) {
		this.curOrderNum = row.orderNum;
		this._sendForm.sendForm(this.curOrderNum);
		this._apiService.sendData(this.curOrderNum);
		this._apiService.setForm(row);
		const dialogConfig = this.dialog.open(UpdateLabelOrdersComponent, {
			width: '800px',
			height: '600px',
			autoFocus: true
		});
		dialogConfig.afterClosed().subscribe((result) => {
			console.log('Updating');
			setTimeout(() => this.postLabelOrderList(), 500);
			this.postLabelOrderList();
		});
	}
}
