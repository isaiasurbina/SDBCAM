import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonService} from '../services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  params = { email: '' };
  constructor(private rout: Router, public api: ApiService, public common: CommonService) { }

  ngOnInit() {
  }

  resetPassword(){
    if(this.params.email != ''){
      this.common.showloader();
      
      this.api.sendCustom(this.params, 'https://misieri.kyoskio.com/api/user/forgot').subscribe(data => this.bindResponse(data), () => this.onerror());
    }else{
      this.common.toasting('El correo electrónico es requerido.');
    }
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  bindResponse(data){
      this.common.hideloader();
      if(data){
        this.common.toasting(data.sms, 5000);
      }else{
        this.common.toasting('Ha ocurrido un error, favor intenta mas tarde.', 2000);
      }  
  }
}
