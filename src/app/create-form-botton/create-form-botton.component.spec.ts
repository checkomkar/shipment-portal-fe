import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormBottonComponent } from './create-form-botton.component';

describe('CreateFormBottonComponent', () => {
  let component: CreateFormBottonComponent;
  let fixture: ComponentFixture<CreateFormBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
