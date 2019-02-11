import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PipesModule } from '../pipes/pipes.module';

import { CommonModule } from '@angular/common';




@NgModule({
    declarations: [
        // PagesComponent,
        DashboardComponent,
        // ProgressComponent,
        // Graficas1Component,
        // IncrementadorComponent,
        // GraficoDonaComponent,
        // AccountSettingsComponent,
        // PromesasComponent,
        // RxjsComponent,
        // ProfileComponent,
        // UsuariosComponent,
        // // ModalUploadComponent,
        // HospitalesComponent,
        // MedicosComponent,
        // MedicoComponent,
        // BusquedaComponent
    ],
    exports: [
        DashboardComponent,
        // ProgressComponent,
        // Graficas1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ],
    providers: [
    ],
})
export class PagesModule { }
