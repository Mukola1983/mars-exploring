(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{19:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var s=c(0),n=c(5),r=c.n(n),o=(c(19),c(11)),u=c(3),a=c(12),i=function t(){Object(a.a)(this,t)};i.checkStatus=function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e},i.parseJSON=function(t){return t.json()},i.fetchJSON=function(t){return fetch(t).then(i.checkStatus).then(i.parseJSON)},i.curiosity="url(https://media.istockphoto.com/photos/mars-rover-robotic-space-autonomous-vehicle-on-a-deserted-planet-with-picture-id1006754478?k=6&m=1006754478&s=612x612&w=0&h=_Hi8PjNujyMRYbgQ4Dc73dKTs6kcd9UGK_nN2m-Q7QA=)",i.spirit="url(https://www.usnews.com/dims4/USNEWS/65864f1/2147483647/resize/640x/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fdbimages%2Fmaster%2F13635%2FFE_PR_091112NASArover.jpg)",i.opportynity="url(https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg)";var d=c(1);function p(){var t=Object(s.useState)("dfsdfsd"),e=Object(o.a)(t,2),c=(e[0],e[1],Object(s.useState)("")),n=Object(o.a)(c,2),r=(n[0],n[1],Object(u.b)()),a=Object(u.c)((function(t){return t.cashReduser.cash})),i=Object(u.c)((function(t){return t.customerReduser.customers}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:a}),Object(d.jsx)("button",{onClick:function(){!function(t){r({type:"ADD_CASH",payloud:t})}(Number(prompt()))},children:"add cash"}),Object(d.jsx)("button",{onClick:function(){!function(t){r({type:"GET_CASH",payloud:t})}(Number(prompt()))},children:"get cash"}),Object(d.jsx)("button",{onClick:function(){!function(t){var e={name:t,id:Date.now()};r({type:"ADD_CUSTOMER",payloud:e})}(prompt())},children:"Add customer"}),Object(d.jsx)("div",{children:i.length>0?Object(d.jsx)("div",{children:i.map((function(t){return Object(d.jsx)("div",{onClick:function(){return function(t){r({type:"REMOVE_CUSTOMER",payloud:t.id})}(t)},children:t.name},t.id)}))}):Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"customers list is empty"})})})]})}var h=c(7),j=c(13),b=c(2),l={cash:20},O=c(14),m={customers:[]},f=Object(h.combineReducers)({cashReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CASH":return Object(b.a)(Object(b.a)({},t),{},{cash:t.cash+e.payloud});case"GET_CASH":return Object(b.a)(Object(b.a)({},t),{},{cash:t.cash-e.payloud});default:return t}},customerReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CUSTOMER":return Object(b.a)(Object(b.a)({},t),{},{customers:[].concat(Object(O.a)(t.customers),[e.payloud])});case"REMOVE_CUSTOMER":return Object(b.a)(Object(b.a)({},t),{},{customers:t.customers.filter((function(t){return t.id!==e.payloud}))});default:return t}}}),y=Object(h.createStore)(f,Object(j.composeWithDevTools)());r.a.render(Object(d.jsx)(u.a,{store:y,children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.47c8eb2c.chunk.js.map