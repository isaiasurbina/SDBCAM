import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caminando-edition',
  templateUrl: './caminando-edition.page.html',
  styleUrls: ['./caminando-edition.page.scss'],
})
export class CaminandoEditionPage implements OnInit {
  api_params = { id: 0, api_token:'' }
  edicion = { title: '...', mainbanner: null }
  posts = [];
  constructor(private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.common.showloader();
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
        this.edicion.title = params.title ;
        this.edicion.mainbanner = params.mainbanner ;
    });
    this.api.send(this.api_params, 'caminando/ediciones/posts/get').subscribe(data => this.bindContact(data), () => this.onerror());
  }
  bindContact(data){
    this.common.hideloader();
    this.posts = data;
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  viewPost(articleData){
    
    this.rout.navigate(['caminando-article'],{ queryParams: articleData });
  
}

}
