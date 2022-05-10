import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-consejo-general',
  templateUrl: './consejo-general.page.html',
  styleUrls: ['./consejo-general.page.scss'],
})
export class ConsejoGeneralPage implements OnInit {

  api_params = { 'api_token':'' };
  info = { 'direccion': '', 'telefono':'', 'email':''};
  consejo = [];
  especiales = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'generalicia/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.info = data.info;
    this.consejo = data.consejo;
    this.especiales = data.especiales;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  

}
