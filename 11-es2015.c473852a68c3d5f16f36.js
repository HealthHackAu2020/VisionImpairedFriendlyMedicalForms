(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8Xxu":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var o=i("fXoL");let n=(()=>{class e{constructor(){this.isDarkMode=!1}get(){return this.isDarkMode}set(e){this.isDarkMode=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Qeml:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var o=i("fXoL");let n=(()=>{class e{constructor(){this.fontSize=1.25}get(){return this.fontSize}set(e){this.fontSize=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},g7Db:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var o=i("mrSG"),n=i("iABV"),r=i("fXoL"),s=i("8Xxu"),c=i("TEn/");let a=(()=>{class e{constructor(e,t,i){this.darkModeService=e,this.changeDetectorRef=t,this.modalController=i}showA11yFeatures(e){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:n.a,swipeToClose:!0});return yield e.present()}))}ngOnInit(){this.getDefaults()}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(s.a),r.Jb(r.h),r.Jb(c.N))},e.\u0275cmp=r.Db({type:e,selectors:[["accessibility-button"]],decls:5,vars:1,consts:[[1,"a11y-button"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 50 50","width","30px","height","30px"],["d","M 25 2 C 12.316406 2 2 12.316406 2 25 C 2 37.683594 12.316406 48 25 48 C 37.683594 48 48 37.683594 48 25 C 48 12.316406 37.683594 2 25 2 Z M 25 8 C 26.65625 8 28 9.34375 28 11 C 28 12.65625 26.65625 14 25 14 C 23.34375 14 22 12.65625 22 11 C 22 9.34375 23.34375 8 25 8 Z M 37.523438 18.523438 L 29 21.558594 L 29 29 L 31.535156 39.136719 C 31.769531 40.085938 31.054688 41 30.078125 41 C 29.433594 41 28.863281 40.585938 28.660156 39.976563 L 24.996094 29 L 21.339844 39.976563 C 21.136719 40.585938 20.566406 41 19.921875 41 C 18.945313 41 18.230469 40.085938 18.464844 39.136719 L 21 29 L 21 21.558594 L 12.476563 18.523438 C 11.65625 18.234375 11.21875 17.339844 11.496094 16.515625 C 11.773438 15.679688 12.679688 15.226563 13.515625 15.503906 L 21 18 L 29 18 L 36.484375 15.503906 C 37.320313 15.226563 38.226563 15.679688 38.503906 16.515625 C 38.78125 17.339844 38.34375 18.234375 37.523438 18.523438 Z"],["aria-label","Tap to use Accessibility Features",3,"click"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Xb(),r.Mb(1,"svg",1),r.Kb(2,"path",2),r.Lb(),r.Wb(),r.Mb(3,"ion-button",3),r.Ub("click",(function(e){return t.showA11yFeatures(e)})),r.jc(4," a11y "),r.Lb(),r.Lb()),2&e&&(r.zb(1),r.Ab("fill",t.isDarkMode?"#FFFFFF":"#000000"))},directives:[c.c],styles:["div.a11y-button[_ngcontent-%COMP%]{display:inline-flex}"]}),e})()},h7pw:function(e,t,i){"use strict";i.r(t),i.d(t,"ClinicPageModule",(function(){return h}));var o=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),c=i("fXoL"),a=i("8Xxu"),b=i("Qeml"),l=i("g7Db");const d=[{path:"",component:(()=>{class e{constructor(e,t,i){this.darkModeService=e,this.fontSizeService=t,this.changeDetectorRef=i,this.title="Clinic"}ngOnInit(){this.getDefaults()}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(a.a),c.Jb(b.a),c.Jb(c.h))},e.\u0275cmp=c.Db({type:e,selectors:[["app-clinic"]],decls:19,vars:9,consts:[["slot","start"],["slot","end"],["size","12","size-md","8","offset-md","2"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",0),c.Kb(3,"ion-menu-button"),c.Lb(),c.Mb(4,"ion-title"),c.jc(5),c.Lb(),c.Mb(6,"ion-buttons",1),c.Kb(7,"accessibility-button"),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-content"),c.Mb(9,"ion-grid"),c.Mb(10,"ion-row"),c.Mb(11,"ion-col",2),c.Mb(12,"ion-card"),c.Mb(13,"ion-card-header"),c.Mb(14,"ion-card-title"),c.jc(15,"Watch this space"),c.Lb(),c.Lb(),c.Mb(16,"ion-card-content"),c.Mb(17,"p"),c.jc(18,"We plan to have a list of patient form results here."),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(5),c.lc(" ",t.title," "),c.zb(3),c.hc("font-size",t.fontSize,"em"),c.zb(4),c.hc("font-size",t.fontSize,"em"),c.zb(2),c.hc("font-size",t.fontSize,"em"),c.zb(2),c.hc("font-size",t.fontSize,"em"))},directives:[r.o,r.K,r.d,r.w,r.I,l.a,r.k,r.n,r.C,r.j,r.e,r.g,r.h,r.f],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(d)],s.i]}),e})();var f=i("j1ZV");let h=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[o.b,n.e,r.L,u,n.m,f.a]]}),e})()},iABV:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var o=i("mrSG"),n=i("fXoL"),r=i("8Xxu"),s=i("Qeml");let c=(()=>{class e{constructor(){this.isReaderMode=!1}get(){return this.isReaderMode}set(e){this.isReaderMode=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),a=(()=>{class e{constructor(){}get(){return this.fontFamily}set(e){this.fontFamily=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=i("TEn/");let l=(()=>{class e{constructor(e,t,i,o,n,r){this.darkModeService=e,this.fontSizeService=t,this.readerModeService=i,this.fontFamilyService=o,this.modalController=n,this.changeDetectorRef=r,this.title="Universal Access"}ngOnInit(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.isReaderMode=this.readerModeService.get(),this.fontFamily=this.fontFamilyService.get()}onToggleDarkMode(e){return Object(o.a)(this,void 0,void 0,(function*(){(yield e.detail.checked)?(this.darkModeService.set(!0),document.body.setAttribute("color-theme","dark")):(this.darkModeService.set(!1),document.body.setAttribute("color-theme","light")),console.info(this.isDarkMode)}))}onChangeFontSize(e){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield e.detail.value;console.info(t),this.fontSizeService.set(t)}))}onToggleReaderMode(e){return Object(o.a)(this,void 0,void 0,(function*(){(yield e.detail.checked)?(this.readerModeService.set(!0),document.body.setAttribute("font-readable","true")):(this.readerModeService.set(!1),document.body.setAttribute("font-readable","false")),console.info(this.isReaderMode)}))}onFontFamilyChange(e){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield e.detail.value;this.fontFamilyService.set(t),document.body.setAttribute("font-family",t),console.info(t)}))}closeModal(){this.modalController.dismiss({dismissed:!0})}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.isReaderMode=this.readerModeService.get(),this.fontFamily=this.fontFamilyService.get(),this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(r.a),n.Jb(s.a),n.Jb(c),n.Jb(a),n.Jb(b.N),n.Jb(n.h))},e.\u0275cmp=n.Db({type:e,selectors:[["app-accessbility-features"]],decls:54,vars:11,consts:[["aria-label","Accessibility Features"],["slot","end"],[3,"click"],["slot","icon-only","name","close"],["fixed",""],["size","12","size-md","8","offset-md","2"],[3,"checked","ionChange"],["min","0.75","max","2","snaps","true","step","0.25",3,"value","ionChange"],["slot","start"],[3,"value","ionChange"],[1,"font-label--default"],["slot","end","value",""],[1,"font-label--open-dyslexic"],["slot","end","value","open-dyslexic"],[1,"font-label--andika-new-basic"],["slot","end","value","andika-new-basic"],[1,"font-label--inter"],["slot","end","value","inter"],[1,"font-label--tiresias"],["slot","end","value","tiresias"],["shape","round","expand","block",3,"click"]],template:function(e,t){1&e&&(n.Mb(0,"ion-header"),n.Mb(1,"ion-toolbar"),n.Mb(2,"ion-title",0),n.jc(3),n.Lb(),n.Mb(4,"ion-buttons",1),n.Mb(5,"ion-button",2),n.Ub("click",(function(){return t.closeModal()})),n.Kb(6,"ion-icon",3),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(7,"ion-content"),n.Mb(8,"ion-grid",4),n.Mb(9,"ion-row"),n.Mb(10,"ion-col",5),n.Mb(11,"ion-list"),n.Mb(12,"ion-item"),n.Mb(13,"ion-label"),n.jc(14,"Dark mode"),n.Lb(),n.Mb(15,"ion-toggle",6),n.Ub("ionChange",(function(e){return t.onToggleDarkMode(e)})),n.Lb(),n.Lb(),n.Mb(16,"ion-item"),n.Mb(17,"ion-label"),n.jc(18,"Reader Mode"),n.Lb(),n.Mb(19,"ion-toggle",6),n.Ub("ionChange",(function(e){return t.onToggleReaderMode(e)})),n.Lb(),n.Lb(),n.Mb(20,"ion-item"),n.Mb(21,"ion-range",7),n.Ub("ionChange",(function(e){return t.onChangeFontSize(e)})),n.Mb(22,"ion-label",8),n.jc(23,"A"),n.Lb(),n.Mb(24,"ion-label",1),n.jc(25,"A"),n.Lb(),n.Lb(),n.Lb(),n.Mb(26,"ion-radio-group",9),n.Ub("ionChange",(function(e){return t.onFontFamilyChange(e)})),n.Mb(27,"ion-list-header"),n.Mb(28,"ion-label"),n.jc(29,"Font Family"),n.Lb(),n.Lb(),n.Mb(30,"ion-item"),n.Mb(31,"ion-label",10),n.jc(32,"Default"),n.Lb(),n.Kb(33,"ion-radio",11),n.Lb(),n.Mb(34,"ion-item"),n.Mb(35,"ion-label",12),n.jc(36,"Open Dyslexic"),n.Lb(),n.Kb(37,"ion-radio",13),n.Lb(),n.Mb(38,"ion-item"),n.Mb(39,"ion-label",14),n.jc(40,"Andika"),n.Lb(),n.Kb(41,"ion-radio",15),n.Lb(),n.Mb(42,"ion-item"),n.Mb(43,"ion-label",16),n.jc(44,"Inter"),n.Lb(),n.Kb(45,"ion-radio",17),n.Lb(),n.Mb(46,"ion-item"),n.Mb(47,"ion-label",18),n.jc(48,"Tiresias"),n.Lb(),n.Kb(49,"ion-radio",19),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Mb(50,"ion-footer"),n.Mb(51,"ion-toolbar"),n.Mb(52,"ion-button",20),n.Ub("click",(function(){return t.closeModal()})),n.jc(53," Done "),n.Lb(),n.Lb(),n.Lb()),2&e&&(n.zb(2),n.hc("font-size",t.fontSize,"em"),n.zb(1),n.lc(" ",t.title," "),n.zb(12),n.bc("checked",t.isDarkMode),n.zb(4),n.bc("checked",t.isReaderMode),n.zb(2),n.bc("value",t.fontSize),n.zb(1),n.hc("font-size",12,"px"),n.zb(2),n.hc("font-size",20,"px"),n.zb(2),n.bc("value",t.fontFamily))},directives:[b.o,b.K,b.I,b.d,b.c,b.p,b.k,b.n,b.C,b.j,b.t,b.r,b.s,b.J,b.a,b.A,b.S,b.z,b.u,b.y,b.Q,b.m],styles:[""]}),e})()},j1ZV:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var o=i("TEn/"),n=i("ofXK"),r=i("fXoL");let s=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.L,n.b]]}),e})()}}]);