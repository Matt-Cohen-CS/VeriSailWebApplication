import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	constructor(public snackBar: MatSnackBar) {}

	config: MatSnackBarConfig = {
		duration: 4000,
		horizontalPosition: 'right',
		verticalPosition: 'top'
	};

	success(msg) {
		this.config['panelClass'] = [ 'notification', 'success' ];
		this.snackBar.open(msg, 'Close', this.config);
	}
	warn(msg) {
		this.config['panelClass'] = [ 'notification', 'warn' ];
		this.snackBar.open(msg, 'Close', this.config);
	}
}
