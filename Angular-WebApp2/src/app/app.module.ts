import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*
Form imports
*/
import { ReactiveFormsModule } from '@angular/forms'; //Cannot use forms property with this import
import {
	MatInputModule,
	MatSelectModule,
	MatButtonModule,
	MatCheckboxModule,
	MatChipsModule,
	MatTableModule,
	MatIconModule,
	MatSortModule,
	MatPaginatorModule,
	MatDialogModule,
	MatSnackBarModule,
	MatToolbarModule
} from '@angular/material';
//End of forms imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './Component/footer/footer.component';
import { AboutComponent } from './Component/about/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './Component/home/home.component';
import { CarouselComponent } from './Bootstrap/carousel/carousel.component';
import { CardComponent } from './Bootstrap/card/card.component';
import { FormStackedComponent } from './Bootstrap/form-stacked/form-stacked.component';
import { Form1Component } from './Component/form1/form1.component';
import { TemplateComponent } from './Bootstrap/template/template.component';
import { CreateAccountComponent } from './Component/create-account/create-account.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { TemplateadminComponent } from './Bootstrap/templateadmin/templateadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './Services/api-service.service';
import { AdminHeaderComponent } from './adminPage/admin-header/admin-header.component';
import { AdminNavComponent } from './adminPage/admin-nav/admin-nav.component';
import { ManufacturerComponent } from './adminPage/manufacturer/manufacturer.component';
import { DashboardComponent } from './adminPage/dashboard/dashboard.component';
import { HeaderComponent } from './Component/header/header.component';
import { CreateManufacturerComponent } from './adminPage/create-manufacturer/create-manufacturer.component';
import { UpdateManufacturerComponent } from './adminPage/update-manufacturer/update-manufacturer.component';
import { LabelOrdersComponent } from './adminPage/labelOrdersPage/label-orders/label-orders.component';
import { UpdateLabelOrdersComponent } from './adminPage/labelOrdersPage/update-label-orders/update-label-orders.component';
import { CreateLabelOrdersComponent } from './adminPage/labelOrdersPage/create-label-orders/create-label-orders.component';
import { DistributorsComponent } from './adminPage/DistributorsPage/distributors/distributors.component';
import { CreateDistributorsComponent } from './adminPage/DistributorsPage/create-distributors/create-distributors.component';
import { UpdateDistributorsComponent } from './adminPage/DistributorsPage/update-distributors/update-distributors.component';
import { BoatOwnersComponent } from './adminPage/BoatOwnersPage/boat-owners/boat-owners.component';
import { CreateBoatOwnersComponent } from './adminPage/BoatOwnersPage/create-boat-owners/create-boat-owners.component';
import { UpdateBoatOwnersComponent } from './adminPage/BoatOwnersPage/update-boat-owners/update-boat-owners.component';
import { RetailersComponent } from './adminPage/RetailersPage/retailers/retailers.component';
import { UpdateretailersComponent } from './adminPage/RetailersPage/updateretailers/updateretailers.component';
import { CreateRetailersComponent } from './adminPage/RetailersPage/create-retailers/create-retailers.component';

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
		CreateManufacturerComponent,
		UpdateManufacturerComponent,
		LabelOrdersComponent,
		UpdateLabelOrdersComponent,
		CreateLabelOrdersComponent,
		DistributorsComponent,
		CreateDistributorsComponent,
		UpdateDistributorsComponent,
		BoatOwnersComponent,
		CreateBoatOwnersComponent,
		UpdateBoatOwnersComponent,
		RetailersComponent,
		UpdateretailersComponent,
		CreateRetailersComponent
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
		MatTableModule,
		MatIconModule,
		MatSortModule,
		MatPaginatorModule,
		MatDialogModule,
		MatSnackBarModule,
		MatToolbarModule,
		ReactiveFormsModule,
		//End of forms imports
		BsDropdownModule.forRoot(),
		CarouselModule.forRoot()
	],
	providers: [ ApiServiceService ],
	bootstrap: [ AppComponent ],
	/*
		Used for MatDialog popups
	*/
	entryComponents: [
		CreateManufacturerComponent,
		UpdateManufacturerComponent,
		CreateLabelOrdersComponent,
		UpdateLabelOrdersComponent,
		CreateDistributorsComponent,
		UpdateDistributorsComponent,
		CreateBoatOwnersComponent,
		UpdateBoatOwnersComponent,
		UpdateretailersComponent,
		CreateRetailersComponent
	]
})
export class AppModule {}
