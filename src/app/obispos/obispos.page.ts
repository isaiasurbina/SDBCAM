import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-obispos',
  templateUrl: './obispos.page.html',
  styleUrls: ['./obispos.page.scss'],
})
export class ObisposPage implements OnInit {

  api_params = { 'api_token':'' };
  
  obispos = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'obispos/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.obispos = data;

    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewObispo(id){
    this.rout.navigate(['obispos/one'],{ queryParams: { id: id }});
  }

}
