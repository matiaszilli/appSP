import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  AwsIotService,
  SharedService,
  SidebarService,
  SettingsService
} from './service.index';
// import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
// import { VerificaTokenGuard } from './guards/verifica-token.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AwsIotService,
    SharedService,
    SidebarService,
    SettingsService,

  ]
})
export class ServiceModule { }
