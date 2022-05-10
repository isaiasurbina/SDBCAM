import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { CommonService} from '../services/common.service';
import { NavController, Platform } from '@ionic/angular'; 
import { ActivatedRoute } from '@angular/router';


import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  service = '';
  updatePhotoURL = '../user/update/photo?usrtkn=';
  userToken = '';
  api_params = { 'api_token':'', 'id': 0  };
  contacto = { 
    id: null,
    user_id: null,
    firstname: null,
    lastname: null,
    nickname: null,
    birthday: null,
    profession_date: null,
    ordination_date: null,
    email_1: null,
    email_2: null,
    country_id: null,
    mobile: null,
    phone: null,
    lifestyle_id: null,
    home_id: null,
    profile_pic_id: null,
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

  constructor(public platform: Platform, private rout: Router, public api: ApiService, public common: CommonService, public navCtrl: NavController, private a_route: ActivatedRoute) { }
  ngOnInit() {

  }
  ionViewWillEnter(){
    this.common.showloader();
    this.userToken = localStorage.getItem('api_token');
    this.service = this.common.api_url;
    this.a_route.queryParams.subscribe( params => {
        this.api_params.id = params.id ;
    });
    this.api.send(this.api_params, 'contactos/getOne').subscribe(data => this.bindContact(data), () => this.onerror());
  }
  bindContact(contacto){
    this.common.hideloader();
    this.contacto = contacto;
    
  }
  onerror() {
      this.common.hideloader();
      this.common.toasting('Ha ocurrido un error, favor intenta más tarde.');
  }
  checkuserprofile(email){
      let actualUseremail = localStorage.getItem('email');
      
      if(email == actualUseremail){
        return true;
      }else{
        return false;
      }
  }
  frmEdit(contactID){
    this.rout.navigate(['contacto/edit'],{ queryParams: { id: contactID }});
  }
  resetPassword(){
    this.common.showloader();
    let params = { email: localStorage.getItem('email') };
    this.api.sendCustom(params, 'https://misieri.kyoskio.com/api/user/forgot').subscribe(data => this.bindResponse(data), () => this.onerror());
  }
  bindResponse(data){
    this.common.hideloader();
    if(data){
      this.common.toasting(data.sms, 5000);
    }else{
      this.common.toasting('Ha ocurrido un error, favor intenta mas tarde.', 2000);
    }  
  }
  imageUploadResponse(data){
    this.common.hideloader();
    if(data){
      this.common.toasting(data.sms, 5000);
      this.contacto.avatar = data.image;
    }else{
      this.common.toasting('Ha ocurrido un error, favor intenta mas tarde.', 2000);
    }  
  }
  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
    this.getPicture(image.base64String);       
  }
  getPicture(imageData){
    //let base64Image = 'data:image/png;base64,' + imageData;
    let base64Image =  imageData;
    
    let userEmail = localStorage.getItem('email');
    let params = { 'uid': userEmail, 'image': base64Image };
    this.api.sendPost(params, 'https://misieri.kyoskio3.com/api/user/upload/photo').subscribe(data => this.imageUploadResponse(data), () => this.onerror());
  }
  isAndroid(){
    if(this.platform.is('android')){
      return true;
    }else{
      return false;
    }
  }
}
