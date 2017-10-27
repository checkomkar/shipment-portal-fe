import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRequestComponent } from './shipment-request.component';

describe('ShipmentRequestComponent', () => {
  let component: ShipmentRequestComponent;
  let fixture: ComponentFixture<ShipmentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
