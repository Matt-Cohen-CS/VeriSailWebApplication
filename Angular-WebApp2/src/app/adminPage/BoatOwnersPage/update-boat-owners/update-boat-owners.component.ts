import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { BoatOwnersService } from 'src/app/Services/API/boat-owners.service';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
	selector: 'app-update-boat-owners',
	templateUrl: './update-boat-owners.component.html',
	styleUrls: [ './update-boat-owners.component.css' ]
})
export class UpdateBoatOwnersComponent implements OnInit {
	boatowners = { ownerID: '' }; //TO GET RID OF ERROR OF 'cannot find manufacturerID of undefined'
	//manu: Test[];
	userID1: any;
	curBoatOwnerID;
	myForm: FormGroup;
	checkForm: FormGroup;
	serviceData: string;
	constructor(
		private _formService: SendFormService,
		private fb: FormBuilder,
		private _apiService: BoatOwnersService,
		public dialogRef: MatDialogRef<UpdateBoatOwnersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}

	ngOnInit() {
		this.curBoatOwnerID = this._apiService.returnData();

		this._apiService.getBoatOwnerByID(this.curBoatOwnerID).subscribe((data) => {
			this.boatowners = data;
		});

		this.myForm = this.fb.group({
			ownerID: [
				this.curBoatOwnerID,
				[
					// Validators.required
				]
			],
			fName: [
				'',
				[
					//  Validators.required
				]
			],
			lName: [
				'',
				[
					// Validators.required,
				]
			],
			phone: [ '', [ Validators.minLength(10) ] ],
			email: [ '', [ Validators.email ] ],
			userID: [
				'',
				[
					// Validators.required
				]
			]
		});
		// ownerID: string;
		// fName: string;
		// lName: string;
		// phone: string;
		// email: string;
		// userID: string;
		this.checkForm = this.fb.group({
			ownerID: [
				this.curBoatOwnerID,
				[
					// Validators.required
				]
			],
			fName: [
				'',
				[
					//  Validators.required
				]
			],
			lName: [
				'',
				[
					// Validators.required,
				]
			],
			phone: [ '', [ Validators.minLength(10) ] ],
			email: [ '', [ Validators.email ] ],
			userID: [
				'',
				[
					// Validators.required
				]
			]
		});

		this.myForm.setValue(this._apiService.getForm());
		this.checkForm.setValue(this._apiService.getForm());
	}
	createManu(data: any) {
		this.boatowners = data;
		//console.log(this.manu);
	}

	getMyPost(id: string) {
		console.log(id);
		this._apiService.getBoatOwnerByID(id).subscribe((data) => {
			this.boatowners = data;
			//console.log('In Post', this.manu);
		});
	}

	getData() {
		this._formService.form$.subscribe((data) => {
			this.serviceData = data;
			//console.log(this.serviceData);
		});
		//console.log(this.serviceData);
		this.myForm.valueChanges.subscribe(console.log);
	}
	checkCondition() {
		const isEqual = (form1, form2) => {
			const form1Keys = Object.keys(form1);
			const form2Keys = Object.keys(form2);

			if (form1Keys.length !== form2Keys.length) {
				return false;
			}
			for (let formKey of form1Keys) {
				if (form1[formKey] !== form2[formKey]) {
					return false;
				}
			}
			return true;
		};
		if (isEqual(this.myForm.value, this.checkForm.value)) {
			this.onClose();
			this.notificiationService.warn(':: Same Data');
		}
		else {
			this._apiService.updateBoatOwner(this.curBoatOwnerID, this.myForm.value).subscribe((data) => {
				//console.log(data);
			});
			this.onClose();
			this.notificiationService.success(':: Updated Successfully');
		}
	}

	onClose() {
		this.myForm.reset();
		this.dialogRef.close();
	}
	checkState(data): String {
		if (data == '') {
			data = 'State';
		}
		return data;
	}
	/*
   Getters, this is for error checking
   */
	get ownerID() {
		return this.myForm.get('ownerID');
	}
	get fName() {
		return this.myForm.get('fName');
	}
	get lName() {
		return this.myForm.get('lName');
	}
	get phone() {
		return this.myForm.get('phone');
	}
	get email() {
		return this.myForm.get('email');
	}
	get userID() {
		return this.myForm.get('userID');
	}
}
