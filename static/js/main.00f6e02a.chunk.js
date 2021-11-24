(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{156:function(e,t){},191:function(e,t,c){},192:function(e,t,c){},219:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(22),r=c.n(s),i=c(69),o=(c(191),c(157)),l=c(16),j=c(17),u=(c(192),c(60)),d=c(121),b=c(301),x=c(294),O=c(287),h=c(306),m=c(304),p=c(310),f=c(299),g=c(309),v=c(303),S=c(308),C=c(45),T=c(61),F=c.n(T),w=c(150),N=c(88),y=c.n(N),k=function(){var e=Object(w.a)(F.a.mark((function e(t){var c,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object({NODE_ENV:"production",PUBLIC_URL:"/webapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080,e.next=3,y.a.get("http://20.188.94.183/:".concat(c).concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=c(296),B=function(){return{flexBox:{background:"linear-gradient(45deg, #2B3EFC 30%, #48DB4E 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:"100%",padding:"0 30px",overflow:"auto"},dashBoardBackground:{backgroundColor:"#F4F4FC",flexGrow:1,height:"100vh",overflow:"auto"},dashboard:{display:"flex"},marginTitle:{flexGrow:1,paddingLeft:"10%",color:"#FFFFFF"},appBar:{background:"#2B3EFC",width:"100%",position:"absolute",zIndex:"100"},flexBoxV2:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%",height:300,overflow:"auto"},flexBoxV3:{background:"#FCFCFC",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"#FFFFFF",height:900,padding:"0 30px",overflow:"auto"},normalL:{color:"#19191A",display:"flex",justifyContent:"center",alignItems:"center"},normalTitle:{color:"#7688A1",display:"flex",justifyContent:"center",alignItems:"center"},tableRow:{display:"flex"},chip:{color:"#BCBCF6"},TableCSS:{borderRadius:"90%"},headerButton:{width:"100%"},iconCSS:{margin:"0px 0px 0px 16px"},iconButton:{color:"#FFFFFF"},borders:{borderBottom:"3px solid rgb(212, 212, 212)"}}},L=c(40),R=c(18),_=c(300),D=(c(216),c(2)),q=Object(E.a)(B),I=function(e){var t=q();return Object(D.jsx)(O.a,{className:t.tableRow,children:Object(D.jsxs)(f.a,{container:!0,spacing:1,children:[Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalTitle,children:"Ticket Title"}),Object(D.jsx)("p",{className:t.normalL,children:e.title})]}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalTitle,children:"Ticket SLA"}),Object(D.jsx)("p",{className:t.normalL,children:e.SLA})]}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalTitle,children:"Ticket State"}),Object(D.jsx)("p",{className:t.normalL,children:e.TicketState})]}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalL,children:"Responsable: ".concat(e.resName," ").concat(e.resLastName)}),Object(D.jsx)("p",{className:t.normalL,children:"Email: ".concat(e.resEmail)})]}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalTitle,children:"Ticket Queue"}),Object(D.jsx)("p",{className:t.normalL,children:e.Queue})]}),Object(D.jsxs)(f.a,{item:!0,xs:6,children:[Object(D.jsx)("p",{className:t.normalTitle,children:"Ticket Service"}),Object(D.jsx)("p",{className:t.normalL,children:e.service})]})]})})},Q=c(153),A=c.n(Q),P=c(154),W=c.n(P),U=Object(E.a)(B),H=function(e){var t=U(),c=Object(a.useState)([]),n=Object(l.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){e.services&&r(e.services.filter((function(t){return t.Service.includes(e.queue)})))}),[e]),Object(D.jsx)(O.a,{className:t.flexBox,children:Object(D.jsxs)(f.a,{container:!0,spacing:2,children:[Object(D.jsx)(f.a,{item:!0,xs:3,children:Object(D.jsxs)("p",{children:["Total of tickets: ",e.total]})}),Object(D.jsx)(f.a,{item:!0,xs:9,children:Object(D.jsxs)(L.a,{data:s||[],children:[Object(D.jsx)(L.c,{valueField:"Total",argumentField:"Service",innerRadius:.6}),Object(D.jsx)(L.d,{text:"Tickets by Service"}),Object(D.jsx)(L.b,{}),Object(D.jsx)(R.a,{})]})})]})})},K=c(305),V=c(302),G=Object(E.a)(B),J=function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),j=o[0],u=o[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),x=b[0],h=b[1],m=G();return Object(a.useEffect)((function(){var t=e.tickets.filter((function(t){return t.Queue.includes(e.queue)}));u(t),h(t.length)}),[]),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(_.a,{className:m.headerButton,onClick:function(){r(!s)},variant:"text",children:Object(D.jsxs)("h2",{children:[e.queue.replace("Herramientas Aplicaciones::",""),!s&&Object(D.jsx)(A.a,{className:m.iconCSS}),s&&Object(D.jsx)(W.a,{className:m.iconCSS})]})}),s&&Object(D.jsx)(O.a,{className:m.flexBoxV3,children:e.show&&j.map((function(e,t){return Object(D.jsxs)(n.a.Fragment,{children:[Object(D.jsx)(I,{title:e.title,Queue:e.Queue,SLA:e.SLA,TicketState:e.TicketState,resEmail:e.resEmail,resLastName:e.resLastName,resName:e.resName,service:e.service,children:e.Queue},e.ticketId+"_"+t),Object(D.jsx)(K.a,{children:Object(D.jsx)(V.a,{onClick:function(){return t=e.ticketNumber,void navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)}));var t},label:"Ticket Number: ".concat(e.ticketNumber)})})]})}))}),!s&&Object(D.jsx)(H,{queue:e.queue,services:e.services,total:x})]})},Y=c(293),z=Object(E.a)(B),M=function(e){var t=z();return Object(D.jsx)("div",{children:Object(D.jsx)(Y.a,{className:t.TableCSS,children:e.queues.map((function(t,c){return Object(D.jsx)(a.Fragment,{children:Object(D.jsx)(J,{show:!0,tickets:e.tickets,queue:t.Queue,services:e.services},c)})}))})})},X=Object(a.createContext)(null),Z=c(155),$=c.n(Z),ee=c(307),te=Object(E.a)(B),ce=function(e){var t=te(),c=Object(a.useContext)(X);return Object(D.jsx)(O.a,{className:t.appBar,children:Object(D.jsx)("div",{className:t.borders,children:Object(D.jsxs)(h.a,{children:[Object(D.jsx)(m.a,{component:"h1",variant:"h6",noWrap:!0,className:t.marginTitle,children:"Dashboard"}),Object(D.jsx)(ee.a,{className:t.iconButton,onClick:function(){c.setUser("LogOut"),console.log(c)},children:Object(D.jsx)($.a,{})})]})})})};function ae(e){return Object(D.jsxs)(m.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(D.jsx)(v.a,{color:"inherit",href:"https://getcrg.com/",children:"CRG"})," ",(new Date).getFullYear(),"."]}))}var ne=Object(d.a)(),se=Object(E.a)(B);function re(){var e=Object(a.useContext)(X).user,t=Object(j.f)(),c=Object(C.useQuery)("tickets",(function(){return k("/api/tickets")})),s=c.data,r=c.status,i=Object(C.useQuery)("queues",(function(){return k("/api/queues")})),o=i.data,l=(i.status,Object(C.useQuery)("queuesTotals",(function(){return k("/api/queues/totals")}))),u=l.data,d=l.status,m=Object(C.useQuery)("queuesServiceTotals",(function(){return k("/api/queues/services/totals")})),v=m.data,T=(m.status,se());return Object(a.useEffect)((function(){"LogIn"!==e&&t("/",{replace:!0})}),[e]),Object(D.jsx)(b.a,{theme:ne,children:Object(D.jsxs)(O.a,{className:T.dashboard,children:[Object(D.jsx)(x.a,{}),Object(D.jsx)(ce,{}),Object(D.jsxs)(O.a,{className:T.dashBoardBackground,component:"main",children:[Object(D.jsx)(h.a,{}),Object(D.jsxs)(p.a,{maxWidth:"lg",sx:{mt:4,mb:4},children:[Object(D.jsxs)(f.a,{container:!0,spacing:3,children:[Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsxs)(g.a,{sx:{p:2,display:"flex",flexDirection:"column",height:400,width:"100%"},children:["loading"===d&&Object(D.jsx)(O.a,{sx:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(S.a,{})}),"success"===d&&Object(D.jsxs)(L.a,{data:u||[],children:[Object(D.jsx)(L.c,{valueField:"Total",argumentField:"Queue",innerRadius:.6}),Object(D.jsx)(L.d,{text:"Queues"}),Object(D.jsx)(L.b,{}),Object(D.jsx)(R.a,{})]})]})}),Object(D.jsx)(f.a,{item:!0,xs:12,children:Object(D.jsxs)(g.a,{sx:{p:2,display:"flex",flexDirection:"column"},children:["loading"===r&&Object(D.jsx)(O.a,{sx:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(S.a,{})}),"success"===r&&Object(D.jsx)(n.a.Fragment,{children:Object(D.jsx)(M,{queues:o||[],tickets:s,services:v})})]})})]}),Object(D.jsx)(ae,{sx:{pt:4}})]})]})]})})}var ie=c(295);function oe(e){return Object(D.jsxs)(m.a,Object(u.a)(Object(u.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(D.jsx)(v.a,{color:"inherit",href:"https://www.getcrg.com/",children:"CRG"})," ",(new Date).getFullYear(),"."]}))}var le=Object(d.a)(),je=function(){var e=Object(j.f)(),t=Object(a.useContext)(X),c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],h=Object(a.useState)(!1),f=Object(l.a)(h,2),g=f[0],v=f[1];Object(a.useEffect)((function(){g&&(e("/dashboard",{replace:!0}),t.setUser("LogIn"))}),[g]);var S=function(e){"email"===e.currentTarget.name&&r(e.currentTarget.value),"password"===e.currentTarget.name&&d(e.currentTarget.value)};return Object(D.jsx)(b.a,{theme:le,children:Object(D.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(D.jsx)(x.a,{}),Object(D.jsxs)(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(D.jsx)(m.a,{variant:"h4",children:"FIFCO Dashboard"}),Object(D.jsxs)(O.a,{noValidate:!0,sx:{mt:1},children:[Object(D.jsx)(ie.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",autoFocus:!0,onChange:S}),Object(D.jsx)(ie.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:S}),Object(D.jsx)(_.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/webapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080;y.a.get("http://20.188.94.183:".concat(e,"/auth/").concat(s,"/").concat(u)).then((function(e){v(e)}))},children:"Sign In"})]})]}),Object(D.jsx)(oe,{sx:{mt:8,mb:4}})]})})},ue=c(156),de=[{name:"notFound",path:"/not-found",component:c.n(ue).a},{name:"login",path:"/",component:je},{name:"dashboard",path:"/dashboard",component:function(){return Object(D.jsx)(re,{})}}],be=["path","component","name"],xe=new C.QueryClient;var Oe=function(){var e=Object(a.useState)("notRoot"),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(D.jsx)(C.QueryClientProvider,{client:xe,contextSharing:!0,children:Object(D.jsx)("main",{className:"container",children:Object(D.jsx)(X.Provider,{value:{user:c,setUser:n},children:Object(D.jsx)(j.c,{children:de.map((function(e){var t=e.path,c=e.component,a=e.name;Object(o.a)(e,be);return Object(D.jsx)(j.a,{path:t,element:Object(D.jsx)(c,{})},a)}))})})})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,312)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(D.jsx)(i.a,{children:Object(D.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[219,1,2]]]);
//# sourceMappingURL=main.00f6e02a.chunk.js.map