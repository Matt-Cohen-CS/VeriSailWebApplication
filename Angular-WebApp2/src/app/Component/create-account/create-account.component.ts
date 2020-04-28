import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
import { Test } from 'src/app/Services/sample';
import { DistributorsService } from 'src/app/Services/API/distributors.service';
import { BoatOwnersService } from 'src/app/Services/API/boat-owners.service';
import { RetailersService } from 'src/app/Services/API/retailers.service';
import { UsersService } from 'src/app/Services/API/users.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
	selector: 'app-create-account',
	templateUrl: './create-account.component.html',
	styleUrls: [ './create-account.component.css' ]
})
export class CreateAccountComponent implements OnInit {
	some: boolean;
	myForm: FormGroup;
	myForm1: FormGroup;
	manu: any[];
	dis: any[];
	boatOwners: any[];
	retailers: any[];
	id;
	type: String;
	constructor(
		private fb: FormBuilder,
		private _apiService: ManufacturerService,
		private _apiDisService: DistributorsService,
		private _apiOwnersService: BoatOwnersService,
		private _apiRetailService: RetailersService,
		private _apiUserService: UsersService,
		private router:Router,
		private notificationservice: NotificationService
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
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', [ Validators.required ] ],
			typeID: [ '', [ Validators.required ] ],
			theType: [ '' ]
			// city: [ '', [ Validators.required ] ],
			// state: [ '', [ Validators.required ] ]
		});
		this.myForm1 = this.fb.group({
			userID: [ null ],
			username: [ '', [] ],
			password: [ '', [] ],
			typeID: [ '', [] ],
			crossrefID: [ Number,[]]
			// city: [ '', [ Validators.required ] ],
			// state: [ '', [ Validators.required ] ]
		});
		//this.myForm.valueChanges.subscribe(console.log);
		//this.getName();
	}
	onSubmit() {
		let curid;
		if (this.myForm.get('typeID').value === 'Manufacturer') {
			this.myForm1.get('typeID').setValue('2');
			this._apiService.getManufacturerByName(this.myForm.get('theType').value).subscribe((data)=>{
				this.myForm1.get('crossrefID').setValue(data.manufacturerID);
				this.myForm1.get('username').setValue(this.myForm.get('email').value);
				this.myForm1.get('password').setValue(this.myForm.get('password').value);
				this._apiUserService
				.addUser(this.myForm1.value)
				.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));

			})
			this.notificationservice.success(':: Account Created! Welcome to Verisail!')
			this.router.navigate([ '/manu', this.myForm1.get('username').value ]);
		}
		else if (this.myForm.get('typeID').value === 'Distributor') {
			this.myForm1.get('typeID').setValue('3');
			// this._apiService.getManufacturerByName(this.myForm.get('theType').value).subscribe((data)=>{
			// 	this.myForm1.get('crossrefID').setValue(data.manufacturerID);
			// 	this.myForm1.get('username').setValue(this.myForm.get('email').value);
			// 	this.myForm1.get('password').setValue(this.myForm.get('password').value);
			// 	this._apiUserService
			// 	.addUser(this.myForm1.value)
			// 	.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));
			// })
		}
		else if (this.myForm.get('typeID').value === 'Boat Owners') {
			this.myForm1.get('typeID').setValue('5');
		}
		else if (this.myForm.get('typeID').value === 'ILCA') {
			this.myForm1.get('typeID').setValue('1');
		}
		else if (this.myForm.get('typeID').value === 'Retailer') {
			this.myForm1.get('typeID').setValue('4');
		}
	}
	get email() {
		return this.myForm.get('email');
	}
	get password() {
		return this.myForm.get('password');
	}
	get firstName() {
		return this.myForm.get('firstName');
	}
	get lastName() {
		return this.myForm.get('lastName');
	}
	get typeID() {
		return this.myForm.get('typeID');
	}
	get theType() {
		return this.myForm.get('theType');
	}
}
