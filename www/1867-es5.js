!function(){function o(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function n(o,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[1867],{1867:function(t,i,a){"use strict";a.r(i),a.d(i,{ConsejoPageModule:function(){return T}});var e=a(1116),r=a(1462),c=a(8809),s=a(6393),Z=a(8619),u=a(3957),l=a(7354);function g(o,n){1&o&&(Z.TgZ(0,"ion-avatar",1),Z._UZ(1,"img",19),Z.qZA())}function m(o,n){if(1&o&&(Z.TgZ(0,"ion-avatar",1),Z._UZ(1,"img",20),Z.qZA()),2&o){var t=Z.oxw().$implicit;Z.xp6(1),Z.s9C("src",t.avatar,Z.LSH)}}function f(o,n){if(1&o){var t=Z.EpF();Z.TgZ(0,"ion-item",16),Z.NdJ("click",function(){var o=Z.CHM(t).$implicit;return Z.oxw().viewContact(o.person.id,o.person_type)}),Z.YNc(1,g,2,0,"ion-avatar",17),Z.YNc(2,m,2,1,"ion-avatar",17),Z.TgZ(3,"ion-label"),Z.TgZ(4,"ion-text"),Z._uU(5),Z._UZ(6,"br"),Z.qZA(),Z.TgZ(7,"ion-label",18),Z._uU(8),Z.qZA(),Z.TgZ(9,"p"),Z._uU(10),Z.qZA(),Z.qZA(),Z.qZA()}if(2&o){var i=n.$implicit;Z.xp6(1),Z.Q6J("ngIf",!i.avatar),Z.xp6(1),Z.Q6J("ngIf",i.avatar),Z.xp6(3),Z.hij(" ",i.person_name,""),Z.xp6(3),Z.Oqu(i.cargo),Z.xp6(2),Z.Oqu(i.person.email_1)}}var p,A,q=function(){return["/"]},h=[{path:"",component:(p=function(){function t(n,i,a,e){o(this,t),this.rout=n,this.api=i,this.common=a,this.navCtrl=e,this.api_params={api_token:""},this.contactos=[]}var i,a,e;return i=t,(a=[{key:"ngOnInit",value:function(){var o=this;this.common.showloader(),this.api.send(this.api_params,"consejo/get").subscribe(function(n){return o.bindContacts(n)},function(){return o.onerror()})}},{key:"bindContacts",value:function(o){this.common.hideloader(),this.contactos=o}},{key:"onerror",value:function(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}},{key:"viewContact",value:function(o,n){this.rout.navigate("contact"==n?["contacto"]:["formando"],{queryParams:{id:o}})}}])&&n(i.prototype,a),e&&n(i,e),t}(),p.\u0275fac=function(o){return new(o||p)(Z.Y36(s.F0),Z.Y36(u.s),Z.Y36(l.v),Z.Y36(c.SH))},p.\u0275cmp=Z.Xpm({type:p,selectors:[["app-consejo"]],decls:43,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[1,"container"],["size","12",1,"ion-text-center"],["src","assets/LogoCAM_Color_horizontal_sin-caja.png",1,"consejo-header"],["size","12"],["href","tel:50222164545","target","_system"],["slot","start","name","call-outline"],["href","mailto:asdbosco@salesianoscam.org","target","_system"],["slot","start","name","mail-outline"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",4,"ngIf"],["color","danger"],["src","assets/contacto-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(o,n){1&o&&(Z.TgZ(0,"ion-header",0),Z.TgZ(1,"ion-toolbar"),Z.TgZ(2,"ion-buttons",1),Z._UZ(3,"ion-back-button"),Z.qZA(),Z.TgZ(4,"ion-avatar",2),Z._UZ(5,"img",3),Z.qZA(),Z.TgZ(6,"ion-buttons",4),Z.TgZ(7,"ion-fab-button",5),Z._UZ(8,"ion-menu-button"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"ion-content"),Z.TgZ(10,"ion-item-divider"),Z._uU(11," Consejo Inspectorial "),Z.qZA(),Z.TgZ(12,"section",6),Z.TgZ(13,"div",7),Z.TgZ(14,"ion-row"),Z.TgZ(15,"ion-col"),Z.TgZ(16,"ion-card"),Z.TgZ(17,"ion-card-content"),Z.TgZ(18,"ion-grid"),Z.TgZ(19,"ion-row"),Z.TgZ(20,"ion-col",8),Z._UZ(21,"img",9),Z.qZA(),Z.qZA(),Z.TgZ(22,"ion-row"),Z.TgZ(23,"ion-col",10),Z.TgZ(24,"ion-item"),Z.TgZ(25,"p"),Z._uU(26," 32 Calle 11-01, Las Charcas, Zona 11 01011"),Z._UZ(27,"br"),Z._uU(28," Guatemala, Guatemala "),Z.qZA(),Z.qZA(),Z.TgZ(29,"a",11),Z.TgZ(30,"ion-item"),Z._UZ(31,"ion-icon",12),Z.TgZ(32,"ion-label"),Z.TgZ(33,"ion-text"),Z._uU(34,"PBX: (502) 2216-4545"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(35,"a",13),Z.TgZ(36,"ion-item"),Z._UZ(37,"ion-icon",14),Z.TgZ(38,"ion-label"),Z._uU(39," asdbosco@salesianoscam.org "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(40,"ion-row"),Z.TgZ(41,"ion-col"),Z.YNc(42,f,11,5,"ion-item",15),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&o&&(Z.Q6J("translucent",!0),Z.xp6(4),Z.Q6J("routerLink",Z.DdM(3,q)),Z.xp6(38),Z.Q6J("ngForOf",n.contactos))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.BJ,c.YI,s.rH,c.W4,c.fG,c.W2,c.rH,c.Nd,c.wI,c.PM,c.FN,c.jY,c.Ie,c.gu,c.Q$,c.yW,e.sg,e.O5],styles:[""]}),p)}],d=function(){var n=function n(){o(this,n)};return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),n}(),T=((A=function n(){o(this,n)}).\u0275fac=function(o){return new(o||A)},A.\u0275mod=Z.oAB({type:A}),A.\u0275inj=Z.cJS({imports:[[e.ez,r.u5,c.Pc,d]]}),A)}}])}();