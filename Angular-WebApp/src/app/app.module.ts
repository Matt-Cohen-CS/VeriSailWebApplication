import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
Form imports
*/
import {ReactiveFormsModule} from '@angular/forms' //Cannot use forms property with this import 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
 //End of forms imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './Component/about/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './Component/home/home.component';
import { CarouselComponent } from './Bootstrap/carousel/carousel.component';
import { CardComponent } from './Bootstrap/card/card.component';
import { FormStackedComponent } from './Bootstrap/form-stacked/form-stacked.component';
import { Form1Component } from './Component/form1/form1.component';
import { TemplateComponent } from './Bootstrap/template/template.component';
import {CreateAccountComponent} from './Component/create-account/create-account.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import {TemplateadminComponent} from './Bootstrap/templateadmin/templateadmin.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceService} from './Services/api-service.service';
import { AdminHeaderComponent } from './Bootstrap/adminPage/admin-header/admin-header.component';
import { AdminNavComponent } from './Bootstrap/adminPage/admin-nav/admin-nav.component';
import { ManufacturerComponent } from './Bootstrap/adminPage/manufacturer/manufacturer.component';
import { DashboardComponent } from './Bootstrap/adminPage/dashboard/dashboard.component';
import { CreateManuComponent } from './Bootstrap/adminPage/create-manu/create-manu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CreateAccountComponent,
    HomeComponent,
    CarouselComponent,
    CardComponent,
    FormStackedComponent,
    Form1Component,
    TemplateComponent,
    SignInComponent,
    TemplateadminComponent,
    AdminHeaderComponent,
    AdminNavComponent,
    ManufacturerComponent,
    DashboardComponent,
    CreateManuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    /*
      Form imports
    */
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,
     //End of forms imports
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
