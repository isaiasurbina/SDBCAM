!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[7425],{7425:function(o,i,e){"use strict";e.r(i),e.d(i,{FormandoPageModule:function(){return I}});var a=e(1116),r=e(1462),c=e(8809),l=e(6393),u=e(8619),s=e(3957),Z=e(7354);function f(n,t){if(1&n){var o=u.EpF();u.TgZ(0,"ion-buttons",14),u.NdJ("click",function(){u.CHM(o);var n=u.oxw();return n.frmEdit(n.contacto.id)}),u.TgZ(1,"ion-fab-button",15),u._UZ(2,"ion-icon",16),u.qZA(),u.qZA()}}function g(n,t){1&n&&(u.TgZ(0,"ion-avatar",17),u._UZ(1,"img",18),u.qZA())}function m(n,t){if(1&n&&(u.TgZ(0,"ion-avatar",17),u._UZ(1,"img",19),u.qZA()),2&n){var o=u.oxw();u.xp6(1),u.s9C("src",o.contacto.avatar,u.LSH)}}function d(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u._UZ(1,"ion-icon",20),u.TgZ(2,"ion-label"),u.TgZ(3,"ion-text"),u._uU(4),u.qZA(),u.TgZ(5,"p"),u._uU(6,"Mobil"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(4),u.Oqu(o.contacto.phone)}}function p(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u._UZ(1,"ion-icon",21),u.TgZ(2,"ion-label",10),u._uU(3),u.TgZ(4,"p"),u._uU(5,"Email 1"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(3),u.hij(" ",o.contacto.email_1," ")}}function _(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u._UZ(1,"ion-icon",21),u.TgZ(2,"ion-label",10),u._uU(3),u.TgZ(4,"p"),u._uU(5,"Email 2"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(3),u.hij(" ",o.contacto.email_2," ")}}function h(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u._UZ(1,"ion-icon",22),u.TgZ(2,"ion-label"),u.TgZ(3,"ion-text"),u._uU(4),u.qZA(),u.TgZ(5,"p"),u._uU(6,"Casa Asignada"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(4),u.Oqu(o.contacto.home)}}function q(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u.TgZ(2,"ion-text"),u._uU(3),u.qZA(),u.TgZ(4,"p"),u._uU(5,"Nivel de formaci\xf3n"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(3),u.Oqu(o.contacto.formation_level_text)}}function A(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u.TgZ(2,"ion-text"),u._uU(3),u.qZA(),u.TgZ(4,"p"),u._uU(5,"A\xf1o de formaci\xf3n "),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(3),u.Oqu(o.contacto.year_level_text)}}function T(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-avatar",1),u._UZ(2,"img",23),u.qZA(),u.TgZ(3,"ion-label"),u.TgZ(4,"ion-text"),u._uU(5),u.qZA(),u.TgZ(6,"p"),u._uU(7,"Cumplea\xf1os"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(5),u.Oqu(o.contacto.friendlyBday)}}function x(n,t){if(1&n&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-avatar",1),u._UZ(2,"img",24),u.qZA(),u.TgZ(3,"ion-label"),u.TgZ(4,"ion-text"),u._uU(5),u.qZA(),u.TgZ(6,"p"),u._uU(7,"Primera Profesion"),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(5),u.Oqu(o.contacto.friendly_profession_date)}}function v(n,t){if(1&n&&(u.TgZ(0,"section"),u.TgZ(1,"ion-item"),u.TgZ(2,"ion-avatar",1),u._UZ(3,"img",24),u.qZA(),u.TgZ(4,"ion-label"),u.TgZ(5,"ion-text"),u._uU(6),u.qZA(),u.TgZ(7,"p"),u._uU(8,"Fecha de defuncion"),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n){var o=u.oxw();u.xp6(6),u.Oqu(o.contacto.friendly_death_date)}}var b,y,U=function(){return["/"]},w=[{path:"",component:(b=function(){function o(t,i,e,a,r){n(this,o),this.rout=t,this.api=i,this.common=e,this.navCtrl=a,this.a_route=r,this.api_params={api_token:"",id:0},this.contacto={id:null,user_id:null,firstname:null,lastname:null,nickname:null,birthday:null,profession_date:null,ordination_date:null,email_1:null,email_2:null,country_id:null,mobile:null,phone:null,lifestyle_id:null,home_id:null,profile_pic_id:null,death_date:null,friendly_death_date:null,status:null,deleted_at:null,created_at:null,updated_at:null,fullname:"Cargando...",avatar:null,home:null,formation_level_text:null,year_level_text:null,friendlyBday:null,friendly_profession_date:null,friendly_ordination_date:null,funciones:null}}var i,e,a;return i=o,(e=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var n=this;this.common.showloader(),this.a_route.queryParams.subscribe(function(t){n.api_params.id=t.id}),this.api.send(this.api_params,"formandos/getOne").subscribe(function(t){return n.bindContact(t)},function(){return n.onerror()})}},{key:"bindContact",value:function(n){this.common.hideloader(),this.contacto=n}},{key:"onerror",value:function(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}},{key:"checkuserprofile",value:function(n){return n==localStorage.getItem("email")}},{key:"frmEdit",value:function(n){this.rout.navigate(["formando/edit"],{queryParams:{id:n}})}}])&&t(i.prototype,e),a&&t(i,a),o}(),b.\u0275fac=function(n){return new(n||b)(u.Y36(l.F0),u.Y36(s.s),u.Y36(Z.v),u.Y36(c.SH),u.Y36(l.gz))},b.\u0275cmp=u.Xpm({type:b,selectors:[["app-formando"]],decls:32,vars:19,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end",3,"click",4,"ngIf"],[1,"bg-sdb"],[1,""],["size","12",1,"ion-text-center"],["class","single-contact-avatar",4,"ngIf"],[1,"ion-text-center"],[1,"ion-text-wrap"],["target","_system",3,"href"],[4,"ngIf"],[1,"divider-transparent"],["slot","end",3,"click"],["size","small","color","primary"],["name","pencil-outline"],[1,"single-contact-avatar"],["src","assets/contacto-icon.png",1,""],[1,"",3,"src"],["slot","start","name","phone-portrait-outline"],["slot","start","name","mail-outline"],["slot","start","name","home-outline"],["src","assets/cake.png",1,"round-0"],["src","assets/funcion-icon.png",1,"round-0"]],template:function(n,t){1&n&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-avatar",2),u._UZ(5,"img",3),u.qZA(),u.YNc(6,f,3,0,"ion-buttons",4),u.qZA(),u.qZA(),u.TgZ(7,"ion-content"),u.TgZ(8,"section",5),u.TgZ(9,"ion-card",6),u.TgZ(10,"ion-card-content"),u.TgZ(11,"ion-row"),u.TgZ(12,"ion-col",7),u.YNc(13,g,2,0,"ion-avatar",8),u.YNc(14,m,2,1,"ion-avatar",8),u.qZA(),u.qZA(),u.TgZ(15,"ion-row"),u.TgZ(16,"ion-col",9),u.TgZ(17,"h2",10),u._uU(18),u.qZA(),u.qZA(),u.qZA(),u.TgZ(19,"a",11),u.YNc(20,d,7,1,"ion-item",12),u.qZA(),u.TgZ(21,"a",11),u.YNc(22,p,6,1,"ion-item",12),u.qZA(),u.TgZ(23,"a",11),u.YNc(24,_,6,1,"ion-item",12),u.qZA(),u.YNc(25,h,7,1,"ion-item",12),u.YNc(26,q,6,1,"ion-item",12),u.YNc(27,A,6,1,"ion-item",12),u.YNc(28,T,8,1,"ion-item",12),u.YNc(29,x,8,1,"ion-item",12),u.YNc(30,v,9,1,"section",12),u.qZA(),u.qZA(),u._UZ(31,"ion-item-divider",13),u.qZA(),u.qZA()),2&n&&(u.Q6J("translucent",!0),u.xp6(4),u.Q6J("routerLink",u.DdM(18,U)),u.xp6(2),u.Q6J("ngIf",t.checkuserprofile(t.contacto.email_1)),u.xp6(7),u.Q6J("ngIf",!t.contacto.avatar),u.xp6(1),u.Q6J("ngIf",t.contacto.avatar),u.xp6(4),u.Oqu(t.contacto.fullname),u.xp6(1),u.MGl("href","tel:",t.contacto.phone,"",u.LSH),u.xp6(1),u.Q6J("ngIf",t.contacto.phone),u.xp6(1),u.MGl("href","mailto:",t.contacto.phone,"",u.LSH),u.xp6(1),u.Q6J("ngIf",t.contacto.email_1),u.xp6(1),u.MGl("href","mailto:",t.contacto.email_2,"",u.LSH),u.xp6(1),u.Q6J("ngIf",t.contacto.email_2),u.xp6(1),u.Q6J("ngIf",t.contacto.home),u.xp6(1),u.Q6J("ngIf",t.contacto.formation_level_text),u.xp6(1),u.Q6J("ngIf",t.contacto.year_level_text),u.xp6(1),u.Q6J("ngIf",t.contacto.friendlyBday),u.xp6(1),u.Q6J("ngIf",t.contacto.friendly_profession_date),u.xp6(1),u.Q6J("ngIf",null!=t.contacto.death_date))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.BJ,c.YI,l.rH,a.O5,c.W2,c.PM,c.FN,c.Nd,c.wI,c.rH,c.W4,c.gu,c.Ie,c.Q$,c.yW],styles:[".single-contact-avatar[_ngcontent-%COMP%]{margin:0 auto;width:100%!important;height:100%!important;max-width:200px!important;max-height:200px!important}"]}),b)},{path:"edit",loadChildren:function(){return e.e(759).then(e.bind(e,759)).then(function(n){return n.EditPageModule})}}],k=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[l.Bz.forChild(w)],l.Bz]}),t}(),I=((y=function t(){n(this,t)}).\u0275fac=function(n){return new(n||y)},y.\u0275mod=u.oAB({type:y}),y.\u0275inj=u.cJS({imports:[[a.ez,r.u5,c.Pc,k]]}),y)}}])}();