import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-consejo',
  templateUrl: './consejo.page.html',
  styleUrls: ['./consejo.page.scss'],
})
export class ConsejoPage implements OnInit {
  api_params = { 'api_token':'' };
  contactos = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'consejo/get').subscribe(data => this.bindContacts(data), () => this.onerror());
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
