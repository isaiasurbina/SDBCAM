import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-formandos',
  templateUrl: './formandos.page.html',
  styleUrls: ['./formandos.page.scss'],
})
export class FormandosPage implements OnInit {
  api_params = { 'api_token':'' };
  levels = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'formandos/formaciones').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.levels = data; 
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewLevel(id,text,icon){
      this.rout.navigate(['formandoslevel'],{ queryParams: { id: id, text: text, icon:icon }});
  }

}
