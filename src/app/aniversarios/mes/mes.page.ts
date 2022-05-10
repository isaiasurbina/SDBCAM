import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { CommonService} from '../../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mes',
  templateUrl: './mes.page.html',
  styleUrls: ['./mes.page.scss'],
})
export class MesPage implements OnInit {

  api_params = { 'api_token':'', mes:'' };
  data = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.mes = params.mes ;
        this.api.send(this.api_params, 'aniversarios/mes').subscribe(data => this.bindData(data), () => this.onerror());
    });
  }
  bindData(data){
    this.common.hideloader();
    this.data = data;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewContact(id,type){
      if(type == 'obispo'){
        this.rout.navigate(['obispos/one'], { queryParams: { id: id } }); 
      }else if(type=='formando'){
        this.rout.navigate(['formando'], { queryParams: { id: id } }); 
      }else{
        this.rout.navigate(['contacto'], { queryParams: { id: id } }); 
      }
  }

}
