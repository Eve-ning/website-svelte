import{S as w,i as H,s as K,k as m,q as I,a as E,l as _,m as b,r as $,h as c,c as x,n as y,b as k,E as h,F as M,M as P,G as V,y as W,z as q,A as D,g as F,d as T,B as A}from"../chunks/index.a2982970.js";import{b as U}from"../chunks/paths.af6c12a5.js";function G(g,a,l){const r=g.slice();return r[1]=a[l].path,r[2]=a[l].title,r[3]=a[l].desc,r}function z(g){let a,l=g[3]+"",r;return{c(){a=m("p"),r=I(l)},l(n){a=_(n,"P",{});var o=b(a);r=$(o,l),o.forEach(c)},m(n,o){k(n,a,o),h(a,r)},p:M,d(n){n&&c(a)}}}function N(g){let a,l,r,n,o,f,u,d=g[2]+"",v,i,t,s=g[3]&&z(g);return{c(){a=m("div"),l=m("figure"),r=m("img"),o=E(),f=m("div"),u=m("h2"),v=I(d),i=E(),s&&s.c(),t=E(),this.h()},l(e){a=_(e,"DIV",{class:!0});var p=b(a);l=_(p,"FIGURE",{});var j=b(l);r=_(j,"IMG",{src:!0,alt:!0,class:!0,onclick:!0}),j.forEach(c),o=x(p),f=_(p,"DIV",{class:!0});var S=b(f);u=_(S,"H2",{class:!0});var C=b(u);v=$(C,d),C.forEach(c),i=x(S),s&&s.l(S),S.forEach(c),t=x(p),p.forEach(c),this.h()},h(){V(r.src,n=U+"/"+g[1])||y(r,"src",n),y(r,"alt","kurogane"),y(r,"class","filter contrast-75 hover:contrast-100 transition duration-300"),y(r,"onclick","this.requestFullscreen()"),y(u,"class","card-title"),y(f,"class","card-body"),y(a,"class","card bg-base-100 shadow-xl")},m(e,p){k(e,a,p),h(a,l),h(l,r),h(a,o),h(a,f),h(f,u),h(u,v),h(f,i),s&&s.m(f,null),h(a,t)},p(e,p){e[3]&&s.p(e,p)},d(e){e&&c(a),s&&s.d()}}}function B(g){let a,l,r,n,o,f,u,d,v=g[0],i=[];for(let t=0;t<v.length;t+=1)i[t]=N(G(g,v,t));return{c(){a=m("div"),l=m("p"),r=I("Click on any Image to expand it :)"),n=E(),o=m("p"),f=I("Images are scaled to 1280x720"),u=E(),d=m("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){a=_(t,"DIV",{class:!0});var s=b(a);l=_(s,"P",{});var e=b(l);r=$(e,"Click on any Image to expand it :)"),e.forEach(c),n=x(s),o=_(s,"P",{});var p=b(o);f=$(p,"Images are scaled to 1280x720"),p.forEach(c),s.forEach(c),u=x(t),d=_(t,"DIV",{class:!0});var j=b(d);for(let S=0;S<i.length;S+=1)i[S].l(j);j.forEach(c),this.h()},h(){y(a,"class","rounded-full border shadow p-3 m-3 text-center"),y(d,"class","grid lg:grid-cols-4 md:grid-cols-1 gap-10")},m(t,s){k(t,a,s),h(a,l),h(l,r),h(a,n),h(a,o),h(o,f),k(t,u,s),k(t,d,s);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(d,null)},p(t,[s]){if(s&1){v=t[0];let e;for(e=0;e<v.length;e+=1){const p=G(t,v,e);i[e]?i[e].p(p,s):(i[e]=N(p),i[e].c(),i[e].m(d,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=v.length}},i:M,o:M,d(t){t&&c(a),t&&c(u),t&&c(d),P(i,t)}}}function J(g){return[[{path:"bg/cat (1).jpg",title:"My Cat, Mao Mao"},{path:"bg/cat (2).jpg",title:"My Cat, Mao Mao"},{path:"bg/hafary (1).jpg",title:"Singapore, Hafary Gallery"},{path:"bg/hafary (2).jpg",title:"Singapore, Hafary Gallery"},{path:"bg/hafary (3).jpg",title:"Singapore, Hafary Gallery"},{path:"bg/hafary (4).jpg",title:"Singapore, Hafary Gallery"},{path:"bg/hafary (5).jpg",title:"Singapore, Hafary Gallery"},{path:"bg/kallang (1).jpg",title:"Singapore, Near Kallang Wave",desc:"Colour Corrected"},{path:"bg/kallang (2).jpg",title:"Singapore, Near Kallang Wave"},{path:"bg/kallang (3).jpg",title:"Singapore, Near Kallang Wave"},{path:"bg/kallang (4).jpg",title:"Singapore, Near Kallang Wave"},{path:"bg/kallang (5).jpg",title:"Singapore, Near Kallang Wave"},{path:"bg/kurogane.jpg",title:"Sailor's 110th Anniversary Pen, Kurogane"},{path:"bg/ntu.jpg",title:"Singapore, Changi Jewel"},{path:"bg/star vista.jpg",title:"Singapore, NTU"},{path:"bg/wheelock.jpg",title:"Singapore, The Star Vista"}]]}class O extends w{constructor(a){super(),H(this,a,J,B,K,{})}}function R(g){let a,l,r;return l=new O({}),{c(){a=m("section"),W(l.$$.fragment),this.h()},l(n){a=_(n,"SECTION",{class:!0});var o=b(a);q(l.$$.fragment,o),o.forEach(c),this.h()},h(){y(a,"class","max-w-screen-lg mx-auto py-20")},m(n,o){k(n,a,o),D(l,a,null),r=!0},p:M,i(n){r||(F(l.$$.fragment,n),r=!0)},o(n){T(l.$$.fragment,n),r=!1},d(n){n&&c(a),A(l)}}}class X extends w{constructor(a){super(),H(this,a,null,R,K,{})}}export{X as component};
