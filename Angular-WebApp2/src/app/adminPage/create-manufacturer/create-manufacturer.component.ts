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
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming'
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
