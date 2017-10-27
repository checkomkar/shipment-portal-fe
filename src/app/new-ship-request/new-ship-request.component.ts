import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-new-ship-request',
  templateUrl: './new-ship-request.component.html',
  styleUrls: ['./new-ship-request.component.scss']
})
export class NewShipRequestComponent implements OnInit {
	@Input() modalRefChild: BsModalRef;
	//public modalRef: BsModalRef;
  	constructor(private modalService: BsModalService) { }
  	modalHide(){
  		this.modalRefChild.hide();
  	}
	ngOnInit() {
	}

}
