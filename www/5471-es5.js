!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[5471],{5471:function(o,i,a){"use strict";a.r(i),a.d(i,{ColaboradoresPageModule:function(){return A}});var e=a(1116),r=a(1462),c=a(8809),s=a(6393),u=a(8619),l=a(3957),f=a(7354);function h(t,n){if(1&t){var o=u.EpF();u.TgZ(0,"ion-item"),u.TgZ(1,"ion-searchbar",11),u.NdJ("ionInput",function(t){return u.CHM(o),u.oxw().filterContactos(t)}),u.qZA(),u.qZA()}}function p(t,n){1&t&&(u.TgZ(0,"ion-avatar",1),u._UZ(1,"img",14),u.qZA())}function g(t,n){if(1&t&&(u.TgZ(0,"ion-avatar",1),u._UZ(1,"img",15),u.qZA()),2&t){var o=u.oxw().$implicit;u.xp6(1),u.s9C("src",o.avatar,u.LSH)}}function m(t,n){if(1&t){var o=u.EpF();u.TgZ(0,"ion-item",12),u.NdJ("click",function(){var t=u.CHM(o).$implicit;return u.oxw().viewContact(t.id,t.type)}),u.YNc(1,p,2,0,"ion-avatar",13),u.YNc(2,g,2,1,"ion-avatar",13),u.TgZ(3,"ion-label"),u.TgZ(4,"ion-text"),u._uU(5),u.qZA(),u.TgZ(6,"p"),u._uU(7),u.qZA(),u.qZA(),u.qZA()}if(2&t){var i=n.$implicit;u.xp6(1),u.Q6J("ngIf",!i.avatar),u.xp6(1),u.Q6J("ngIf",i.avatar),u.xp6(3),u.Oqu(i.fullname),u.xp6(2),u.Oqu(i.email_1)}}var Z,v,d=function(){return["/"]},b=[{path:"",component:(Z=function(){function o(n,i,a,e){t(this,o),this.rout=n,this.api=i,this.common=a,this.navCtrl=e,this.api_params={api_token:""},this.contactos=[],this.contactosBkp=[],this.searching=!1}var i,a,e;return i=o,(a=[{key:"ngOnInit",value:function(){var t=this;this.common.showloader(),this.api.send(this.api_params,"colaboradores/get").subscribe(function(n){return t.bindContacts(n)},function(){return t.onerror()})}},{key:"ionViewWillEnter",value:function(){}},{key:"bindContacts",value:function(t){this.common.hideloader(),this.contactos=t,this.contactosBkp=t}},{key:"onerror",value:function(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}},{key:"viewContact",value:function(t,n){this.rout.navigate("contact"==n?["contacto"]:["formando"],{queryParams:{id:t}})}},{key:"toggleSearch",value:function(){this.searching=0==this.searching}},{key:"filterContactos",value:function(t){this.contactos=this.contactosBkp;var n=t.srcElement.value;n&&(this.contactos=this.contactos.filter(function(t){if(t.fullname&&n)return t.fullname.toLowerCase().indexOf(n.toLowerCase())>-1||t.email_1.toLowerCase().indexOf(n.toLowerCase())>-1}))}}])&&n(i.prototype,a),e&&n(i,e),o}(),Z.\u0275fac=function(t){return new(t||Z)(u.Y36(s.F0),u.Y36(l.s),u.Y36(f.v),u.Y36(c.SH))},Z.\u0275cmp=u.Xpm({type:Z,selectors:[["app-colaboradores"]],decls:17,vars:5,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","tertiary","size","small"],["name","search-outline",3,"click"],["color","secondary","size","small"],[1,"bg-sdb"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["placeholder","Buscar",3,"ionInput"],[3,"click"],["slot","start",4,"ngIf"],["src","assets/contacto-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(t,n){1&t&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-avatar",2),u._UZ(5,"img",3),u.qZA(),u.TgZ(6,"ion-buttons",4),u.TgZ(7,"ion-fab-button",5),u.TgZ(8,"ion-icon",6),u.NdJ("click",function(){return n.toggleSearch()}),u.qZA(),u.qZA(),u.TgZ(9,"ion-fab-button",7),u._UZ(10,"ion-menu-button"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"ion-content"),u.TgZ(12,"section",8),u.TgZ(13,"ion-item-divider"),u._uU(14," Colaboradores "),u.qZA(),u.YNc(15,h,2,0,"ion-item",9),u.YNc(16,m,8,4,"ion-item",10),u.qZA(),u.qZA()),2&t&&(u.Q6J("translucent",!0),u.xp6(4),u.Q6J("routerLink",u.DdM(4,d)),u.xp6(11),u.Q6J("ngIf",n.searching),u.xp6(1),u.Q6J("ngForOf",n.contactos))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.BJ,c.YI,s.rH,c.W4,c.gu,c.fG,c.W2,c.rH,e.O5,e.sg,c.Ie,c.VI,c.j9,c.Q$,c.yW],styles:[""]}),Z)}],k=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),n}(),A=((v=function n(){t(this,n)}).\u0275fac=function(t){return new(t||v)},v.\u0275mod=u.oAB({type:v}),v.\u0275inj=u.cJS({imports:[[e.ez,r.u5,c.Pc,k]]}),v)}}])}();