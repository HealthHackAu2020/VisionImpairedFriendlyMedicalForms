(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4fRq":function(e,o){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var t=new Uint8Array(16);e.exports=function(){return i(t),t}}else{var n=new Array(16);e.exports=function(){for(var e,o=0;o<16;o++)0==(3&o)&&(e=4294967296*Math.random()),n[o]=e>>>((3&o)<<3)&255;return n}}},I2ZF:function(e,o){for(var i=[],t=0;t<256;++t)i[t]=(t+256).toString(16).substr(1);e.exports=function(e,o){var t=o||0;return[i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]]].join("")}},"KtM+":function(e,o,i){"use strict";i.r(o),i.d(o,"NewPatientRegistrationPageModule",(function(){return g}));var t=i("ofXK"),n=i("3Pt+"),b=i("TEn/"),r=i("tyNb"),a=i("mrSG"),c=i("oxX3"),l=i("xk4V"),m=i.n(l),s=i("fXoL"),f=i("8Xxu"),d=i("Qeml"),z=i("g7Db");let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s.Db({type:e,selectors:[["hidden-submit-button"]],decls:3,vars:0,consts:[[1,"hidden"],["type","submit"]],template:function(e,o){1&e&&(s.Mb(0,"div",0),s.Mb(1,"button",1),s.ic(2," Submit "),s.Lb(),s.Lb())},styles:[".hidden[_ngcontent-%COMP%]{display:none}"]}),e})();var p=i("5cRx");const M=[{path:"",component:(()=>{class e{constructor(e,o,i,t){this.darkModeService=e,this.fontSizeService=o,this.changeDetectorRef=i,this.formBuilder=t,this.title="New Patient Registration",this.profileForm=this.formBuilder.group({title:new n.b(""),surname:new n.b(""),givenNames:new n.b(""),dob:new n.b(""),gender:new n.b(""),maritalStatus:new n.b(""),occupation:new n.b("")}),this.medicareCardForm=this.formBuilder.group({cardNumber:new n.b("",[c.a.isRequired,c.a.isValidMedicareCardNumber]),cardRef:new n.b("",[c.a.isRequired,c.a.isWholeNumber,c.a.isGreaterThan(0)]),expiryDate:new n.b("",[c.a.isRequired])}),this.healthcareCardForm=this.formBuilder.group({cardNumber:new n.b(""),type:new n.b(""),expiryDate:new n.b("")}),this.contactDetailsForm=this.formBuilder.group({residentialAddress:new n.b(""),residentialPostcode:new n.b(""),postalAddress:new n.b(""),postalPostcode:new n.b(""),mobile:new n.b(""),phone:new n.b(""),work:new n.b(""),email:new n.b("")}),this.nextOfKinForm=this.formBuilder.group({name:new n.b(""),relationship:new n.b(""),mobile:new n.b(""),phone:new n.b(""),work:new n.b("")}),this.emergencyContactForm=this.formBuilder.group({name:new n.b(""),relationship:new n.b(""),mobile:new n.b(""),phone:new n.b(""),work:new n.b("")}),this.advancedHealthCareDirectiveForm=this.formBuilder.group({hasAdvancedHealthCareDirective:new n.b("")})}ngOnInit(){this.getDefaults()}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.changeDetectorRef.detectChanges()}onNext(){this.buildForm()}buildForm(){return Object(a.a)(this,void 0,void 0,(function*(){let e={id:m()(),formType:"new-patient",patient:yield this.profileForm.value,medicare:yield this.medicareCardForm.value,healthcareCard:yield this.healthcareCardForm.value,contact:yield this.contactDetailsForm.value,nextOfKin:yield this.nextOfKinForm.value,emergencyContact:yield this.emergencyContactForm.value,hasAdvancedHhealthDirective:yield this.advancedHealthCareDirectiveForm.value};console.dir(e),console.log(JSON.stringify(e))}))}clearForms(){this.profileForm.reset(),this.medicareCardForm.reset(),this.healthcareCardForm.reset(),this.contactDetailsForm.reset(),this.nextOfKinForm.reset(),this.emergencyContactForm.reset(),this.advancedHealthCareDirectiveForm.reset()}}return e.\u0275fac=function(o){return new(o||e)(s.Jb(f.a),s.Jb(d.a),s.Jb(s.h),s.Jb(n.a))},e.\u0275cmp=s.Db({type:e,selectors:[["app-new-patient-registration"]],decls:256,vars:158,consts:[["slot","start"],["slot","end"],["size","12","size-md","8","offset-md","2"],[3,"formGroup","ngSubmit"],["position","stacked"],["placeholder","Select a title","interface","action-sheet","formControlName","title"],["value","Ms"],["value","Miss"],["value","Mrs"],["value","Mr"],["value","Dr"],["value","Rev"],["placeholder","Surname","type","text","formControlName","surname"],["placeholder","Given names","type","text","formControlName","givenNames"],["placeholder","Date of birth","type","date","formControlName","dob"],["formControlName","gender"],["fixed",""],["size","12","size-md","6"],["slot","end","value","male"],["slot","end","value","female"],["placeholder","Select an option","interface","action-sheet","formControlName","maritalStatus"],["value","Single"],["value","Married"],["value","Defacto"],["value","Separated"],["value","Divorced"],["value","Widowed"],["placeholder","Occupation","type","text","formControlName","occupation"],[3,"formGroup"],["size","12","size-md","7"],["position","stacked","aria-label","Medicare Card number"],["placeholder","XXXXXXXXX","type","text","pattern","[0-9]*","maxlength","10","formControlName","cardNumber"],[3,"control","fieldName"],["size","12","size-md","5"],["position","stacked","aria-label","Medicare Reference number"],["placeholder","X","type","text","pattern","[0-9]*","maxlength","1","formControlName","cardRef"],["size","12"],["placeholder","Expiry date","type","date","displayFormat","MM/YYYY","min","2020","max","2050","formControlName","expiryDate"],["placeholder","xxxx","type","text","formControlName","cardNumber"],["placeholder","","type","text","formControlName","type"],["placeholder","Expiry date","type","date","formControlName","expiryDate"],["placeholder","Home Address","type","text","formControlName","residentialAddress"],["placeholder","Postcode","type","text","pattern","[0-9]*","formControlName","residentialPostcode"],["placeholder","Postal Address","type","text","formControlName","postalAddress"],["placeholder","Postcode","type","text","pattern","[0-9]*","formControlName","postalPostcode"],["placeholder","Telephone number","type","tel","formControlName","phone"],["placeholder","Work number","type","tel","formControlName","work"],["placeholder","Mobile number","type","tel","formControlName","mobile"],["placeholder","Email","type","email","formControlName","email"],["placeholder","Name","type","text","formControlName","name"],["placeholder","Relationship","type","text","formControlName","relationship"],["placeholder","Telephone number","type","number","formControlName","phone"],["formControlName","hasAdvancedHealthCareDirective"],["size","6"],["slot","end","value","yes","checked",""],["slot","end","value","no"],["size","12","size-md","8","offset-md","2",1,"footer-buttons"],["color","primary","type","submit",3,"click"],["slot","end","name","arrow-forward-outline"],["color","primary","fill","outline","type","button",1,"hidden",3,"click"],["slot","start","name","arrow-back-outline"]],template:function(e,o){1&e&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Kb(3,"ion-menu-button"),s.Lb(),s.Mb(4,"ion-title"),s.ic(5),s.Lb(),s.Mb(6,"ion-buttons",1),s.Kb(7,"accessibility-button"),s.Lb(),s.Lb(),s.Lb(),s.Mb(8,"ion-content"),s.Mb(9,"ion-grid"),s.Mb(10,"ion-row"),s.Mb(11,"ion-col",2),s.Mb(12,"form",3),s.Ub("ngSubmit",(function(){return o.onNext()})),s.Mb(13,"ion-card"),s.Mb(14,"ion-card-header"),s.Mb(15,"ion-card-title"),s.ic(16,"Section A: Personal details"),s.Lb(),s.Lb(),s.Mb(17,"ion-card-content"),s.Mb(18,"ion-item"),s.Mb(19,"ion-label",4),s.ic(20,"Title"),s.Lb(),s.Mb(21,"ion-select",5),s.Mb(22,"ion-select-option",6),s.ic(23,"Ms"),s.Lb(),s.Mb(24,"ion-select-option",7),s.ic(25,"Miss"),s.Lb(),s.Mb(26,"ion-select-option",8),s.ic(27,"Mrs"),s.Lb(),s.Mb(28,"ion-select-option",9),s.ic(29,"Mr"),s.Lb(),s.Mb(30,"ion-select-option",10),s.ic(31,"Dr"),s.Lb(),s.Mb(32,"ion-select-option",11),s.ic(33,"Rev"),s.Lb(),s.Lb(),s.Lb(),s.Mb(34,"ion-item"),s.Mb(35,"ion-label",4),s.ic(36,"Surname"),s.Lb(),s.Kb(37,"ion-input",12),s.Lb(),s.Mb(38,"ion-item"),s.Mb(39,"ion-label",4),s.ic(40,"Given names"),s.Lb(),s.Kb(41,"ion-input",13),s.Lb(),s.Mb(42,"ion-item"),s.Mb(43,"ion-label",4),s.ic(44,"Date of birth"),s.Lb(),s.Kb(45,"ion-input",14),s.Lb(),s.Mb(46,"ion-radio-group",15),s.Mb(47,"ion-list-header"),s.ic(48,"Gender"),s.Lb(),s.Mb(49,"ion-grid",16),s.Mb(50,"ion-row"),s.Mb(51,"ion-col",17),s.Mb(52,"ion-item"),s.Mb(53,"ion-label"),s.ic(54,"Male"),s.Lb(),s.Kb(55,"ion-radio",18),s.Lb(),s.Lb(),s.Mb(56,"ion-col",17),s.Mb(57,"ion-item"),s.Mb(58,"ion-label"),s.ic(59,"Female"),s.Lb(),s.Kb(60,"ion-radio",19),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(61,"ion-item"),s.Mb(62,"ion-label",4),s.ic(63,"Marital status"),s.Lb(),s.Mb(64,"ion-select",20),s.Mb(65,"ion-select-option",21),s.ic(66,"Single"),s.Lb(),s.Mb(67,"ion-select-option",22),s.ic(68,"Married"),s.Lb(),s.Mb(69,"ion-select-option",23),s.ic(70,"Defacto"),s.Lb(),s.Mb(71,"ion-select-option",24),s.ic(72,"Separated"),s.Lb(),s.Mb(73,"ion-select-option",25),s.ic(74,"Divorced"),s.Lb(),s.Mb(75,"ion-select-option",26),s.ic(76,"Widowed"),s.Lb(),s.Lb(),s.Lb(),s.Mb(77,"ion-item"),s.Mb(78,"ion-label",4),s.ic(79,"Occupation"),s.Lb(),s.Kb(80,"ion-input",27),s.Lb(),s.Lb(),s.Lb(),s.Kb(81,"hidden-submit-button"),s.Lb(),s.Mb(82,"form",28),s.Mb(83,"ion-card"),s.Mb(84,"ion-card-header"),s.Mb(85,"ion-card-title"),s.ic(86,"Medicare card"),s.Lb(),s.Lb(),s.Mb(87,"ion-card-content"),s.Mb(88,"ion-grid"),s.Mb(89,"ion-row"),s.Mb(90,"ion-col",29),s.Mb(91,"ion-item"),s.Mb(92,"ion-label",30),s.ic(93,"Card number"),s.Lb(),s.Kb(94,"ion-input",31),s.Lb(),s.Kb(95,"validation-error",32),s.Lb(),s.Mb(96,"ion-col",33),s.Mb(97,"ion-item"),s.Mb(98,"ion-label",34),s.ic(99,"Reference number"),s.Lb(),s.Kb(100,"ion-input",35),s.Lb(),s.Kb(101,"validation-error",32),s.Lb(),s.Mb(102,"ion-col",36),s.Mb(103,"ion-item"),s.Mb(104,"ion-label",4),s.ic(105,"Expiry date"),s.Lb(),s.Kb(106,"ion-datetime",37),s.Lb(),s.Kb(107,"validation-error",32),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(108,"hidden-submit-button"),s.Lb(),s.Mb(109,"form",28),s.Mb(110,"ion-card"),s.Mb(111,"ion-card-header"),s.Mb(112,"ion-card-title"),s.ic(113,"Pension, Health Care Card, or Veterans Affairs number (if applicable)"),s.Lb(),s.Lb(),s.Mb(114,"ion-card-content"),s.Mb(115,"ion-grid"),s.Mb(116,"ion-row"),s.Mb(117,"ion-col",36),s.Mb(118,"ion-item"),s.Mb(119,"ion-label",4),s.ic(120,"Card Number"),s.Lb(),s.Kb(121,"ion-input",38),s.Lb(),s.Lb(),s.Mb(122,"ion-col",36),s.Mb(123,"ion-item"),s.Mb(124,"ion-label",4),s.ic(125,"Type of Veterans Affairs card"),s.Lb(),s.Kb(126,"ion-input",39),s.Lb(),s.Lb(),s.Mb(127,"ion-col",36),s.Mb(128,"ion-item"),s.Mb(129,"ion-label",4),s.ic(130,"Expiry date"),s.Lb(),s.Kb(131,"ion-input",40),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(132,"hidden-submit-button"),s.Lb(),s.Mb(133,"form",28),s.Mb(134,"ion-card"),s.Mb(135,"ion-card-header"),s.Mb(136,"ion-card-title"),s.ic(137,"Contact Details"),s.Lb(),s.Lb(),s.Mb(138,"ion-card-content"),s.Mb(139,"ion-item"),s.Mb(140,"ion-label",4),s.ic(141,"Home Address"),s.Lb(),s.Kb(142,"ion-input",41),s.Lb(),s.Mb(143,"ion-item"),s.Mb(144,"ion-label",4),s.ic(145,"Postcode"),s.Lb(),s.Kb(146,"ion-input",42),s.Lb(),s.Mb(147,"ion-item"),s.Mb(148,"ion-label",4),s.ic(149,"Postal Address"),s.Lb(),s.Kb(150,"ion-input",43),s.Lb(),s.Mb(151,"ion-item"),s.Mb(152,"ion-label",4),s.ic(153,"Postcode"),s.Lb(),s.Kb(154,"ion-input",44),s.Lb(),s.Mb(155,"ion-item"),s.Mb(156,"ion-label",4),s.ic(157,"Telephone number"),s.Lb(),s.Kb(158,"ion-input",45),s.Lb(),s.Mb(159,"ion-item"),s.Mb(160,"ion-label",4),s.ic(161,"Work number"),s.Lb(),s.Kb(162,"ion-input",46),s.Lb(),s.Mb(163,"ion-item"),s.Mb(164,"ion-label",4),s.ic(165,"Mobile number"),s.Lb(),s.Kb(166,"ion-input",47),s.Lb(),s.Mb(167,"ion-item"),s.Mb(168,"ion-label",4),s.ic(169,"Email"),s.Lb(),s.Kb(170,"ion-input",48),s.Lb(),s.Lb(),s.Lb(),s.Kb(171,"hidden-submit-button"),s.Lb(),s.Mb(172,"form",28),s.Mb(173,"ion-card"),s.Mb(174,"ion-card-header"),s.Mb(175,"ion-card-title"),s.ic(176,"Next of Kin"),s.Lb(),s.Lb(),s.Mb(177,"ion-card-content"),s.Mb(178,"ion-item"),s.Mb(179,"ion-label",4),s.ic(180,"Name "),s.Lb(),s.Kb(181,"ion-input",49),s.Lb(),s.Mb(182,"ion-item"),s.Mb(183,"ion-label",4),s.ic(184,"Relationship to you "),s.Lb(),s.Kb(185,"ion-input",50),s.Lb(),s.Mb(186,"ion-item"),s.Mb(187,"ion-label",4),s.ic(188,"Telephone number "),s.Lb(),s.Kb(189,"ion-input",51),s.Lb(),s.Mb(190,"ion-item"),s.Mb(191,"ion-label",4),s.ic(192,"Work number "),s.Lb(),s.Kb(193,"ion-input",46),s.Lb(),s.Mb(194,"ion-item"),s.Mb(195,"ion-label",4),s.ic(196,"Mobile number "),s.Lb(),s.Kb(197,"ion-input",47),s.Lb(),s.Lb(),s.Lb(),s.Kb(198,"hidden-submit-button"),s.Lb(),s.Mb(199,"form",28),s.Mb(200,"ion-card"),s.Mb(201,"ion-card-header"),s.Mb(202,"ion-card-title"),s.ic(203,"Who can we contact in an emergency?"),s.Lb(),s.Lb(),s.Mb(204,"ion-card-content"),s.Mb(205,"ion-item"),s.Mb(206,"ion-label",4),s.ic(207,"Name "),s.Lb(),s.Kb(208,"ion-input",49),s.Lb(),s.Mb(209,"ion-item"),s.Mb(210,"ion-label",4),s.ic(211,"Relationship to you "),s.Lb(),s.Kb(212,"ion-input",50),s.Lb(),s.Mb(213,"ion-item"),s.Mb(214,"ion-label",4),s.ic(215,"Telephone number "),s.Lb(),s.Kb(216,"ion-input",45),s.Lb(),s.Mb(217,"ion-item"),s.Mb(218,"ion-label",4),s.ic(219,"Work number "),s.Lb(),s.Kb(220,"ion-input",46),s.Lb(),s.Mb(221,"ion-item"),s.Mb(222,"ion-label",4),s.ic(223,"Mobile number "),s.Lb(),s.Kb(224,"ion-input",47),s.Lb(),s.Lb(),s.Lb(),s.Kb(225,"hidden-submit-button"),s.Lb(),s.Mb(226,"form",28),s.Mb(227,"ion-card"),s.Mb(228,"ion-radio-group",52),s.Mb(229,"ion-list-header"),s.ic(230,"Do you have an advance care directive for end of life care? "),s.Lb(),s.Mb(231,"ion-card-content"),s.Mb(232,"ion-grid"),s.Mb(233,"ion-row"),s.Mb(234,"ion-col",53),s.Mb(235,"ion-item"),s.Mb(236,"ion-label"),s.ic(237,"Yes"),s.Lb(),s.Kb(238,"ion-radio",54),s.Lb(),s.Lb(),s.Mb(239,"ion-col",53),s.Mb(240,"ion-item"),s.Mb(241,"ion-label"),s.ic(242,"No"),s.Lb(),s.Kb(243,"ion-radio",55),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(244,"hidden-submit-button"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(245,"ion-footer"),s.Mb(246,"ion-toolbar"),s.Mb(247,"ion-grid"),s.Mb(248,"ion-row"),s.Mb(249,"ion-col",56),s.Mb(250,"ion-button",57),s.Ub("click",(function(){return o.onNext()})),s.Kb(251,"ion-icon",58),s.ic(252," Next "),s.Lb(),s.Mb(253,"ion-button",59),s.Ub("click",(function(){return o.onNext()})),s.Kb(254,"ion-icon",60),s.ic(255," Back "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.zb(5),s.kc(" ",o.title," "),s.zb(7),s.ac("formGroup",o.profileForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(4),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(14),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(6),s.gc("font-size",o.fontSize,"em"),s.zb(5),s.gc("font-size",o.fontSize,"em"),s.zb(4),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(14),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.ac("formGroup",o.medicareCardForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(7),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(1),s.ac("control",o.medicareCardForm.controls.cardNumber)("fieldName","Card number"),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(1),s.ac("control",o.medicareCardForm.controls.cardRef)("fieldName","Reference number"),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(1),s.ac("control",o.medicareCardForm.controls.expiryDate)("fieldName","Expiry date"),s.zb(2),s.ac("formGroup",o.healthcareCardForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(7),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.ac("formGroup",o.contactDetailsForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(4),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.ac("formGroup",o.nextOfKinForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(4),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.ac("formGroup",o.emergencyContactForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(4),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.gc("font-size",o.fontSize,"em"),s.zb(2),s.ac("formGroup",o.advancedHealthCareDirectiveForm),s.zb(3),s.gc("font-size",o.fontSize,"em"),s.zb(7),s.gc("font-size",o.fontSize,"em"),s.zb(5),s.gc("font-size",o.fontSize,"em"))},directives:[b.o,b.K,b.d,b.w,b.I,z.a,b.k,b.n,b.C,b.j,n.n,n.j,n.d,b.e,b.g,b.h,b.f,b.r,b.s,b.E,b.S,n.i,n.c,b.F,b.q,b.T,b.z,b.u,b.y,b.Q,u,n.l,n.f,p.a,b.l,b.O,b.m,b.c,b.p],styles:[".footer-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between}"]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(o){return new(o||e)},imports:[[r.i.forChild(M)],r.i]}),e})();var h=i("j1ZV");let g=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(o){return new(o||e)},imports:[[t.b,n.e,b.L,L,n.m,h.a]]}),e})()},xk4V:function(e,o,i){var t=i("4fRq"),n=i("I2ZF");e.exports=function(e,o,i){var b=o&&i||0;"string"==typeof e&&(o="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||t)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,o)for(var a=0;a<16;++a)o[b+a]=r[a];return o||n(r)}}}]);