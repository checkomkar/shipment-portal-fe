import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFindSiteComponent } from './portal-find-site.component';

describe('PortalFindSiteComponent', () => {
  let component: PortalFindSiteComponent;
  let fixture: ComponentFixture<PortalFindSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalFindSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFindSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
