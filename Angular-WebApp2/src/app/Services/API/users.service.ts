import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getUserList(): Observable<any> {
		return this.http.get<any>(this.ROOT_URL + '/users');
  }
  addUser(data) {
		return this.http.post<any>(this.ROOT_URL + '/newuser', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
  }
  updateUser(id, data): Observable<any> {
		return this.http.put<any>(
			'https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/userupdate/' + id,
			data
		);
	}
}
