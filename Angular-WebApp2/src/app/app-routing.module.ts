import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { Form1Component } from './Component/form1/form1.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { CreateAccountComponent } from './Component/create-account/create-account.component';
import { ManufacturerComponent } from './adminPage/manufacturer/manufacturer.component';
import { DashboardComponent } from './adminPage/dashboard/dashboard.component';
import { CreateManuComponent } from './adminPage/create-manu/create-manu.component';
import { LabelOrdersComponent } from './adminPage/labelOrdersPage/label-orders/label-orders.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'form', component: Form1Component },
	{ path: 'signin', component: SignInComponent },
	{ path: 'admin', component: DashboardComponent }, //Change
	{ path: 'create', component: CreateAccountComponent },
	{ path: 'manu', component: ManufacturerComponent }, //Change
	{ path: 'dashboard', component: DashboardComponent }, //Change
	{ path: 'createManu/:id', component: CreateManuComponent }, //Change
	{ path: 'labelorders', component: LabelOrdersComponent }, //Change

	//If there is a typo in the name route, it will always redirect to home
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
