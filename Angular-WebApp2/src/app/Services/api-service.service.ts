import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'; // Added
import { Test } from './sample';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	//readonly ROOT_URL = 'http://localhost:8080';
	posts: Observable<any>; //Added
	constructor(private http: HttpClient) {}
	/*
Added
*/

	getPost(): Observable<any> {
		// this.posts = this.http.get(this.ROOT_URL)
		return this.http.get<any>(this.ROOT_URL + '/manufacturers');
	}
	updateManu(id, data): Observable<any> {
		// this.posts = this.http.get(this.ROOT_URL)
		//return this.http.put<any>("https://cors-anywhere.herokuapp.com/"+this.ROOT_URL+"/manufacturerupdate/"+id,data);
		return this.http.put<any>(this.ROOT_URL + '/manufacturerupdate/' + id, data);
	}
	getPostByID(id: string): Observable<any> {
		// this.posts = this.http.get(this.ROOT_URL)
		return this.http.get<any>(this.ROOT_URL + '/manufacturers/' + id);
	}
	errorHandler(error: HttpErrorResponse) {
		return Observable.throw(error.message || 'Server Error');
	}
	addManu(data) {
		return this.http.post<any>(this.ROOT_URL + '/newmanufacturer', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}
} // End of class
