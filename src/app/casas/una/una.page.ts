import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { CommonService} from '../../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-una',
  templateUrl: './una.page.html',
  styleUrls: ['./una.page.scss'],
})
export class UnaPage implements OnInit {

  api_params = { 'api_token':'', id:'' };
  data = [];
  casaname = '';
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
        this.casaname = params.name;
        this.api.send(this.api_params, 'casas/getOne').subscribe(data => this.bindData(data), () => this.onerror());
    });
  }
  bindData(data){
    this.common.hideloader();
    this.data[0] = data;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewContact(id, type){
    if(type == 'contact'){
      this.rout.navigate(['contacto'],{ queryParams: { id: id }});
    }else{ 
      this.rout.navigate(['formando'],{ queryParams: { id: id }});
    }
  }
  

}
