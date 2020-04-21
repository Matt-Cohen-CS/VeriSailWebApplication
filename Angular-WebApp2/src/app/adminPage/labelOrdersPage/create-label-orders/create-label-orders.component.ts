import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';
import { LabelordersService } from 'src/app/Services/API/labelorders.service';
@Component({
	selector: 'app-create-label-orders',
	templateUrl: './create-label-orders.component.html',
	styleUrls: [ './create-label-orders.component.css' ]
})
export class CreateLabelOrdersComponent implements OnInit {
	manu: Test[];
	myForm: FormGroup;
	idNumber: string;
	quantity = 0;
	QRBegin = 0;
	QREnd = 0;
	isDisabled = true;
	constructor(
		private _apiService: LabelordersService,
		private fb: FormBuilder,
		private _sendForm: SendFormService,
		public dialogRef: MatDialogRef<CreateLabelOrdersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			orderNum: [
				null,
				[
					//Validators.required
				]
			],
			email: [ '', [ Validators.required ] ],
			QR_begin: [ { value: '', disabled: false }, [ Validators.required ] ],
			QR_end: [ { value: '', disabled: false }, [ Validators.required ] ],
			label_quantity: [ '', [ Validators.required ] ]
		});
		this.QRBegin = this._apiService.returnQRCode();
		this.QREnd = this.QRBegin;

		this.myForm.get('label_quantity').valueChanges.subscribe((data) => (this.QREnd = this.QRBegin + this.quantity));
	}

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
	get email() {
		return this.myForm.get('email');
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
