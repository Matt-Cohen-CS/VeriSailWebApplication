import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoatOwners } from '../boatOwnersInterface';

@Injectable({
	providedIn: 'root'
})
export class BoatOwnersService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	constructor(private http: HttpClient, private fb: FormBuilder) {}
	label;
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
	addBoatOwner(data) {
		return this.http.post<any>(this.ROOT_URL + '/newboatowner', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}

	updateBoatOwner(id, data): Observable<any> {
		return this.http.put<any>('https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/ownersupdate/' + id, data);
	}

	getBoatOwner(): Observable<BoatOwners[]> {
		return this.http.get<BoatOwners[]>(this.ROOT_URL + '/boatowners');
	}

	getBoatOwnerByID(id): Observable<any> {
		return this.http.get<BoatOwners[]>(this.ROOT_URL + '/boatowners' + '/' + id);
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
	getForm() {
		return this.form;
	}
}
