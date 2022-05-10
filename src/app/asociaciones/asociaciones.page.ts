import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 


@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.page.html',
  styleUrls: ['./asociaciones.page.scss'],
})
export class AsociacionesPage implements OnInit {
  api_params = { 'api_token':'' };
  grupos = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }
  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'asociaciones/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.grupos = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewGroup(id, name){
    this.rout.navigate(['groupview'],{ queryParams: { id: id, name: name }});
  }

}
