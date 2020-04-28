import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { NotificationService } from '../notification.service';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000';
	username;
	constructor(private http: HttpClient, private notificiationService: NotificationService) {}

	addUser(data) {
		return this.http
			.post<any>(this.ROOT_URL + '/newuser', data, {
				headers: new HttpHeaders({
					'Content-type': 'application/json'
				})
			})
			.pipe(
				catchError((error) => {
					this.notificiationService.warn(':: Internal Server Error...Please try again later');
					return throwError('Error type 1123411');
				})
			);
	}
	getUserList(): Observable<any> {
		return this.http.get<any>(this.ROOT_URL + '/users').pipe(
			catchError((error) => {
				this.notificiationService.warn(':: Incorrect Email or Password');
				return throwError('Error type 1123411');
			})
		);
	}

	getUserByName(username): Observable<any> {
		return this.http.get<any[]>(this.ROOT_URL + '/user_authentication' + '/' + username).pipe(
			catchError((error) => {
				this.notificiationService.warn(':: Invalid Email or Password');
				return throwError('Error type 1123412');
			})
		);
	}

	setUsername(username) {
		this.username = username;
	}
	getUsername() {
		return this.username;
	}
	updateUser(id, data): Observable<any> {
		return this.http.put<any>('https://cors-anywhere.herokuapp.com/' + this.ROOT_URL + '/userupdate/' + id, data);
	}
}
