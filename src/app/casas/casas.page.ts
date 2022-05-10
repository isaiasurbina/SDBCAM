import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-casas',
  templateUrl: './casas.page.html',
  styleUrls: ['./casas.page.scss'],
})
export class CasasPage implements OnInit {
  api_params = { 'api_token':'' };
  paises = [];
  casas = [];
  casasBkp = [];
  searching = false;
  
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController) { }

  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'casas/get').subscribe(data => this.bindCasas(data), () => this.onerror());
  }
  bindCasas(data){
    this.common.hideloader();
    var stringArray: string[] = ['Guatemala', 'A', 'B', 'C'];

    this.paises = data;
    
    //this.casasBkp = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewCasa(id,name){
    this.rout.navigate(['casas/una'],{ queryParams: { id: id, name:name }});
  }
 /*  toggleSearch(){
    if(this.searching == false){
      this.searching = true;
    }else{
      this.searching = false;
    }
  } */
  /* filterCasas(evt){
      this.casas = this.casasBkp;
      const searchTerm = evt.srcElement.value;
    
      if (!searchTerm) {
        return;
      }
    
      this.casas = this.casas.filter(currentCasa => {
        if (currentCasa.title && searchTerm) {
          return (currentCasa.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                || (currentCasa.place.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
  } */
  fail(){
    return 0;
  }
}
