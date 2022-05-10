import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any = { "email": "", "password": "" }
  userinfo: any;
  deviceinfo: any = { uuid: '', platform: '', token: '' };

  constructor(private rout: Router, public loginserv: LoginService, public common: CommonService, public navCtrl: NavController) { 
    localStorage.setItem('api_token', '0');
  }

  ngOnInit() {
      
  }

  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }

  loginStart(){
      var env = this;
      if (env.login.email != '' && env.login.pass != ''){
          env.common.showloader();
          this.login.deviceinfo = JSON.stringify(this.deviceinfo);
          env.loginserv.send(this.login).subscribe(data => this.loginengine(data), () => this.onerror());
      } else {
          env.common.toasting('Debes ingresar tus credenciales para poder continuar.', 4000);
      }
  }

  loginengine(data) {
    this.common.hideloader();
    if (data.status == true) {
      localStorage.setItem('api_token', data.user.api_token);
      localStorage.setItem('uid', data.user.id);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('email', data.user.email);
      this.rout.navigate(['/']);
    } else {
      this.common.toasting(data.sms, 4000);
    }
  }
  

}
