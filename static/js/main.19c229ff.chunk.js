(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),r=c(5),a=(c(14),c(15),c(2)),i=c(0),j=(c(16),c(1)),l=function(){return Object(j.jsx)("h1",{className:"title is-1 main-title",children:"Home Page"})},b=c(8),h=c(4),o=(c(18),function(e){var t=e.person;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:t.motherName||"-"}),Object(j.jsx)("td",{children:t.fatherName||"-"})]})}),d=function(e){var t=e.people;return Object(j.jsxs)("table",{className:"table is-bordered is-striped",children:[Object(j.jsx)("thead",{className:"thead",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:" Name "}),Object(j.jsx)("th",{children:" Sex "}),Object(j.jsx)("th",{children:" Born "}),Object(j.jsx)("th",{children:" Died "}),Object(j.jsx)("th",{children:" Mother "}),Object(j.jsx)("th",{children:" Father "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(o,{person:e},e.slug)}))})]})},O=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}));n(t)}))};return Object(i.useEffect)((function(){s()}),[]),Object(j.jsxs)("div",{className:"table-item",children:[Object(j.jsx)("h2",{className:"title is-2 secondary-title",children:"People page"}),Object(j.jsx)(d,{people:c})]})},m=function(){return Object(j.jsx)("h1",{className:"title is-1 main-title",children:"Page not found =("})},x=(c(19),function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("nav",{className:"navigation",children:[Object(j.jsx)(r.b,{to:"/home",className:"tag is-primary navigation__item is-large",children:"Home"}),Object(j.jsx)(r.b,{to:"/people",className:"tag is-primary is-large",children:"People"})]})})}),p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{}),Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.b,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(a.b,{path:"/home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsx)(a.b,{path:"/people",element:Object(j.jsx)(O,{})}),Object(j.jsx)(a.b,{path:"*",element:Object(j.jsx)(m,{})})]})]})};s.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.19c229ff.chunk.js.map