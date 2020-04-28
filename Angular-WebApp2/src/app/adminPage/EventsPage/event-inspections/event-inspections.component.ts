import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SendFormService } from 'src/app/Services/send-form.service';
import { Events } from 'src/app/Services/eventsInterface';
import { EventInspectionsService } from 'src/app/Services/API/event-inspections.service';

@Component({
	selector: 'app-event-inspections',
	templateUrl: './event-inspections.component.html',
	styleUrls: [ './event-inspections.component.css' ]
})
export class EventInspectionsComponent implements OnInit {
	event: Events[];
	eventID;
	constructor(
		private _apiService: EventInspectionsService,
		private dialog: MatDialog,
		private _sendForm: SendFormService
	) {}
	listData: MatTableDataSource<any>;
	displayedColumns: string[] = [
		'inspectionID',
		'eventID',
		'boatID',
		'insp_date',
		'insp_time',
		'partStatus',
		'qrDesc',
		'insp_by',
		'photoName',
		'GPS_lat',
		'GPS_long',
		'qrCode',
		'Options'
	];

	@ViewChild(MatSort, null)
	sort: MatSort; //Belong to the ViewChild above FORMAT IS IMPORTANT
	@ViewChild(MatPaginator, null)
	paginator: MatPaginator; //Belong to the ViewChild above FORMAT IS IMPORTANT
	ngOnInit() {
		this.postEventInspections();
	}

	postEventInspections() {
		this._apiService.getEventsList().subscribe((data) => {
			this.listData = new MatTableDataSource(data);
			this.listData.sort = this.sort;
			this.listData.paginator = this.paginator;
		});
	}
	applyFilter(filterValue: String) {
		this.listData.filter = filterValue.trim().toLowerCase();
	}
}
// inspectionID: string,
//   eventID: string,
//     boatID: string,
//       insp_date: string,
//         insp_time: string,
//           partStatus: string,
//             qrDesc: string,
//               insp_by: string,
//                 photoName: string,
//                   GPS_lat: string,
//                     GPS_long: string,
//                       qrCode: string
