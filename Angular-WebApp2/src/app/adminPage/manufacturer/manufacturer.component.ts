import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';

@Component({
	selector: 'app-manufacturer',
	templateUrl: './manufacturer.component.html',
	styleUrls: [ './manufacturer.component.css' ]
})
export class ManufacturerComponent implements OnInit {
	manu: Test[];

	constructor(private _apiService: ManufacturerService) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [
		'Options',
		'manufacturerID',
		'manuName',
		'street',
		'city',
		'state',
		'zip',
		'userID'
	];

	@ViewChild(MatSort, null)
	sort: MatSort;
	ngOnInit() {
		this.postManufacturerList();
	}

	postManufacturerList() {
		this._apiService.getManufacturerList().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
		});
	}
}
// manufacturerID: string,
// manuName: string,
// street: string,
// city: string,
// state: string,
// zip: string,
// userID?: null,
