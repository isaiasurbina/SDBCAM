import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.page.html',
  styleUrls: ['./lectura.page.scss'],
})
export class LecturaPage implements OnInit {
  api_params = { 'api_token':'' };
  data = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
      
    this.api.send(this.api_params, 'thedaylyread').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.data = data.item;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }

}
