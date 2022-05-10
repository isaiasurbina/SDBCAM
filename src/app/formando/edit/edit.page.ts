import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { CommonService} from '../../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  api_params = { 'api_token':'', 'id': 0  };
  contacto = { 
    api_token: null,
    id: null,
    user_id: null,
    firstname: null,
    lastname: null,
    birthday: null,
    outside_inspectory_id: null,
    email_1: null,
    email_2: null,
    phone: null,
    formation_level: null,
    year_level: null,
    country_id: null,
    home_id: null,
    profile_pic_id: null,
    profesion_date: null,
    death_date: null,
    friendly_death_date: null,
    status: null,
    deleted_at: null,
    created_at: null,
    updated_at: null,
    fullname: 'Cargando...',
    avatar: null,
    home_name: null,
    friendlyBday: null,
    friendly_profession_date: null,
    friendly_ordination_date: null,
    funciones: null,
  };
  inspectorias = [];
  formationLevels = [];
  formationYears = [];
  homes = [];
  selected_home = 0;
  roles = [];
  selected_role = 0;
  lifestyles = [];
  selected_lifestyle = 0;
  countries = [];
  selected_country = 0;
  years = [];
  days = [];
  months =  { 
    Enero: '01',
    Febrero: '02',
    Marzo: '03',
    Abril: '04',
    Mayo: '05',
    Junio: '06',
    Julio: '07',
    Agosto: '08',
    Septiembre: '09',
    Octubre: '10',
    Noviembre: '11',
    Diciembre: '12'
  }
  birthday = [];
  profession_date = [];
  ordination_date = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    for (let i = 1; i < 32; i++) {
      this.days.push(i);
    }
    let maxyear = 2021;
    for (let h = 1920; h < maxyear; h++) {
      this.years.push(h);
    }
  }
  ionViewWillEnter(){
      this.common.showloader();
    
      this.api.send(this.api_params, 'user/form-lists/get').subscribe(data => this.bindFormLists(data), () => this.onerror());
  }
  
  bindFormLists(data){
    this.countries = data.countries;
    this.lifestyles = data.lifestyles;
    this.inspectorias = data.inspectorias;
    this.formationLevels = data.formationLevels;
    this.formationYears = data.formationYears;
    this.homes = data.homes;
    this.roles = data.roles;

    //caragar la informacion del contacto
    this.a_route.queryParams.subscribe( params => {
      this.api_params.id = params.id ;
    });
    this.api.send(this.api_params, 'formandos/getOne').subscribe(data => this.bindContact(data), () => this.onerror());
    
  }
  bindContact(contacto){
    
    this.contacto = contacto;
    this.birthday = this.contacto.birthday.split('-');
    this.common.hideloader();
    /* if(this.contacto.profession_date){
      this.profession_date = this.contacto.profession_date.split('-');
    }
    if(this.contacto.ordination_date){
      this.ordination_date = this.contacto.ordination_date.split('-');
    }
    this.selected_country = this.contacto.country_id; */
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  save(){
    if(this.contacto.phone){
      if(!this.checkPhone(this.contacto.phone)){
        return false;
      }
    }
    /* if(this.contacto.mobile){
      if(!this.checkPhone(this.contacto.mobile)){
        return false;
      }
    } */
    
    //guardar
    this.contacto.birthday = this.birthday[0] + '-' + this.birthday[1] + '-' + this.birthday[2] ; 
    /* this.contacto.ordination_date = this.ordination_date[0] + '-' + this.ordination_date[1] + '-' + this.ordination_date[2] ; 
    this.contacto.profession_date = this.profession_date[0] + '-' + this.profession_date[1] + '-' + this.profession_date[2] ; */ 
    this.common.showloader();
    this.api.send(this.contacto, 'formandos/save').subscribe(data => this.bindSave(data), () => this.onerror());
    
  }
  checkPhone(inputtxt){
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneno2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno) || inputtxt.match(phoneno2)){
        return true;
    }else{
      this.common.toasting('El formato del telefono ingresado no es valido favor usar (000) 0000000');
      return false;
    }
  }
  bindSave(data){
    this.common.hideloader();
    if(data.status == 'success'){
      this.common.toasting('Se ha guardado la informacion de tu perfil.');
      this.rout.navigate(['formando'],{ queryParams: { id: this.contacto.id }});
    }else{
       this.onerror();
    }
  }

}
