import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  api_params = { 'api_token':'' };
  servicios = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'servicios/get').subscribe(data => this.bindServicios(data), () => this.onerror());
  }
  bindServicios(servicios){
    this.common.hideloader();
    this.servicios = servicios;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewServicio(id){
    this.rout.navigate(['servicio'],{ queryParams: { id: id }});
  }
  viewCasa(id,name){
    this.rout.navigate(['casas/una'],{ queryParams: { id: id, name:name }});
  }
  fail(){
    return 0;
  }
}
