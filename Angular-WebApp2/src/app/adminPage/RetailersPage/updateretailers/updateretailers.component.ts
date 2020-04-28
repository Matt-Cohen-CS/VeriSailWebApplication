import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/Services/notification.service';
import { MatDialogRef } from '@angular/material';
import { RetailersService } from 'src/app/Services/API/retailers.service';
import { SendFormService } from 'src/app/Services/send-form.service';
//import { Retail } from 'src/app/Services/retailers';
export interface Retail {
	retailID: string;
	retailName: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	userID?: string;
}
@Component({
	selector: 'app-updateretailers',
	templateUrl: './updateretailers.component.html',
	styleUrls: [ './updateretailers.component.css' ]
})
export class UpdateretailersComponent implements OnInit {
	//retailers = [ { retailID: '', retailName: '', street: '', city: '', state: '', zip: '' } ]; //TO GET RID OF ERROR OF 'cannot find manufacturerID of undefined'
	userID: any;
	curRetailID;
	myForm: FormGroup;
	checkForm: FormGroup;
	serviceData: string;
	currentState;
	constructor(
		private _formService: SendFormService,
		private fb: FormBuilder,
		private _apiService: RetailersService,
		public dialogRef: MatDialogRef<UpdateretailersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService
	) {}
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
		this.curRetailID = this._apiService.returnData();

		this._apiService.getRetailListByID(this.curRetailID).subscribe((data) => {
			this.currentState = data.state;
		});

		this.myForm = this.fb.group({
			retailID: [
				this.curRetailID,
				[
					// Validators.required
				]
			],
			retailName: [
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
			street: [
				'',
				[
					// Validators.required
				]
			],
			city: [
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
			retailID: [
				this.curRetailID,
				[
					// Validators.required
				]
			],
			retailName: [
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
			street: [
				'',
				[
					// Validators.required
				]
			],
			city: [
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
		//this.retailers = data;
		//console.log(this.manu);
	}

	getMyPost(id: string) {
		console.log(id);
		this._apiService.getRetailListByID(id).subscribe((data) => {
			//this.retailers = data;
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
			this._apiService.updateRetailer(this.curRetailID, this.myForm.value).subscribe((data) => {
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
	get retailID() {
		return this.myForm.get('retailID');
	}
	get retailName() {
		return this.myForm.get('retailName');
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
// retailID: string;
// retailName: string;
// street: string;
// city: string;
// state: string;
// zip: string;
// userID?: string;
