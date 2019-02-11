import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {  SidebarService } from '../services/service.index';


declare function init_plugins();

declare const gapi: any; // The Google Sign-In object.


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame = false;
  email: string;

  auth2: any; // The Google Sign-In object.

  constructor(
    public router: Router,

    ) { }

    googleInit() {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '860129997172-el58042n1pal1r6tdseus9vu4pnfdnvc.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.attachSignin(document.getElementById('btnGoogle'));
      });
    }

    attachSignin(element) {
      this.auth2.attachClickHandler(element, {}, googleUser => {
        // let profile = googleUser.getBasicProfile();
        const token = googleUser.getAuthResponse().id_token;
        // console.log(token);
      });
    }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }


  }

}
