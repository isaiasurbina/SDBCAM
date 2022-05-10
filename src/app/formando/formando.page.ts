import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formando',
  templateUrl: './formando.page.html',
  styleUrls: ['./formando.page.scss'],
})
export class FormandoPage implements OnInit {

  api_params = { 'api_token':'', 'id': 0  };
  contacto = { 
    id: null,
    user_id: null,
    firstname: null,
    lastname: null,
    nickname: null,
    birthday: null,
    profession_date: null,
    ordination_date: null,
    email_1: null,
    email_2: null,
    country_id: null,
    mobile: null,
    phone: null,
    lifestyle_id: null,
    home_id: null,
    profile_pic_id: null,
    death_date: null,
    friendly_death_date: null,
    status: null,
    deleted_at: null,
    created_at: null,
    updated_at: null,
    fullname: 'Cargando...',
    avatar: null,
    home: null,
    formation_level_text: null,
    year_level_text: null,
    friendlyBday: null,
    friendly_profession_date: null,
    friendly_ordination_date: null,
    funciones: null,
  };

  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
    });
    this.api.send(this.api_params, 'formandos/getOne').subscribe(data => this.bindContact(data), () => this.onerror());
  }
  bindContact(contacto){
    this.common.hideloader();
    this.contacto = contacto;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  checkuserprofile(email){
    let actualUserID = localStorage.getItem('email');
    if(email == actualUserID){
      return true;
    }else{
      return false;
    }
  }
  frmEdit(contactID){
    this.rout.navigate(['formando/edit'],{ queryParams: { id: contactID }});
  }

}
