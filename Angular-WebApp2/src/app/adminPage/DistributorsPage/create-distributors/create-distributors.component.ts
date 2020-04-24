import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';
import { LabelordersService } from 'src/app/Services/API/labelorders.service';

@Component({
	selector: 'app-create-distributors',
	templateUrl: './create-distributors.component.html',
	styleUrls: [ './create-distributors.component.css' ]
})
export class CreateDistributorsComponent implements OnInit {
	myForm: FormGroup;

	constructor(
		private _apiService: LabelordersService,
		private fb: FormBuilder,
		private _sendForm: SendFormService,
		public dialogRef: MatDialogRef<CreateDistributorsComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			distributorID: [
				null,
				[
					//Validators.required
				]
			],
			distName: [ '', [ Validators.required ] ],
			street: [ { value: '', disabled: false }, [ Validators.required ] ],
			city: [ { value: '', disabled: false }, [ Validators.required ] ],
			state: [ '', [ Validators.required ] ],
			zip: [ '', [ Validators.required ] ],
			userID: [ '', [ Validators.required ] ]
		});
	}
	// distributorID: string;
	// distName: string;
	// street: string;
	// city: string;
	// state: string;
	// zip: string;
	// userID: string;
	/*
  Posts the manufacturer data to the database
  */
	submitData() {
		if (this.myForm.get('label_quantity').value <= 0) {
			this.onClose();
			this.notificiationService.warn('! Quantity can not be negative or 0');
		}
		else {
			this._apiService
				.addLabelOrder(this.myForm.value)
				.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));
			this.onClose();
			this.notificiationService.success('! Submitted Successfully');
		}
	}
	onClose() {
		this.myForm.reset();
		this.dialogRef.close();
	}

	/*
  Getters, this is for Validators
  */
	get orderNum() {
		return this.myForm.get('orderNum');
	}
	get partName() {
		return this.myForm.get('partName');
	}
	get QR_begin() {
		return this.myForm.get('QR_begin');
	}
	get QR_end() {
		return this.myForm.get('QR_end');
	}
	get label_quantity() {
		return this.myForm.get('label_quantity');
	}
}
