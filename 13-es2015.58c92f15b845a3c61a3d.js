(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"KtM+":function(i,e,b){"use strict";b.r(e),b.d(e,"NewPatientRegistrationPageModule",(function(){return u}));var n=b("ofXK"),o=b("3Pt+"),t=b("TEn/"),a=b("tyNb"),l=b("fXoL"),r=b("8Xxu"),c=b("Qeml"),s=b("g7Db");const M=[{path:"",component:(()=>{class i{constructor(i,e,b){this.darkModeService=i,this.fontSizeService=e,this.changeDetectorRef=b,this.title="New Patient Registration"}ngOnInit(){this.getDefaults()}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.changeDetectorRef.detectChanges()}}return i.\u0275fac=function(e){return new(e||i)(l.Jb(r.a),l.Jb(c.a),l.Jb(l.h))},i.\u0275cmp=l.Db({type:i,selectors:[["app-new-patient-registration"]],decls:267,vars:1,consts:[["slot","start"],["slot","end"],["size","12","size-md","8","offset-md","2"],["position","stacked"],["placeholder","Placeholder","type","text"],["placeholder","title","type","text"],["placeholder","surname","type","text"],["placeholder","given names","type","text"],["placeholder","given names","type","date"],["slot","end","value","biff","checked",""],["slot","end","value","griff"],["slot","end","value","buford"],["slot","end","value","bufors"],["slot","end","value","bufork"],["slot","end","value","buforl"],["placeholder","xxxx","type","text"],["type","date"],["placeholder","Email","type","email"],["placeholder","Placeholder","type","number"],["placeholder","Placeholder","type","email"],["slot","end","value","tuna"],["slot","end","value","salmon"],["name","information-circle"]],template:function(i,e){1&i&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",0),l.Kb(3,"ion-menu-button"),l.Lb(),l.Mb(4,"ion-title"),l.jc(5),l.Lb(),l.Mb(6,"ion-buttons",1),l.Kb(7,"accessibility-button"),l.Lb(),l.Lb(),l.Lb(),l.Mb(8,"ion-content"),l.Mb(9,"form"),l.Mb(10,"ion-row"),l.Mb(11,"ion-col",2),l.Mb(12,"ion-item"),l.Mb(13,"ion-label",3),l.jc(14,"Input Text"),l.Lb(),l.Kb(15,"ion-input",4),l.Lb(),l.Mb(16,"ion-title"),l.jc(17,"Section A: Personal details"),l.Lb(),l.Mb(18,"ion-item"),l.Mb(19,"ion-label",3),l.jc(20,"Title"),l.Lb(),l.Kb(21,"ion-input",5),l.Lb(),l.Mb(22,"ion-item"),l.Mb(23,"ion-label",3),l.jc(24,"Surname"),l.Lb(),l.Kb(25,"ion-input",6),l.Lb(),l.Mb(26,"ion-item"),l.Mb(27,"ion-label",3),l.jc(28,"Given names"),l.Lb(),l.Kb(29,"ion-input",7),l.Lb(),l.Mb(30,"ion-item"),l.Mb(31,"ion-label",3),l.jc(32,"Date of birth"),l.Lb(),l.Kb(33,"ion-input",8),l.Lb(),l.Mb(34,"ion-radio-group"),l.Mb(35,"ion-list-header"),l.Mb(36,"ion-label"),l.jc(37,"Gender"),l.Lb(),l.Lb(),l.Mb(38,"ion-item"),l.Mb(39,"ion-label"),l.jc(40,"Male"),l.Lb(),l.Kb(41,"ion-radio",9),l.Lb(),l.Mb(42,"ion-item"),l.Mb(43,"ion-label"),l.jc(44,"Female"),l.Lb(),l.Kb(45,"ion-radio",10),l.Lb(),l.Lb(),l.Mb(46,"ion-radio-group"),l.Mb(47,"ion-list-header"),l.Mb(48,"ion-label"),l.jc(49,"Marital status"),l.Lb(),l.Lb(),l.Mb(50,"ion-item"),l.Mb(51,"ion-label"),l.jc(52,"Single"),l.Lb(),l.Kb(53,"ion-radio",9),l.Lb(),l.Mb(54,"ion-item"),l.Mb(55,"ion-label"),l.jc(56,"Married"),l.Lb(),l.Kb(57,"ion-radio",10),l.Lb(),l.Mb(58,"ion-item"),l.Mb(59,"ion-label"),l.jc(60,"Defacto"),l.Lb(),l.Kb(61,"ion-radio",11),l.Lb(),l.Mb(62,"ion-item"),l.Mb(63,"ion-label"),l.jc(64,"Separated"),l.Lb(),l.Kb(65,"ion-radio",12),l.Lb(),l.Mb(66,"ion-item"),l.Mb(67,"ion-label"),l.jc(68,"Divorced"),l.Lb(),l.Kb(69,"ion-radio",13),l.Lb(),l.Mb(70,"ion-item"),l.Mb(71,"ion-label"),l.jc(72,"Widowed"),l.Lb(),l.Kb(73,"ion-radio",14),l.Lb(),l.Lb(),l.Mb(74,"ion-item"),l.Mb(75,"ion-label",3),l.jc(76,"Medicare card number"),l.Lb(),l.Kb(77,"ion-input",15),l.Lb(),l.Mb(78,"ion-item"),l.Mb(79,"ion-label",3),l.jc(80,"Medicare reference number"),l.Lb(),l.Kb(81,"ion-input",15),l.Lb(),l.Mb(82,"ion-item"),l.Mb(83,"ion-label",3),l.jc(84,"Medicare card expiry date"),l.Lb(),l.Kb(85,"ion-input",16),l.Lb(),l.Mb(86,"ion-item"),l.Mb(87,"ion-label",3),l.jc(88,"Pension, Health Care Card, or Veterans Affairs number(if applicable)"),l.Lb(),l.Kb(89,"ion-input",15),l.Lb(),l.Mb(90,"ion-item"),l.Mb(91,"ion-label",3),l.jc(92,"Type of Veterans Affairs card"),l.Lb(),l.Kb(93,"ion-input",15),l.Lb(),l.Mb(94,"ion-item"),l.Mb(95,"ion-label",3),l.jc(96,"Expiry date"),l.Lb(),l.Kb(97,"ion-input",16),l.Lb(),l.Mb(98,"ion-item"),l.Mb(99,"ion-label",3),l.jc(100,"Occupation"),l.Lb(),l.Kb(101,"ion-input",15),l.Lb(),l.Mb(102,"ion-item"),l.Mb(103,"ion-label",3),l.jc(104,"Home address"),l.Lb(),l.Kb(105,"ion-input",15),l.Mb(106,"ion-label",3),l.jc(107,"Post code"),l.Lb(),l.Kb(108,"ion-input",15),l.Lb(),l.Mb(109,"ion-item"),l.Mb(110,"ion-label",3),l.jc(111,"Postal address"),l.Lb(),l.Kb(112,"ion-input",15),l.Mb(113,"ion-label",3),l.jc(114,"Post code"),l.Lb(),l.Kb(115,"ion-input",15),l.Lb(),l.Mb(116,"ion-item"),l.Mb(117,"ion-label",3),l.jc(118,"Telephone number"),l.Lb(),l.Kb(119,"ion-input",15),l.Lb(),l.Mb(120,"ion-item"),l.Mb(121,"ion-label",3),l.jc(122,"Work number"),l.Lb(),l.Kb(123,"ion-input",15),l.Lb(),l.Mb(124,"ion-item"),l.Mb(125,"ion-label",3),l.jc(126,"Mobile number"),l.Lb(),l.Kb(127,"ion-input",15),l.Lb(),l.Mb(128,"ion-item"),l.Mb(129,"ion-label",3),l.jc(130,"Email"),l.Lb(),l.Kb(131,"ion-input",17),l.Lb(),l.Mb(132,"ion-list-header"),l.Mb(133,"ion-label"),l.jc(134,"Next of Kin "),l.Lb(),l.Lb(),l.Mb(135,"ion-item"),l.Mb(136,"ion-label",3),l.jc(137,"Name "),l.Lb(),l.Kb(138,"ion-input",4),l.Lb(),l.Mb(139,"ion-item"),l.Mb(140,"ion-label",3),l.jc(141,"Relationship to you "),l.Lb(),l.Kb(142,"ion-input",4),l.Lb(),l.Mb(143,"ion-item"),l.Mb(144,"ion-label",3),l.jc(145,"Telephone number "),l.Lb(),l.Kb(146,"ion-input",18),l.Lb(),l.Mb(147,"ion-item"),l.Mb(148,"ion-label",3),l.jc(149,"Work number "),l.Lb(),l.Kb(150,"ion-input",18),l.Lb(),l.Mb(151,"ion-item"),l.Mb(152,"ion-label",3),l.jc(153,"Mobile number "),l.Lb(),l.Kb(154,"ion-input",18),l.Lb(),l.Mb(155,"ion-radio-group"),l.Mb(156,"ion-list-header"),l.Mb(157,"ion-label"),l.jc(158,"Do you have an advance care directive for end of life care?"),l.Lb(),l.Lb(),l.Mb(159,"ion-item"),l.Mb(160,"ion-label"),l.jc(161,"Yes"),l.Lb(),l.Kb(162,"ion-radio",9),l.Lb(),l.Mb(163,"ion-item"),l.Mb(164,"ion-label"),l.jc(165,"No"),l.Lb(),l.Kb(166,"ion-radio",10),l.Lb(),l.Lb(),l.Mb(167,"ion-item"),l.Mb(168,"ion-label",3),l.jc(169,"Input Email"),l.Lb(),l.Kb(170,"ion-input",19),l.Lb(),l.Mb(171,"ion-title"),l.jc(172,"Section B: Cultural background"),l.Lb(),l.Mb(173,"ion-radio-group"),l.Mb(174,"ion-list-header"),l.Mb(175,"ion-label"),l.jc(176,"Knowing your cultural background can help us provide healthcare that meets your individual needs. Are you of Abroginal or Torres Strait Islander origin?"),l.Lb(),l.Lb(),l.Mb(177,"ion-item"),l.Mb(178,"ion-label"),l.jc(179,"No"),l.Lb(),l.Kb(180,"ion-radio",9),l.Lb(),l.Mb(181,"ion-item"),l.Mb(182,"ion-label"),l.jc(183,"Yes, Abroginal"),l.Lb(),l.Kb(184,"ion-radio",10),l.Lb(),l.Mb(185,"ion-item"),l.Mb(186,"ion-label"),l.jc(187,"Yes, Torres Strait Islander"),l.Lb(),l.Kb(188,"ion-radio",11),l.Lb(),l.Mb(189,"ion-item"),l.Mb(190,"ion-label"),l.jc(191,"Yes, both Abroginal and Torres Strait Islander"),l.Lb(),l.Kb(192,"ion-radio",20),l.Lb(),l.Mb(193,"ion-item"),l.Mb(194,"ion-label"),l.jc(195,"Other"),l.Lb(),l.Kb(196,"ion-radio",21),l.Lb(),l.Lb(),l.Mb(197,"ion-item"),l.Mb(198,"ion-label",3),l.jc(199,"What other cultural background (eg Mediterranean, Asian, African)?"),l.Lb(),l.Kb(200,"ion-input",4),l.Lb(),l.Mb(201,"ion-item"),l.Mb(202,"ion-label",3),l.jc(203,"Country of birth"),l.Lb(),l.Kb(204,"ion-input",4),l.Lb(),l.Mb(205,"ion-radio-group"),l.Mb(206,"ion-list-header"),l.Mb(207,"ion-label"),l.jc(208,"Is English your first language?"),l.Lb(),l.Lb(),l.Mb(209,"ion-item"),l.Mb(210,"ion-label"),l.jc(211,"Yes"),l.Lb(),l.Kb(212,"ion-radio",9),l.Lb(),l.Mb(213,"ion-item"),l.Mb(214,"ion-label"),l.jc(215,"No"),l.Lb(),l.Kb(216,"ion-radio",10),l.Lb(),l.Lb(),l.Mb(217,"ion-radio-group"),l.Mb(218,"ion-list-header"),l.Mb(219,"ion-label"),l.jc(220,"Do you require an interpreter?"),l.Lb(),l.Lb(),l.Mb(221,"ion-item"),l.Mb(222,"ion-label"),l.jc(223,"Yes"),l.Lb(),l.Kb(224,"ion-radio",9),l.Lb(),l.Mb(225,"ion-item"),l.Mb(226,"ion-label"),l.jc(227,"No"),l.Lb(),l.Kb(228,"ion-radio",10),l.Lb(),l.Lb(),l.Mb(229,"ion-item"),l.Mb(230,"ion-label",3),l.jc(231,"Please specify language"),l.Lb(),l.Kb(232,"ion-input",4),l.Lb(),l.Mb(233,"ion-title"),l.jc(234,"Section C: Allergies and medicines"),l.Lb(),l.Mb(235,"ion-buttons"),l.Mb(236,"ion-button"),l.jc(237,"Add allergen"),l.Lb(),l.Mb(238,"ion-button"),l.jc(239,"Remove allergen"),l.Lb(),l.Lb(),l.Mb(240,"ion-item"),l.Mb(241,"ion-label",3),l.jc(242,"List allergies and intolerances to medications"),l.Lb(),l.Kb(243,"ion-input",4),l.Lb(),l.Mb(244,"ion-item"),l.Mb(245,"ion-label",3),l.jc(246,"Describe your reaction"),l.Lb(),l.Kb(247,"ion-input",4),l.Lb(),l.Mb(248,"ion-item"),l.Mb(249,"ion-label",3),l.jc(250,"List regular medications and doses, and complementary medicines and doses"),l.Lb(),l.Kb(251,"ion-input",4),l.Lb(),l.Mb(252,"ion-item"),l.Mb(253,"ion-label",3),l.jc(254,"Our practice uses a reminder system to help you maintain your health. The practice sends reminders by post, email, telephone or SMS for procedures such as vaccinations, Pap tests and other health reviews."),l.Lb(),l.Mb(255,"ion-label"),l.jc(256,"I consent to being contacted with reminders to help me maintain my health\xa0"),l.Kb(257,"ion-icon",22),l.jc(258," > "),l.Lb(),l.Kb(259,"ion-checkbox",1),l.Lb(),l.Mb(260,"ion-item"),l.Mb(261,"ion-label",3),l.jc(262,"Our practice also sends information to the Australian Childhood Immunisation Register and Pap Smear Register. These registers also send reminders, which can be helpful if you move."),l.Lb(),l.Mb(263,"ion-label"),l.jc(264,"I consent to being contacted with reminders to help me maintain my health\xa0"),l.Kb(265,"ion-icon",22),l.Lb(),l.Kb(266,"ion-checkbox",1),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&i&&(l.zb(5),l.lc(" ",e.title," "))},directives:[t.m,t.I,t.d,t.u,t.G,s.a,t.k,o.k,o.h,o.i,t.A,t.j,t.p,t.q,t.o,t.R,t.x,t.Q,t.s,t.w,t.O,t.L,t.c,t.n,t.i,t.a],styles:[""]}),i})()}];let L=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(e){return new(e||i)},imports:[[a.i.forChild(M)],a.i]}),i})();var d=b("j1ZV");let u=(()=>{class i{}return i.\u0275mod=l.Hb({type:i}),i.\u0275inj=l.Gb({factory:function(e){return new(e||i)},imports:[[n.b,o.d,t.J,L,o.j,d.a]]}),i})()}}]);