import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDatatablesComponent } from './ang-datatables.component';

describe('AngDatatablesComponent', () => {
  let component: AngDatatablesComponent;
  let fixture: ComponentFixture<AngDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
