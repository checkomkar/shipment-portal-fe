import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
//import { NgModel } from '@angular/forms';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
//import { BsDropdownModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
//import { UIRouterModule } from "@uirouter/angular";
import { MenuMoreComponent } from './menu-more/menu-more.component';
import { HeaderComponent } from './header/header.component';
import { AngDatatablesComponent } from './ang-datatables/ang-datatables.component';
import { AboutComponent } from './about/about.component';
import { SalesComponent } from './sales/sales.component';
import { NewShipRequestComponent } from './new-ship-request/new-ship-request.component';
import { SearchFilterPipe } from './services/app.service.searchFilterPipe';
import { ShipmentRequestComponent } from './shipment-request/shipment-request.component';
import { HeadersComponent } from './headers/headers.component';
import { TabsProtocolMasterComponent } from './tabs-protocol-master/tabs-protocol-master.component';
import { LoginComponent } from './login/login.component';
import { ShipRequestHeaderComponent } from './ship-request-header/ship-request-header.component';
import { SelectLotComponent } from './select-lot/select-lot.component';
import { PortalFindSiteComponent } from './portal-find-site/portal-find-site.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { NewSiteComponent } from './new-site/new-site.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from './app.routing';
//import { ModalDirective } from './directives/modal.directive';
import { MaterializeModule } from 'ng2-materialize';
import { DataTablesTestComponent } from './data-tables-test/data-tables-test.component';
import { CreateFormBottonComponent } from './create-form-botton/create-form-botton.component';

let loginState = { name: 'home', url: '/',  component: LoginComponent }; 
let headersState = { name: 'headers', url: '/',  component: ShipRequestHeaderComponent }; 
let salesState = { name: 'sales', url: '/new-shipment-request',  component: SalesComponent }; 
let aboutState = { name: 'about', url: '/about',  component: AboutComponent };
let shipmentRequestState = { name: 'shipment-request', url: '/shipment-request',  component: ShipmentRequestComponent };
let selectLotState = { name: 'select-lot', url: '/select-lot',  component: SelectLotComponent };
let findSiteState = { name: 'find-site', url: '/find-site',  component: PortalFindSiteComponent };
let updateSiteState = { name: 'update-site', url: '/update-site',  component: UpdateSiteComponent };
let newSiteState = { name: 'new-site', url: '/new-site',  component: NewSiteComponent };

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'new-shipment-request', component: SalesComponent },    
    //{
    //    path: '',
    //    redirectTo: '',
    //    pathMatch: 'full'
    //},
    { path: 'about', component: AboutComponent }, 
    { path: 'shipment-request', component: ShipmentRequestComponent }, 
    { path: 'select-lot', component: SelectLotComponent }, 
    { path: 'find-site', component: PortalFindSiteComponent }, 
    { path: 'update-site', component: UpdateSiteComponent }, 
    { path: 'new-site', component: NewSiteComponent }, 
    //{ path: '**', component: PageNotFoundComponent }
];
const routes = { 
  states: [ 
    findSiteState, 
    updateSiteState, 
    newSiteState, 
    loginState, 
    headersState, 
    salesState, 
    aboutState, 
    shipmentRequestState, 
    selectLotState ], 
  useHash: false 
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngDatatablesComponent,
    AboutComponent,
    SalesComponent,
    NewShipRequestComponent,
    SearchFilterPipe,
    ShipmentRequestComponent,
    MenuMoreComponent,
    HeadersComponent,
    TabsProtocolMasterComponent,
    LoginComponent,
    ShipRequestHeaderComponent,
    SelectLotComponent,
    PortalFindSiteComponent,
    UpdateSiteComponent,
    NewSiteComponent,
    SidenavComponent,
    TopBarComponent,
    PageNotFoundComponent,
    DataTablesTestComponent,
    CreateFormBottonComponent,
    //ModalDirective
    ],
  entryComponents: [CreateFormBottonComponent],
  imports: [
      BrowserModule,
      FormsModule,
      CustomFormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgxDatatableModule,
      NgxPaginationModule,
      Ng2SmartTableModule,
    DataTablesModule,
    HttpModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    MaterializeModule.forRoot(),
    //UIRouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    routing,
    /*RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )*/
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
