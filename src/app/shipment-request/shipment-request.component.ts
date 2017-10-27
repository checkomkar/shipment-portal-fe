import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/app.service.httpService';

@Component({
  selector: 'app-shipment-request',
  templateUrl: './shipment-request.component.html',
  styleUrls: ['./shipment-request.component.scss'],
  providers: [HttpService]
})
export class ShipmentRequestComponent implements OnInit {
	shipments: any;
	dataUrl = './assets/shipment-list.json';
  	constructor(private http: HttpService) { }

	ngOnInit() {
		this.http.getDataObservable(this.dataUrl).subscribe(data => {	        
	        console.log(data);
	        this.shipments = data;
	    });
	}

}
