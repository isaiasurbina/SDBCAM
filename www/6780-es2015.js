(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[6780],{6780:function(o,n,i){"use strict";i.r(n),i.d(n,{GroupviewPageModule:function(){return I}});var s=i(1116),a=i(1462),t=i(8809),c=i(6393),r=i(8619),e=i(3957),g=i(7354);function p(o,n){1&o&&r._UZ(0,"img",16)}function u(o,n){1&o&&r._UZ(0,"img",17)}function m(o,n){1&o&&r._UZ(0,"img",18)}function Z(o,n){1&o&&r._UZ(0,"img",19)}function d(o,n){1&o&&r._UZ(0,"img",20)}function l(o,n){1&o&&r._UZ(0,"img",21)}function f(o,n){1&o&&(r.TgZ(0,"ion-avatar",1),r._UZ(1,"img",24),r.qZA())}function A(o,n){if(1&o&&(r.TgZ(0,"ion-avatar",1),r._UZ(1,"img",25),r.qZA()),2&o){const o=r.oxw().$implicit;r.xp6(1),r.s9C("src",o.avatar,r.LSH)}}function h(o,n){if(1&o){const o=r.EpF();r.TgZ(0,"ion-item",22),r.NdJ("click",function(){const n=r.CHM(o).$implicit;return r.oxw().viewContact(n.person.id,n.person_type)}),r.YNc(1,f,2,0,"ion-avatar",23),r.YNc(2,A,2,1,"ion-avatar",23),r.TgZ(3,"ion-label"),r.TgZ(4,"ion-text"),r._uU(5),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.qZA(),r.qZA(),r.qZA()}if(2&o){const o=n.$implicit;r.Tol(o.person_type),r.xp6(1),r.Q6J("ngIf",!o.avatar),r.xp6(1),r.Q6J("ngIf",o.avatar),r.xp6(3),r.hij(" ",o.person_name," "),r.xp6(2),r.Oqu(o.cargo)}}const _=function(){return["/"]},q=[{path:"",component:(()=>{class o{constructor(o,n,i,s,a){this.rout=o,this.api=n,this.common=i,this.navCtrl=s,this.a_route=a,this.api_params={api_token:"",group:0},this.contactos=[],this.groupname=""}ngOnInit(){this.common.showloader(),this.a_route.queryParams.subscribe(o=>{this.api_params.group=o.id,this.groupname=o.name}),this.api.send(this.api_params,"group/get").subscribe(o=>this.bindContacts(o),()=>this.onerror())}bindContacts(o){this.common.hideloader(),this.contactos=o}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}viewContact(o,n){this.rout.navigate("contact"==n?["contacto"]:["formando"],{queryParams:{id:o}})}}return o.\u0275fac=function(n){return new(n||o)(r.Y36(c.F0),r.Y36(e.s),r.Y36(g.v),r.Y36(t.SH),r.Y36(c.gz))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-groupview"]],decls:28,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[1,"container"],["src","assets/asociaciones/LogoAIS.png","class","ion-padding logo-asociaciones",4,"ngIf"],["src","assets/asociaciones/LogoASDB.png","class","ion-padding logo-asociaciones",4,"ngIf"],["src","assets/asociaciones/LogoIS.png","class","ion-padding logo-asociaciones",4,"ngIf"],["src","assets/asociaciones/LogoACS.png","class","ion-padding logo-asociaciones",4,"ngIf"],["src","assets/asociaciones/LogoAOSDB.png","class","ion-padding logo-asociaciones",4,"ngIf"],["src","assets/asociaciones/LogoASFS.png","class","ion-padding logo-asociaciones",4,"ngIf"],[1,"ion-text-center"],[3,"class","click",4,"ngFor","ngForOf"],["src","assets/asociaciones/LogoAIS.png",1,"ion-padding","logo-asociaciones"],["src","assets/asociaciones/LogoASDB.png",1,"ion-padding","logo-asociaciones"],["src","assets/asociaciones/LogoIS.png",1,"ion-padding","logo-asociaciones"],["src","assets/asociaciones/LogoACS.png",1,"ion-padding","logo-asociaciones"],["src","assets/asociaciones/LogoAOSDB.png",1,"ion-padding","logo-asociaciones"],["src","assets/asociaciones/LogoASFS.png",1,"ion-padding","logo-asociaciones"],[3,"click"],["slot","start",4,"ngIf"],["src","assets/contacto-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(o,n){1&o&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r._UZ(3,"ion-back-button"),r.qZA(),r.TgZ(4,"ion-avatar",2),r._UZ(5,"img",3),r.qZA(),r.TgZ(6,"ion-buttons",4),r.TgZ(7,"ion-fab-button",5),r._UZ(8,"ion-menu-button"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"ion-content"),r.TgZ(10,"section",6),r.TgZ(11,"div",7),r.TgZ(12,"ion-row"),r.TgZ(13,"ion-col"),r.TgZ(14,"ion-card"),r.TgZ(15,"ion-card-header"),r.YNc(16,p,1,0,"img",8),r.YNc(17,u,1,0,"img",9),r.YNc(18,m,1,0,"img",10),r.YNc(19,Z,1,0,"img",11),r.YNc(20,d,1,0,"img",12),r.YNc(21,l,1,0,"img",13),r.TgZ(22,"ion-card-title",14),r._uU(23),r.qZA(),r.qZA(),r.TgZ(24,"ion-grid"),r.TgZ(25,"ion-row"),r.TgZ(26,"ion-col"),r.YNc(27,h,8,7,"ion-item",15),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&o&&(r.Q6J("translucent",!0),r.xp6(4),r.Q6J("routerLink",r.DdM(10,_)),r.xp6(12),r.Q6J("ngIf",23==n.api_params.group),r.xp6(1),r.Q6J("ngIf",22==n.api_params.group),r.xp6(1),r.Q6J("ngIf",24==n.api_params.group),r.xp6(1),r.Q6J("ngIf",25==n.api_params.group),r.xp6(1),r.Q6J("ngIf",26==n.api_params.group),r.xp6(1),r.Q6J("ngIf",27==n.api_params.group),r.xp6(2),r.Oqu(n.groupname),r.xp6(4),r.Q6J("ngForOf",n.contactos))},directives:[t.Gu,t.sr,t.Sm,t.oU,t.cs,t.BJ,t.YI,c.rH,t.W4,t.fG,t.W2,t.Nd,t.wI,t.PM,t.Zi,s.O5,t.gZ,t.jY,s.sg,t.Ie,t.Q$,t.yW],styles:[""]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[c.Bz.forChild(q)],c.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[s.ez,a.u5,t.Pc,T]]}),o})()}}]);