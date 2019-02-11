import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// path: '',
// component: PagesComponent,
// canActivate: [LoginGuardGuard],
// children: [

const pagesRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } }, // canActivate: [VerificaTokenGuard]},

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]  ;


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
