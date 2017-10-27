import { RouterModule, Routes } from '@angular/router';
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
import { DataTablesTestComponent } from './data-tables-test/data-tables-test.component';

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
    { path: 'data-table-set', component: DataTablesTestComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);