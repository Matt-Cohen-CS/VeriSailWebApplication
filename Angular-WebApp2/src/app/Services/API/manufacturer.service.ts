import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../sample';

@Injectable({
	providedIn: 'root'
})
export class ManufacturerService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	manuID;
	constructor(private http: HttpClient, private fb: FormBuilder) {}

	getManufacturerList(): Observable<Test[]> {
		return this.http.get<Test[]>(this.ROOT_URL + '/manufacturers');
	}
	form: FormGroup = new FormGroup({
		manufacturerID: new FormControl(''),
		manuName: new FormControl('', Validators.required),
		street: new FormControl('', Validators.required),
		city: new FormControl('', Validators.required),
		state: new FormControl('', [ Validators.required, Validators.maxLength(2) ]),
		zip: new FormControl('', [ Validators.required, Validators.maxLength(5) ]),
		userID: new FormControl('', Validators.required)
	});
	initalizeFormGroup() {
		this.form.setValue({
			manufacturerID: '',
			manuName: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			userID: ''
		});
	}
	addManu(data) {
		return this.http.post<any>(this.ROOT_URL + '/newmanufacturer', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}
	sendData(data) {
		this.manuID = data;
		console.log(this.manuID);
	}
	returnData(): any {
		return this.manuID;
	}
	getManufacturerListByID(id): Observable<any> {
		return this.http.get<Test[]>(this.ROOT_URL + '/manufacturers' + '/' + id);
	}
	updateManu(id, data): Observable<any> {
		return this.http.put<any>(
			'https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/manufacturerupdate/' + id,
			data
		);
	}
}
// //readonly ROOT_URL = 'http://localhost:8080';
// posts: Observable<any>; //Added
// manufacturersList: Observable<any>;
// constructor(private http:HttpClient) { }

// getPost(): Observable<any>{
//   this.manufacturersList =  this.http.get<any>(this.ROOT_URL+"/manufacturers");
//   console.log('here');
//   return this.manufacturersList;
//  }
//  insertManufacturer(newManufacturer){

// }

// }
