(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{24:function(t,e,c){t.exports={image:"RoverImages_image__oZNN-",active:"RoverImages_active__aw8FW"}},53:function(t,e,c){t.exports={box:"PhotosControl_box__1cKFH",image:"PhotosControl_image__2mp2N"}},66:function(t,e,c){t.exports={button:"PageControl_button__ejqWM",buttonBox:"PageControl_buttonBox__2h9UK"}},69:function(t,e,c){t.exports={navbar:"App_navbar__1SjPI",image:"App_image__ncL4N",active:"App_active__1-eD7"}},79:function(t,e,c){},85:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(38),a=c.n(n),o=(c(79),c(13)),s=c(110),i=c(112),u=c(111),j=c(113),p=c(108),b=c(11),l=c(60),O=function t(){Object(l.a)(this,t)};O.checkStatus=function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e},O.parseJSON=function(t){return t.json()},O.fetchJSON=function(t){return fetch(t).then(O.checkStatus).then(O.parseJSON)},O.curiosity="https://media.istockphoto.com/photos/mars-rover-robotic-space-autonomous-vehicle-on-a-deserted-planet-with-picture-id1006754478?k=6&m=1006754478&s=612x612&w=0&h=_Hi8PjNujyMRYbgQ4Dc73dKTs6kcd9UGK_nN2m-Q7QA=",O.spirit="https://www.usnews.com/dims4/USNEWS/65864f1/2147483647/resize/640x/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fdbimages%2Fmaster%2F13635%2FFE_PR_091112NASArover.jpg",O.opportynity="https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg";var d={rover:"Curiosity",curiosity:!1,spirit:!1,opportynity:!1},v="CHANGE_ROVER",h="CURIOSITY_ACTIVE",y="SPIRIT_ACTIVE",m="OPPORTYNITY_ACTIVE",g=c(2);function f(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.roverReduser.rover}));return Object(g.jsxs)(s.a,{children:[Object(g.jsx)(i.a,{variant:"h5",children:"Choose your Rover"}),Object(g.jsxs)(u.a,{value:e,onChange:function(e){var c;t((c=e.target.value,{type:v,payloud:c}))},children:[Object(g.jsx)(j.a,{value:"Curiosity",control:Object(g.jsx)(p.a,{}),label:"Curiosity"}),Object(g.jsx)(j.a,{value:"Opportunity",control:Object(g.jsx)(p.a,{}),label:"Opportunity"}),Object(g.jsx)(j.a,{value:"Spirit",control:Object(g.jsx)(p.a,{}),label:"Spirit"})]})]})}var x=c(105),_=c(107),R={maxSol:3213,curentSol:1},N="CHANGE_MAX_SOL",S="CURENT_SOL",P=function(t){return{type:N,payloud:t}},C={curentPage:1},E="INCREMENT_PAGE",w="DECREMENT_PAGE",A="UPDATE_PAGE";function T(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.solReduser.maxSol})),c=Object(o.c)((function(t){return t.solReduser.curentSol})),n=Object(o.c)((function(t){return t.roverReduser.rover}));return Object(r.useEffect)((function(){var e;"Curiosity"===n&&(t(P(3213)),t({type:h,payloud:e})),"Spirit"===n&&(t(P(2208)),t(function(t){return{type:y,payloud:t}}())),"Opportunity"===n&&(t(P(5111)),t(function(t){return{type:m,payloud:t}}()))}),[n]),Object(g.jsxs)(x.a,{spacing:2,children:[Object(g.jsx)(i.a,{variant:"h6",children:"Sol: "}),Object(g.jsx)(_.a,{color:"primary",count:e,page:c,onChange:function(e,c){t({type:S,payloud:c}),t(function(t){return{type:A,payloud:t}}())}})]})}var I=c(114),k=c(67),F=c.n(k),D=c(68),J=c.n(D),G=c(66),M=c.n(G);function U(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.pageReduser.curentPage}));return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h3",{children:["page: ",e]}),Object(g.jsxs)("div",{className:M.a.buttonBox,children:[Object(g.jsx)(I.a,{variant:"contained",size:"small",type:"submit",onClick:function(){var c;e>1&&t({type:w,payloud:c})},children:Object(g.jsx)(F.a,{})}),Object(g.jsx)(I.a,{sx:{m:2},variant:"contained",size:"small",type:"submit",onClick:function(){var e;t({type:E,payloud:e})},children:Object(g.jsx)(J.a,{})})]})]})}var B=c(15),H={photos:[]},K="ADD_API",V="59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z",W=c(53),z=c.n(W);function L(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.photosReduser.photos})),c=Object(o.c)((function(t){return t.roverReduser.rover})),n=Object(o.c)((function(t){return t.solReduser.curentSol})),a=Object(o.c)((function(t){return t.pageReduser.curentPage}));return Object(r.useEffect)((function(){var e,r,o,s;(e=c,r=a,o=n,O.fetchJSON("HTTPS://api.nasa.gov/mars-photos/api/v1/rovers/".concat(e,"/photos?sol=").concat(o,"&page=").concat(r,"&").concat(s,"&api_key=").concat(V))).then((function(e){var c;t((c=e.photos,{type:K,payloud:c}))}))}),[c,a,n]),Object(g.jsx)("div",{children:e.length>0?Object(g.jsx)("div",{className:z.a.box,children:e.map((function(t){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:t.img_src,alt:"",className:z.a.image})},t.id)}))}):Object(g.jsx)("div",{children:Object(g.jsx)("h2",{children:"Photos list is empty!"})})})}var Y=c(69),Q=c.n(Y),q=c(24),X=c.n(q);function Z(){var t=Object(o.c)((function(t){return t.roverReduser.curiosity})),e=Object(o.c)((function(t){return t.roverReduser.spirit})),c=Object(o.c)((function(t){return t.roverReduser.opportynity}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{src:O.curiosity,alt:"",className:t?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")}),Object(g.jsx)("img",{src:O.spirit,alt:"",className:e?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")}),Object(g.jsx)("img",{src:O.opportynity,alt:"",className:c?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")})]})}function $(){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:Q.a.navbar,children:[Object(g.jsx)(f,{}),Object(g.jsx)(Z,{})]}),Object(g.jsx)(T,{}),Object(g.jsx)(U,{}),Object(g.jsx)(L,{})]})}var tt=c(37),et=c(70),ct=c(71),rt=Object(tt.combineReducers)({roverReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(b.a)(Object(b.a)({},t),{},{rover:e.payloud});case h:return Object(b.a)(Object(b.a)({},t),{},{curiosity:!0,spirit:!1,opportynity:!1});case y:return Object(b.a)(Object(b.a)({},t),{},{curiosity:!1,spirit:!0,opportynity:!1});case m:return Object(b.a)(Object(b.a)({},t),{},{curiosity:!1,spirit:!1,opportynity:!0});default:return t}},photosReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;return e.type===K?Object(b.a)(Object(b.a)({},t),{},{photos:Object(B.a)(e.payloud)}):t},solReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(b.a)(Object(b.a)({},t),{},{maxSol:e.payloud});case S:return Object(b.a)(Object(b.a)({},t),{},{curentSol:e.payloud});default:return t}},pageReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(b.a)(Object(b.a)({},t),{},{curentPage:t.curentPage+1});case w:return Object(b.a)(Object(b.a)({},t),{},{curentPage:t.curentPage-1});case A:return Object(b.a)(Object(b.a)({},t),{},{curentPage:1});default:return t}}}),nt=Object(tt.createStore)(rt,Object(et.composeWithDevTools)(Object(tt.applyMiddleware)(ct.a)));a.a.render(Object(g.jsx)(o.a,{store:nt,children:Object(g.jsx)($,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.e5150012.chunk.js.map