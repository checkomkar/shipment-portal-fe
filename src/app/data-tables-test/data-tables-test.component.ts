import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tables-test',
  templateUrl: './data-tables-test.component.html',
  styleUrls: ['./data-tables-test.component.scss']
})
export class DataTablesTestComponent implements OnInit {
    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];
  constructor() { }

  ngOnInit() {
  }

}
