(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')},26:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(18),o=c.n(i),s=(c(26),c(21)),a={data:c(19),print:function(e){return console.log(e)},bill:function(e){return e.reduce((function(e,t){return e+t.price}),0)},addToCart:function(e,t){return e((function(e){return[].concat(Object(s.a)(e),[t])}))}},j=r.a.createContext(a),d=c(7),l=c(16),b=c(1),u=function(){return Object(b.jsxs)("div",{className:"wrapper-header",children:[Object(b.jsx)("img",{className:"header-img",src:"".concat("/the_online_store","/images/header_iPhone.png"),alt:"blue iPhone"}),Object(b.jsxs)("div",{className:"header-text",children:[Object(b.jsx)("h2",{children:"iPhone 12"}),Object(b.jsx)("h4",{children:"Almost too fast to be true"}),Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"header-product-link",children:[Object(b.jsx)(d.b,{to:"/about",children:Object(b.jsxs)("h6",{children:["More Info",Object(b.jsx)("span",{children:Object(b.jsx)(l.a,{})})]})}),Object(b.jsx)(d.b,{to:"/products",children:Object(b.jsxs)("h6",{children:["BUY",Object(b.jsx)("span",{children:Object(b.jsx)(l.a,{})})]})})]})})]})]})},h=c(2),O=c(17),x=function(e){var t=e.info,c=e.addToCart,n=e.setCart,r=t.id,i=t.productName,o=t.icon,s=t.price,a=t.inventory;return Object(b.jsxs)("li",{children:[i," ",Object(b.jsx)("i",{children:o}),Object(b.jsxs)("h5",{children:[s,"\u20ac"]}),Object(b.jsxs)("h6",{children:[a," items in stock"]}),Object(b.jsx)("button",{disabled:0===a,onClick:function(){c(n,t)},children:a>0?"Add to cart":"Sold out"})]},r)},p=function(){var e=Object(n.useContext)(j),t=Object(n.useState)(0),c=Object(O.a)(t,2),i=c[0],o=c[1],s=Object(n.useState)([]),a=Object(O.a)(s,2),d=a[0],l=a[1],u=e.data.map((function(t,c){return Object(b.jsx)(x,{info:t,addToCart:e.addToCart,setCart:l},c)}));return Object(n.useEffect)((function(){o(e.bill(d))}),[d]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsxs)("div",{className:"bill",children:[Object(b.jsx)("p",{children:"Total Bill"}),Object(b.jsxs)("h6",{children:[i,"\u20ac"]})]}),Object(b.jsx)("ul",{children:u})]})},m=function(){return Object(b.jsx)("div",{children:"Home"})},v=function(){return Object(b.jsx)("div",{children:"About"})},f=function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsxs)("div",{className:"wrapper-nav",children:[Object(b.jsx)(d.b,{className:"nav-link nav-home",to:"/",children:"Home"}),Object(b.jsx)(d.b,{className:"nav-link nav-products",to:"/products",children:"Products"}),Object(b.jsx)(d.b,{className:"nav-link nav-about",to:"/about",children:"About"})]}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(h.a,{exact:!0,path:"/products",component:p}),Object(b.jsx)(h.a,{exact:!0,path:"/about",component:v})]})]})};var N=function(){return Object(b.jsxs)(j.Provider,{value:a,children:[Object(b.jsx)(u,{})," ",Object(b.jsx)(f,{})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a031a2c0.chunk.js.map