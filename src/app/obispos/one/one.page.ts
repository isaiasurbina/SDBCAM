import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { CommonService} from '../../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {
  api_params = { 'api_token':'', 'id': 0  };
  contacto = { 
    id: null,
    user_id: null,
    friendly_nacimiento: null,
    friendly_primera_profesion: null,
    friendly_ordenacion_sacerdotal: null,
    friendly_ordenacion_obispo: null,
    email_1: null,
    email_2: null,
    phone: null,
    diocesis: null,
    d_address: null,
    d_phone: null,
    d_email: null,
    avatar: null,
    fullname: null
    
  };
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
    });
    this.api.send(this.api_params, 'obispos/getOne').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.contacto = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }

}
