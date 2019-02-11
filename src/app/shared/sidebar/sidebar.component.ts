import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
// import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  // usuario: Usuario;

  constructor(public _sidebar: SidebarService ) { }

  ngOnInit() {
    // this.usuario = this._usuarioService.usuario;
    this._sidebar.cargarMenu();
  }

  logout() {
    // this._usuarioService.logout();
  }

}
