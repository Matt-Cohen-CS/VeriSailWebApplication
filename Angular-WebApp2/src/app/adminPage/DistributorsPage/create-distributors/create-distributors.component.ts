import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from 'src/app/Services/notification.service';
import { DistributorsService } from 'src/app/Services/API/distributors.service';
import { UsersService } from 'src/app/Services/API/users.service';

@Component({
	selector: 'app-create-distributors',
	templateUrl: './create-distributors.component.html',
	styleUrls: [ './create-distributors.component.css' ]
})
export class CreateDistributorsComponent implements OnInit {
	myForm: FormGroup;

	constructor(
		private _apiService: DistributorsService,
		private fb: FormBuilder,
		private _sendForm: SendFormService,
		public dialogRef: MatDialogRef<CreateDistributorsComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
		public notificiationService: NotificationService,
		public _apiUserService: UsersService
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
			zip: [ '', [ Validators.required, Validators.minLength(5) ] ],
			userID: [ '', [] ]
		});
	}

	/*
  Posts the manufacturer data to the database
  */
	submitData() {
		// this.myForm.get('userID').setValue(this._apiUserService.getUsername());
		// console.log(this.myForm.get('userID').value);
		this._apiService
			.addDistributor(this.myForm.value)
			.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));
		this.onClose();
		this.notificiationService.success('! Submitted Successfully');
	}
	onClose() {
		this.myForm.reset();
		this.dialogRef.close();
	}

	/*
  Getters, this is for Validators
  */
	get distributorID() {
		return this.myForm.get('distributorID');
	}
	get distName() {
		return this.myForm.get('distName');
	}
	get street() {
		return this.myForm.get('street');
	}
	get city() {
		return this.myForm.get('city');
	}
	get state() {
		return this.myForm.get('state');
	}
	get zip() {
		return this.myForm.get('zip');
	}
	get userID() {
		return this.myForm.get('userID');
	}
}
