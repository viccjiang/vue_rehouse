(function(e){function n(n){for(var c,a,u=n[0],d=n[1],i=n[2],h=0,l=[];h<u.length;h++)a=u[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2cab8da2":"73e93f8a","chunk-2d0b1dc8":"99cb3c3f","chunk-5da4da18":"495a41d2","chunk-6e222881":"deb4a7c9","chunk-e5c7213e":"199cadca","chunk-2d0e5e97":"f7dc3dde","chunk-2d209573":"937b9a7c","chunk-44e12390":"53dc4901","chunk-16131ef4":"913a314d","chunk-2d0d63f1":"9e9e1444","chunk-5121dc76":"8d4d4baf","chunk-499380e4":"3b280f61","chunk-684b411b":"21947b5b","chunk-350b5ac8":"16a134f3","chunk-74dbbf61":"ef11b579","chunk-c868f332":"dac27fa5","chunk-f62cb728":"1fae8119","chunk-6e0123a1":"53e9e888","chunk-79e8b838":"0f0342a9","chunk-978874ca":"45eac66d"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-5da4da18":1,"chunk-6e222881":1,"chunk-e5c7213e":1,"chunk-16131ef4":1,"chunk-5121dc76":1,"chunk-499380e4":1,"chunk-f62cb728":1,"chunk-6e0123a1":1,"chunk-79e8b838":1,"chunk-978874ca":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2cab8da2":"31d6cfe0","chunk-2d0b1dc8":"31d6cfe0","chunk-5da4da18":"221c9c3e","chunk-6e222881":"36ccc771","chunk-e5c7213e":"2532161f","chunk-2d0e5e97":"31d6cfe0","chunk-2d209573":"31d6cfe0","chunk-44e12390":"31d6cfe0","chunk-16131ef4":"061e93be","chunk-2d0d63f1":"31d6cfe0","chunk-5121dc76":"6066d112","chunk-499380e4":"a9c51901","chunk-684b411b":"31d6cfe0","chunk-350b5ac8":"31d6cfe0","chunk-74dbbf61":"31d6cfe0","chunk-c868f332":"31d6cfe0","chunk-f62cb728":"6066d112","chunk-6e0123a1":"50ff266a","chunk-79e8b838":"50ff266a","chunk-978874ca":"d26ba0a2"}[e]+".css",r=d.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===r))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],h=i.getAttribute("data-href");if(h===c||h===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],f.parentNode.removeChild(f),t(o)},f.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=u(e);var l=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/vue_rehouse/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("159b"),t("b64b");var c=t("7a23"),a=(t("7b17"),t("f5af")),r=t.n(a),o=(t("cd74"),t("bc3a")),u=t.n(o),d=t("130e"),i=t("9062"),h=t.n(i),l=(t("e40d"),t("f9d5")),f=t.n(l),s=(t("4413"),t("7bb1")),b=t("3aa8"),p=t("cbdf"),k=t("9457");function m(e,n,t,a,r,o){var u=Object(c["resolveComponent"])("RouterView");return Object(c["openBlock"])(),Object(c["createBlock"])(u)}var g=t("cfb9"),v=(t("a15b"),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(e.data.success)g["a"].emit("push-message",{style:"soft",title:"".concat(n,"成功")});else{var t="string"===typeof e.data.message?[e.data.message]:e.data.message;g["a"].emit("push-message",{style:"danger",title:"".concat(n,"失敗"),content:t.join("、")})}}),y={provide:function(){return{emitter:g["a"],$httpMessageState:v}}},O=(t("bcc1"),t("6b0d")),j=t.n(O);const P=j()(y,[["render",m]]);var w=P,C=(t("3ca3"),t("ddb0"),t("6c02")),E=[{path:"/",component:function(){return Promise.all([t.e("chunk-44e12390"),t.e("chunk-16131ef4")]).then(t.bind(null,"6c7d"))},children:[{path:"",name:"Home",component:function(){return Promise.all([t.e("chunk-5da4da18"),t.e("chunk-499380e4")]).then(t.bind(null,"bb51"))}},{path:"about",name:"about",component:function(){return t.e("chunk-6e0123a1").then(t.bind(null,"0d5c"))}},{path:"products",name:"products",component:function(){return Promise.all([t.e("chunk-2cab8da2"),t.e("chunk-e5c7213e")]).then(t.bind(null,"3e2b"))}},{path:"product/:id",name:"product/:id",component:function(){return Promise.all([t.e("chunk-2cab8da2"),t.e("chunk-2d0b1dc8")]).then(t.bind(null,"223e"))}},{path:"cart",name:"cart",component:function(){return Promise.all([t.e("chunk-684b411b"),t.e("chunk-f62cb728")]).then(t.bind(null,"76db"))}},{path:"check/:orderId",name:"check/:orderId",component:function(){return t.e("chunk-5121dc76").then(t.bind(null,"0ac1"))}},{path:"faq",name:"faq",component:function(){return t.e("chunk-2d209573").then(t.bind(null,"a949"))}},{path:"contact",name:"contact",component:function(){return t.e("chunk-79e8b838").then(t.bind(null,"0958"))}},{path:"favorite",name:"favorite",component:function(){return Promise.all([t.e("chunk-2cab8da2"),t.e("chunk-5da4da18"),t.e("chunk-6e222881")]).then(t.bind(null,"2e54"))}}]},{path:"/login",component:function(){return t.e("chunk-978874ca").then(t.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return Promise.all([t.e("chunk-44e12390"),t.e("chunk-2d0d63f1")]).then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-684b411b"),t.e("chunk-c868f332")]).then(t.bind(null,"e6dc"))}},{path:"orders",component:function(){return Promise.all([t.e("chunk-684b411b"),t.e("chunk-350b5ac8")]).then(t.bind(null,"159d"))}},{path:"coupons",component:function(){return Promise.all([t.e("chunk-684b411b"),t.e("chunk-74dbbf61")]).then(t.bind(null,"f329"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}}],S=Object(C["a"])({history:Object(C["b"])(),linkActiveClass:"active",routes:E,scrollBehavior:function(){return{top:0}}}),_=S;t("ac1f"),t("5319"),t("b680");function M(e){var n=parseInt(e,10);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){return n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function B(e){var n=new Date(1e3*e);return n.toLocaleDateString()}t("e829");var T=Object(c["createApp"])(w);T.config.globalProperties.$filters={currency:M,date:B},Object.keys(b["a"]).forEach((function(e){Object(s["e"])(e,b["a"][e])})),Object(s["d"])({generateMessage:Object(p["a"])({zh_TW:k}),validateOnInput:!0}),Object(p["b"])("zh_TW"),T.config.globalProperties.$httpMessageState=v;var x={confirmButtonColor:"#236F6B",cancelButtonColor:"#EE847D"};T.use({install:function(){r.a.init({disable:!1,startEvent:"load",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:400,easing:"ease-in-out-quad",once:!1,mirror:!1,anchorPlacement:"top-bottom"})}}),T.use(d["a"],u.a),T.use(f.a,x),T.use(_),T.component("Loading",h.a),T.component("Form",s["c"]),T.component("Field",s["b"]),T.component("ErrorMessage",s["a"]),T.mount("#app")},b86b:function(e,n,t){},bcc1:function(e,n,t){"use strict";t("b86b")},cfb9:function(e,n,t){"use strict";var c=t("1344"),a=Object(c["a"])();n["a"]=a}});
//# sourceMappingURL=app.1aff5b14.js.map