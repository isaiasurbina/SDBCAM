(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[1776],{1776:function(t,n,i){"use strict";i.r(n),i.d(n,{FamiliaPageModule:function(){return h}});var o=i(1116),a=i(1462),s=i(8809),r=i(6393),e=i(8619),c=i(3957),u=i(7354);function m(t,n){1&t&&(e.TgZ(0,"ion-avatar",1),e._UZ(1,"img",10),e.qZA())}function p(t,n){if(1&t&&(e.TgZ(0,"ion-avatar",1),e._UZ(1,"img",11),e.qZA()),2&t){const t=e.oxw().$implicit;e.xp6(1),e.s9C("src",t.picture,e.LSH)}}function l(t,n){if(1&t){const t=e.EpF();e.TgZ(0,"ion-item",8),e.NdJ("click",function(){const n=e.CHM(t).$implicit;return e.oxw().viewGroup(n.id,n.name,n.type)}),e.YNc(1,m,2,0,"ion-avatar",9),e.YNc(2,p,2,1,"ion-avatar",9),e.TgZ(3,"ion-label"),e.TgZ(4,"ion-text"),e._uU(5),e.qZA(),e.qZA(),e.qZA()}if(2&t){const t=n.$implicit;e.xp6(1),e.Q6J("ngIf",null==t.picture),e.xp6(1),e.Q6J("ngIf",t.picture),e.xp6(3),e.Oqu(t.name)}}const g=function(){return["/"]},f=[{path:"",component:(()=>{class t{constructor(t,n,i,o,a){this.rout=t,this.api=n,this.common=i,this.navCtrl=o,this.a_route=a,this.api_params={api_token:""},this.grupos=[]}ngOnInit(){this.common.showloader(),this.api.send(this.api_params,"familia/get").subscribe(t=>this.bindData(t),()=>this.onerror())}bindData(t){this.common.hideloader(),this.grupos=t}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}viewGroup(t,n,i){this.rout.navigate("1"==i?["familia-homes"]:["familia-members"],{queryParams:{id:t,name:n}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.F0),e.Y36(c.s),e.Y36(u.v),e.Y36(s.SH),e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-familia"]],decls:14,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","start",4,"ngIf"],["src","assets/m-icons/casas-icon.png",1,"contact-photo"],[1,"contact-photo",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-buttons",1),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-avatar",2),e._UZ(5,"img",3),e.qZA(),e.TgZ(6,"ion-buttons",4),e.TgZ(7,"ion-fab-button",5),e._UZ(8,"ion-menu-button"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"ion-content"),e.TgZ(10,"ion-item-divider"),e._uU(11," Familia Salesiana "),e.qZA(),e.TgZ(12,"section",6),e.YNc(13,l,6,3,"ion-item",7),e.qZA(),e.qZA()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("routerLink",e.DdM(3,g)),e.xp6(9),e.Q6J("ngForOf",n.grupos))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.BJ,s.YI,r.rH,s.W4,s.fG,s.W2,s.rH,o.sg,s.Ie,o.O5,s.Q$,s.yW],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[o.ez,a.u5,s.Pc,Z]]}),t})()}}]);