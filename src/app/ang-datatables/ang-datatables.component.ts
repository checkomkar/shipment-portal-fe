import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

class Shipment {
  shipName: string;
  id: string;
}

// @Component({
//   selector: 'app-angular-way',
//   templateUrl: 'angular-way.component.html'
// })



@Component({
    selector: 'app-ang-datatables',
    templateUrl: './ang-datatables.component.html',
    styleUrls: ['./ang-datatables.component.scss']
})
export class AngDatatablesComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    shipments: Shipment[] = [];
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<any> = new Subject();

    constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
       pagingType: 'full_numbers',
       searching: true,
       pageLength: 2
    };
    this.http.get('./assets/sample-data.json')
      .map(this.extractData)
      .subscribe(shipments => {
        this.shipments = shipments;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
