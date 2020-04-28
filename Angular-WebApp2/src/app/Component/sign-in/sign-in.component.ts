import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/API/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit {
	myForm: FormGroup;

	constructor(
		private router: Router,
		private _apiUserService: UsersService,
		private fb: FormBuilder,
		private notificationservice: NotificationService
	) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			email: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required ] ]
		});
	}

	onSubmit() {
		let theData: any[];
		this._apiUserService.getUserByName(this.myForm.get('email').value).subscribe((data) => {
			this.notificationservice.success(':: Log in Successful');
			this._apiUserService.setUsername(data);
			console.log(data);
			this.router.navigate([ '/manu', data.userID ]);
		});
		// this._apiUserService.getUserList().subscribe((data) => {
		//       theData = data;
		//       console.log(data);
		//      for (var d in data){
		//         console.log();
		//       }
		// });
	}

	get email() {
		return this.myForm.get('email');
	}
	get password() {
		return this.myForm.get('password');
	}
}
