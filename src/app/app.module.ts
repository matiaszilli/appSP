import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PWA
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
