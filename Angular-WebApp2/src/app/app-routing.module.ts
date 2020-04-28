import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { Form1Component } from './Component/form1/form1.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { CreateAccountComponent } from './Component/create-account/create-account.component';
import { ManufacturerComponent } from './adminPage/manufacturer/manufacturer.component';
import { DashboardComponent } from './adminPage/dashboard/dashboard.component';
import { LabelOrdersComponent } from './adminPage/labelOrdersPage/label-orders/label-orders.component';
import { DistributorsComponent } from './adminPage/DistributorsPage/distributors/distributors.component';
import { BoatOwnersComponent } from './adminPage/BoatOwnersPage/boat-owners/boat-owners.component';
import { RetailersComponent } from './adminPage/RetailersPage/retailers/retailers.component';
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	// { path: 'form', component: Form1Component },
	{ path: 'signin', component: SignInComponent },
	// { path: 'admin', component: DashboardComponent }, //deprecated
<<<<<<< HEAD
	{ path: 'create', component: CreateAccountComponent }, //deprecated
	{ path: 'manu', component: ManufacturerComponent },
=======
	{ path: 'create', component: CreateAccountComponent },
	{ path: 'manu', component: ManufacturerComponent }, //Change
>>>>>>> 3745895e051b03d4db5f61dc0dff1aa3672b14b0
	{ path: 'manu/:id', component: ManufacturerComponent },
	// { path: 'dashboard', component: DashboardComponent }, //deprecated
	// { path: 'dashboard/:id', component: DashboardComponent }, //deprecated
	// { path: 'createManu/:id', component: CreateManuComponent }, // deprecated
	{ path: 'labelorders', component: LabelOrdersComponent },
	{ path: 'dist', component: DistributorsComponent },
	{ path: 'boatowners', component: BoatOwnersComponent },
	{ path: 'retail', component: RetailersComponent },
	//If there is a typo in the name route, it will always redirect to home
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
