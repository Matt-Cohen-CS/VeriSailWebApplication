import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Distribute } from '../distributorsInterface';

@Injectable({
	providedIn: 'root'
})
export class DistributorsService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	constructor(private http: HttpClient, private fb: FormBuilder) {}
	label;
	qrEnd;
	form: FormGroup = new FormGroup({
		orderNum: new FormControl(''),
		email: new FormControl('', Validators.required),
		QR_begin: new FormControl('', Validators.required),
		QR_end: new FormControl('', Validators.required),
		label_quantity: new FormControl('', [ Validators.required ])
	});
	initalizeFormGroup() {
		this.form.setValue({
			distributorID: '',
			distName: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			userID: ''
		});
	}
	// distributorID: string;
	// distName: string;
	// street: string;
	// city: string;
	// state: string;
	// zip: string;
	// userID: string;
	addDistributor(data) {
		return this.http.post<any>(this.ROOT_URL + '/newdistributor', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}

	updateDistributor(id, data): Observable<any> {
		return this.http.put<any>(
			'https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/distributorupdate/' + id,
			data
		);
	}

	getDistributor(): Observable<Distribute[]> {
		return this.http.get<Distribute[]>(this.ROOT_URL + '/distributors');
	}

	getDistributorByID(id): Observable<any> {
		return this.http.get<Distribute[]>(this.ROOT_URL + '/distributors' + '/' + id);
	}

	sendData(data) {
		this.label = data;
		//console.log(this.manuID);
	}
	/*
		Used to retrieve the manufacturerID from the Manufacturer dashboard, used by getManufacturerListByID()
	*/
	returnData(): any {
		return this.label;
	}
	setForm(data) {
		this.form = data;
		//console.log(this.form);
	}
}
