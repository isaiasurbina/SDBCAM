import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-familia-homes',
  templateUrl: './familia-homes.page.html',
  styleUrls: ['./familia-homes.page.scss'],
})
export class FamiliaHomesPage implements OnInit {
  api_params = { api_token:'', familia: 0 };
  groupname = '';
  casas = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    this.common.showloader();
    
    this.a_route.queryParams.subscribe( params => {
      this.api_params.familia = params.id ;
      this.groupname = params.name;
    });
    this.api.send(this.api_params, 'familia/homes/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.casas = data;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewHome(id){ // por el momento no usar
      this.rout.navigate(['familia_home'],{ queryParams: { id: id }});
  }
  viewCasa(id,name){
    this.rout.navigate(['casas/una'],{ queryParams: { id: id, name:name }});
  }

}
