(()=>{var e={};e.id=339,e.ids=[339],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},9279:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>m,tree:()=>c}),r(1916),r(7516),r(996);var t=r(170),d=r(5002),o=r(3876),n=r.n(o),s=r(6299),i={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>s[e]);r.d(a,i);let c=["",{children:["addToCart",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1916)),"C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\addToCart\\[id]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7516)),"C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\addToCart\\[id]\\page.jsx"],u="/addToCart/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:d.x.APP_PAGE,page:"/addToCart/[id]/page",pathname:"/addToCart/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5949:(e,a,r)=>{Promise.resolve().then(r.bind(r,2574))},2742:(e,a,r)=>{Promise.resolve().then(r.bind(r,5019))},8470:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},2574:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>i});var t=r(7247),d=r(8964),o=r(3573),n=r.n(o),s=r(4597);function i({params:e}){let{id:a}=e,[r,o]=(0,d.useState)(1),[i,c]=(0,d.useState)(null),[l,u]=(0,d.useState)(0);return i?t.jsx(t.Fragment,{children:(0,t.jsxs)("div",{className:n().addToCartMainPage,children:[t.jsx("div",{className:n().formDiv,children:(0,t.jsxs)("form",{className:n().form,children:[t.jsx("h1",{children:"Check Out"}),t.jsx("div",{className:n().inputGroup,children:t.jsx("input",{type:"text",placeholder:"Enter Your Name",required:!0})}),t.jsx("div",{className:n().inputGroup,children:t.jsx("textarea",{placeholder:"Enter Your Address",required:!0})}),t.jsx("div",{className:n().inputGroup,children:t.jsx("input",{type:"number",placeholder:"Enter Your Number",required:!0})}),t.jsx("div",{className:n().inputGroup,children:t.jsx("input",{type:"text",placeholder:"Enter Your City",required:!0})}),t.jsx("button",{type:"submit",className:n().submitButton,children:"Submit"})]})}),(0,t.jsxs)("div",{className:n().addToCartForm,children:[(0,t.jsxs)("div",{className:n().addToCartProductInfo,children:[t.jsx("div",{className:n().addToCartProductImage,children:t.jsx(s.default,{src:i.images[0],fill:!0})}),(0,t.jsxs)("div",{className:n().addToCartProductInfoDetail,children:[t.jsx("div",{className:n().addToCartProductInfoTitle,children:t.jsx("h1",{children:i.title})}),t.jsx("div",{className:n().addToCartProductInfoSection,children:(0,t.jsxs)("div",{className:n().addToCartProductInfoCounterSection,children:[t.jsx("button",{variant:"dark",onClick:()=>{o(e=>{if(e>1){let a=e-1;return u(i.price*a),a}return e})},disabled:1===r,children:"-"}),t.jsx("span",{children:r}),t.jsx("button",{variant:"dark",onClick:()=>{o(e=>{let a=e+1;return u(i.price*a),a})},children:"+"})]})})]}),t.jsx("div",{className:n().addToCartProductInfoPrice,children:(0,t.jsxs)("h5",{children:["$",i.price]})})]}),t.jsx("div",{className:n().addToCartProductInfoTotalPrice,children:(0,t.jsxs)("h5",{children:["Total Price: $",l.toFixed(2)]})})]})]})}):t.jsx("div",{children:"Loading....!"})}},5019:(e,a,r)=>{"use strict";r.d(a,{default:()=>l});var t=r(7247),d=r(9906),o=r(1001),n=r(4551),s=r(2905),i=r(5151),c=r.n(i);let l=function(){return t.jsx(s.Z,{expand:"lg",className:c().navBarBgChange,children:(0,t.jsxs)(o.default,{children:[t.jsx(d.default,{className:c().navbarBrand,href:"/",children:"Shop"}),t.jsx(s.Z.Toggle,{"aria-controls":"navbarScroll"}),t.jsx(s.Z.Collapse,{id:"navbarScroll",children:(0,t.jsxs)(n.Z,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[t.jsx(d.default,{className:c().navLinks,href:"/",children:"Home"}),t.jsx(d.default,{className:c().navLinks,href:"/addProduct",children:"Add Product"})]})})]})})}},3573:e=>{e.exports={addToCartMainPage:"add-to-cart_addToCartMainPage__r40qn",form:"add-to-cart_form__oQs2J",inputGroup:"add-to-cart_inputGroup__pM_pp",submitButton:"add-to-cart_submitButton__ZPy0z",addToCartProductInfo:"add-to-cart_addToCartProductInfo__W_Gyx",addToCartProductImage:"add-to-cart_addToCartProductImage__9ZaHK",addToCartProductInfoTitle:"add-to-cart_addToCartProductInfoTitle__9KdWe",addToCartProductInfoDescription:"add-to-cart_addToCartProductInfoDescription__2aloc",addToCartProductInfoAddToCartBtn:"add-to-cart_addToCartProductInfoAddToCartBtn__PSn7b",addToCartProductInfoSection:"add-to-cart_addToCartProductInfoSection__Iip6L",addToCartProductInfoCounterSection:"add-to-cart_addToCartProductInfoCounterSection__IWyYG"}},9395:e=>{e.exports={footerMainSection:"footer_footerMainSection__txQQZ",copyright:"footer_copyright__o87rv"}},5151:e=>{e.exports={navLinks:"navbar_navLinks__Vg33U",dropNavBarLink:"navbar_dropNavBarLink__nJdxC","dropdown-item":"navbar_dropdown-item__d8HWO",active:"navbar_active__rSlkJ",navbarBrand:"navbar_navbarBrand___bhTR",navBarBgChange:"navbar_navBarBgChange__kf0Dp"}},1916:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});let t=(0,r(5347).createProxy)(String.raw`C:\Users\Muhammad Nasir\Desktop\projects\newapp\app\addToCart\[id]\page.jsx#default`)},7516:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>_,metadata:()=>v});var t=r(2051),d=r(1681),o=r.n(d),n=r(358),s=r.n(n),i=r(4202),c=r.n(i),l=r(2016),u=r.n(l);r(7272),r(7453),r(7001);let p=(0,r(5347).createProxy)(String.raw`C:\Users\Muhammad Nasir\Desktop\projects\newapp\components\Navbar\Navbar.jsx#default`);r(6269);var m=r(9395),h=r.n(m);function x(){return t.jsx("div",{className:h().footerMainSection,children:t.jsx("div",{className:h().copyright,children:t.jsx("h5",{children:"\xa9 2024 Copyright, All Rights Reserved."})})})}let v={title:"Create Next App",description:"Generated by create next app"};function _({children:e}){return t.jsx("html",{lang:"en",children:(0,t.jsxs)("body",{className:`${o().variable} ${s().variable} ${c().variable} ${u().variable}`,children:[t.jsx(p,{}),e,t.jsx(x,{})]})})}},7481:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>d});var t=r(4564);let d=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var a=require("../../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),t=a.X(0,[379,603,564,597],()=>r(9279));module.exports=t})();