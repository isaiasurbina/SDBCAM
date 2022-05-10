import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-fallecidos',
  templateUrl: './fallecidos.page.html',
  styleUrls: ['./fallecidos.page.scss'],
})
export class FallecidosPage implements OnInit {
    api_params = { 'api_token':'' };
    contactos = [];
    contactosBkp = [];
    searching = false;
    constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }
    ngOnInit() {
      this.common.showloader();
      
      this.api.send(this.api_params, 'contactos/fallecidos/get').subscribe(data => this.bindContacts(data), () => this.onerror());
    }
    ionViewWillEnter(){
      
    }
    bindContacts(contactos){
      this.common.hideloader();
      this.contactos = contactos;
      this.contactosBkp = contactos;
    }
    onerror() {
        this.common.hideloader();
        this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
    }
    viewContact(id){
      this.rout.navigate(['contacto'],{ queryParams: { id: id }});
    }

}
