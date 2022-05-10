import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-caminando-index',
  templateUrl: './caminando-index.page.html',
  styleUrls: ['./caminando-index.page.scss'],
})
export class CaminandoIndexPage implements OnInit {
  api_params = { 'api_token':'' };
  ediciones = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'caminando/ediciones/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.ediciones = data; 
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewEdicion(edicion){
      let queryParams = edicion;
      this.rout.navigate(['caminando-edition'], { queryParams: queryParams });
    
  }

}
