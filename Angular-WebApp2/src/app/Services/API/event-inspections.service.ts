import { Injectable } from '@angular/core';
import { Events } from '../eventsInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EventInspectionsService {
	readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added
	constructor(private http: HttpClient) {}

	getEventsList(): Observable<Events[]> {
		return this.http.get<Events[]>(this.ROOT_URL + '/details');
	}
}
