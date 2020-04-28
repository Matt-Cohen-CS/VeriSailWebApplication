import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retail } from '../retailers';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class RetailersService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	retailID;
	constructor(private http: HttpClient, private fb: FormBuilder) {}

	form: FormGroup = new FormGroup({
		retailID: new FormControl(''),
		retailName: new FormControl('', Validators.required),
		street: new FormControl('', Validators.required),
		city: new FormControl('', Validators.required),
		state: new FormControl('', [ Validators.required, Validators.maxLength(2) ]),
		zip: new FormControl('', [ Validators.required, Validators.maxLength(5) ]),
		userID: new FormControl('', Validators.required)
	});
	initalizeFormGroup() {
		this.form.setValue({
			retailID: '',
			retailName: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			userID: ''
		});
	}

	/*
		adds data from the database by the type using the HTTP post
	*/
	addRetailer(data) {
		return this.http.post<any>(this.ROOT_URL + '/newretailer', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}
	getForm() {
		return this.form;
	}
	setForm(data) {
		this.form = data;
		//console.log(this.form);
	}
	/*
		Updates data from the database by the ID using the HTTP put
	*/
	updateRetailer(id, data): Observable<any> {
		return this.http.put<any>(
			'https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/retailerupdate/' + id,
			data
		);
	}
	/*
		Retrieves data from the database by the type using the HTTP get
	*/
	getRetailList(): Observable<any> {
		return this.http.get<any>(this.ROOT_URL + '/retailers');
	}
	/*
		Retrieves data from the database by the ID
	*/
	getRetailListByID(id): Observable<any> {
		return this.http.get<Retail[]>(this.ROOT_URL + '/retailers' + '/' + id);
	}
	/*
		Used to retrieve the manufacturerID from the Manufacturer dashboard, used by getManufacturerListByID()
	*/
	sendData(data) {
		this.retailID = data;
		//console.log(this.manuID);
	}
	/*
		Used to retrieve the manufacturerID from the Manufacturer dashboard, used by getManufacturerListByID()
	*/
	returnData(): any {
		return this.retailID;
	}
}
