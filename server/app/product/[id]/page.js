(()=>{var e={};e.id=188,e.ids=[188],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5066:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>n,routeModule:()=>m,tree:()=>c}),a(7800),a(7516),a(996);var t=a(170),d=a(5002),i=a(3876),s=a.n(i),o=a(6299),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(r,l);let c=["",{children:["product",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,7800)),"C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\product\\[id]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,7516)),"C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],n=["C:\\Users\\Muhammad Nasir\\Desktop\\projects\\newapp\\app\\product\\[id]\\page.jsx"],p="/product/[id]/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:d.x.APP_PAGE,page:"/product/[id]/page",pathname:"/product/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4087:(e,r,a)=>{Promise.resolve().then(a.bind(a,4639))},2742:(e,r,a)=>{Promise.resolve().then(a.bind(a,5019))},8470:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,3642,23)),Promise.resolve().then(a.t.bind(a,7586,23)),Promise.resolve().then(a.t.bind(a,7838,23)),Promise.resolve().then(a.t.bind(a,8057,23)),Promise.resolve().then(a.t.bind(a,7741,23)),Promise.resolve().then(a.t.bind(a,3118,23))},4639:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>p});var t=a(7247);a(8964);var d=a(1001),i=a(1048),s=a(1170),o=a.n(s),l=a(4597),c=a(4178),n=a(9906);async function p({params:e}){let r=(0,c.useRouter)(),{id:a}=e,s=await fetch(`https://dummyjson.com/products/${a}`),p=await s.json(),u=await fetch(`https://dummyjson.com/products/category/${p.category}`),m=((await u.json()).products||[]).filter(e=>e.id!==p.id).slice(0,4),_=e=>{r.push(`/product/${e}`)};return t.jsx(t.Fragment,{children:(0,t.jsxs)(d.default,{children:[t.jsx("div",{className:o().productDetailSection,children:(0,t.jsxs)("div",{className:o().productDetailMain,children:[t.jsx("div",{className:o().productDetailImage,children:t.jsx(l.default,{src:p.images[0],fill:!0})}),(0,t.jsxs)("div",{className:o().productDetailBody,children:[t.jsx("div",{className:o().productTitle,children:t.jsx("h1",{children:p.title})}),t.jsx("div",{className:o().productDescription,children:t.jsx("p",{children:p.description})}),t.jsx("div",{className:o().productPrice,children:(0,t.jsxs)("p",{children:["Price: ",(0,t.jsxs)("strong",{children:["$",p.price]})]})}),t.jsx("div",{className:o().productCategory,children:(0,t.jsxs)("p",{children:["Category: ",t.jsx("strong",{children:p.category})]})}),t.jsx("div",{className:o().productBrand,children:(0,t.jsxs)("p",{children:["Brand: ",t.jsx("strong",{children:p.brand})]})}),t.jsx("div",{className:o().addToCart,children:t.jsx("div",{className:o().addToCartBtnOne,children:t.jsx(n.default,{href:`/addToCart/${p.id}`,children:"Add to Cart"})})})]})]})}),t.jsx("div",{className:o().productDetailRelated,children:t.jsx("div",{className:o().relatedProductGrid,children:m.map(e=>(0,t.jsxs)(i.Z,{className:o().cardItems,children:[t.jsx("div",{className:o().relatedProductGridImage,onClick:()=>_(e.id),children:t.jsx(l.default,{src:e.images[0],fill:!0})}),(0,t.jsxs)(i.Z.Body,{children:[t.jsx(i.Z.Title,{className:o().relatedProductGridTitle,onClick:()=>_(e.id),children:t.jsx("h1",{children:e.title})}),t.jsx("div",{className:o().relatedProductGridDescription,onClick:()=>_(e.id),children:t.jsx("p",{children:e.description})}),(0,t.jsxs)("div",{className:o().productInfoDetail,onClick:()=>_(e.id),children:[(0,t.jsxs)("div",{className:o().relatedProductPrice,children:["Price: ",(0,t.jsxs)("strong",{children:["$",e.price]})]}),(0,t.jsxs)("div",{className:o().relatedProductCategory,children:["Category: ",t.jsx("strong",{children:e.category})," "]})]}),t.jsx("div",{className:o().addToCart})]})]},e.id))})})]})})}},5019:(e,r,a)=>{"use strict";a.d(r,{default:()=>n});var t=a(7247),d=a(9906),i=a(1001),s=a(4551),o=a(2905),l=a(5151),c=a.n(l);let n=function(){return t.jsx(o.Z,{expand:"lg",className:c().navBarBgChange,children:(0,t.jsxs)(i.default,{children:[t.jsx(d.default,{className:c().navbarBrand,href:"/",children:"Shop"}),t.jsx(o.Z.Toggle,{"aria-controls":"navbarScroll"}),t.jsx(o.Z.Collapse,{id:"navbarScroll",children:(0,t.jsxs)(s.Z,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[t.jsx(d.default,{className:c().navLinks,href:"/",children:"Home"}),t.jsx(d.default,{className:c().navLinks,href:"/addProduct",children:"Add Product"})]})})]})})}},4178:(e,r,a)=>{"use strict";var t=a(5289);a.o(t,"useRouter")&&a.d(r,{useRouter:function(){return t.useRouter}})},1048:(e,r,a)=>{"use strict";a.d(r,{Z:()=>P});var t=a(5001),d=a.n(t),i=a(8964),s=a(9893),o=a(7247);let l=i.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},i)=>(r=(0,s.vE)(r,"card-body"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));l.displayName="CardBody";let c=i.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},i)=>(r=(0,s.vE)(r,"card-footer"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));c.displayName="CardFooter";var n=a(8619);let p=i.forwardRef(({bsPrefix:e,className:r,as:a="div",...t},l)=>{let c=(0,s.vE)(e,"card-header"),p=(0,i.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,o.jsx)(n.Z.Provider,{value:p,children:(0,o.jsx)(a,{ref:l,...t,className:d()(r,c)})})});p.displayName="CardHeader";let u=i.forwardRef(({bsPrefix:e,className:r,variant:a,as:t="img",...i},l)=>{let c=(0,s.vE)(e,"card-img");return(0,o.jsx)(t,{ref:l,className:d()(a?`${c}-${a}`:c,r),...i})});u.displayName="CardImg";let m=i.forwardRef(({className:e,bsPrefix:r,as:a="div",...t},i)=>(r=(0,s.vE)(r,"card-img-overlay"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));m.displayName="CardImgOverlay";let _=i.forwardRef(({className:e,bsPrefix:r,as:a="a",...t},i)=>(r=(0,s.vE)(r,"card-link"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));_.displayName="CardLink";var x=a(9308);let h=(0,x.Z)("h6"),v=i.forwardRef(({className:e,bsPrefix:r,as:a=h,...t},i)=>(r=(0,s.vE)(r,"card-subtitle"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));v.displayName="CardSubtitle";let j=i.forwardRef(({className:e,bsPrefix:r,as:a="p",...t},i)=>(r=(0,s.vE)(r,"card-text"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));j.displayName="CardText";let f=(0,x.Z)("h5"),g=i.forwardRef(({className:e,bsPrefix:r,as:a=f,...t},i)=>(r=(0,s.vE)(r,"card-title"),(0,o.jsx)(a,{ref:i,className:d()(e,r),...t})));g.displayName="CardTitle";let N=i.forwardRef(({bsPrefix:e,className:r,bg:a,text:t,border:i,body:c=!1,children:n,as:p="div",...u},m)=>{let _=(0,s.vE)(e,"card");return(0,o.jsx)(p,{ref:m,...u,className:d()(r,_,a&&`bg-${a}`,t&&`text-${t}`,i&&`border-${i}`),children:c?(0,o.jsx)(l,{children:n}):n})});N.displayName="Card";let P=Object.assign(N,{Img:u,Title:g,Subtitle:v,Body:l,Link:_,Text:j,Header:p,Footer:c,ImgOverlay:m})},1170:e=>{e.exports={productDetailSection:"product-detail_productDetailSection__ptGlz",productDetailSectionHeading:"product-detail_productDetailSectionHeading__DhAkI",productDetailMain:"product-detail_productDetailMain__7jUD_",productDetailImage:"product-detail_productDetailImage__x8Q_L",productDetailBody:"product-detail_productDetailBody__3iTxU",productTitle:"product-detail_productTitle__pTd3C",productDescription:"product-detail_productDescription__5TtDy",productPrice:"product-detail_productPrice__ALc93",productCategory:"product-detail_productCategory__Wt23P",productBrand:"product-detail_productBrand__vprP2",productDetailRelated:"product-detail_productDetailRelated__Owqad",relatedProductGrid:"product-detail_relatedProductGrid___1rut",relatedProductGridImage:"product-detail_relatedProductGridImage__qkVqO",relatedProductGridTitle:"product-detail_relatedProductGridTitle__Fy3U0",relatedProductGridDescription:"product-detail_relatedProductGridDescription__ZwuEW",productInfoDetail:"product-detail_productInfoDetail___GLfv",relatedProductPrice:"product-detail_relatedProductPrice__Z0OJe",relatedProductCategory:"product-detail_relatedProductCategory__tu_8B",cardItems:"product-detail_cardItems__kgHOy",addToCartBtn:"product-detail_addToCartBtn__0PEqV",addToCartBtnOne:"product-detail_addToCartBtnOne__uzCz_",addToCart:"product-detail_addToCart__uW_BT",counterUpper:"product-detail_counterUpper__7Z5IJ",counter:"product-detail_counter__lAuW5"}},9395:e=>{e.exports={footerMainSection:"footer_footerMainSection__txQQZ",copyright:"footer_copyright__o87rv"}},5151:e=>{e.exports={navLinks:"navbar_navLinks__Vg33U",dropNavBarLink:"navbar_dropNavBarLink__nJdxC","dropdown-item":"navbar_dropdown-item__d8HWO",active:"navbar_active__rSlkJ",navbarBrand:"navbar_navbarBrand___bhTR",navBarBgChange:"navbar_navBarBgChange__kf0Dp"}},7516:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>v,metadata:()=>h});var t=a(2051),d=a(1681),i=a.n(d),s=a(358),o=a.n(s),l=a(4202),c=a.n(l),n=a(2016),p=a.n(n);a(7272),a(7453),a(7001);let u=(0,a(5347).createProxy)(String.raw`C:\Users\Muhammad Nasir\Desktop\projects\newapp\components\Navbar\Navbar.jsx#default`);a(6269);var m=a(9395),_=a.n(m);function x(){return t.jsx("div",{className:_().footerMainSection,children:t.jsx("div",{className:_().copyright,children:t.jsx("h5",{children:"\xa9 2024 Copyright, All Rights Reserved."})})})}let h={title:"Create Next App",description:"Generated by create next app"};function v({children:e}){return t.jsx("html",{lang:"en",children:(0,t.jsxs)("body",{className:`${i().variable} ${o().variable} ${c().variable} ${p().variable}`,children:[t.jsx(u,{}),e,t.jsx(x,{})]})})}},7800:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>t});let t=(0,a(5347).createProxy)(String.raw`C:\Users\Muhammad Nasir\Desktop\projects\newapp\app\product\[id]\page.jsx#default`)},7481:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>d});var t=a(4564);let d=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[379,603,564,597],()=>a(5066));module.exports=t})();