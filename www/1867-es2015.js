(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[1867],{1867:function(o,t,n){"use strict";n.r(t),n.d(t,{ConsejoPageModule:function(){return q}});var i=n(1116),a=n(1462),s=n(8809),e=n(6393),r=n(8619),c=n(3957),Z=n(7354);function g(o,t){1&o&&(r.TgZ(0,"ion-avatar",1),r._UZ(1,"img",19),r.qZA())}function l(o,t){if(1&o&&(r.TgZ(0,"ion-avatar",1),r._UZ(1,"img",20),r.qZA()),2&o){const o=r.oxw().$implicit;r.xp6(1),r.s9C("src",o.avatar,r.LSH)}}function u(o,t){if(1&o){const o=r.EpF();r.TgZ(0,"ion-item",16),r.NdJ("click",function(){const t=r.CHM(o).$implicit;return r.oxw().viewContact(t.person.id,t.person_type)}),r.YNc(1,g,2,0,"ion-avatar",17),r.YNc(2,l,2,1,"ion-avatar",17),r.TgZ(3,"ion-label"),r.TgZ(4,"ion-text"),r._uU(5),r._UZ(6,"br"),r.qZA(),r.TgZ(7,"ion-label",18),r._uU(8),r.qZA(),r.TgZ(9,"p"),r._uU(10),r.qZA(),r.qZA(),r.qZA()}if(2&o){const o=t.$implicit;r.xp6(1),r.Q6J("ngIf",!o.avatar),r.xp6(1),r.Q6J("ngIf",o.avatar),r.xp6(3),r.hij(" ",o.person_name,""),r.xp6(3),r.Oqu(o.cargo),r.xp6(2),r.Oqu(o.person.email_1)}}const m=function(){return["/"]},p=[{path:"",component:(()=>{class o{constructor(o,t,n,i){this.rout=o,this.api=t,this.common=n,this.navCtrl=i,this.api_params={api_token:""},this.contactos=[]}ngOnInit(){this.common.showloader(),this.api.send(this.api_params,"consejo/get").subscribe(o=>this.bindContacts(o),()=>this.onerror())}bindContacts(o){this.common.hideloader(),this.contactos=o}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}viewContact(o,t){this.rout.navigate("contact"==t?["contacto"]:["formando"],{queryParams:{id:o}})}}return o.\u0275fac=function(t){return new(t||o)(r.Y36(e.F0),r.Y36(c.s),r.Y36(Z.v),r.Y36(s.SH))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-consejo"]],decls:43,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[1,"container"],["size","12",1,"ion-text-center"],["src","assets/LogoCAM_Color_horizontal_sin-caja.png",1,"consejo-header"],["size","12"],["href","tel:50222164545","target","_system"],["slot","start","name","call-outline"],["href","mailto:asdbosco@salesianoscam.org","target","_system"],["slot","start","name","mail-outline"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",4,"ngIf"],["color","danger"],["src","assets/contacto-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(o,t){1&o&&(r.TgZ(0,"ion-header",0),r.TgZ(1,"ion-toolbar"),r.TgZ(2,"ion-buttons",1),r._UZ(3,"ion-back-button"),r.qZA(),r.TgZ(4,"ion-avatar",2),r._UZ(5,"img",3),r.qZA(),r.TgZ(6,"ion-buttons",4),r.TgZ(7,"ion-fab-button",5),r._UZ(8,"ion-menu-button"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"ion-content"),r.TgZ(10,"ion-item-divider"),r._uU(11," Consejo Inspectorial "),r.qZA(),r.TgZ(12,"section",6),r.TgZ(13,"div",7),r.TgZ(14,"ion-row"),r.TgZ(15,"ion-col"),r.TgZ(16,"ion-card"),r.TgZ(17,"ion-card-content"),r.TgZ(18,"ion-grid"),r.TgZ(19,"ion-row"),r.TgZ(20,"ion-col",8),r._UZ(21,"img",9),r.qZA(),r.qZA(),r.TgZ(22,"ion-row"),r.TgZ(23,"ion-col",10),r.TgZ(24,"ion-item"),r.TgZ(25,"p"),r._uU(26," 32 Calle 11-01, Las Charcas, Zona 11 01011"),r._UZ(27,"br"),r._uU(28," Guatemala, Guatemala "),r.qZA(),r.qZA(),r.TgZ(29,"a",11),r.TgZ(30,"ion-item"),r._UZ(31,"ion-icon",12),r.TgZ(32,"ion-label"),r.TgZ(33,"ion-text"),r._uU(34,"PBX: (502) 2216-4545"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(35,"a",13),r.TgZ(36,"ion-item"),r._UZ(37,"ion-icon",14),r.TgZ(38,"ion-label"),r._uU(39," asdbosco@salesianoscam.org "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(40,"ion-row"),r.TgZ(41,"ion-col"),r.YNc(42,u,11,5,"ion-item",15),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&o&&(r.Q6J("translucent",!0),r.xp6(4),r.Q6J("routerLink",r.DdM(3,m)),r.xp6(38),r.Q6J("ngForOf",t.contactos))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.BJ,s.YI,e.rH,s.W4,s.fG,s.W2,s.rH,s.Nd,s.wI,s.PM,s.FN,s.jY,s.Ie,s.gu,s.Q$,s.yW,i.sg,i.O5],styles:[""]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[e.Bz.forChild(p)],e.Bz]}),o})(),q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[i.ez,a.u5,s.Pc,A]]}),o})()}}]);