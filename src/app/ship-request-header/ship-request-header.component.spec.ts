import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipRequestHeaderComponent } from './ship-request-header.component';

describe('ShipRequestHeaderComponent', () => {
  let component: ShipRequestHeaderComponent;
  let fixture: ComponentFixture<ShipRequestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipRequestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipRequestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
