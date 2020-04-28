import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoatOwners } from 'src/app/Services/boatOwnersInterface';
import { BoatOwnersService } from 'src/app/Services/API/boat-owners.service';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
	selector: 'app-create-boat-owners',
	templateUrl: './create-boat-owners.component.html',
	styleUrls: [ './create-boat-owners.component.css' ]
})
export class CreateBoatOwnersComponent implements OnInit {
	boatowners: BoatOwners[];
	myForm: FormGroup;
	idNumber: string;
	constructor(
		private _apiService: BoatOwnersService,
		private fb: FormBuilder,
		private _sendForm: SendFormService,
		public dialogRef: MatDialogRef<CreateBoatOwnersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			ownerID: [
				null,
				[
					//Validators.required
				]
			],
			fName: [ '', [ Validators.required ] ],
			lName: [ '', [ Validators.required ] ],
			phone: [ '', [ Validators.required, Validators.minLength(10) ] ],
			email: [ '', [ Validators.required, Validators.email ] ],
			userID: [ null, [] ]
		});
		this.myForm.valueChanges.subscribe(console.log);
	}

	/*
  Posts the manufacturer data to the database
  */
	submitData() {
		this.boatowners = [];
		this._apiService
			.addBoatOwner(this.myForm.value)
			.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));
		this.onClose();
		this.notificiationService.success('! Submitted Successfully');
	}
	onClose() {
		this.myForm.reset();
		this.dialogRef.close();
	}
	/*
  */
	editManu(i: string) {
		this._sendForm.sendForm(i);
	}

	/*
  Getters, this is for Validators
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
// ownerID: string;
// fName: string;
// lName: string;
// phone: string;
// email: string;
// userID: string;
