(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[4764],{4764:function(o,n,e){"use strict";e.r(n),e.d(n,{LoginPageModule:function(){return p}});var i=e(1116),t=e(1462),r=e(8809),s=e(6393),a=e(8619),g=e(7004),l=e(7354);const c=function(){return["/forgot-password"]},u=[{path:"",component:(()=>{class o{constructor(o,n,e,i){this.rout=o,this.loginserv=n,this.common=e,this.navCtrl=i,this.login={email:"",password:""},this.deviceinfo={uuid:"",platform:"",token:""},localStorage.setItem("api_token","0")}ngOnInit(){}onerror(){this.common.hideloader(),this.common.toasting("Ha ocurrido un error, favor intenta m\xe1s tarde.")}loginStart(){""!=this.login.email&&""!=this.login.pass?(this.common.showloader(),this.login.deviceinfo=JSON.stringify(this.deviceinfo),this.loginserv.send(this.login).subscribe(o=>this.loginengine(o),()=>this.onerror())):this.common.toasting("Debes ingresar tus credenciales para poder continuar.",4e3)}loginengine(o){this.common.hideloader(),1==o.status?(localStorage.setItem("api_token",o.user.api_token),localStorage.setItem("uid",o.user.id),localStorage.setItem("name",o.user.name),localStorage.setItem("email",o.user.email),this.rout.navigate(["/"])):this.common.toasting(o.sms,4e3)}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(s.F0),a.Y36(g.r),a.Y36(l.v),a.Y36(r.SH))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-login"]],decls:29,vars:4,consts:[[1,"bg-sdb","ion-padding-top"],[1,"ion-justify-content-center"],["size","4",1,"ion-margin-top"],["src","assets/LogoSDBCAM@4x.png",1,"app-login-logo","ion-margin-top"],["size","10",1,"ion-margin-bottom"],["lines","full"],["position","floating"],["type","text","name","email","required","",3,"ngModel","ngModelChange"],["type","password","name","password","required","",3,"ngModel","ngModelChange"],["type","submit","color","primary","expand","block",3,"click"],[1,"ion-text-center"],[1,"small-text",3,"routerLink"],["size","6",1,"ion-margin-top"],["src","assets/LogoCAM_Color_horizontal_sin-caja.png",1,"app-login-logo","ion-margin-top"]],template:function(o,n){1&o&&(a.TgZ(0,"ion-content"),a.TgZ(1,"section",0),a.TgZ(2,"ion-row",1),a.TgZ(3,"ion-col",2),a._UZ(4,"img",3),a.qZA(),a.qZA(),a.TgZ(5,"ion-row",1),a.TgZ(6,"ion-col",4),a.TgZ(7,"ion-card"),a.TgZ(8,"ion-card-content"),a.TgZ(9,"form"),a.TgZ(10,"ion-item",5),a.TgZ(11,"ion-label",6),a._uU(12,"Correo electr\xf3nico"),a.qZA(),a.TgZ(13,"ion-input",7),a.NdJ("ngModelChange",function(o){return n.login.email=o}),a.qZA(),a.qZA(),a.TgZ(14,"ion-item",5),a.TgZ(15,"ion-label",6),a._uU(16,"Clave"),a.qZA(),a.TgZ(17,"ion-input",8),a.NdJ("ngModelChange",function(o){return n.login.password=o}),a.qZA(),a.qZA(),a.TgZ(18,"ion-row"),a.TgZ(19,"ion-col"),a.TgZ(20,"ion-button",9),a.NdJ("click",function(){return n.loginStart()}),a._uU(21,"Ingresar"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"ion-row"),a.TgZ(23,"ion-col",10),a.TgZ(24,"a",11),a._uU(25,"Recordar contrase\xf1a"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"ion-row",1),a.TgZ(27,"ion-col",12),a._UZ(28,"img",13),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(13),a.Q6J("ngModel",n.login.email),a.xp6(4),a.Q6J("ngModel",n.login.password),a.xp6(7),a.Q6J("routerLink",a.DdM(3,c)))},directives:[r.W2,r.Nd,r.wI,r.PM,r.FN,t._Y,t.JL,t.F,r.Ie,r.Q$,r.pK,r.j9,t.Q7,t.JJ,t.On,r.YG,s.yS,r.YI],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[i.ez,t.u5,r.Pc,m]]}),o})()}}]);