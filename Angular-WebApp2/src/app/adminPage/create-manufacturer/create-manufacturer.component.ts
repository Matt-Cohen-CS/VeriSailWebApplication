import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Test } from 'src/app/Services/sample';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendFormService } from 'src/app/Services/send-form.service';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
@Component({
	selector: 'app-create-manufacturer',
	templateUrl: './create-manufacturer.component.html',
	styleUrls: [ './create-manufacturer.component.css' ]
})
export class CreateManufacturerComponent implements OnInit {
	manu: Test[];
	myForm: FormGroup;
	idNumber: string;
	constructor(
		private _apiService: ManufacturerService,
		private fb: FormBuilder,
		private _sendForm: SendFormService
	) {}
	stateArray: string[] = [
		'AL : Alabama',
		'AK : Alaska',
		'AK : Arizona',
		'AK : Arkansas',
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
			manufacturerID: [
				null,
				[
					//Validators.required
				]
			],
			manuName: [ '', [ Validators.required ] ],
			zip: [ '', [ Validators.required, Validators.minLength(5) ] ],
			street: [ '', [ Validators.required ] ],
			city: [ '', [ Validators.required ] ],
			state: [ '', [ Validators.required ] ]
		});
		this.myForm.valueChanges.subscribe(console.log);
	}

	/*
  Posts the manufacturer data to the database
  */
	submitData() {
		this.manu = [];
		this._apiService
			.addManu(this.myForm.value)
			.subscribe((response) => console.log('Success!', response), (error) => console.error('Error', error));
	}

	/*
  */
	editManu(i: string) {
		this._sendForm.sendForm(i);
	}

	/*
  Getters, this is for Validators
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
