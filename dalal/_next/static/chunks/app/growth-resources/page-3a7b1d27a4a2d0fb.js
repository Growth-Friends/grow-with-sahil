(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{4943:function(e,t,l){Promise.resolve().then(l.bind(l,3899)),Promise.resolve().then(l.bind(l,6876)),Promise.resolve().then(l.bind(l,2086))},5997:function(e,t,l){"use strict";var s=l(3963);t.Z=void 0;var a=s(l(9118)),r=l(7437);t.Z=(0,a.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7183:function(e,t,l){"use strict";var s=l(3963);t.Z=void 0;var a=s(l(9118)),r=l(7437);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchRounded")},3899:function(e,t,l){"use strict";var s=l(7437),a=l(5726),r=l.n(a),n=l(2265),c=l(1240),i=l(8355),x=l(7138),o=l(5997),d=l(8190);t.default=function(){(0,i.L9)("util.growthResources");let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{(async()=>{let e=await (0,d.Z)("https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard");t(await e.json())})()},[]),(0,s.jsx)(c.Z,{children:(0,s.jsx)("div",{className:"md:py-8 py-6 flex items-start flex-wrap justify-center xl:gap-y-14 md:gap-y-12 gap-y-8 ",children:e.map((e,t)=>{let l=[,,,,,].fill(!1).fill(!0,0,e.acf.stars);return(0,s.jsxs)(x.default,{prefetch:!1,href:(0,i.pE)("/".concat(e.slug),"/growth-resources"),className:"lg:w-[calc(100%/3)] md:w-[calc(100%/2)] w-full flex-shrink-0 xl:px-5 px-4 lg:max-w-none max-w-[300px] ",children:[(0,s.jsxs)("div",{className:"bg-black text-white xl:py-6 lg:py-4 py-3 px-3 rounded-t-lg text-center",children:[(0,s.jsx)("p",{className:"font-bold xl:text-[26px] lg:text-[22px] text-[20px] line-clamp-1 ",children:e.acf.resource_name}),(0,s.jsx)("p",{className:"text-paraSecondary xl:text-[15px] lg:text-[14px] text-[13px] mt-1 tracking-wide leading-normal inline-block !line-clamp-2 ",children:e.acf.out_description})]}),(0,s.jsxs)("div",{className:"xl:px-6 lg:px-4 px-3 xl:py-6 lg:py-4 py-3 rounded-b-lg border-b-2 border-x-2 border-borderColor ",children:[(0,s.jsx)("img",{loading:"lazy",src:e.acf.featured_image,alt:e.acf.resource_name,className:"aspect-auto w-full"}),(0,s.jsxs)("div",{className:"flex items-center justify-between xl:mt-7 lg:mt-5 mt-4 ",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:l.map((e,t)=>(0,s.jsx)("img",{src:(0,i.I)("".concat(e?"/blackStar.svg":"/emptyStar.svg")),alt:"review start",className:"aspect-auto xl:w-5 lg:w-4 w-3 "},t))}),(0,s.jsxs)("div",{className:"flex xl:gap-x-2 gap-x-1.5 lg:mt-3 mt-2 ",children:[(0,s.jsx)("img",{loading:"lazy",src:(0,i.I)("/download.svg"),alt:"download illustration",className:"aspect-auto xl:w-4 lg:w-3 w-2.5 "}),(0,s.jsxs)("span",{className:r().className+" font-medium xl:text-base lg:text-sm text-xs ",children:[e.acf.Downloads," Downloads"]})]})]}),(0,s.jsxs)("button",{className:"bg-primaryColor text-black xl:px-3 px-2 xl:py-2 py-1.5 xl:text-base text-sm rounded-md font-medium flex items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out ",children:[e.acf.cta_text,(0,s.jsx)(o.Z,{className:"lg:text-base text-sm "})]})]})]})]},t)})})})}},6876:function(e,t,l){"use strict";l.d(t,{default:function(){return i}});var s=l(7437);l(2265);var a=l(1240),r=l(8355),n=l(7183),c=function(e){let{tools:t,resources:l}=e,c=(0,r.L9)("util.searchBar.".concat(t?"tools":l&&"resources"));return(0,s.jsx)(a.Z,{innerClass:"xl:pt-10 lg:pt-8 md:pt-6 pt-5 ",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{className:"w-full xl:text-xl lg:text-lg md:text-base text-sm border-paraSecondary/40 border-2 py-2 xl:pl-14 md:pl-12 pl-10 pr-3 rounded-lg focus:outline-none peer ",placeholder:c.placeholder}),(0,s.jsx)(n.Z,{className:"xl:text-3xl text-2xl text-paraSecondary peer-focus:text-black absolute top-1/2 -translate-y-1/2 md:left-4 left-3 "})]})})},i=function(e){let{tools:t,resources:l}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{tools:t,resources:l})})}},2086:function(e,t,l){"use strict";let s;l.d(t,{default:function(){return w},k:function(){return s}});var a=l(7437),r=l(2265),n=l(1240),c=l(7138),i=l(5219),x=l(1836),o=l(289),d=l(3123),m=function(){let e=(0,i.usePathname)().split("/");return(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"flex items-center lg:text-base text-sm whitespace-nowrap flex-wrap gap-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(c.default,{href:d.Z.home,prefetch:!1,children:(0,a.jsx)(x.Z,{className:"md:text-2xl text-xl "})})}),e.map((e,t,l)=>{let s=JSON.parse(JSON.stringify(l)).slice(0,t+1).join("/");return(0,a.jsx)(r.Fragment,{children:""!==e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)("li",{className:"capitalize flex items-end",children:(0,a.jsx)(c.default,{prefetch:!1,href:s,children:e.replaceAll("-"," ")})})]})},t)})]})})},u=l(5725),p=l(4446),f=l(1216),h=l(5764),g=function(){let[e,t]=(0,r.useState)(),[l,s]=(0,r.useState)(!1);function n(){s(!0)}function c(e){!Array.from(e.target.classList).includes("share-social-button")&&l&&s(!1)}return(0,r.useEffect)(()=>(t(window.location),window.addEventListener("click",c),()=>{window.removeEventListener("click",c)}),[l]),(0,a.jsxs)("div",{className:"relative",onClick:n,children:[(0,a.jsx)(u.Z,{className:"share-social-button cursor-pointer lg:text-2xl text-xl",onClick:n}),(0,a.jsx)(p.M,{children:l&&(0,a.jsxs)(f.E.div,{initial:{x:30,opacity:0},animate:{x:0,opacity:1},exit:{x:30,opacity:0},transition:{type:"spring",duration:1},className:" absolute right-0 -bottom-10 flex items-center gap-x-2.5 ",children:[(0,a.jsx)(h.N0,{url:e,className:"flex items-center",children:(0,a.jsx)(h.ud,{className:"rounded-md w-6 h-min "})}),(0,a.jsx)(h.B,{url:e,className:"flex items-center",children:(0,a.jsx)(h.Zm,{className:"rounded w-6 h-min "})}),(0,a.jsx)(h.Dk,{url:e,className:"flex items-center",children:(0,a.jsx)(h.Vq,{className:"rounded w-6 h-min "})}),(0,a.jsx)(h.r2,{url:e,className:"flex items-center",children:(0,a.jsx)(h.pA,{className:"rounded w-6 h-min "})})]})})]})},j=function(){return(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(m,{}),(0,a.jsx)(g,{})]})},w=function(e){let{content:t,subHeading:l=""}=e;s=(0,r.useRef)();let c=(0,i.usePathname)().split("/"),x=c[c.length-1].replaceAll("-"," ");return(0,a.jsxs)(n.Z,{ref:s,outerClass:"bg-black text-white",innerClass:"xl:pt-36 lg:pt-32 md:pt-28 pt-24 xl:pb-28 lg:pb-24 md:pb-20 pb-16 ",children:[(0,a.jsx)(j,{}),(0,a.jsxs)("div",{className:"text-center xl:mt-20 lg:mt-16 md:mt-14 mt-12 ",children:[(0,a.jsx)("h1",{className:"uppercase font-bold xl:text-7xl lg:text-6xl md:text-5xl text-3xl  ",children:x}),""==l?(0,a.jsx)("p",{className:"text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[630px] lg:w-[580px] md:w-[500px] w-full mx-auto xl:mt-8 lg:mt-6 md:mt-4 mt-3 tracking-wide leading-normal ",children:t.subHeading.map((e,t)=>(0,a.jsx)(r.Fragment,{children:e.para?(0,a.jsx)("span",{children:e.para}):(0,a.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}):(0,a.jsx)("p",{className:"text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[750px] lg:w-[600px] md:w-[540px] w-full mx-auto xl:mt-8 lg:mt-6 md:mt-4 mt-3 tracking-wide leading-normal line-clamp-3 ",children:l})]})]})}},3123:function(e,t){"use strict";t.Z={home:"/",about:"/about",services:"/services",contact:"/contact",marketingTools:"/marketing-tools",growthResources:"/growth-resources",blog:"https://growwithsahil.com/blog"}},8190:function(e,t,l){"use strict";async function s(e){try{return await fetch(e,{redirect:"follow",method:"GET"})}catch(e){return e}}l.d(t,{Z:function(){return s}})},5726:function(e){e.exports={style:{fontFamily:"'__Inter_705887', '__Inter_Fallback_705887'",fontWeight:500,fontStyle:"normal"},className:"__className_705887"}}},function(e){e.O(0,[168,589,216,552,84,971,23,744],function(){return e(e.s=4943)}),_N_E=e.O()}]);