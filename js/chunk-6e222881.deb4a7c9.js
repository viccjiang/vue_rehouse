(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e222881"],{"00b4":function(e,t,r){"use strict";r("ac1f");var n=r("23e7"),c=r("da84"),o=r("c65b"),i=r("e330"),a=r("1626"),s=r("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),d=c.Error,l=i(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return l(this,e);var r=o(t,this,e);if(null!==r&&!s(r))throw new d("RegExp exec method returned something other than an Object or null");return!!r}})},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3"),r("ac1f"),r("00b4");var n=r("6b75");function c(e,t){if(e){if("string"===typeof e)return Object(n["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(e,t):void 0}}},"263f":function(e,t,r){},2909:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("6b75");function c(e){if(Array.isArray(e))return Object(n["a"])(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var i=r("06c5");r("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return c(e)||o(e)||Object(i["a"])(e)||a()}},"2e54":function(e,t,r){"use strict";r.r(t);r("caad"),r("2532");var n=r("7a23"),c=Object(n["createElementVNode"])("div",{class:"card border-0 rounded-0 bg-dark text-white mb-5"},[Object(n["createElementVNode"])("img",{class:"filters",style:{height:"200px","background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2022vue3/1649504794919.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P7ZQzGOmIGRWYHTLMOccH8wOnkjWVkWo88ElP7olmyQ2THPdx0XefrZtZbkpMH%2B8c%2B7q61Lgp8YDRIQHmoRhdpIizdTXlLdk4Y2Lkr5QAfQViQHZQHQpQkocSSsO8q%2BZY5X5S6IF2xTid9kRtRmp7ZNR%2BeVRhEfbqTVhAlB%2FGwY8qU3tYwxotUoL9SF9hogTdgECCzrTtza7oonnnMjJ1yU0f5f8mvUWV4NjhVDRQLRy1Fii4HAV1b%2BHKQF29ZBVNgKb7NFg9%2FiUhxHBzKN1o4n3AntfL1mYvCnDMxC03rUZw3clcMxSwc8RHIKComeu2PBfpFCA%2BYljJpXtoiokxw%3D%3D)","background-size":"cover","background-position":"center bottom","background-attachment":"fixed"}}),Object(n["createElementVNode"])("div",{class:"card-img-overlay d-flex flex-column justify-content-center align-item-center"},[Object(n["createElementVNode"])("h1",{class:"card-title text-center fw-bold"},"願望清單")])],-1),o={class:"container mt-0 mt-md-10 mb-0 mb-md-10"},i={class:"g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 flex-column justify-content-center flex-md-row"},a={key:0,class:"d-flex flex-column justify-content-center align-items-center"},s=Object(n["createElementVNode"])("h3",{class:"text-center mb-2 pb-3"},"目前沒有收藏任何商品",-1),u=Object(n["createElementVNode"])("i",{class:"bi bi-bag"},null,-1),d=Object(n["createTextVNode"])(" 來去收藏喜歡的商品 "),l={class:"card h-100 rounded-0 position-relative"},f=["onClick"],b={key:0,style:{"z-index":"1"},class:"fs-4 bi-suit-heart-fill position-absolute top-0 end-0 me-2 mt-1 text-danger"},m={key:1,style:{"z-index":"1"},class:"fs-4 bi bi-suit-heart position-absolute top-0 end-0 me-2 mt-1 text-white"},p=["onClick"],v={class:"card-body"},h={class:"badge bg-soft text-center text-light"},g={class:"card-title mb-3"},y={class:"mb-3 d-flex flex-column justify-content-end align-items-start"},j={key:0,class:"h5 list-inline-item"},O={key:1,class:"fs-7 list-inline-item text-secondary"},k={key:2,class:"fs-6 text-danger fw-bold"},x={class:"d-grid d-md-flex justify-content-md-between"},E=["onClick"],w=["disabled","onClick"],N={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"},V=Object(n["createElementVNode"])("span",{class:"visually-hidden"},"Loading...",-1),B=[V],C=Object(n["createTextVNode"])(" 加到購物車 ");function S(e,t,r,V,S,F){var I=this,R=Object(n["resolveComponent"])("Loading"),A=Object(n["resolveComponent"])("RouterLink"),L=Object(n["resolveComponent"])("RecommendSwiper");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(R,{active:e.isLoading,loader:"bars",color:"#236F6B"},null,8,["active"]),c,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",i,[0===S.favorites.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[s,Object(n["createVNode"])(A,{to:"/products",class:"btn btn-soft mb-5 mb-md-0"},{default:Object(n["withCtx"])((function(){return[u,d]})),_:1})])):(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:1},Object(n["renderList"])(S.favorites,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"col",key:t.id},[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("a",{href:"#",onClick:Object(n["withModifiers"])((function(e){return F.addMyFavorite(t)}),["prevent"]),class:Object(n["normalizeClass"])([{active:S.myFavorite.includes(t.id)},"link-secondary d-block rounded-0"])},[S.myFavorite.includes(t.id)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",b)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",m))],10,f),Object(n["createElementVNode"])("a",{href:"#",class:"img-card rounded-0",onClick:Object(n["withModifiers"])((function(e){return F.getProduct(t.id)}),["prevent"])},[Object(n["createElementVNode"])("div",{class:"card-imageUrl rounded-0",style:Object(n["normalizeStyle"])([{height:"300px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)],8,p),Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("p",h,Object(n["toDisplayString"])(t.category),1),Object(n["createElementVNode"])("h5",g,Object(n["toDisplayString"])(t.title),1),Object(n["createElementVNode"])("div",y,[t.price?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,Object(n["toDisplayString"])(t.origin_price)+" 元 ",1)),t.price?(Object(n["openBlock"])(),Object(n["createElementBlock"])("del",O,"原價 NT$ "+Object(n["toDisplayString"])(e.$filters.currency(t.origin_price))+" 元",1)):Object(n["createCommentVNode"])("",!0),t.price?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",k," NT$ "+Object(n["toDisplayString"])(e.$filters.currency(t.price))+" 元 ",1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",x,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary rounded-0 border w-100 mb-3 mb-md-0",type:"button",onClick:function(e){return F.getProduct(t.id)}}," 查看更多 ",8,E),Object(n["createElementVNode"])("button",{class:"btn btn-soft text-light rounded-0 border-0 w-100",type:"button",disabled:I.status.loadingItem===t.id,onClick:function(e){return F.addCart(t.id)}},[I.status.loadingItem===t.id?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",N,B)):Object(n["createCommentVNode"])("",!0),C],8,w)])])])])})),128))])]),Object(n["createVNode"])(L)],64)}var F=r("2909"),I=(r("99af"),r("a434"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("159b"),r("4de4"),r("ac1f"),r("466d"),r("cfb9")),R=r("6dc5"),A=r("b583"),L={data:function(){return{products:[],product:{},pagination:{},status:{loadingItem:""},categories:[],selectCategory:"",myFavorite:A["a"].get()||[],favorites:[]}},components:{RecommendSwiper:R["a"]},provide:function(){return{emitter:I["a"]}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){e.products=t.data.products,e.isLoading=!1,t.data.success&&(e.products=t.data.products,e.getFavorites())}))},getFavorites:function(){this.favorites=[];for(var e=JSON.parse(localStorage.getItem("hexFavorite"))||[],t=0;t<this.products.length;t+=1)for(var r=0;r<e.length;r+=1)this.products[t].id===e[r]&&this.favorites.push(this.products[t])},addMyFavorite:function(e){this.myFavorite.includes(e.id)?(this.myFavorite.splice(this.myFavorite.indexOf(e.id),1),this.getFavorites(),this.getProducts()):this.myFavorite.push(e.id)},getCategories:function(){var e=new Set;this.products.forEach((function(t){e.add(t.category)})),this.categories=Object(F["a"])(e)},getProduct:function(e){this.$router.push("/product/".concat(e))},addCart:function(e){var t=this,r="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart");this.status.loadingItem=e;var n={product_id:e,qty:1};this.$http.post(r,{data:n}).then((function(){t.status.loadingItem="",I["a"].emit("update-cart")}))}},watch:{myFavorite:{handler:function(){A["a"].save(this.myFavorite),I["a"].emit("update-favorite")},deep:!0}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return t.category.match(e.selectCategory)}))}},created:function(){this.getProducts()}},z=(r("d2d6"),r("6b0d")),T=r.n(z);const P=T()(L,[["render",S]]);t["default"]=P},"466d":function(e,t,r){"use strict";var n=r("c65b"),c=r("d784"),o=r("825a"),i=r("50c4"),a=r("577e"),s=r("1d80"),u=r("dc4a"),d=r("8aa5"),l=r("14c3");c("match",(function(e,t,r){return[function(t){var r=s(this),c=void 0==t?void 0:u(t,e);return c?n(c,t,r):new RegExp(t)[e](a(r))},function(e){var n=o(this),c=a(e),s=r(t,n,c);if(s.done)return s.value;if(!n.global)return l(n,c);var u=n.unicode;n.lastIndex=0;var f,b=[],m=0;while(null!==(f=l(n,c))){var p=a(f[0]);b[m]=p,""===p&&(n.lastIndex=d(c,i(n.lastIndex),u)),m++}return 0===m?null:b}]}))},"4df4":function(e,t,r){"use strict";var n=r("da84"),c=r("0366"),o=r("c65b"),i=r("7b0b"),a=r("9bdd"),s=r("e95a"),u=r("68ee"),d=r("07fa"),l=r("8418"),f=r("9a1f"),b=r("35a1"),m=n.Array;e.exports=function(e){var t=i(e),r=u(this),n=arguments.length,p=n>1?arguments[1]:void 0,v=void 0!==p;v&&(p=c(p,n>2?arguments[2]:void 0));var h,g,y,j,O,k,x=b(t),E=0;if(!x||this==m&&s(x))for(h=d(t),g=r?new this(h):m(h);h>E;E++)k=v?p(t[E],E):t[E],l(g,E,k);else for(j=f(t,x),O=j.next,g=r?new this:[];!(y=o(O,j)).done;E++)k=v?a(j,p,[y.value,E],!0):y.value,l(g,E,k);return g.length=E,g}},"6b75":function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},"9bdd":function(e,t,r){var n=r("825a"),c=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){c(e,"throw",i)}}},a630:function(e,t,r){var n=r("23e7"),c=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:c})},ab36:function(e,t,r){var n=r("861d"),c=r("9112");e.exports=function(e,t){n(t)&&"cause"in t&&c(e,"cause",t.cause)}},b0c0:function(e,t,r){var n=r("83ab"),c=r("5e77").EXISTS,o=r("e330"),i=r("9bf2").f,a=Function.prototype,s=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(u.exec),l="name";n&&!c&&i(a,l,{configurable:!0,get:function(){try{return d(u,s(this))[1]}catch(e){return""}}})},b980:function(e,t,r){var n=r("d039"),c=r("5c6c");e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",c(1,7)),7!==e.stack)}))},c770:function(e,t,r){var n=r("e330"),c=n("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,a=i.test(o);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=c(e,i,"");return e}},d28b:function(e,t,r){var n=r("746f");n("iterator")},d2d6:function(e,t,r){"use strict";r("263f")},d9e2:function(e,t,r){var n=r("23e7"),c=r("da84"),o=r("2ba4"),i=r("e5cb"),a="WebAssembly",s=c[a],u=7!==Error("e",{cause:7}).cause,d=function(e,t){var r={};r[e]=i(e,t,u),n({global:!0,forced:u},r)},l=function(e,t){if(s&&s[e]){var r={};r[e]=i(a+"."+e,t,u),n({target:a,stat:!0,forced:u},r)}};d("Error",(function(e){return function(t){return o(e,this,arguments)}})),d("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),d("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),d("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),d("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),d("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),d("URIError",(function(e){return function(t){return o(e,this,arguments)}})),l("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),l("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),l("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},e391:function(e,t,r){var n=r("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},e5cb:function(e,t,r){"use strict";var n=r("d066"),c=r("1a2d"),o=r("9112"),i=r("3a9b"),a=r("d2bb"),s=r("e893"),u=r("7156"),d=r("e391"),l=r("ab36"),f=r("c770"),b=r("b980"),m=r("c430");e.exports=function(e,t,r,p){var v=p?2:1,h=e.split("."),g=h[h.length-1],y=n.apply(null,h);if(y){var j=y.prototype;if(!m&&c(j,"cause")&&delete j.cause,!r)return y;var O=n("Error"),k=t((function(e,t){var r=d(p?t:e,void 0),n=p?new y(e):new y;return void 0!==r&&o(n,"message",r),b&&o(n,"stack",f(n.stack,2)),this&&i(j,this)&&u(n,this,k),arguments.length>v&&l(n,arguments[v]),n}));if(k.prototype=j,"Error"!==g&&(a?a(k,O):s(k,O,{name:!0})),s(k,y),!m)try{j.name!==g&&o(j,"name",g),j.constructor=k}catch(x){}return k}}},fb6a:function(e,t,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("e8b5"),i=r("68ee"),a=r("861d"),s=r("23cb"),u=r("07fa"),d=r("fc6a"),l=r("8418"),f=r("b622"),b=r("1dde"),m=r("f36a"),p=b("slice"),v=f("species"),h=c.Array,g=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var r,n,c,f=d(this),b=u(f),p=s(e,b),y=s(void 0===t?b:t,b);if(o(f)&&(r=f.constructor,i(r)&&(r===h||o(r.prototype))?r=void 0:a(r)&&(r=r[v],null===r&&(r=void 0)),r===h||void 0===r))return m(f,p,y);for(n=new(void 0===r?h:r)(g(y-p,0)),c=0;p<y;p++,c++)p in f&&l(n,c,f[p]);return n.length=c,n}})}}]);
//# sourceMappingURL=chunk-6e222881.deb4a7c9.js.map