(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[8165],{8165:function(o,n,i){"use strict";i.r(n),i.d(n,{ForgotPasswordPageModule:function(){return u}});var e=i(1116),t=i(1462),r=i(8809),s=i(6393),a=i(8619),c=i(3957),l=i(7354);const g=[{path:"",component:(()=>{class o{constructor(o,n,i){this.rout=o,this.api=n,this.common=i,this.params={email:""}}ngOnInit(){}resetPassword(){""!=this.params.email?(this.common.showloader(),this.api.sendCustom(this.params,"https://misieri.kyoskio.com/api/user/forgot").subscribe(o=>this.bindResponse(o),()=>this.onerror())):this.common.toasting("El correo electr\xf3nico es requerido.")}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}bindResponse(o){this.common.hideloader(),o?this.common.toasting(o.sms,5e3):this.common.toasting("Ha ocurrido un error, favor intenta mas tarde.",2e3)}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(s.F0),a.Y36(c.s),a.Y36(l.v))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-forgot-password"]],decls:29,vars:1,consts:[["slot","start"],[1,"bg-sdb","ion-padding-top"],[1,"ion-justify-content-center"],["size","4",1,"ion-margin-top"],["src","assets/LogoSDBCAM@4x.png",1,"app-login-logo","ion-margin-top"],["size","10",1,"ion-margin-bottom"],["lines","full"],["position","floating"],["type","email","name","email","id","email","required","",3,"ngModel","ngModelChange"],["type","submit","color","danger","expand","block",3,"click"],["size","6",1,"ion-margin-top"],["src","assets/LogoCAM_Color_horizontal_sin-caja.png",1,"app-login-logo","ion-margin-top"]],template:function(o,n){1&o&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-back-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5,"Olvido su clave?"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.TgZ(7,"section",1),a.TgZ(8,"ion-row",2),a.TgZ(9,"ion-col",3),a._UZ(10,"img",4),a.qZA(),a.qZA(),a.TgZ(11,"ion-row",2),a.TgZ(12,"ion-col",5),a.TgZ(13,"ion-card"),a.TgZ(14,"ion-card-content"),a.TgZ(15,"form"),a.TgZ(16,"small"),a._uU(17," Por favor ingresar su correo electronico que utiliza para ingresar a esta aplicaci\xf3n. "),a.qZA(),a.TgZ(18,"ion-item",6),a.TgZ(19,"ion-label",7),a._uU(20,"Correo electr\xf3nico"),a.qZA(),a.TgZ(21,"ion-input",8),a.NdJ("ngModelChange",function(o){return n.params.email=o}),a.qZA(),a.qZA(),a.TgZ(22,"ion-row"),a.TgZ(23,"ion-col"),a.TgZ(24,"ion-button",9),a.NdJ("click",function(){return n.resetPassword()}),a._uU(25,"Reestablecer clave"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"ion-row",2),a.TgZ(27,"ion-col",10),a._UZ(28,"img",11),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(21),a.Q6J("ngModel",n.params.email))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.Nd,r.wI,r.PM,r.FN,t._Y,t.JL,t.F,r.Ie,r.Q$,r.pK,r.j9,t.Q7,t.JJ,t.On,r.YG],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),o})(),u=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[e.ez,t.u5,r.Pc,m]]}),o})()}}]);