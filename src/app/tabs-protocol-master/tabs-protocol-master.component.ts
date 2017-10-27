import { Component, OnInit, ViewChild  } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-tabs-protocol-master',
  templateUrl: './tabs-protocol-master.component.html',
  styleUrls: ['./tabs-protocol-master.component.scss']
})
export class TabsProtocolMasterComponent implements OnInit {
	list = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

	ngOnInit() {

	}

}
