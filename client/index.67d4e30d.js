import{S as t,i as e,s,x as a,A as r,B as n,t as $,m,C as o,v as f,E as l,u as c,c as i,b as g,F as h,d as u,z as p,e as d,f as v,g as x}from"./client.1963396c.js";import w from"./Button.5995c123.js";import T from"./ThemeContext.349a2e6e.js";import j from"./ThemeToggle.fd143756.js";function E(t){let e,s,T,E,S,y,A,B;return S=new j({}),A=new w({}),{c(){e=f("main"),s=f("h1"),T=l("Theming with Svelte!"),E=c(),a(S.$$.fragment),y=c(),a(A.$$.fragment),this.h()},l(t){e=i(t,"MAIN",{class:!0});var a=g(e);s=i(a,"H1",{});var n=g(s);T=h(n,"Theming with Svelte!"),n.forEach(u),E=p(a),r(S.$$.fragment,a),y=p(a),r(A.$$.fragment,a),a.forEach(u),this.h()},h(){d(e,"class","svelte-1h7ly14")},m(t,a){v(t,e,a),x(e,s),x(s,T),x(e,E),n(S,e,null),x(e,y),n(A,e,null),B=!0},i(t){B||($(S.$$.fragment,t),$(A.$$.fragment,t),B=!0)},o(t){m(S.$$.fragment,t),m(A.$$.fragment,t),B=!1},d(t){t&&u(e),o(S),o(A)}}}function S(t){let e,s;return e=new T({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p(t,[s]){const a={};1&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){o(e,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,S,s,{})}}