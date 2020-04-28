import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LabelOrder } from '../labelorderinterface';

@Injectable({
	providedIn: 'root'
})
export class LabelordersService {
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
			orderNum: '',
			email: '',
			QR_begin: '',
			QR_end: '',
			label_quantity: ''
		});
	}

	addLabelOrder(data) {
		return this.http.post<any>(this.ROOT_URL + '/newOrder', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}

	updateLabelOrders(id, data): Observable<any> {
		return this.http.put<any>('https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/orderupdate/' + id, data);
	}

	getLabelOrderList(): Observable<LabelOrder[]> {
		return this.http.get<LabelOrder[]>(this.ROOT_URL + '/labelorders');
	}

	getLabelOrderListListByID(id): Observable<any> {
		return this.http.get<LabelOrder[]>(this.ROOT_URL + '/labelorders' + '/' + id);
	}
	/*
  Used to retrieve the manufacturerID from the Manufacturer dashboard, used by getManufacturerListByID()
*/
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
	sendQRCode(number) {
		this.qrEnd = number;
	}
	returnQRCode(): any {
		return this.qrEnd;
	}
	getForm() {
		return this.form;
	}
	setForm(data) {
		this.form = data;
		//console.log(this.form);
	}
}
