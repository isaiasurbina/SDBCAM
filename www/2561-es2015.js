(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[2561],{2561:function(n,t,o){"use strict";o.r(t),o.d(t,{MesPageModule:function(){return p}});var i=o(1116),e=o(1462),r=o(8809),s=o(6393),a=o(8619),c=o(3957),u=o(7354);function Z(n,t){if(1&n){const n=a.EpF();a.TgZ(0,"ion-row"),a.TgZ(1,"ion-col",16),a.TgZ(2,"ion-item",17),a.NdJ("click",function(){const t=a.CHM(n).$implicit;return a.oxw(2).viewActivity(t.id)}),a._UZ(3,"ion-icon",18),a.TgZ(4,"ion-label"),a._uU(5),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=t.$implicit;a.xp6(5),a.Oqu(n.title)}}function l(n,t){if(1&n&&(a.TgZ(0,"ion-grid"),a.TgZ(1,"ion-row"),a.TgZ(2,"ion-col"),a.TgZ(3,"ion-button",15),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.YNc(5,Z,6,1,"ion-row",14),a.qZA()),2&n){const n=t.$implicit;a.xp6(4),a.Oqu(n.key),a.xp6(1),a.Q6J("ngForOf",n.value)}}const d=function(){return["/"]},g=[{path:"",component:(()=>{class n{constructor(n,t,o,i,e){this.rout=n,this.api=t,this.common=o,this.navCtrl=i,this.a_route=e,this.api_params={api_token:"",mes:""},this.data=[]}ngOnInit(){this.common.showloader(),this.a_route.queryParams.subscribe(n=>{this.api_params.mes=n.mes,this.api.send(this.api_params,"actividades/mes").subscribe(n=>this.bindData(n),()=>this.onerror())})}bindData(n){this.common.hideloader(),this.data=n}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}viewActivity(n){this.rout.navigate(["actividad"],{queryParams:{id:n}})}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(s.F0),a.Y36(c.s),a.Y36(u.v),a.Y36(r.SH),a.Y36(s.gz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-mes"]],decls:25,vars:6,consts:[[3,"translucent"],["slot","start"],["slot","start",1,"home-button-container",3,"routerLink"],["src","assets/icon/favicon.png",1,"home-button"],["slot","end"],["color","secondary","size","small"],[1,"bg-sdb"],[1,"ion-text-center"],[1,"ion-align-items-center"],["size","3",1,"ion-text-center","ion-align-self-center"],["size","6",1,"ion-text-center","ion-align-self-center"],["src","assets/m-icons/Agenda-icono.png",1,"consejo-header"],["size","12"],[1,"ion-text-center","ion-padding-top","ion-padding-bottom"],[4,"ngFor","ngForOf"],["color","primary","expand","block","shape","round"],["size","12",1,"ion-text-center"],[3,"click"],["name","calendar-clear-outline","slot","start"]],template:function(n,t){1&n&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-back-button"),a.qZA(),a.TgZ(4,"ion-avatar",2),a._UZ(5,"img",3),a.qZA(),a.TgZ(6,"ion-buttons",4),a.TgZ(7,"ion-fab-button",5),a._UZ(8,"ion-menu-button"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-content"),a.TgZ(10,"section",6),a.TgZ(11,"ion-card"),a.TgZ(12,"ion-card-header",7),a.TgZ(13,"ion-grid"),a.TgZ(14,"ion-row",8),a._UZ(15,"ion-col",9),a.TgZ(16,"ion-col",10),a._UZ(17,"img",11),a.qZA(),a.qZA(),a.TgZ(18,"ion-row"),a.TgZ(19,"ion-col",12),a.TgZ(20,"ion-label",13),a._uU(21," Actividades de la Inspectoria "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"ion-card-content"),a.YNc(23,l,6,2,"ion-grid",14),a.ALo(24,"keyvalue"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.Q6J("translucent",!0),a.xp6(4),a.Q6J("routerLink",a.DdM(5,d)),a.xp6(19),a.Q6J("ngForOf",a.lcZ(24,3,t.data)))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.BJ,r.YI,s.rH,r.W4,r.fG,r.W2,r.PM,r.Zi,r.jY,r.Nd,r.wI,r.Q$,r.FN,i.sg,r.YG,r.Ie,r.gu],pipes:[i.Nd],styles:[""]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.ez,e.u5,r.Pc,m]]}),n})()}}]);