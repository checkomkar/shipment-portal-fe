import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShipRequestComponent } from './new-ship-request.component';

describe('NewShipRequestComponent', () => {
  let component: NewShipRequestComponent;
  let fixture: ComponentFixture<NewShipRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShipRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShipRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
