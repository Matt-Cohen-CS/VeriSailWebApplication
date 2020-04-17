import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { SendFormService } from 'src/app/Services/send-form.service';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';

@Component({
	selector: 'app-update-manufacturer',
	templateUrl: './update-manufacturer.component.html',
	styleUrls: [ './update-manufacturer.component.css' ]
})
export class UpdateManufacturerComponent implements OnInit {
	manu = { manufacturerID: '' }; //TO GET RID OF ERROR OF 'cannot find manufacturerID of undefined'
	curManuID;
	myForm: FormGroup;
	serviceData: string;
	constructor(
		private _formService: SendFormService,
		private fb: FormBuilder,
		private _apiService: ManufacturerService,
		private activatedRoute: ActivatedRoute
	) {}
	// subs = new SubSink();

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
		this.curManuID = this._apiService.returnData();

		this._apiService.getManufacturerListByID(this.curManuID).subscribe((data) => {
			this.manu = data;
			this.checkTransfer(this.manu);
		});

		this.myForm = this.fb.group({
			manufacturerID: [
				this.curManuID,
				[
					// Validators.required
				]
			],
			manuName: [
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
			]
		});
		this.myForm.valueChanges.subscribe(console.log);
	}
	createManu(data: any) {
		this.manu = data;
		console.log(this.manu);
	}

	getMyPost(id: string) {
		// this._apiService.getPost().subscribe(data => this.posts = data);
		// this.posts = this._apiService.getPost().subscribe(data => this.test = data);
		console.log(id);
		this._apiService.getManufacturerListByID(id).subscribe((data) => {
			this.manu = data;
			console.log('In Post', this.manu);
		});
	}

	getData() {
		this._formService.form$.subscribe((data) => {
			this.serviceData = data;
			console.log(this.serviceData);
		});
		console.log(this.serviceData);
		this.myForm.valueChanges.subscribe(console.log);
	}
	checkCondition() {
		// this._apiService.updateManu(this.curManuID,this.myForm.value)
		// .subscribe(
		//   response => console.log('Success!', response),
		//   error => console.error('Error', error)
		//   );
		//   console.log(this.myForm.value);
		console.log('Hello');
		this._apiService.updateManu(this.curManuID, this.myForm.value).subscribe((data) => {
			console.log(data);
		});
		console.log(this.myForm.value);
	}
	checkTransfer(data) {
		//this.checkCondition(data);
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
