(this["webpackJsonpupload-progress"]=this["webpackJsonpupload-progress"]||[]).push([[0],{23:function(e,t,a){},28:function(e,t,a){e.exports={wrapper:"UploadProgress_wrapper__2evYv",closeButton:"UploadProgress_closeButton__15Ye9"}},29:function(e,t,a){e.exports=a(61)},39:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),o=a.n(l),c=a(6),s=a(3),i=a(25),u=(a(39),a(12)),p=a.n(u),f=a(26),E=a(27),d=a.n(E),m={SET_UPLOAD_FILE:"SET_UPLOAD_FILE",SET_UPLOAD_PROGRESS:"SET_UPLOAD_PROGRESS",SUCCESS_UPLOAD_FILE:"SUCCESS_UPLOAD_FILE",FAILURE_UPLOAD_FILE:"FAILURE_UPLOAD_FILE"},O=function(e,t){return{type:m.SET_UPLOAD_PROGRESS,payload:{id:e,progress:t}}},_=function(e){return{type:m.FAILURE_UPLOAD_FILE,payload:e}},g=a(5),b=a(7),h=a.n(b),P=function(e){var t=e.file,a=t.file,r=t.progress;return n.a.createElement("div",{className:h.a.wrapperItem},n.a.createElement("div",{className:h.a.leftSide},n.a.createElement("div",{className:h.a.progressBar},n.a.createElement("div",{style:{width:"".concat(r,"%")}})),n.a.createElement("label",null,a.name)),n.a.createElement("span",{className:h.a.percentage},r,"%"))},U=a(28),j=a.n(U),v=Object(c.b)((function(e){return{fileProgress:e.UploadFile.fileProgress}}),(function(e){return{uploadFile:function(t){return e(function(e){return function(t){e.length&&e.forEach(function(){var e=Object(f.a)(p.a.mark((function e(a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",a.file),e.prev=2,e.next=5,d()({baseURL:"http://localhost:5000",url:"/file",method:"post",data:r,onUploadProgress:function(e){var r=e.loaded,n=e.total,l=Math.floor(r/n*100);t(O(a.id,l))}});case 5:t((n=a.id,{type:m.SUCCESS_UPLOAD_FILE,payload:n})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t(_(a.id));case 11:case"end":return e.stop()}var n}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}())}}(t))}}}))((function(e){var t=e.fileProgress,a=e.uploadFile,l=Object(g.size)(t);return Object(r.useEffect)((function(){var e=Object(g.toArray)(t).filter((function(e){return 0===e.progress}));a(e)}),[l]),l>0?n.a.createElement("div",{className:j.a.wrapper},n.a.createElement("h4",null,"Uploading File"),Object(g.size)(t)?Object(g.toArray)(t).map((function(e){return n.a.createElement(P,{key:e.id,file:e})})):null):null})),L=(a(59),a(23),function(){return n.a.createElement("header",null,n.a.createElement("h1",null,"Upload de arquivos"))}),S=(a(60),function(){return n.a.createElement("footer",null,n.a.createElement("h1",null,"Desenvolvedores"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/JoseCarlos69"},"Jos\xe9 Carlos")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/RachMor"},"Raquel Moreira")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/nicoringa"},"Nicolas Moura ")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/Mmotta18"},"Matheus Motta")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/leoorodr"},"Leonardo Rodrigues")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/Thekid666"},"Jo\xe3o Vitor"))))});var y=Object(c.b)(null,(function(e){return{setUploadFile:function(t){return e({type:m.SET_UPLOAD_FILE,payload:t})}}}))((function(e){return n.a.createElement("div",null,n.a.createElement(L,null),n.a.createElement("main",null,n.a.createElement("input",{type:"file",multiple:!0,onChange:function(t){e.setUploadFile(t.target.files),t.target.value=""}}),n.a.createElement(v,null)),n.a.createElement(S,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(4),F=a(1),A=function(e,t){for(var a={},r=0;r<t.length;r++){var n=Object(g.size)(e)+r+1;a=Object(F.a)(Object(F.a)({},a),{},Object(I.a)({},n,{id:n,file:t[r],progress:0}))}return a},w={fileProgress:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_UPLOAD_FILE:return Object(F.a)(Object(F.a)({},e),{},{fileProgress:Object(F.a)(Object(F.a)({},e.fileProgress),A(e.fileProgress,t.payload))});case m.SET_UPLOAD_PROGRESS:return Object(F.a)(Object(F.a)({},e),{},{fileProgress:Object(F.a)(Object(F.a)({},e.fileProgress),{},Object(I.a)({},t.payload.id,Object(F.a)(Object(F.a)({},e.fileProgress[t.payload.id]),{},{progress:t.payload.progress})))});case m.SUCCESS_UPLOAD_FILE:return Object(F.a)(Object(F.a)({},e),{},{fileProgress:Object(F.a)(Object(F.a)({},e.fileProgress),{},Object(I.a)({},t.payload,Object(F.a)(Object(F.a)({},e.fileProgress[t.payload]),{},{status:1})))});case m.FAILURE_UPLOAD_FILE:return Object(F.a)(Object(F.a)({},e),{},{fileProgress:Object(F.a)(Object(F.a)({},e.fileProgress),{},Object(I.a)({},t.payload,Object(F.a)(Object(F.a)({},e.fileProgress[t.payload]),{},{status:0,progress:0})))});default:return e}},R=Object(s.c)({UploadFile:D}),C=[i.a],T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,M=Object(s.e)(R,T(s.a.apply(void 0,C)));o.a.render(n.a.createElement(c.a,{store:M},n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports={wrapperItem:"UploadItem_wrapperItem__2ZEiU",leftSide:"UploadItem_leftSide__1CuoW",progressBar:"UploadItem_progressBar__3o2hM",percentage:"UploadItem_percentage__1SRrb"}}},[[29,1,2]]]);
//# sourceMappingURL=main.c1c0575d.chunk.js.map