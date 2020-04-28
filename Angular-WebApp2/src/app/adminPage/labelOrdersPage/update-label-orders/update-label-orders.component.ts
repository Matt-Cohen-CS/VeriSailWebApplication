import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { SendFormService } from 'src/app/Services/send-form.service';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';
import { LabelordersService } from 'src/app/Services/API/labelorders.service';

@Component({
	selector: 'app-update-label-orders',
	templateUrl: './update-label-orders.component.html',
	styleUrls: [ './update-label-orders.component.css' ]
})
export class UpdateLabelOrdersComponent implements OnInit {
	order = { orderNum: '' }; //TO GET RID OF ERROR OF 'cannot find manufacturerID of undefined'
	//manu: Test[];
	userID: any;
	curOrderNum;
	myForm: FormGroup;
	checkForm: FormGroup;
	serviceData: string;
	constructor(
		private _formService: SendFormService,
		private fb: FormBuilder,
		private _apiService: LabelordersService,
		public dialogRef: MatDialogRef<UpdateLabelOrdersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}

	ngOnInit() {
		this.curOrderNum = this._apiService.returnData();

		this._apiService.getLabelOrderListListByID(this.curOrderNum).subscribe((data) => {
			this.order = data;
			// console.log(this.order);
		});

		this.myForm = this.fb.group({
			orderNum: [
				this.curOrderNum,
				[
					// Validators.required
				]
			],
			partName: [
				'',
				[
					//  Validators.required
				]
			],
			QR_begin: [
				'',
				[
					// Validators.required,
					Validators.minLength(5)
				]
			],
			QR_end: [
				'',
				[
					// Validators.required
				]
			],
			label_quantity: [
				'',
				[
					//Validators.required
				]
			]
		});
		this.checkForm = this.fb.group({
			orderNum: [
				this.curOrderNum,
				[
					// Validators.required
				]
			],
			partName: [
				'',
				[
					//  Validators.required
				]
			],
			QR_begin: [
				'',
				[
					// Validators.required,
					Validators.minLength(5)
				]
			],
			QR_end: [
				'',
				[
					// Validators.required
				]
			],
			label_quantity: [
				'',
				[
					//Validators.required
				]
			]
		});
		this.myForm.setValue(this._apiService.getForm());
		this.checkForm.setValue(this._apiService.getForm());
	}
	createManu(data: any) {
		this.order = data;
		//console.log(this.manu);
	}

	getMyPost(id: string) {
		console.log(id);
		this._apiService.getLabelOrderListListByID(id).subscribe((data) => {
			this.order = data;
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
			this._apiService.updateLabelOrders(this.curOrderNum, this.myForm.value).subscribe((data) => {
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
