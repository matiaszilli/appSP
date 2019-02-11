import { Injectable } from '@angular/core';
// import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class SidebarService {

  menu: any = [];

  constructor() {
    this.cargarMenu();
  }

  cargarMenu() {
    // this.menu = this._usuarioService.menu;
    this.menu = [
      {
        nombre: 'ts',
        icono: 'fa fa-tachometer',
        submenu: [
          {
            url: 'test',
            titulo: 'dsa',
          }
        ]
      }
    ];
   }

}
