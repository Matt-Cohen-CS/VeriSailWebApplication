import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
import { Test } from 'src/app/Services/sample';
import { DistributorsService } from 'src/app/Services/API/distributors.service';
import { BoatOwnersService } from 'src/app/Services/API/boat-owners.service';
import { RetailersService } from 'src/app/Services/API/retailers.service';
import { UsersService } from 'src/app/Services/API/users.service';

interface Type {
	value: String;
	viewValue: String;
}

interface TypeGroup {
	name: String;
	list: Type[];
}

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: [ './create-account.component.css' ]
})
export class CreateAccountComponent implements OnInit {
	some: boolean;
	myForm: FormGroup;
	types: String[] = [ 'Distributer', 'Manufacturer' ];

	manu: any[];
	dis: any[];
	boatOwners: any[];
	retailers: any[];

	type: String;
	constructor(
		private fb: FormBuilder,
		private _apiService: ManufacturerService,
		private _apiDisService: DistributorsService,
		private _apiOwnersService: BoatOwnersService,
		private _apiRetailService: RetailersService,
		private _apiUserService: UsersService
	) {
		this._apiService.getManufacturerList().subscribe((data) => {
			this.manu = data;
		});
		this._apiDisService.getDistributor().subscribe((data) => {
			this.dis = data;
		});
		this._apiOwnersService.getBoatOwner().subscribe((data) => {
			this.boatOwners = data;
		});
		this._apiRetailService.getRetailList().subscribe((data) => {
			this.retailers = data;
		});
	}

	ngOnInit() {
		this.myForm = this.fb.group({
			firstName: [ '', [ Validators.required ] ],
			lastName: [ '', [ Validators.required ] ],
			email: [ '', [ Validators.required, Validators.minLength(5) ] ],
			userName: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required ] ],
			typeID: [ '', [ Validators.required ] ],
			theType: [ '' ]
			// city: [ '', [ Validators.required ] ],
			// state: [ '', [ Validators.required ] ]
		});
		this.myForm.valueChanges.subscribe(console.log);
		//this.getName();
	}

	onSubmit(){
		this._apiService.getManufacturerList().subscribe((data) => {
			this.manu = data;
		});
	}
}
// ILCA 1
// Manu 2...
// Dis 3
// Retailer 4
// Boat owner 5
// Other: 6