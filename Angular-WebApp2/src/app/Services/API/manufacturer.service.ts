import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../sample';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  readonly ROOT_URL = 'http://ec2-3-89-226-21.compute-1.amazonaws.com:3000'; //Added


  constructor(private http:HttpClient) { }
  
  getManufacturerList(): Observable<Test[]>{
    return this.http.get<Test[]>(this.ROOT_URL+"/manufacturers")
  }

}
  // //readonly ROOT_URL = 'http://localhost:8080';
  // posts: Observable<any>; //Added
  // manufacturersList: Observable<any>;
  // constructor(private http:HttpClient) { }
  // form: FormGroup = new FormGroup({
  //   manufacturerID: new FormControl(''),
  //   manuName: new FormControl('',Validators.required),
  //   street: new FormControl('',Validators.required),
  //   city: new FormControl('',Validators.required),
  //   state: new FormControl('',[Validators.required, Validators.maxLength(2)]),
  //   zip: new FormControl('',[Validators.required, Validators.maxLength(5)]),
  //   userID: new FormControl('',Validators.required),
  // })
  // initalizeFormGroup(){
  //   this.form.setValue({
  //   manufacturerID:'',
  //   manuName:'' ,
  //   street:'',
  //   city: '',
  //   state: '',
  //   zip: '',
  //   userID: ''
  // })
  // }
  // getPost(): Observable<any>{
  //   this.manufacturersList =  this.http.get<any>(this.ROOT_URL+"/manufacturers");
  //   console.log('here');
  //   return this.manufacturersList;
  //  }
  //  insertManufacturer(newManufacturer){
    
  // }
  // addManu(data){
  //   return this.http.post<any>(this.ROOT_URL+"/newmanufacturer",data,{
  //     headers: new HttpHeaders({
  //       'Content-type':'application/json'
  //     })
  //   });
  // }
