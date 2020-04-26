import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/Services/notification.service';
import { MatDialogRef } from '@angular/material';
import { SendFormService } from 'src/app/Services/send-form.service';
import { ManufacturerService } from 'src/app/Services/API/manufacturer.service';
import { Retail } from 'src/app/Services/retailers';
import { RetailersService } from 'src/app/Services/API/retailers.service';

@Component({
	selector: 'app-create-retailers',
	templateUrl: './create-retailers.component.html',
	styleUrls: [ './create-retailers.component.css' ]
})
export class CreateRetailersComponent implements OnInit {
	reatiler: Retail[];
	myForm: FormGroup;
	idNumber: string;
	constructor(
		private _apiService: RetailersService,
		private fb: FormBuilder,
		private _sendForm: SendFormService,
		public dialogRef: MatDialogRef<CreateRetailersComponent>, //@Inject(MAT_DIALOG_DATA) public data: ManufacturerComponent
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
		this.myForm = this.fb.group({
			retailID: [
				null,
				[
					//Validators.required
				]
			],
			retailName: [ '', [ Validators.required ] ],
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
		this.reatiler = [];
		this._apiService
			.addRetailer(this.myForm.value)
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
