import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  caminando = { banner: '', title:'', id:'' };
  params = { api_token: '' };
  bsArticle = { image: '', title:'', date:'', link:'' };
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }
  todayActivities = [];
  todaybdays = [];
  lectura = [];
  loading = true;

  ngOnInit() {
    //this.common.toasting('Actualizando...');
    this.api.send(this.params, 'actividades/hoy').subscribe(data => this.bindTodayActivities(data), () => this.onerror());
    this.api.send(this.params, 'aniversarios/hoy').subscribe(data => this.bindTodaybdays(data), () => this.onerror());
    this.api.send(this.params, 'caminando/actual').subscribe(data => this.bindCaminando(data), () => this.onerror());
    this.api.send(this.params, 'thedaylyread/home').subscribe(data => this.bindLectura(data), () => this.onerror());
    this.api.sendCustom(this.params, 'https://kyoskio3.com/bsnews/').subscribe(data => this.bindNews(data), () => this.onerror());
  }

  ionViewWillEnter() {
    this.common.checkLogin();
  }
  bindLectura(data){
      this.lectura = data;
  }
  bindTodayActivities(activities){
      this.todayActivities = activities;
  }
  bindTodaybdays(todaybdays){
      this.todaybdays = todaybdays;
  }
  bindNews(bsarticle){
      this.bsArticle = bsarticle;
  }
  bindCaminando(data){
      this.caminando = data;
      this.loading = false;
  }
  onerror() {
      this.common.toasting('Esta tomando más tiempo de lo debido, revisa tu conexión e intenta nuevamente más tarde.');
  }
  viewEdicion(edicion){
      let queryParams = edicion;
      this.rout.navigate(['caminando-edition'], { queryParams: queryParams }); 
  }
  viewActivity(activityID){
      this.rout.navigate(['actividad'], { queryParams: { id: activityID } }); 
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
