import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Test } from './sample';
@Injectable({
  providedIn: 'root'
})
export class SendFormService {

  private _formSource = new Subject<any>();
  form$ = this._formSource.asObservable();
  constructor() { }

  sendForm(form){
    this._formSource.next(form);
  }
}
