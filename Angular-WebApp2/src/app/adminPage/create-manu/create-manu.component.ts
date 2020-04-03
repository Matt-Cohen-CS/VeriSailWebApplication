import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/Services/send-form.service';
import { Test } from 'src/app/Services/sample';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-manu',
  templateUrl: './create-manu.component.html',
  styleUrls: ['./create-manu.component.css']
})
export class CreateManuComponent implements OnInit {
  manu = {manufacturerID: ''}; //TO GET RID OF ERROR OF 'cannot find manufacturerID of undefined'
  curManuID;
  myForm: FormGroup;
  serviceData: string;
  constructor(private _formService: SendFormService, private fb:FormBuilder, private _apiService: ApiServiceService, private activatedRoute: ActivatedRoute) { }
 // subs = new SubSink();
  ngOnInit() {
    this.curManuID = this.activatedRoute.snapshot.params.id;

    this._apiService.getPostByID(this.curManuID).subscribe(data => {
      this.manu = data;
    });
    
    this.myForm = this.fb.group({
      manufacturerID:['',[
        Validators.required
    ]],
      manuName: ['',[
        Validators.required
      ]],
      zip:['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      street:['',[
        Validators.required
      ]],
      city:['',[
        Validators.required
      ]],
      state:['',[
        Validators.required
      ]]
    });

    // this._formService.form$
    // .subscribe(
    //   data =>
    //   {
    //     this.serviceData.push(data);
    //     console.log(this.serviceData);
    //   }
    // );
    // console.log(this.serviceData);
    // this._formService.form$
    // .subscribe(
    //   data =>
    //   {
    //     // this.serviceData = data;
    //     this._apiService.getPostByID(data).subscribe(
    //       data =>
    //       {
            
    //         this.createManu(data);
    //         console.log("In Post1", data);
    //       }
    //       );
    //   }
    // );
    // this._apiService.getPostByID("101").subscribe(
    //   data =>
    //   {
    //      this.manu = data;
    //   }
    //   );
    this.myForm.valueChanges.subscribe(console.log);
    
  }
  createManu(data:any){
    this.manu = data;
    console.log(this.manu);
  }


  getMyPost(id:string){
    // this._apiService.getPost().subscribe(data => this.posts = data);
    // this.posts = this._apiService.getPost().subscribe(data => this.test = data);
    console.log(id);
    this._apiService.getPostByID(id).subscribe(
     data =>
     {
        this.manu = data;
        console.log("In Post", this.manu);
     }
     );
   }
  
  getData(){
    this._formService.form$
    .subscribe(
      data =>
      {
        this.serviceData = data;
        console.log(this.serviceData);
      }
    );
    console.log(this.serviceData);
    this.myForm.valueChanges.subscribe(console.log);
  }

  /*
   Getters, this is for error checking
   */
  get manufacturerID(){
    return this.myForm.get('manufacturerID');
  }
  get manuName(){
    return this.myForm.get('manuName');
  }
  get zip(){
    return this.myForm.get('zip');
  }
  get street(){
    return this.myForm.get('street');
  }
  get state(){
    return this.myForm.get('state');
  }
  get city(){
    return this.myForm.get('city');
  }
}
