(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[6286],{6286:function(o,n,t){"use strict";t.r(n),t.d(n,{ObisposPageModule:function(){return h}});var i=t(1116),s=t(1462),e=t(8809),r=t(6393),a=t(8619),c=t(3957),Z=t(7354);function p(o,n){1&o&&(a.TgZ(0,"ion-avatar",1),a._UZ(1,"img",16),a.qZA())}function g(o,n){if(1&o&&(a.TgZ(0,"ion-avatar",1),a._UZ(1,"img",17),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(1),a.s9C("src",o.avatar,a.LSH)}}function u(o,n){if(1&o){const o=a.EpF();a.TgZ(0,"ion-item",13),a.NdJ("click",function(){const n=a.CHM(o).$implicit;return a.oxw().viewObispo(n.id)}),a.YNc(1,p,2,0,"ion-avatar",14),a.YNc(2,g,2,1,"ion-avatar",14),a.TgZ(3,"ion-label"),a.TgZ(4,"ion-text"),a._uU(5),a.qZA(),a.TgZ(6,"ion-label",15),a._uU(7),a.qZA(),a.qZA(),a.qZA()}if(2&o){const o=n.$implicit;a.xp6(1),a.Q6J("ngIf",!o.avatar),a.xp6(1),a.Q6J("ngIf",o.avatar),a.xp6(3),a.AsE(" ",o.nombre," ",o.apellido," "),a.xp6(2),a.Oqu(o.diocesis)}}const l=function(){return["/"]},d=[{path:"",component:(()=>{class o{constructor(o,n,t,i){this.rout=o,this.api=n,this.common=t,this.navCtrl=i,this.api_params={api_token:""},this.obispos=[]}ngOnInit(){this.common.showloader(),this.api.send(this.api_params,"obispos/get").subscribe(o=>this.bindData(o),()=>this.onerror())}bindData(o){this.common.hideloader(),this.obispos=o}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}viewObispo(o){this.rout.navigate(["obispos/one"],{queryParams:{id:o}})}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(r.F0),a.Y36(c.s),a.Y36(Z.v),a.Y36(e.SH))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-obispos"]],decls:30,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[1,"container"],["size","12",1,"ion-text-center"],["src","assets/escudos/obispos-header.png",1,"consejo-header"],["size","12"],[1,"ion-text-center","ion-padding-top","ion-padding-bottom"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",4,"ngIf"],["color","danger"],["src","assets/contacto-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(o,n){1&o&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-back-button"),a.qZA(),a.TgZ(4,"ion-avatar",2),a._UZ(5,"img",3),a.qZA(),a.TgZ(6,"ion-title",1),a._uU(7," Obispos "),a.qZA(),a.TgZ(8,"ion-buttons",4),a.TgZ(9,"ion-fab-button",5),a._UZ(10,"ion-menu-button"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"ion-content"),a.TgZ(12,"section",6),a.TgZ(13,"div",7),a.TgZ(14,"ion-row"),a.TgZ(15,"ion-col"),a.TgZ(16,"ion-card"),a.TgZ(17,"ion-card-content"),a.TgZ(18,"ion-grid"),a.TgZ(19,"ion-row"),a.TgZ(20,"ion-col",8),a._UZ(21,"img",9),a.qZA(),a.qZA(),a.TgZ(22,"ion-row"),a.TgZ(23,"ion-col",10),a.TgZ(24,"ion-item"),a.TgZ(25,"h2",11),a._uU(26," Obispos Salesianos en Centroamerica "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(27,"ion-row"),a.TgZ(28,"ion-col"),a.YNc(29,u,8,5,"ion-item",12),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.Q6J("translucent",!0),a.xp6(4),a.Q6J("routerLink",a.DdM(3,l)),a.xp6(25),a.Q6J("ngForOf",n.obispos))},directives:[e.Gu,e.sr,e.Sm,e.oU,e.cs,e.BJ,e.YI,r.rH,e.wd,e.W4,e.fG,e.W2,e.Nd,e.wI,e.PM,e.FN,e.jY,e.Ie,i.sg,i.O5,e.Q$,e.yW],styles:[""]}),o})()},{path:"one",loadChildren:()=>t.e(496).then(t.bind(t,496)).then(o=>o.OnePageModule)}];let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[r.Bz.forChild(d)],r.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[i.ez,s.u5,e.Pc,m]]}),o})()}}]);