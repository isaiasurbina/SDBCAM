import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.page.html',
  styleUrls: ['./groupview.page.scss'],
})
export class GroupviewPage implements OnInit {
  api_params = { 'api_token':'', 'group': 0 };
  contactos = [];
  groupname = '';
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
    this.common.showloader();
    
    this.a_route.queryParams.subscribe( params => {
      this.api_params.group = params.id ;
      this.groupname = params.name
  });
    this.api.send(this.api_params, 'group/get').subscribe(data => this.bindContacts(data), () => this.onerror());
  }
  bindContacts(contactos){
    this.common.hideloader();
    this.contactos = contactos;
    
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
