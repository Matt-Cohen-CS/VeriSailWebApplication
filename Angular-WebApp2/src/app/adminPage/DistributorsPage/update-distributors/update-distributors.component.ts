import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/Services/notification.service';
import { DistributorsService } from 'src/app/Services/API/distributors.service';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatDialogRef } from '@angular/material';
import { Distribute } from 'src/app/Services/distributorsInterface';

@Component({
	selector: 'app-update-distributors',
	templateUrl: './update-distributors.component.html',
	styleUrls: [ './update-distributors.component.css' ]
})
export class UpdateDistributorsComponent implements OnInit {
	//dis = [ { distributorID: '', distName: '', zip: '', city: '', street: '', state: '', userID: '' } ];
	userID: any;
	curDisID;
	currentState;
	myForm: FormGroup;
	checkForm: FormGroup;
	serviceData: string;
	constructor(
		private _formService: SendFormService,
		private fb: FormBuilder,
		private _apiService: DistributorsService,
		public dialogRef: MatDialogRef<UpdateDistributorsComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}
	// subs = new SubSink();

	stateArray: string[] = [
		'AL : Alabama',
		'AK : Alaska',
		'AZ : Arizona',
		'AR : Arkansas',
		'CA : California',
		'CO : Colorado',
		'CT : Connecticut',
		'DE : Delaware',
		'FL : Florida',
		'GA : Georgia',
		'HI : Hawaii',
		'ID : Idaho',
		'IL : Illinois',
		'IN : Indiana',
		'IA : Iowa',
		'KS : Kansas',
		'KY : Kentucky',
		'LA : Louisiana',
		'ME : Maine',
		'MD : Maryland',
		'MA : Massachusetts',
		'MI : Michigan',
		'MN : Minnesota',
		'MS : Mississippi',
		'MO : Missouri',
		'MT : Montana',
		'NE : Nebraska',
		'NV : Nevada',
		'NH : New Hampshire',
		'NJ : New Jersey',
		'NM : New Mexico',
		'NY : New York',
		'NC : North Carolina',
		'ND : North Dakota',
		'OH : Ohio',
		'OK : Oklahoma',
		'OR : Oregon',
		'PA : Pennsylvania',
		'RI : Rhode Island',
		'SC : South Carolina',
		'SD : South Dakota',
		'TN : Tennessee',
		'TX : Texas',
		'UT : Utah',
		'VT : Vermont',
		'VA : Virginia',
		'WA : Washington',
		'WV : West Virginia',
		'WI : Wisconsin',
		'WY : Wyoming'
	];
	ngOnInit() {
		this.curDisID = this._apiService.returnData();

		this._apiService.getDistributorByID(this.curDisID).subscribe((data) => {
			//this.dis = data;
			this.currentState = data.state;
		});

		this.myForm = this.fb.group({
			distributorID: [
				this.curDisID,
				[
					// Validators.required
				]
			],
			distName: [
				'',
				[
					//  Validators.required
				]
			],
			zip: [
				'',
				[
					// Validators.required,
					Validators.minLength(5)
				]
			],
			city: [
				'',
				[
					// Validators.required
				]
			],
			street: [
				'',
				[
					//Validators.required
				]
			],
			state: [
				'',
				[
					// Validators.required
				]
			],
			userID: [
				'',
				[
					// Validators.required
				]
			]
		});
		this.checkForm = this.fb.group({
			distributorID: [
				this.curDisID,
				[
					// Validators.required
				]
			],
			distName: [
				'',
				[
					//  Validators.required
				]
			],
			zip: [
				'',
				[
					// Validators.required,
					Validators.minLength(5)
				]
			],
			city: [
				'',
				[
					// Validators.required
				]
			],
			street: [
				'',
				[
					//Validators.required
				]
			],
			state: [
				'',
				[
					// Validators.required
				]
			],
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
		//this.dis = data;
		//console.log(this.manu);
	}

	getMyPost(id: string) {
		console.log(id);
		this._apiService.getDistributorByID(id).subscribe((data) => {
			//this.dis = data;
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
			this._apiService.updateDistributor(this.curDisID, this.myForm.value).subscribe((data) => {
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
	get manufacturerID() {
		return this.myForm.get('manufacturerID');
	}
	get manuName() {
		return this.myForm.get('manuName');
	}
	get zip() {
		return this.myForm.get('zip');
	}
	get street() {
		return this.myForm.get('street');
	}
	get state() {
		return this.myForm.get('state');
	}
	get city() {
		return this.myForm.get('city');
	}
}
