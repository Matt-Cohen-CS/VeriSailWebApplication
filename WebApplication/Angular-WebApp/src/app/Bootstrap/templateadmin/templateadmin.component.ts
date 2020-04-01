import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Test } from 'src/app/Services/sample';

@Component({
  selector: 'app-templateadmin',
  templateUrl: './templateadmin.component.html',
  styleUrls: ['./templateadmin.component.css']
})
export class TemplateadminComponent implements OnInit {
  data = 'Most recent query'; // TODO: Make this link to the most recent query
  user = 'User' // TODO: Make this link to the user
  manu: Test[];
  posts: any[];
  constructor(private _apiService: ApiServiceService) { } //Inject the service

  ngOnInit() {
   
  }
  getMyPost(){
   // this._apiService.getPost().subscribe(data => this.posts = data);
   // this.posts = this._apiService.getPost().subscribe(data => this.test = data);
   this._apiService.getPost().subscribe(
    data =>
    {
       this.manu = data;
    }
    );
  }
}
