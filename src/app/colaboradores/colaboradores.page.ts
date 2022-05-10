import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage implements OnInit {

  api_params = { 'api_token':'' };
  contactos = [];
  contactosBkp = [];
  searching = false;
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }
  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'colaboradores/get').subscribe(data => this.bindContacts(data), () => this.onerror());
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
  viewContact(id, type){
    if(type == 'contact'){
      this.rout.navigate(['contacto'],{ queryParams: { id: id }});
    }else{ 
      this.rout.navigate(['formando'],{ queryParams: { id: id }});
    }
    /* this.rout.navigate(['contacto'],{ queryParams: { id: id }}); */
  }
  toggleSearch(){
    if(this.searching == false){
      this.searching = true;
    }else{
      this.searching = false;
    }
  }
  filterContactos(evt){
      this.contactos = this.contactosBkp;
      const searchTerm = evt.srcElement.value;
    
      if (!searchTerm) {
        return;
      }
    
      this.contactos = this.contactos.filter(currentContact => {
        if (currentContact.fullname && searchTerm) {
          return (currentContact.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                || (currentContact.email_1.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
  }

}
