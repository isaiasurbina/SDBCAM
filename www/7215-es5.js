!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[7215],{9890:function(o,e,i){"use strict";i.r(e),i.d(e,{LecturaPageModule:function(){return b}});var r=i(1116),a=i(1462),c=i(8809),s=i(6393),u=i(8619),l=i(3957),f=i(7354);function Z(n,t){if(1&n&&(u.TgZ(0,"ion-row"),u.TgZ(1,"ion-col"),u.TgZ(2,"ion-card"),u.TgZ(3,"ion-card-content",8),u.TgZ(4,"ion-card-title"),u._uU(5),u.qZA(),u._UZ(6,"div",9),u.TgZ(7,"ion-text"),u.TgZ(8,"a",10),u._uU(9,"Leer"),u.qZA(),u.qZA(),u.TgZ(10,"p"),u.TgZ(11,"small"),u._uU(12),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&n){var o=t.$implicit;u.xp6(5),u.Oqu(o.title),u.xp6(1),u.Q6J("innerHTML",o.description,u.oJD),u.xp6(2),u.s9C("href",o.link,u.LSH),u.xp6(4),u.Oqu(o.pubDate.substring(0,12))}}var p,d,g=function(){return["/"]},m=[{path:"",component:(p=function(){function o(t,e,i,r){n(this,o),this.rout=t,this.api=e,this.common=i,this.navCtrl=r,this.api_params={api_token:""},this.data=[]}var e,i,r;return e=o,(i=[{key:"ngOnInit",value:function(){var n=this;this.common.showloader(),this.api.send(this.api_params,"thedaylyread").subscribe(function(t){return n.bindData(t)},function(){return n.onerror()})}},{key:"bindData",value:function(n){this.common.hideloader(),this.data=n.item}},{key:"onerror",value:function(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}}])&&t(e.prototype,i),r&&t(e,r),o}(),p.\u0275fac=function(n){return new(n||p)(u.Y36(s.F0),u.Y36(l.s),u.Y36(f.v),u.Y36(c.SH))},p.\u0275cmp=u.Xpm({type:p,selectors:[["app-lectura"]],decls:14,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[4,"ngFor","ngForOf"],[1,"new-content"],[1,"new-content",3,"innerHTML"],["target","_system",3,"href"]],template:function(n,t){1&n&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button"),u.qZA(),u.TgZ(4,"ion-avatar",2),u._UZ(5,"img",3),u.qZA(),u.TgZ(6,"ion-buttons",4),u.TgZ(7,"ion-fab-button",5),u._UZ(8,"ion-menu-button"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(9,"ion-content"),u.TgZ(10,"ion-item-divider"),u._uU(11," Lectura del dia "),u.qZA(),u.TgZ(12,"section",6),u.YNc(13,Z,13,4,"ion-row",7),u.qZA(),u.qZA()),2&n&&(u.Q6J("translucent",!0),u.xp6(4),u.Q6J("routerLink",u.DdM(3,g)),u.xp6(9),u.Q6J("ngForOf",t.data))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.BJ,c.YI,s.rH,c.W4,c.fG,c.W2,c.rH,r.sg,c.Nd,c.wI,c.PM,c.FN,c.gZ,c.yW],styles:[".new-content[_ngcontent-%COMP%]{margin-top:10px}"]}),p)}],h=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),t}(),b=((d=function t(){n(this,t)}).\u0275fac=function(n){return new(n||d)},d.\u0275mod=u.oAB({type:d}),d.\u0275inj=u.cJS({imports:[[r.ez,a.u5,c.Pc,h]]}),d)}}])}();