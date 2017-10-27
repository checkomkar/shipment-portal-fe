import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLotComponent } from './select-lot.component';

describe('SelectLotComponent', () => {
  let component: SelectLotComponent;
  let fixture: ComponentFixture<SelectLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
