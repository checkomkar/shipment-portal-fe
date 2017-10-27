import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsProtocolMasterComponent } from './tabs-protocol-master.component';

describe('TabsProtocolMasterComponent', () => {
  let component: TabsProtocolMasterComponent;
  let fixture: ComponentFixture<TabsProtocolMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsProtocolMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsProtocolMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
