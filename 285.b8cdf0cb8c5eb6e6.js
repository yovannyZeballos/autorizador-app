"use strict";(self.webpackChunkautorizadores_app=self.webpackChunkautorizadores_app||[]).push([[285],{4285:(k,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>b});var l=a(9808),n=a(3681),o=a(5e3);let s=(()=>{class r{constructor(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-auth"]],decls:1,vars:0,template:function(e,c){1&e&&o._UZ(0,"router-outlet")},dependencies:[n.lC],encapsulation:2}),r})();var i=a(3075),m=a(2985),d=a(4376);const u=[{path:"",component:s,children:[{path:"login",component:(()=>{class r{constructor(e,c){this.authService=e,this.fb=c,this.show=!1,this.accounts=[{name:"Arizona",value:"AZ",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Colorado",value:"CO",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Idaho",value:"ID",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Montana",value:"MT",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Nebraska",value:"NE",country:"Mountain Time Zone",child:{state:"Active"}},{name:"New Mexico",value:"NM",country:"Mountain Time Zone",child:{state:"Active"}},{name:"North Dakota",value:"AZ",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Utah",value:"UT",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Wyoming",value:"WY",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Alabama",value:"AL",country:"Central Time Zone",child:{state:"Active"}},{name:"Arkansas",value:"AR",country:"Central Time Zone",child:{state:"Active"}},{name:"Illinois",value:"IL",country:"Central Time Zone",child:{state:"Active"}},{name:"Iowa",value:"IA",country:"Central Time Zone",child:{state:"Active"}},{name:"Kansas",value:"KS",country:"Central Time Zone",child:{state:"Active"}},{name:"Kentucky",value:"KY",country:"Central Time Zone",child:{state:"Active"}},{name:"Louisiana",value:"LA",country:"Central Time Zone",child:{state:"Active"}},{name:"Minnesota",value:"MN",country:"Central Time Zone",child:{state:"Active"}},{name:"Mississippi",value:"MS",country:"Central Time Zone",child:{state:"Active"}},{name:"Missouri",value:"MO",country:"Central Time Zone",child:{state:"Active"}},{name:"Oklahoma",value:"OK",country:"Central Time Zone",child:{state:"Active"}},{name:"South Dakota",value:"SD",country:"Central Time Zone",child:{state:"Active"}},{name:"Texas",value:"TX",country:"Central Time Zone",child:{state:"Active"}},{name:"Tennessee",value:"TN",country:"Central Time Zone",child:{state:"Active"}},{name:"Wisconsin",value:"WI",country:"Central Time Zone",child:{state:"Active"}}],this.loginForm=this.fb.group({email:["spruko@template.com",[i.kI.required,i.kI.email]],password:["spruko",i.kI.required]})}showPassword(){this.show=!this.show}loginGoogle(){this.authService.GoogleAuth()}loginTwitter(){this.authService.signInTwitter()}loginFacebook(){this.authService.signInFacebok()}login(){this.authService.SignIn(this.loginForm.value.email,this.loginForm.value.password)}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(m.e),o.Y36(i.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-login"]],decls:68,vars:0,consts:[[1,"page","relative","error-page3"],[1,"row","no-gutters"],[1,"col-xl-6","d-xl-block","d-none","log-image1"],[1,"cover-image","h-100vh",2,"background-color","#00af89"],[1,"container"],[1,"customlogin-imgcontent"],[1,"mb-3","fs-35","text-white"],[1,"col-xl-6","bg-white","log-image1"],[1,"customlogin-content"],[1,"pt-1","pb-2","ps-2"],["routerLink","/hr-dashboard/dashboard",1,"header-brand"],["src","./assets/images/brand/logo-super-food.png","alt","Dayonelogo",1,"header-brand-img","custom-logo",2,"width","180px"],["src","./assets/images/brand/logo-super-food.png","alt","Dayonelogo",1,"header-brand-img","custom-logo-dark",2,"width","180px"],[1,"p-4","pt-6"],[1,"mb-2"],["id","login","name","login",1,"card-body","pt-3"],[1,"row"],[1,"col-xl-6"],[1,"form-group"],[1,"form-label"],[1,"input-group","mb-4"],[1,"input-group"],[1,"input-group-text"],["aria-hidden","true",1,"fe","fe-mail"],["placeholder","Usuario",1,"form-control"],["id","Password-toggle",1,"input-group"],["href","javascript:;",1,"input-group-text"],["aria-hidden","true",1,"fe","fe-eye-off"],["type","password","placeholder","Password",1,"form-control"],["placeholder","Seleccione Empresa",1,"form-control","custom-select"],["value","1"],["value","2"],["placeholder","Seleccione Local",1,"form-control","custom-select"],[1,"custom-control","custom-checkbox"],["type","checkbox","name","example-checkbox1","value","option1",1,"custom-control-input"],[1,"custom-control-label"],[1,"submit"],["routerLink","/pages/autorizador",1,"btn","btn-primary","btn-block"],["src","./assets/images/brand/logo-marcas.png","alt","Dayonelogo",1,"header-brand-img","custom-logo"],["src","./assets/images/brand/logo-marcas.png","alt","Dayonelogo",1,"header-brand-img","custom-logo-dark"]],template:function(e,c){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),o._uU(7,"SDA - Gestion de Autorizador"),o.qZA()()()()(),o.TgZ(8,"div",7)(9,"div",4)(10,"div",8)(11,"div",9)(12,"a",10),o._UZ(13,"img",11)(14,"img",12),o.qZA()(),o.TgZ(15,"div",13)(16,"h1",14),o._uU(17,"Iniciar sesi\xf3n"),o.qZA()(),o.TgZ(18,"form",15)(19,"div",16)(20,"div",17)(21,"div",18)(22,"label",19),o._uU(23,"Usuario"),o.qZA(),o.TgZ(24,"div",20)(25,"div",21)(26,"span",22),o._UZ(27,"i",23),o.qZA(),o._UZ(28,"input",24),o.qZA()()()(),o.TgZ(29,"div",17)(30,"div",18)(31,"label",19),o._uU(32,"Contrase\xf1a"),o.qZA(),o.TgZ(33,"div",20)(34,"div",25)(35,"a",26),o._UZ(36,"i",27),o.qZA(),o._UZ(37,"input",28),o.qZA()()()()(),o.TgZ(38,"div",18)(39,"label",19),o._uU(40,"Empresa"),o.qZA(),o.TgZ(41,"ng-select",29)(42,"ng-option",30),o._uU(43,"COMPA\xd1\xcdA FOOD RETAIL"),o.qZA(),o.TgZ(44,"ng-option",31),o._uU(45,"SUPERMAYORISTA"),o.qZA()()(),o.TgZ(46,"div",18)(47,"label",19),o._uU(48,"Local"),o.qZA(),o.TgZ(49,"ng-select",32)(50,"ng-option",30),o._uU(51,"PVEA SAN BORJA"),o.qZA(),o.TgZ(52,"ng-option",31),o._uU(53,"PVEA SAN HHIGUERETA"),o.qZA(),o.TgZ(54,"ng-option",31),o._uU(55,"MAKRO COMAS"),o.qZA()()(),o.TgZ(56,"div",18)(57,"label",33),o._UZ(58,"input",34),o.TgZ(59,"span",35),o._uU(60,"Recuerdame"),o.qZA()()(),o.TgZ(61,"div",36)(62,"a",37),o._uU(63,"Login"),o.qZA()()(),o.TgZ(64,"div",9)(65,"a",10),o._UZ(66,"img",38)(67,"img",39),o.qZA()()()()()()())},dependencies:[n.yS,d.w9,d.jq],styles:[".customlogin-content[_ngcontent-%COMP%]{padding-top:1rem}.action-button[_ngcontent-%COMP%]{border:1px solid #ccc;margin:.6rem auto;padding:.2rem;border-radius:.25rem;text-align:center}  .timepicker-overlay{z-index:999999!important}  dropzone>.dropzone.dz-wrapper .dz-message{min-height:240px!important}  .dropzone .dz-preview{max-height:100%}  dropzone>.dropzone.dz-wrapper{max-height:240px!important}  .ng-select .ng-select-container,   input{border:1px solid #ecebf1;outline:none}  .md-drppicker{top:50px!important;left:0!important}  .record-picker li.selected{background-color:#866fe1d9!important}  div.record-picker::-webkit-scrollbar-track{box-shadow:inset 0 0 3px #664dc9!important}  div.record-picker::-webkit-scrollbar-thumb{background:#534991!important}  .dark-mode .md-drppicker{background-color:var(--transparent-body)!important;box-shadow:0 2px 4px #ffffff29,0 2px 8px #25274a!important}  .dark-mode .md-drppicker .calendar-table{border:1px solid #25274a;padding:4px;border-radius:4px;background-color:#25274a}  .dark-mode .md-drppicker td.available.prev,   .dark-mode .md-drppicker th.available.prev,   .dark-mode .md-drppicker td.available.next,   .dark-mode .md-drppicker th.available.next{filter:contrast(0)}  .dark-mode .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{color:#ccc!important}  .dark-mode ngx-dropzone{background:#25274a!important}  .dark-mode .action-button{border:1px solid #32394e}  .dark-mode dropzone>.dropzone.dz-wrapper .dz-message{background-color:#25274a}  .dark-mode .dropzone{background:#25274a;border:2px solid #343657}  .dark-mode .timepicker__body{background-color:#1a1b34!important}  .dark-mode .clock-face{background-color:#0f0f26!important}  .dark-mode .timepicker__actions{background-color:#1a1b34!important}  .dark-mode .period-selector{background-color:#262b5a!important}  .dark-mode .period__btn--default{color:#fff}  .dark-mode .ng-select .ng-select-container,   .dark-mode input{color:#fff!important;background:#25274a;border:none;outline:none}  .dark-mode .color-picker{background-color:#2a2e3f;border:1px solid #32394e}  .dark-mode .color-picker .cmyk-text .box input,   .dark-mode .color-picker .hsla-text .box input,   .dark-mode .color-picker .rgba-text .box input,   .dark-mode .color-picker .value-text .box input{border:1px solid #32394e}  .dark-mode .cp-add-color-button-class{color:#fff}  .dark-mode .color-picker .type-policy{filter:contrast(0)}  .dark-mode .color-picker .hex-text .box input{border:1px solid #32394e}  .dark-mode .iti__country-list{box-shadow:1px 1px 4px #fff3;background-color:#25274a!important}  .dark-mode .search-container input{border-bottom:1px solid #32394e!important}  .dark-mode .country-dropdown{border:1px solid #32394e!important}  .dark-mode .dropdown-menu{background-color:#2a2e3f!important}  .dark-mode .iti__country-name{color:#ccc}  .dark-mode .iti__divider{border-bottom:1px solid #32394e}  .dark-mode div.record-picker,   .dark-mode .record-picker li{border:1px solid #32394e!important}  .dark-mode .record-picker li:hover{background-color:#131433!important}  .dark-mode .btn-default,   .dark-mode .btn-primary{color:#fff}  .dark-mode .record-picker li.selected{background-color:#3366fe!important}  .dark-mode div.record-picker::-webkit-scrollbar-track{background:#32394e!important;border-bottom-right-radius:8px;border-top-right-radius:8px;box-shadow:inset 0 0 3px #3366fe!important}  .dark-mode div.record-picker::-webkit-scrollbar-thumb{background:#3366fe!important;border:thin solid #32394e!important;border-bottom-right-radius:8px;border-top-right-radius:8px}  .dark-mode ngx-material-timepicker-toggle svg{filter:contrast(0)}  .dark-mode pre{color:#eee!important;border-left:3px solid var(--primary-bg-color);background-color:var(--dark-bg)!important}  .rtl .clock-face__container{margin-left:100px!important}  .rtl .custom-select{padding:0 .5rem}  .rtl .country-dropdown{right:0!important}  .rtl .iti__country-list{text-align:right}  .rtl .iti--allow-dropdown .iti__flag-container,   .rtl .iti--separate-dial-code .iti__flag-container{left:auto;right:0}  .rtl .iti--allow-dropdown input,   .rtl .iti--allow-dropdown input[type=text],   .rtl .iti--allow-dropdown input[type=tel],   .rtl .iti--separate-dial-code input,   .rtl .iti--separate-dial-code input[type=text],   .rtl .iti--separate-dial-code input[type=tel]{padding-left:6px;padding-right:56px;margin-right:0;text-align:right}  .rtl .filter:after{filter:contrast(1) brightness(100)}  .transparent-mode .md-drppicker{background-color:var(--transparent-body)!important;box-shadow:0 2px 4px #ffffff29,0 2px 8px #25274a!important}  .transparent-mode .md-drppicker .calendar-table{border:1px solid rgba(255,255,255,.1);padding:4px;border-radius:4px;background-color:var(--transparent-body)}  .transparent-mode .md-drppicker td.available.prev,   .transparent-mode .md-drppicker th.available.prev,   .transparent-mode .md-drppicker td.available.next,   .transparent-mode .md-drppicker th.available.next{filter:contrast(0)}  .transparent-mode .ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{color:#ccc!important}  .transparent-mode ngx-dropzone{background:var(--transparent-body)!important}  .transparent-mode .action-button{border:1px solid rgba(255,255,255,.1)}  .transparent-mode dropzone>.dropzone.dz-wrapper .dz-message{background-color:var(--transparent-body)}  .transparent-mode .dropzone{background:var(--transparent-body);border:2px solid #343657}  .transparent-mode .timepicker__body{background-color:var(--transparent-body)!important}  .transparent-mode .clock-face{background-color:var(--transparent-body)!important}  .transparent-mode .timepicker__actions{background-color:var(--transparent-body)!important}  .transparent-mode .period-selector{background-color:var(--transparent-body)!important}  .transparent-mode .period__btn--default{color:#fff}  .transparent-mode .ng-select .ng-select-container,   .transparent-mode input{color:#fff!important;background:transparent;border:none;outline:none}  .transparent-mode .color-picker{background-color:var(--transparent-body);border:1px solid rgba(255,255,255,.1)}  .transparent-mode .color-picker .cmyk-text .box input,   .transparent-mode .color-picker .hsla-text .box input,   .transparent-mode .color-picker .rgba-text .box input,   .transparent-mode .color-picker .value-text .box input{border:1px solid rgba(255,255,255,.1)}  .transparent-mode .cp-add-color-button-class{color:#fff}  .transparent-mode .color-picker .type-policy{filter:contrast(0)}  .transparent-mode .color-picker .hex-text .box input{border:1px solid rgba(255,255,255,.1)}  .transparent-mode .iti__country-list{box-shadow:1px 1px 4px #fff3;background-color:var(--transparent-body)!important}  .transparent-mode .search-container input{border-bottom:1px solid rgba(255,255,255,.1)!important}  .transparent-mode .country-dropdown{border:1px solid rgba(255,255,255,.1)!important}  .transparent-mode .dropdown-menu{background-color:var(--transparent-body)!important}  .transparent-mode .iti__country-name{color:#ccc}  .transparent-mode .iti__divider{border-bottom:1px solid rgba(255,255,255,.1)}  .transparent-mode div.record-picker,   .transparent-mode .record-picker li{border:1px solid rgba(255,255,255,.1)!important}  .transparent-mode .record-picker li:hover{background-color:var(--transparent-body)!important}  .transparent-mode .btn-default,   .transparent-mode .btn-primary{color:#fff}  .transparent-mode .record-picker li.selected{background-color:var(--transparentprimary-transparentcolor)!important}  .transparent-mode div.record-picker::-webkit-scrollbar-track{background:var(--transparent-body)!important;border-bottom-right-radius:8px;border-top-right-radius:8px;box-shadow:inset 0 0 3px var(--transparentprimary-transparentcolor)!important}  .transparent-mode div.record-picker::-webkit-scrollbar-thumb{background:var(--transparentprimary-transparentcolor)!important;border:thin solid #32394e!important;border-bottom-right-radius:8px;border-top-right-radius:8px}  .transparent-mode ngx-material-timepicker-toggle svg{filter:contrast(0)}  .transparent-mode pre{color:#eee!important;border-left:3px solid var(--primary-bg-color);background-color:var(--transparent-body)!important}  body:is(.light-mode) app-advanced-elements .nav-tabs .nav-link:hover:not(.disabled){background-color:var(--primary-bg-color)}"]}),r})()}]}];let g=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[n.Bz.forChild(u),n.Bz]}),r})(),b=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[l.ez,g,d.A0]}),r})()}}]);