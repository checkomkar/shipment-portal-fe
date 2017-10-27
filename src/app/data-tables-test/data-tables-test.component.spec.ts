import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesTestComponent } from './data-tables-test.component';

describe('DataTablesTestComponent', () => {
  let component: DataTablesTestComponent;
  let fixture: ComponentFixture<DataTablesTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablesTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
