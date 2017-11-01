import { Component, OnInit, TemplateRef } from '@angular/core';
import {HttpModule, Response} from '@angular/http';
import {HttpService} from '../services/app.service.httpService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subject } from 'rxjs/Rx';
//import { ModalService } from '../services/modal.service';
import { CreateFormBottonComponent } from '../create-form-botton/create-form-botton.component';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  providers: [HttpService, HttpModule, NgbModal]
})
export class SalesComponent implements OnInit {
    closeResult: string;
    items: any[];
    dtOptions: DataTables.Settings = {};
    name: any;
    p: number = 1;
    //dtTrigger: Subject<any> = new Subject();
    dtTrigger: Subject<any> = new Subject();
    private dataUrl = './assets/sample-data.json';  // URL to web api
    private apiUrl = 'http://localhost:57042/api/Home';
    
    testResponse: any;
    public modalRef: BsModalRef;

    settings = {
        actions: false,
        
        attr: {
            class: 'striped custom-table-css responsive-table'
        },
        columns: {
            
            ship_no: {
                title: 'Ship Number',
                class: 'omkar',
                editable: true,
            },
            contract_no: {
                title: 'Contract No.'
            },
            customer: {
                title: 'Customer'
            },
            site_no: {
                title: 'Site Number',
            },
            status: {
                title: 'Item Status'
            },
            button: {
                title: '',
                type: 'custom',
                renderComponent: CreateFormBottonComponent,
            }
        }
    };
    
  	
    constructor(private http: HttpService, private modalService: BsModalService) {

    }
    
    /*open(content) {
		this.modalService.open(content).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}*/

	//public openModal(template: TemplateRef<any>) {
	//	this.modalRef = this.modalService.show(template, {class: 'modal-md'});
	//}

    /*openModal(id: string) {
        console.log(id);
        this.modalServiceCust.open(id);
    }

    closeModal(id: string) {
        this.modalServiceCust.close(id);
    }*/

	/*private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return  `with: ${reason}`;
		}
	}*/

	ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            searching: true,
            pageLength: 2
        };
        this.http.getDataObservable(this.dataUrl).subscribe(data => {
            //this.testResponse = data;
            //console.log(this.testResponse);
            this.items = data;
        });

        //this.http.postDataObservable(this.apiUrl ).subscribe(data => {
        //    this.testResponse = data;
        //    console.log(data);
        //})

    }

}
