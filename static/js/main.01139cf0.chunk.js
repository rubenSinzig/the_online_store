(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')},26:function(e,c,t){},36:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(18),r=t.n(i),o=(t(26),t(21)),a={data:t(19),print:function(e){return console.log(e)},bill:function(e){return e.reduce((function(e,c){return e+c.price}),0)},addToCart:function(e,c){return e((function(e){return[].concat(Object(o.a)(e),[c])}))}},j=n.a.createContext(a),d=t(4),l=t(8),h=t(0),b=function(){return Object(h.jsxs)("div",{className:"wrapper-header",children:[Object(h.jsx)("img",{className:"header-img",src:"".concat("/the_online_store","/images/header_iPhone.png"),alt:"blue iPhone"}),Object(h.jsxs)("div",{className:"header-text",children:[Object(h.jsx)("h2",{children:"iPhone 12"}),Object(h.jsx)("h4",{children:"Almost too fast to be true"}),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"header-product-link",children:[Object(h.jsx)(d.b,{to:"/about",children:Object(h.jsxs)("h6",{children:["More Info",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})}),Object(h.jsx)(d.b,{to:"/products",children:Object(h.jsxs)("h6",{children:["BUY",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})})]})})]})]})},m=t(2),x=t(17),O=function(e){var c=e.info,t=e.addToCart,s=e.setCart,n=c.id,i=c.productName,r=c.icon,o=c.price,a=c.inventory;return Object(h.jsxs)("li",{children:[i," ",Object(h.jsx)("i",{children:r}),Object(h.jsxs)("h5",{children:[o,"\u20ac"]}),Object(h.jsxs)("h6",{children:[a," items in stock"]}),Object(h.jsx)("button",{disabled:0===a,onClick:function(){t(s,c)},children:a>0?"Add to cart":"Sold out"})]},n)},u=function(){var e=Object(s.useContext)(j),c=Object(s.useState)(0),t=Object(x.a)(c,2),i=t[0],r=t[1],o=Object(s.useState)([]),a=Object(x.a)(o,2),d=a[0],l=a[1],b=e.data.map((function(c,t){return Object(h.jsx)(O,{info:c,addToCart:e.addToCart,setCart:l},t)}));return Object(s.useEffect)((function(){r(e.bill(d))}),[d]),Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsxs)("div",{className:"bill",children:[Object(h.jsx)("p",{children:"Total Bill"}),Object(h.jsxs)("h6",{children:[i,"\u20ac"]})]}),Object(h.jsx)("ul",{children:b})]})},p=function(){return Object(h.jsxs)("div",{className:"wrapper-home",children:[Object(h.jsxs)("div",{className:"home-products",children:[Object(h.jsx)("div",{className:"home-img",children:Object(h.jsx)("img",{src:"".concat("/the_online_store","/images/home_macbook.png"),alt:"Apple macBook"})}),Object(h.jsxs)("div",{className:"home-info",children:[Object(h.jsx)("h2",{children:"MacBook"}),Object(h.jsx)("h4",{children:"Which Mac is right for you?"}),Object(h.jsxs)(d.b,{className:"home-link",to:"/products",children:["BUY",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})]})]}),Object(h.jsxs)("div",{className:"home-products ",children:[Object(h.jsxs)("div",{className:"home-info home-right",children:[Object(h.jsx)("h2",{children:"Apple Watch"}),Object(h.jsx)("h4",{children:"Has more on it, than it costs."}),Object(h.jsxs)(d.b,{className:"home-link",to:"/products",children:["BUY",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})]}),Object(h.jsx)("div",{className:"home-img",children:Object(h.jsx)("img",{src:"".concat("/the_online_store","/images/home_watch.png"),alt:"Apple Watch"})})]}),Object(h.jsxs)("div",{className:"home-products",children:[Object(h.jsx)("div",{className:"home-img",children:Object(h.jsx)("img",{src:"".concat("/the_online_store","/images/home_iPad.png"),alt:"iPad"})}),Object(h.jsxs)("div",{className:"home-info",children:[Object(h.jsx)("h2",{children:"iPad"}),Object(h.jsx)("h4",{children:"The ultimate iPad experience."}),Object(h.jsxs)(d.b,{className:"home-link",to:"/products",children:["BUY",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})]})]}),Object(h.jsxs)("div",{className:"home-products ",children:[Object(h.jsxs)("div",{className:"home-info home-right",children:[Object(h.jsx)("h2",{children:"iPhone"}),Object(h.jsx)("h4",{children:"This step is a leap."}),Object(h.jsxs)(d.b,{className:"home-link",to:"/products",children:["BUY",Object(h.jsx)("span",{children:Object(h.jsx)(l.a,{})})]})]}),Object(h.jsx)("div",{className:"home-img",children:Object(h.jsx)("img",{src:"".concat("/the_online_store","/images/home_iPhone.png"),alt:"iPhone"})})]})]})},v=function(){return Object(h.jsx)("div",{children:"About"})},N=function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"wrapper-nav",children:[Object(h.jsx)(d.b,{className:"nav-link nav-home",to:"/",children:"Home"}),Object(h.jsx)(d.b,{className:"nav-link nav-products",to:"/products",children:"Products"}),Object(h.jsx)(d.b,{className:"nav-link nav-about",to:"/about",children:"About"})]}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/the_online_store",component:p}),Object(h.jsx)(m.a,{exact:!0,path:"/the_online_store/products",component:u}),Object(h.jsx)(m.a,{exact:!0,path:"/the_online_store/about",component:v})]})]})};var f=function(){return Object(h.jsxs)(j.Provider,{value:a,children:[Object(h.jsx)(b,{})," ",Object(h.jsx)(N,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.01139cf0.chunk.js.map