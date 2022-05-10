import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  api_params = { 'api_token':'', id:'' };
  activity = { 
    id: null,
    title: null,
    desc: null,
    lugar: null,
    fechainicio: null,
    friendly_fechainicio: null,
    friendly_fechafinal: null,
    fechafinal: null,
    imgfile: null
  };
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
        this.api.send(this.api_params, 'actividades/getOne').subscribe(data => this.bindData(data), () => this.onerror());
    });
  }
  bindData(data){
    this.common.hideloader();
    this.activity = data;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }

}
