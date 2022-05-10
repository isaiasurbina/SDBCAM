import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit {

  api_params = { 'api_token':'' };
  grupos = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }
  ngOnInit() {
    this.common.showloader();
    
    this.api.send(this.api_params, 'familia/get').subscribe(data => this.bindData(data), () => this.onerror());
  }
  bindData(data){
    this.common.hideloader();
    this.grupos = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewGroup(id, name, type){
    
    if(type == '1'){
      this.rout.navigate(['familia-homes'],{ queryParams: { id: id, name: name }});
    }else{
      this.rout.navigate(['familia-members'],{ queryParams: { id: id, name: name }});
    }
  }

}
