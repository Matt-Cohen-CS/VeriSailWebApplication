import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000';
	username;
	constructor(private http: HttpClient) {}

	addUser(data) {
		return this.http.post<any>(this.ROOT_URL + '/newuser', data, {
			headers: new HttpHeaders({
				'Content-type': 'application/json'
			})
		});
	}

	getUserList(): Observable<any> {
		return this.http.get<any>(this.ROOT_URL + '/users');
	}

	getUserByName(username): Observable<any> {
		return this.http.get<any[]>(this.ROOT_URL + '/user_authentication' + '/' + username);
	}

	setUsername(username) {
		this.username = username;
	}
	getUsername() {
		return this.username;
	}
}
