import{S as a,i as c,s as r,a as n,c as h,b as t,d as e,e as s,f as l,g as d,h as o,j as u,l as i,t as p,k as f,m as v,n as g,w as E,o as b,p as z,q as V,r as M,u as m,v as w,x,y as $,z as k,A as H,B as y,C,D as Z}from"./client.1963396c.js";function q(a){return a<.5?4*a*a*a:.5*Math.pow(2*a-2,3)+1}function B(a,{delay:c=0,speed:r,duration:n,easing:h=q}){const t=a.getTotalLength();return void 0===n?n=void 0===r?800:t/r:"function"==typeof n&&(n=n(t)),{delay:c,duration:n,easing:h,css:(a,c)=>`stroke-dasharray: ${a*t} ${c*t}`}}function L(a){let c,r,i,p,f,v,g,E,b,z,V,M,m,w,x,$,k,H,y,C,Z,q,L,j,D,A,I,S,T,_,F,G,J,K,N,O,P,Q,R,U,W,X,Y,aa,ca,ra;return{c(){c=n("g"),r=n("g"),i=n("path"),f=n("path"),g=n("path"),b=n("g"),z=n("path"),M=n("path"),w=n("g"),x=n("path"),k=n("path"),y=n("g"),C=n("path"),q=n("path"),j=n("g"),D=n("path"),I=n("path"),T=n("g"),_=n("path"),G=n("path"),K=n("path"),O=n("g"),P=n("path"),R=n("path"),W=n("g"),X=n("path"),aa=n("path"),this.h()},l(a){c=h(a,"g",{fill:!0,stroke:!0,"stroke-width":!0,"aria-label":!0},1);var n=t(c);r=h(n,"g",{"aria-label":!0},1);var s=t(r);i=h(s,"path",{d:!0},1),t(i).forEach(e),f=h(s,"path",{d:!0},1),t(f).forEach(e),g=h(s,"path",{d:!0},1),t(g).forEach(e),s.forEach(e),b=h(n,"g",{"aria-label":!0},1);var l=t(b);z=h(l,"path",{d:!0},1),t(z).forEach(e),M=h(l,"path",{d:!0},1),t(M).forEach(e),l.forEach(e),w=h(n,"g",{"aria-label":!0},1);var d=t(w);x=h(d,"path",{d:!0},1),t(x).forEach(e),k=h(d,"path",{d:!0},1),t(k).forEach(e),d.forEach(e),y=h(n,"g",{"aria-label":!0},1);var o=t(y);C=h(o,"path",{d:!0},1),t(C).forEach(e),q=h(o,"path",{d:!0},1),t(q).forEach(e),o.forEach(e),j=h(n,"g",{"aria-label":!0},1);var u=t(j);D=h(u,"path",{d:!0},1),t(D).forEach(e),I=h(u,"path",{d:!0},1),t(I).forEach(e),u.forEach(e),T=h(n,"g",{"aria-label":!0},1);var p=t(T);_=h(p,"path",{d:!0},1),t(_).forEach(e),G=h(p,"path",{d:!0},1),t(G).forEach(e),K=h(p,"path",{d:!0},1),t(K).forEach(e),p.forEach(e),O=h(n,"g",{"aria-label":!0},1);var v=t(O);P=h(v,"path",{d:!0},1),t(P).forEach(e),R=h(v,"path",{d:!0},1),t(R).forEach(e),v.forEach(e),W=h(n,"g",{"aria-label":!0},1);var E=t(W);X=h(E,"path",{d:!0},1),t(X).forEach(e),aa=h(E,"path",{d:!0},1),t(aa).forEach(e),E.forEach(e),n.forEach(e),this.h()},h(){s(i,"d","M44.4,78.5H79v22H28L44.4,78.5z"),s(f,"d","M1.5,79.4l37.2-50.1h34.8l-53,71.3h-19V79.4z"),s(g,"d","M3.1,1.5H79v20.4l-1.2,1.6H3.1V1.5z"),s(r,"aria-label","Z"),s(z,"d","M134.3,27.1h26.6v73.4h-26.6V27.1z"),s(M,"d","M96.1,93.7c-1.3-2.3-2.3-5.1-2.7-8.4c-0.5-3.3-0.7-7.4-0.7-12.2V27.1h26.6v34.7c0,5.1,0,8.4,0.1,10.1c0.2,2.4,0.5,4.1,0.9,5.2c0.4,1.1,1,1.7,1.9,1.9c0.9,0.2,2.4,0.4,4.6,0.4h1.4v18c-3.7,2.8-8.6,4.2-14.7,4.2C104.9,101.6,99.1,98.9,96.1,93.7z"),s(b,"aria-label","u"),s(x,"d","M216.2,100.8c-2.2-0.5-4.3-1.6-6.2-3.1V79.4h1.6c2.1,0,3.6-0.1,4.5-0.4c0.9-0.2,1.6-0.8,2.1-1.7c0.5-1.1,0.8-2.6,0.9-4.6c0.1-1.4,0.1-4.4,0.1-8.9c0-4.5,0-7.5-0.1-8.9c-0.1-2.1-0.4-3.6-0.8-4.6c-0.4-1-1.2-1.5-2.2-1.7c-1.3-0.2-2.8-0.3-4.5-0.3H210V30c1.9-1.4,4.1-2.4,6.4-3c2.4-0.6,5.1-0.9,8.3-0.9c3.8,0,7.1,0.6,9.9,1.9c2.7,1.2,5,3.3,6.7,6c3.4,5.6,5,15.4,5,29.5c0,14-1.7,23.9-5,29.7c-3.4,5.6-8.9,8.4-16.6,8.4C221.2,101.6,218.4,101.3,216.2,100.8z"),s(k,"d","M177.3,27.1H204v102.1h-26.6V27.1z"),s(w,"aria-label","p"),s(C,"d","M290.9,56.7H301c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V26h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.7z"),s(q,"d","M275,99.6c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6v18.6c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C287,101.9,280.1,101.1,275,99.6z"),s(y,"aria-label","e"),s(D,"d","M373.5,31.3c2-1.9,4.4-3.3,7.1-4.1c2.7-0.8,6.1-1.2,10.2-1.2v24c-4.3,0-7.8,0.3-10.6,0.9c-2.7,0.6-5,1.6-6.7,3V31.3z"),s(I,"d","M340.8,27.1h26.6v73.4h-26.6V27.1z"),s(j,"aria-label","r"),s(_,"d","M442.4,78.5H477v22h-51L442.4,78.5z"),s(G,"d","M399.5,79.4l37.2-50.1h34.8l-53,71.3h-19V79.4z"),s(K,"d","M401.1,1.5H477v20.4l-1.2,1.6h-74.7V1.5z"),s(T,"aria-label","Z"),s(P,"d","M521.3,56.5h10.1c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V25.8h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.5z"),s(R,"d","M505.4,99.5c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6V99c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C517.4,101.7,510.5,101,505.4,99.5z"),s(O,"aria-label","e"),s(X,"d","M601.5,56.5h10.1c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V25.8h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.5z"),s(aa,"d","M585.6,99.5c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6V99c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C597.6,101.7,590.7,101,585.6,99.5z"),s(W,"aria-label","e"),s(c,"fill","none"),s(c,"stroke","#656769"),s(c,"stroke-width","3"),s(c,"aria-label","ZuperZee")},m(a,n){l(a,c,n),d(c,r),d(r,i),d(r,f),d(r,g),d(c,b),d(b,z),d(b,M),d(c,w),d(w,x),d(w,k),d(c,y),d(y,C),d(y,q),d(c,j),d(j,D),d(j,I),d(c,T),d(T,_),d(T,G),d(T,K),d(c,O),d(O,P),d(O,R),d(c,W),d(W,X),d(W,aa),ra=!0},p(c,r){a=c},i(c){ra||(c&&o((()=>{p||(p=u(i,B,a[1][0],!0)),p.run(1)})),c&&o((()=>{v||(v=u(f,B,a[1][1],!0)),v.run(1)})),c&&o((()=>{E||(E=u(g,B,a[1][2],!0)),E.run(1)})),c&&o((()=>{V||(V=u(z,B,a[1][0],!0)),V.run(1)})),c&&o((()=>{m||(m=u(M,B,a[1][1],!0)),m.run(1)})),c&&o((()=>{$||($=u(x,B,a[1][0],!0)),$.run(1)})),c&&o((()=>{H||(H=u(k,B,a[1][1],!0)),H.run(1)})),c&&o((()=>{Z||(Z=u(C,B,a[1][0],!0)),Z.run(1)})),c&&o((()=>{L||(L=u(q,B,a[1][1],!0)),L.run(1)})),c&&o((()=>{A||(A=u(D,B,a[1][0],!0)),A.run(1)})),c&&o((()=>{S||(S=u(I,B,a[1][1],!0)),S.run(1)})),c&&o((()=>{F||(F=u(_,B,a[1][0],!0)),F.run(1)})),c&&o((()=>{J||(J=u(G,B,a[1][1],!0)),J.run(1)})),c&&o((()=>{N||(N=u(K,B,a[1][2],!0)),N.run(1)})),c&&o((()=>{Q||(Q=u(P,B,a[1][0],!0)),Q.run(1)})),c&&o((()=>{U||(U=u(R,B,a[1][1],!0)),U.run(1)})),c&&o((()=>{Y||(Y=u(X,B,a[1][0],!0)),Y.run(1)})),c&&o((()=>{ca||(ca=u(aa,B,a[1][1],!0)),ca.run(1)})),ra=!0)},o(c){c&&(p||(p=u(i,B,a[1][0],!1)),p.run(0)),c&&(v||(v=u(f,B,a[1][1],!1)),v.run(0)),c&&(E||(E=u(g,B,a[1][2],!1)),E.run(0)),c&&(V||(V=u(z,B,a[1][0],!1)),V.run(0)),c&&(m||(m=u(M,B,a[1][1],!1)),m.run(0)),c&&($||($=u(x,B,a[1][0],!1)),$.run(0)),c&&(H||(H=u(k,B,a[1][1],!1)),H.run(0)),c&&(Z||(Z=u(C,B,a[1][0],!1)),Z.run(0)),c&&(L||(L=u(q,B,a[1][1],!1)),L.run(0)),c&&(A||(A=u(D,B,a[1][0],!1)),A.run(0)),c&&(S||(S=u(I,B,a[1][1],!1)),S.run(0)),c&&(F||(F=u(_,B,a[1][0],!1)),F.run(0)),c&&(J||(J=u(G,B,a[1][1],!1)),J.run(0)),c&&(N||(N=u(K,B,a[1][2],!1)),N.run(0)),c&&(Q||(Q=u(P,B,a[1][0],!1)),Q.run(0)),c&&(U||(U=u(R,B,a[1][1],!1)),U.run(0)),c&&(Y||(Y=u(X,B,a[1][0],!1)),Y.run(0)),c&&(ca||(ca=u(aa,B,a[1][1],!1)),ca.run(0)),ra=!1},d(a){a&&e(c),a&&p&&p.end(),a&&v&&v.end(),a&&E&&E.end(),a&&V&&V.end(),a&&m&&m.end(),a&&$&&$.end(),a&&H&&H.end(),a&&Z&&Z.end(),a&&L&&L.end(),a&&A&&A.end(),a&&S&&S.end(),a&&F&&F.end(),a&&J&&J.end(),a&&N&&N.end(),a&&Q&&Q.end(),a&&U&&U.end(),a&&Y&&Y.end(),a&&ca&&ca.end()}}}function j(a){let c,r,d,o=a[0]&&L(a);return{c(){c=n("svg"),o&&o.c(),this.h()},l(a){c=h(a,"svg",{version:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0},1);var r=t(c);o&&o.l(r),r.forEach(e),this.h()},h(){s(c,"version","1.1"),s(c,"xmlns","http://www.w3.org/2000/svg"),s(c,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(c,"viewBox","0 0 638.2 130.7")},m(a,n){l(a,c,n),o&&o.m(c,null),r||(d=i(c,"click",A),r=!0)},p(a,[r]){a[0]?o?(o.p(a,r),1&r&&p(o,1)):(o=L(a),o.c(),p(o,1),o.m(c,null)):o&&(f(),v(o,1,1,(()=>{o=null})),g())},i(a){p(o)},o(a){v(o)},d(a){a&&e(c),o&&o.d(),r=!1,d()}}}const D=E(!1);function A(){D.set(!b(D))}function I(a,c,r){let n,h=V;z(a,D,(a=>r(0,n=a))),a.$$.on_destroy.push((()=>h()));return[n,[{duration:1e3,easing:M},{delay:200,duration:900,easing:M},{delay:400,duration:800,easing:M}]]}class S extends a{constructor(a){super(),c(this,a,I,j,r,{})}}function T(a){let c,r,n,d,o;return d=new S({}),{c(){c=m(),r=w("div"),n=m(),x(d.$$.fragment),this.h()},l(a){$('[data-svelte="svelte-rk08qt"]',document.head).forEach(e),c=k(a),r=h(a,"DIV",{class:!0}),t(r).forEach(e),n=k(a),H(d.$$.fragment,a),this.h()},h(){document.title="ZuperZee",s(r,"class","spacer svelte-1bzq83r")},m(a,h){l(a,c,h),l(a,r,h),l(a,n,h),y(d,a,h),o=!0},p:V,i(a){o||(p(d.$$.fragment,a),o=!0)},o(a){v(d.$$.fragment,a),o=!1},d(a){a&&e(c),a&&e(r),a&&e(n),C(d,a)}}}function _(a){return Z((()=>{D.set(!0)})),[]}export default class extends a{constructor(a){super(),c(this,a,_,T,r,{})}}