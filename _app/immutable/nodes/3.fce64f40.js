import{a as bt,e as yt,b as It,c as Ot,d as xt,H as Et}from"../chunks/Hero.7404cff5.js";import{S as nt,i as at,s as ot,k as x,l as E,m as S,h as b,n as I,b as V,F as N,M as St,a as W,q as H,c as q,r as C,E as _,u as st,G as B,y as Y,z as X,A as J,g as K,d as Q,B as Z}from"../chunks/index.a2982970.js";/* empty css                    */const Mt=!1,Ut=async({params:p})=>{const n=await bt();if(n)return{ims:n};throw yt(404,"Not found")},Wt=Object.freeze(Object.defineProperty({__proto__:null,load:Ut,ssr:Mt},Symbol.toStringTag,{value:"Module"}));var lt={exports:{}};(function(p,n){(function(o,a){p.exports=a()})(Ot,function(){function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},o.apply(this,arguments)}function a(t,e){if(t){if(typeof t=="string")return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}}function s(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function h(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=a(t))||e&&t&&typeof t.length=="number"){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function w(t){var e=t.split("-"),i=e[1],r=e[2],c=e[3];if(!i||!r||!c)throw new Error("Malformed asset _ref '"+t+`'. Expected an id like "`+l+'".');var f=r.split("x"),g=f[0],O=f[1],A=+g,M=+O,U=isFinite(A)&&isFinite(M);if(!U)throw new Error("Malformed asset _ref '"+t+`'. Expected an id like "`+l+'".');return{id:i,width:A,height:M,format:c}}var v=function(e){var i=e;return i?typeof i._ref=="string":!1},u=function(e){var i=e;return i?typeof i._id=="string":!1},d=function(e){var i=e;return i&&i.asset?typeof i.asset.url=="string":!1};function m(t){if(!t)return null;var e;if(typeof t=="string"&&y(t))e={asset:{_ref:$(t)}};else if(typeof t=="string")e={asset:{_ref:t}};else if(v(t))e={asset:t};else if(u(t))e={asset:{_ref:t._id||""}};else if(d(t))e={asset:{_ref:$(t.asset.url)}};else if(typeof t.asset=="object")e=o({},t);else return null;var i=t;return i.crop&&(e.crop=i.crop),i.hotspot&&(e.hotspot=i.hotspot),R(e)}function y(t){return/^https?:\/\//.test(""+t)}function $(t){var e=t.split("/").slice(-1);return("image-"+e[0]).replace(/\.([a-z]+)$/,"-$1")}function R(t){if(t.crop&&t.hotspot)return t;var e=o({},t);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}var z=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function D(t){var e=o({},t||{}),i=e.source;delete e.source;var r=m(i);if(!r)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(i)+")");var c=r.asset._ref||r.asset._id||"",f=w(c),g=Math.round(r.crop.left*f.width),O=Math.round(r.crop.top*f.height),A={left:g,top:O,width:Math.round(f.width-r.crop.right*f.width-g),height:Math.round(f.height-r.crop.bottom*f.height-O)},M=r.hotspot.height*f.height/2,U=r.hotspot.width*f.width/2,P=r.hotspot.x*f.width,T=r.hotspot.y*f.height,j={left:P-U,top:T-M,right:P+U,bottom:T+M};return e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e=o({},e,ft({crop:A,hotspot:j},e))),ht(o({},e,{asset:f}))}function ht(t){var e=(t.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),i=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,r=e+"/images/"+t.projectId+"/"+t.dataset+"/"+i,c=[];if(t.rect){var f=t.rect,g=f.left,O=f.top,A=f.width,M=f.height,U=g!==0||O!==0||M!==t.asset.height||A!==t.asset.width;U&&c.push("rect="+g+","+O+","+A+","+M)}t.bg&&c.push("bg="+t.bg),t.focalPoint&&(c.push("fp-x="+t.focalPoint.x),c.push("fp-y="+t.focalPoint.y));var P=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return P&&c.push("flip="+P),z.forEach(function(T){var j=T[0],k=T[1];typeof t[j]<"u"?c.push(k+"="+encodeURIComponent(t[j])):typeof t[k]<"u"&&c.push(k+"="+encodeURIComponent(t[k]))}),c.length===0?r:r+"?"+c.join("&")}function ft(t,e){var i,r=e.width,c=e.height;if(!(r&&c))return{width:r,height:c,rect:t.crop};var f=t.crop,g=t.hotspot,O=r/c,A=f.width/f.height;if(A>O){var M=Math.round(f.height),U=Math.round(M*O),P=Math.max(0,Math.round(f.top)),T=Math.round((g.right-g.left)/2+g.left),j=Math.max(0,Math.round(T-U/2));j<f.left?j=f.left:j+U>f.left+f.width&&(j=f.left+f.width-U),i={left:j,top:P,width:U,height:M}}else{var k=f.width,L=Math.round(k/O),wt=Math.max(0,Math.round(f.left)),_t=Math.round((g.bottom-g.top)/2+g.top),F=Math.max(0,Math.round(_t-L/2));F<f.top?F=f.top:F+L>f.top+f.height&&(F=f.top+f.height-L),i={left:wt,top:F,width:k,height:L}}return{width:r,height:c,rect:i}}var ut=["clip","crop","fill","fillmax","max","scale","min"],ct=["top","bottom","left","right","center","focalpoint","entropy"],pt=["format"];function dt(t){return t&&"config"in t?typeof t.config=="function":!1}function mt(t){return t&&"clientConfig"in t?typeof t.clientConfig=="object":!1}function gt(t){for(var e=z,i=h(e),r;!(r=i()).done;){var c=r.value,f=c[0],g=c[1];if(t===f||t===g)return f}return t}function vt(t){if(dt(t)){var e=t.config(),i=e.apiHost,r=e.projectId,c=e.dataset,f=i||"https://api.sanity.io";return new G(null,{baseUrl:f.replace(/^https:\/\/api\./,"https://cdn."),projectId:r,dataset:c})}var g=t;if(mt(g)){var O=g.clientConfig,A=O.apiHost,M=O.projectId,U=O.dataset,P=A||"https://api.sanity.io";return new G(null,{baseUrl:P.replace(/^https:\/\/api\./,"https://cdn."),projectId:M,dataset:U})}return new G(null,t)}var G=function(){function t(i,r){this.options=void 0,this.options=i?o({},i.options||{},r||{}):o({},r||{})}var e=t.prototype;return e.withOptions=function(r){var c=r.baseUrl||this.options.baseUrl,f={baseUrl:c};for(var g in r)if(r.hasOwnProperty(g)){var O=gt(g);f[O]=r[g]}return new t(this,o({baseUrl:c},f))},e.image=function(r){return this.withOptions({source:r})},e.dataset=function(r){return this.withOptions({dataset:r})},e.projectId=function(r){return this.withOptions({projectId:r})},e.bg=function(r){return this.withOptions({bg:r})},e.dpr=function(r){return this.withOptions(r&&r!==1?{dpr:r}:{})},e.width=function(r){return this.withOptions({width:r})},e.height=function(r){return this.withOptions({height:r})},e.focalPoint=function(r,c){return this.withOptions({focalPoint:{x:r,y:c}})},e.maxWidth=function(r){return this.withOptions({maxWidth:r})},e.minWidth=function(r){return this.withOptions({minWidth:r})},e.maxHeight=function(r){return this.withOptions({maxHeight:r})},e.minHeight=function(r){return this.withOptions({minHeight:r})},e.size=function(r,c){return this.withOptions({width:r,height:c})},e.blur=function(r){return this.withOptions({blur:r})},e.sharpen=function(r){return this.withOptions({sharpen:r})},e.rect=function(r,c,f,g){return this.withOptions({rect:{left:r,top:c,width:f,height:g}})},e.format=function(r){return this.withOptions({format:r})},e.invert=function(r){return this.withOptions({invert:r})},e.orientation=function(r){return this.withOptions({orientation:r})},e.quality=function(r){return this.withOptions({quality:r})},e.forceDownload=function(r){return this.withOptions({download:r})},e.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},e.flipVertical=function(){return this.withOptions({flipVertical:!0})},e.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},e.fit=function(r){if(ut.indexOf(r)===-1)throw new Error('Invalid fit mode "'+r+'"');return this.withOptions({fit:r})},e.crop=function(r){if(ct.indexOf(r)===-1)throw new Error('Invalid crop mode "'+r+'"');return this.withOptions({crop:r})},e.saturation=function(r){return this.withOptions({saturation:r})},e.auto=function(r){if(pt.indexOf(r)===-1)throw new Error('Invalid auto mode "'+r+'"');return this.withOptions({auto:r})},e.pad=function(r){return this.withOptions({pad:r})},e.url=function(){return D(this.options)},e.toString=function(){return this.url()},t}();return vt})})(lt);var $t=lt.exports;const At=It($t);function tt(p,n,o){const a=p.slice();return a[3]=n[o].image,a[4]=n[o].name,a[5]=n[o].desc,a}function rt(p){let n,o,a,s;return{c(){n=x("figure"),o=x("img"),this.h()},l(h){n=E(h,"FIGURE",{});var l=S(n);o=E(l,"IMG",{src:!0,alt:!0,class:!0,onclick:!0}),l.forEach(b),this.h()},h(){B(o.src,a=p[1](p[3]))||I(o,"src",a),I(o,"alt",s=p[4]),I(o,"class","filter contrast-75 hover:contrast-100 transition duration-300"),I(o,"onclick","this.requestFullscreen()")},m(h,l){V(h,n,l),_(n,o)},p(h,l){l&1&&!B(o.src,a=h[1](h[3]))&&I(o,"src",a),l&1&&s!==(s=h[4])&&I(o,"alt",s)},d(h){h&&b(n)}}}function et(p){let n,o=p[5]+"",a;return{c(){n=x("p"),a=H(o)},l(s){n=E(s,"P",{});var h=S(n);a=C(h,o),h.forEach(b)},m(s,h){V(s,n,h),_(n,a)},p(s,h){h&1&&o!==(o=s[5]+"")&&st(a,o)},d(s){s&&b(n)}}}function it(p){let n,o,a,s,h=p[4]+"",l,w,v,u=p[3].asset&&rt(p),d=p[5]&&et(p);return{c(){n=x("div"),u&&u.c(),o=W(),a=x("div"),s=x("h2"),l=H(h),w=W(),d&&d.c(),v=W(),this.h()},l(m){n=E(m,"DIV",{class:!0});var y=S(n);u&&u.l(y),o=q(y),a=E(y,"DIV",{class:!0});var $=S(a);s=E($,"H2",{class:!0});var R=S(s);l=C(R,h),R.forEach(b),w=q($),d&&d.l($),$.forEach(b),v=q(y),y.forEach(b),this.h()},h(){I(s,"class","card-title"),I(a,"class","card-body"),I(n,"class","card bg-base-100 shadow-xl")},m(m,y){V(m,n,y),u&&u.m(n,null),_(n,o),_(n,a),_(a,s),_(s,l),_(a,w),d&&d.m(a,null),_(n,v)},p(m,y){m[3].asset?u?u.p(m,y):(u=rt(m),u.c(),u.m(n,o)):u&&(u.d(1),u=null),y&1&&h!==(h=m[4]+"")&&st(l,h),m[5]?d?d.p(m,y):(d=et(m),d.c(),d.m(a,null)):d&&(d.d(1),d=null)},d(m){m&&b(n),u&&u.d(),d&&d.d()}}}function jt(p){let n,o=p[0],a=[];for(let s=0;s<o.length;s+=1)a[s]=it(tt(p,o,s));return{c(){n=x("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){n=E(s,"DIV",{class:!0});var h=S(n);for(let l=0;l<a.length;l+=1)a[l].l(h);h.forEach(b),this.h()},h(){I(n,"class","grid lg:grid-cols-4 md:grid-cols-1 gap-10")},m(s,h){V(s,n,h);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(n,null)},p(s,[h]){if(h&3){o=s[0];let l;for(l=0;l<o.length;l+=1){const w=tt(s,o,l);a[l]?a[l].p(w,h):(a[l]=it(w),a[l].c(),a[l].m(n,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=o.length}},i:N,o:N,d(s){s&&b(n),St(a,s)}}}function Pt(p,n,o){const a=At(xt);let{galleryImages:s}=n;function h(l){return a.image(l).url()}return p.$$set=l=>{"galleryImages"in l&&o(0,s=l.galleryImages)},[s,h]}class Ht extends nt{constructor(n){super(),at(this,n,Pt,jt,ot,{galleryImages:0})}}function Ct(p){let n,o,a,s,h,l,w,v,u,d;return{c(){n=x("ul"),o=x("li"),a=H("Images are all "),s=x("span"),h=H("downscaled"),l=W(),w=x("li"),v=H("Click on images for "),u=x("span"),d=H("fullscreen"),this.h()},l(m){n=E(m,"UL",{class:!0,slot:!0});var y=S(n);o=E(y,"LI",{});var $=S(o);a=C($,"Images are all "),s=E($,"SPAN",{class:!0});var R=S(s);h=C(R,"downscaled"),R.forEach(b),$.forEach(b),l=q(y),w=E(y,"LI",{});var z=S(w);v=C(z,"Click on images for "),u=E(z,"SPAN",{class:!0});var D=S(u);d=C(D,"fullscreen"),D.forEach(b),z.forEach(b),y.forEach(b),this.h()},h(){I(s,"class","font-bold"),I(u,"class","font-bold"),I(n,"class","list-none"),I(n,"slot","pre")},m(m,y){V(m,n,y),_(n,o),_(o,a),_(o,s),_(s,h),_(n,l),_(n,w),_(w,v),_(w,u),_(u,d)},p:N,d(m){m&&b(n)}}}function Rt(p){let n,o,a,s;return{c(){n=x("p"),o=H(`You can consider attributing me, via my Twitter handle
        `),a=x("a"),s=H("@dev_evening"),this.h()},l(h){n=E(h,"P",{class:!0,slot:!0});var l=S(n);o=C(l,`You can consider attributing me, via my Twitter handle
        `),a=E(l,"A",{class:!0,href:!0});var w=S(a);s=C(w,"@dev_evening"),w.forEach(b),l.forEach(b),this.h()},h(){I(a,"class","text-amber-500 italic"),I(a,"href","https://twitter.com/dev_evening"),I(n,"class","py-6 text-lg"),I(n,"slot","post")},m(h,l){V(h,n,l),_(n,o),_(n,a),_(a,s)},p:N,d(h){h&&b(n)}}}function Tt(p){let n,o,a,s,h,l,w;return a=new Et({props:{title:"gallery",$$slots:{post:[Rt],pre:[Ct]},$$scope:{ctx:p}}}),l=new Ht({props:{galleryImages:p[0].ims}}),{c(){n=x("section"),o=x("div"),Y(a.$$.fragment),s=W(),h=x("div"),Y(l.$$.fragment),this.h()},l(v){n=E(v,"SECTION",{});var u=S(n);o=E(u,"DIV",{});var d=S(o);X(a.$$.fragment,d),d.forEach(b),s=q(u),h=E(u,"DIV",{class:!0});var m=S(h);X(l.$$.fragment,m),m.forEach(b),u.forEach(b),this.h()},h(){I(h,"class","max-w-screen-2xl mx-auto p-10")},m(v,u){V(v,n,u),_(n,o),J(a,o,null),_(n,s),_(n,h),J(l,h,null),w=!0},p(v,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:v}),a.$set(d);const m={};u&1&&(m.galleryImages=v[0].ims),l.$set(m)},i(v){w||(K(a.$$.fragment,v),K(l.$$.fragment,v),w=!0)},o(v){Q(a.$$.fragment,v),Q(l.$$.fragment,v),w=!1},d(v){v&&b(n),Z(a),Z(l)}}}function kt(p,n,o){let{data:a}=n;return p.$$set=s=>{"data"in s&&o(0,a=s.data)},[a]}class qt extends nt{constructor(n){super(),at(this,n,kt,Tt,ot,{data:0})}}export{qt as component,Wt as universal};
