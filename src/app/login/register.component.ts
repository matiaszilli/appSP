import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';

import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
              public router: Router) { }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.email]),
      password: new FormControl(null, [Validators.email]),
      password2: new FormControl(null, [Validators.email]),
      condiciones: new FormControl(false),
    }, { validators:  this.sonIguales('password', 'password2') });

    this.forma.setValue({
      nombre: 'test',
      correo: 'test@test.com',
      password: 'test@test.com',
      password2: 'test@test.com',
      condiciones: true,
    });
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      swal('Importante', 'Debe aceptar condiciones', 'warning');
      return;
    }




  }

}
