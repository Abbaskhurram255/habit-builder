(this["webpackJsonphabit-builder"]=this["webpackJsonphabit-builder"]||[]).push([[0],{13:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(13),n(3)),i=n(1),s=n(29),u=n(7),d=n.n(u);n(25),n(26);function f(e){var t=["var(--red)","var(--orange)","var(--green)","var(--blue)","var(--purple)"];return r.a.createElement("article",{"data-index":e.index,className:"width-wrapper GoalItem "+(e.done?"done":"")},r.a.createElement("header",{style:{backgroundColor:e.color?"#2dd9d0"):t[e.index%t.length]}},r.a.createElement("h2",null,e.title),r.a.createElement("div",null,r.a.createElement("button",{className:"App-button","data-index":e.index,onClick:e.handleDone},"Done"))),r.a.createElement("footer",null,r.a.createElement("div",{className:"justify-space-between"},r.a.createElement("svg",{className:"drag-icon drag-handle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"18px",height:"18px"},r.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.a.createElement("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),r.a.createElement("p",{className:"streak"},e.streak," Day",1===e.streak?"":"s")),r.a.createElement("div",null,r.a.createElement("button",{"data-index":e.index,onClick:e.handleRemove},"Remove"))))}var m=r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"GoalList width-wrapper justify-center",ref:t},e.items.map((function(t,n){return t&&r.a.createElement(f,{key:n,index:n,color:t.color,title:t.title,streak:t.streak,done:t.done,handleDone:e.handleDone,handleRemove:e.handleRemove})})))}));function h(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.focus()})),r.a.createElement("section",{className:"justify-center bg-trans NewGoalModal"+(e.shown?"":" displayNone")},r.a.createElement("form",{className:"width-wrapper",autoComplete:"off",onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Goal Title"),r.a.createElement("input",{ref:t,id:"title",placeholder:"New Goal...",onChange:e.handleChange,value:e.title}),r.a.createElement("button",{className:"App-button",onClick:e.handleSubmit},"Add")))}var g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),u=Object(i.a)(c,2),f=u[0],g=u[1],v=Object(a.useState)((function(){return localStorage.getItem("goalList")?JSON.parse(localStorage.getItem("goalList")):[]})),p=Object(i.a)(v,2),b=p[0],w=p[1],E=Object(a.useState)((function(){var e=localStorage.getItem("lastReset");return e?new Date(JSON.parse(e)):null})),O=Object(i.a)(E,2),j=O[0],S=O[1],N=Object(a.useState)(null),k=Object(i.a)(N,2),y=k[0],x=k[1],R=Object(a.useState)(!!localStorage.getItem("colorsUpdated")),A=Object(i.a)(R,2),C=A[0],D=A[1],I=Object(a.useRef)(),L=Object(a.useRef)();Object(a.useEffect)((function(){localStorage.setItem("goalList",JSON.stringify(b)),L.current=b}),[b]),Object(a.useEffect)((function(){if(!j){var e=new Date;localStorage.setItem("lastReset",JSON.stringify(e)),S(e)}if(!Object(s.a)(j)){var t=Object(l.a)(b);t.forEach((function(e){e.done=!1})),w(t);var n=new Date;localStorage.setItem("lastReset",JSON.stringify(n)),S(n)}}),[b,j]);var J=Object(a.useRef)(null);function G(e){I.current||e.preventDefault()}return Object(a.useEffect)((function(){if(I.current=!0,document.addEventListener("touchmove",G,{passive:!1}),!y){var e=d()([J.current],{moves:function(e,t,n,a){return n.classList.contains("drag-handle")}});e.on("drag",(function(e,t){I.current=!1})),e.on("drop",(function(e,t){I.current=!0;for(var n=L.current,a=[],r=[],o=0;o<t.children.length;o++){var c=t.children[o];a.push(c.dataset.index)}for(var l=0,i=a;l<i.length;l++){var s=i[l];r.push(n[s])}localStorage.setItem("goalList",JSON.stringify(r))})),x(e)}}),[y,L]),Object(a.useEffect)((function(){if(!C){var e=["red","orange","green","blue","purple"],t=[];b.forEach((function(n,a){var r=n;r.color||(r.color=e[a%e.length]),t.push(r)})),w(t),D(!0),localStorage.setItem("colorsUpdated",JSON.stringify(!0))}}),[C,b]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header hdr"},r.a.createElement("div",{className:"justify-center"},r.a.createElement("section",{className:"top-bar width-wrapper justify-space-between"},r.a.createElement("h1",null,"Daily Goals"),r.a.createElement("div",null,r.a.createElement("button",{className:"App-button ng-btn",onClick:function(){g(!f)}},"New Goal")))),r.a.createElement(h,{shown:f,title:n,handleChange:function(e){o(e.target.value)},handleSubmit:function(e){e.preventDefault();var t=["red","orange","green","blue","purple"];n&&(w([].concat(Object(l.a)(b),[{title:n.trim(),streak:0,done:!1,color:t[b.length%t.length]}])),localStorage.setItem("goalList",JSON.stringify(b)),g(!1),o(""))}})),r.a.createElement("main",{className:"justify-center"},r.a.createElement(m,{ref:J,setGoalList:w,items:b,handleDone:function(e){var t=e.target.dataset.index,n=Object(l.a)(b);n[t].done?(n[t].done=!1,Object(s.a)(j)&&(n[t].streak-=1)):(n[t].done=!0,n[t].streak+=1),w(n)},handleRemove:function(e){if(window.confirm("Are you sure you would like to remove this goal?")){var t=e.target.dataset.index,n=Object(l.a)(b);n.splice(t,1),w(n)}}})))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/habit-builder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/habit-builder","/service-worker.js");v?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()},8:function(e,t,n){e.exports=n(27)}},[[8,1,2]]]);
//# sourceMappingURL=main.43ea56c4.chunk.js.map
