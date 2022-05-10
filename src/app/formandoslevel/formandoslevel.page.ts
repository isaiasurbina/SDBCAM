import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formandoslevel',
  templateUrl: './formandoslevel.page.html',
  styleUrls: ['./formandoslevel.page.scss'],
})
export class FormandoslevelPage implements OnInit {
  api_params = { 'api_token':'', 'id': 0  };
  level = { text:'', icon: ''  };
  contactos = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }
  ngOnInit() {

  }
  ionViewWillEnter(){
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
        this.level.text = params.text;
        this.level.icon = params.icon;
    });
    this.api.send(this.api_params, 'formandos/get').subscribe(data => this.bindContacts(data), () => this.onerror());
  }
  bindContacts(data){
    this.common.hideloader();
    this.contactos = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewContact(id,type){
    if(type == 'contact'){
      this.rout.navigate(['contacto'],{ queryParams: { id: id }});
    }else{ 
      this.rout.navigate(['formando'],{ queryParams: { id: id }});
    }
  }
}
