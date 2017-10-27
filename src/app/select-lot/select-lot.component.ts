import { Component, OnInit, TemplateRef } from '@angular/core';
import {HttpService} from '../services/app.service.httpService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-select-lot',
  templateUrl: './select-lot.component.html',
  styleUrls: ['./select-lot.component.scss'],
  providers: [HttpService]
})
export class SelectLotComponent implements OnInit {
	shipments: any;
	dataUrl = './assets/shipment-list.json';
	public modalRef: BsModalRef;
  	constructor(private http: HttpService, private modalService: BsModalService) { }

  	public openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template, {class: 'modal-md'});
	}
	ngOnInit() {
		this.http.getDataObservable(this.dataUrl).subscribe(data => {	        
	        console.log(data);
	        this.shipments = data;
	    });
	}
}
