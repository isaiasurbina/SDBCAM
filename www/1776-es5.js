!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[1776],{1776:function(i,o,a){"use strict";a.r(o),a.d(o,{FamiliaPageModule:function(){return A}});var r=a(1116),e=a(1462),c=a(8809),s=a(6393),u=a(8619),f=a(3957),l=a(7354);function m(n,t){1&n&&(u.TgZ(0,"ion-avatar",1),u._UZ(1,"img",10),u.qZA())}function p(n,t){if(1&n&&(u.TgZ(0,"ion-avatar",1),u._UZ(1,"img",11),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(1),u.s9C("src",i.picture,u.LSH)}}function g(n,t){if(1&n){var i=u.EpF();u.TgZ(0,"ion-item",8),u.NdJ("click",function(){var n=u.CHM(i).$implicit;return u.oxw().viewGroup(n.id,n.name,n.type)}),u.YNc(1,m,2,0,"ion-avatar",9),u.YNc(2,p,2,1,"ion-avatar",9),u.TgZ(3,"ion-label"),u.TgZ(4,"ion-text"),u._uU(5),u.qZA(),u.qZA(),u.qZA()}if(2&n){var o=t.$implicit;u.xp6(1),u.Q6J("ngIf",null==o.picture),u.xp6(1),u.Q6J("ngIf",o.picture),u.xp6(3),u.Oqu(o.name)}}var h,Z,v=function(){return["/"]},d=[{path:"",component:(h=function(){function i(t,o,a,r,e){n(this,i),this.rout=t,this.api=o,this.common=a,this.navCtrl=r,this.a_route=e,this.api_params={api_token:""},this.grupos=[]}var o,a,r;return o=i,(a=[{key:"ngOnInit",value:function(){var n=this;this.common.showloader(),this.api.send(this.api_params,"familia/get").subscribe(function(t){return n.bindData(t)},function(){return n.onerror()})}},{key:"bindData",value:function(n){this.common.hideloader(),this.grupos=n}},{key:"onerror",value:function(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}},{key:"viewGroup",value:function(n,t,i){this.rout.navigate("1"==i?["familia-homes"]:["familia-members"],{queryParams:{id:n,name:t}})}}])&&t(o.prototype,a),r&&t(o,r),i}(),h.\u0275fac=function(n){return new(n||h)(u.Y36(s.F0),u.Y36(f.s),u.Y36(l.v),u.Y36(c.SH),u.Y36(s.gz))},h.\u0275cmp=u.Xpm({type:h,selectors:[["app-familia"]],decls:14,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",4,"ngIf"],["src","assets/m-icons/casas-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(n,t){1&n&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-avatar",2),u._UZ(5,"img",3),u.qZA(),u.TgZ(6,"ion-buttons",4),u.TgZ(7,"ion-fab-button",5),u._UZ(8,"ion-menu-button"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"ion-content"),u.TgZ(10,"ion-item-divider"),u._uU(11," Familia Salesiana "),u.qZA(),u.TgZ(12,"section",6),u.YNc(13,g,6,3,"ion-item",7),u.qZA(),u.qZA()),2&n&&(u.Q6J("translucent",!0),u.xp6(4),u.Q6J("routerLink",u.DdM(3,v)),u.xp6(9),u.Q6J("ngForOf",t.grupos))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.BJ,c.YI,s.rH,c.W4,c.fG,c.W2,c.rH,r.sg,c.Ie,r.O5,c.Q$,c.yW],styles:[""]}),h)}],b=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),t}(),A=((Z=function t(){n(this,t)}).\u0275fac=function(n){return new(n||Z)},Z.\u0275mod=u.oAB({type:Z}),Z.\u0275inj=u.cJS({imports:[[r.ez,e.u5,c.Pc,b]]}),Z)}}])}();