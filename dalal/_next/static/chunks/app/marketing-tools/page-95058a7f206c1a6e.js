(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{6818:function(e,t,l){Promise.resolve().then(l.bind(l,6876)),Promise.resolve().then(l.bind(l,2086)),Promise.resolve().then(l.bind(l,6182))},5997:function(e,t,l){"use strict";var s=l(3963);t.Z=void 0;var a=s(l(9118)),r=l(7437);t.Z=(0,a.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7183:function(e,t,l){"use strict";var s=l(3963);t.Z=void 0;var a=s(l(9118)),r=l(7437);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"SearchRounded")},6876:function(e,t,l){"use strict";l.d(t,{default:function(){return i}});var s=l(7437);l(2265);var a=l(1240),r=l(8355),n=l(7183),c=function(e){let{tools:t,resources:l}=e,c=(0,r.L9)("util.searchBar.".concat(t?"tools":l&&"resources"));return(0,s.jsx)(a.Z,{innerClass:"xl:pt-10 lg:pt-8 md:pt-6 pt-5 ",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{className:"w-full xl:text-xl lg:text-lg md:text-base text-sm border-paraSecondary/40 border-2 py-2 xl:pl-14 md:pl-12 pl-10 pr-3 rounded-lg focus:outline-none peer ",placeholder:c.placeholder}),(0,s.jsx)(n.Z,{className:"xl:text-3xl text-2xl text-paraSecondary peer-focus:text-black absolute top-1/2 -translate-y-1/2 md:left-4 left-3 "})]})})},i=function(e){let{tools:t,resources:l}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c,{tools:t,resources:l})})}},2086:function(e,t,l){"use strict";let s;l.d(t,{default:function(){return w},k:function(){return s}});var a=l(7437),r=l(2265),n=l(1240),c=l(7138),i=l(5219),o=l(1836),x=l(289),d=l(3123),m=function(){let e=(0,i.usePathname)().split("/");return(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{className:"flex items-center lg:text-base text-sm whitespace-nowrap flex-wrap gap-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(c.default,{href:d.Z.home,prefetch:!1,children:(0,a.jsx)(o.Z,{className:"md:text-2xl text-xl "})})}),e.map((e,t,l)=>{let s=JSON.parse(JSON.stringify(l)).slice(0,t+1).join("/");return(0,a.jsx)(r.Fragment,{children:""!==e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{}),(0,a.jsx)("li",{className:"capitalize flex items-end",children:(0,a.jsx)(c.default,{prefetch:!1,href:s,children:e.replaceAll("-"," ")})})]})},t)})]})})},u=l(5725),f=l(4446),p=l(1216),h=l(5764),g=function(){let[e,t]=(0,r.useState)(),[l,s]=(0,r.useState)(!1);function n(){s(!0)}function c(e){!Array.from(e.target.classList).includes("share-social-button")&&l&&s(!1)}return(0,r.useEffect)(()=>(t(window.location),window.addEventListener("click",c),()=>{window.removeEventListener("click",c)}),[l]),(0,a.jsxs)("div",{className:"relative",onClick:n,children:[(0,a.jsx)(u.Z,{className:"share-social-button cursor-pointer lg:text-2xl text-xl",onClick:n}),(0,a.jsx)(f.M,{children:l&&(0,a.jsxs)(p.E.div,{initial:{x:30,opacity:0},animate:{x:0,opacity:1},exit:{x:30,opacity:0},transition:{type:"spring",duration:1},className:" absolute right-0 -bottom-10 flex items-center gap-x-2.5 ",children:[(0,a.jsx)(h.N0,{url:e,className:"flex items-center",children:(0,a.jsx)(h.ud,{className:"rounded-md w-6 h-min "})}),(0,a.jsx)(h.B,{url:e,className:"flex items-center",children:(0,a.jsx)(h.Zm,{className:"rounded w-6 h-min "})}),(0,a.jsx)(h.Dk,{url:e,className:"flex items-center",children:(0,a.jsx)(h.Vq,{className:"rounded w-6 h-min "})}),(0,a.jsx)(h.r2,{url:e,className:"flex items-center",children:(0,a.jsx)(h.pA,{className:"rounded w-6 h-min "})})]})})]})},j=function(){return(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(m,{}),(0,a.jsx)(g,{})]})},w=function(e){let{content:t,subHeading:l=""}=e;s=(0,r.useRef)();let c=(0,i.usePathname)().split("/"),o=c[c.length-1].replaceAll("-"," ");return(0,a.jsxs)(n.Z,{ref:s,outerClass:"bg-black text-white",innerClass:"xl:pt-36 lg:pt-32 md:pt-28 pt-24 xl:pb-28 lg:pb-24 md:pb-20 pb-16 ",children:[(0,a.jsx)(j,{}),(0,a.jsxs)("div",{className:"text-center xl:mt-20 lg:mt-16 md:mt-14 mt-12 ",children:[(0,a.jsx)("h1",{className:"uppercase font-bold xl:text-7xl lg:text-6xl md:text-5xl text-3xl  ",children:o}),""==l?(0,a.jsx)("p",{className:"text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[630px] lg:w-[580px] md:w-[500px] w-full mx-auto xl:mt-8 lg:mt-6 md:mt-4 mt-3 tracking-wide leading-normal ",children:t.subHeading.map((e,t)=>(0,a.jsx)(r.Fragment,{children:e.para?(0,a.jsx)("span",{children:e.para}):(0,a.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}):(0,a.jsx)("p",{className:"text-paraSecondary xl:text-2xl lg:text-xl md:text-lg text-sm xl:w-[750px] lg:w-[600px] md:w-[540px] w-full mx-auto xl:mt-8 lg:mt-6 md:mt-4 mt-3 tracking-wide leading-normal line-clamp-3 ",children:l})]})]})}},6182:function(e,t,l){"use strict";let s,a,r,n;l.d(t,{default:function(){return p},W0:function(){return r},KM:function(){return n},r6:function(){return s},Jd:function(){return a}});var c=l(7437),i=l(2265),o=l(8355),x=l(1240),d=l(7138),m=l(5997);let u=(0,i.forwardRef)((e,t)=>{let{seoTools:l,socialTools:s,performanceTools:a,retentionTools:r,toolsList:n}=e,u=(0,o.L9)("util.".concat(l?"seoTools":s?"socialTools":a?"performanceTools":r&&"retentionTools"));return(0,c.jsx)(x.Z,{children:(0,c.jsxs)("div",{className:"xl:py-10 py-7 overflow-hidden ",children:[(0,c.jsxs)("div",{ref:t,className:"text-center bg-black text-white lg:py-10 md:py-8 py-7 px-3 rounded-t-2xl",children:[(0,c.jsx)("h2",{className:"font-bold xl:text-5xl lg:text-4xl md:text-3xl text-xl uppercase ",children:u.heading}),(0,c.jsx)("p",{className:"text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 mx-auto tracking-wide leading-normal ",children:u.subHeading.map((e,t)=>(0,c.jsx)(i.Fragment,{children:e.para?(0,c.jsx)("span",{children:e.para}):(0,c.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))})]}),(0,c.jsx)("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:p-10 lg:p-8 md:p-6 p-6 xl:gap-10 lg:gap-8 md:gap-6 gap-6 border-x-2 border-b-2 border-paraSecondary/40 rounded-b-2xl ",children:n.map((e,t)=>(0,c.jsxs)(d.default,{prefetch:!1,href:(0,o.pE)("/".concat(e.slug),"/marketing-tools"),className:"bg-black text-white xl:p-8 p-4 gap-x-5 rounded-xl flex flex-col xl:max-w-[320px] lg:max-w-[280px] md:max-w-[260px] max-w-[250px] mx-auto ",children:[(0,c.jsxs)("div",{className:"flex items-center lg:gap-x-6 gap-x-5",children:[(0,c.jsx)("img",{loading:"lazy",src:e.acf.tools_icon,alt:e.acf.tools_name,className:"aspect-auto xl:w-16 lg:w-14 w-12 "}),(0,c.jsx)("p",{className:"font-semibold xl:text-2xl md:text-xl text-lg ",children:e.acf.tools_name})]}),(0,c.jsxs)("div",{className:"flex items-center justify-between xl:text-base text-sm mt-5",children:[(0,c.jsx)("p",{className:"font-light",children:e.acf.tools_type}),(0,c.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,c.jsx)("img",{loading:"lazy",alt:"like symbol",src:(0,o.I)("/likeSymbol.svg"),className:"aspect-auto w-4"}),(0,c.jsx)("span",{children:e.acf.downloads})]})]}),(0,c.jsx)("p",{className:"xl:text-lg md:text-base text-sm mt-5 mb-10 line-clamp-3 ",children:e.acf.out_description}),(0,c.jsx)("div",{className:"flex justify-center mt-auto  ",children:(0,c.jsxs)("button",{className:"bg-primaryColor text-black px-3 py-2 rounded-md font-medium flex xl:text-base md:text-sm text-xs items-center gap-x-1 hover:gap-x-2 transition-all duration-300 ease-in-out ",children:[e.acf.cta_text,(0,c.jsx)(m.Z,{className:"text-base"})]})})]},t))})]})})});var f=l(8190),p=function(){s=(0,i.useRef)(),a=(0,i.useRef)(),r=(0,i.useRef)(),n=(0,i.useRef)();let[e,t]=(0,i.useState)([]),[l,o]=(0,i.useState)([]),[x,d]=(0,i.useState)([]),[m,p]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async()=>{let e=await (0,f.Z)("https://growwithsahil.com/blog/wp-json/wp/v2/tools-api/?_fields=acf,content,slug&acf_format=standard"),l=await e.json();o(l.filter(e=>"Performance Marketing"===e.acf.tool_category)),t(l.filter(e=>"Search Engine optimization"===e.acf.tool_category)),d(l.filter(e=>"Social Media"===e.acf.tool_category)),p(l.filter(e=>"Retention Marketing"===e.acf.tool_category))})()},[]),(0,c.jsxs)(c.Fragment,{children:[0!==e.length&&(0,c.jsx)(u,{seoTools:!0,ref:s,toolsList:e}),0!==x.length&&(0,c.jsx)(u,{socialTools:!0,ref:a,toolsList:x}),0!==l.length&&(0,c.jsx)(u,{performanceTools:!0,ref:r,toolsList:l}),0!==m.length&&(0,c.jsx)(u,{retentionTools:!0,ref:n,toolsList:m})]})}},3123:function(e,t){"use strict";t.Z={home:"/",about:"/about",services:"/services",contact:"/contact",marketingTools:"/marketing-tools",growthResources:"/growth-resources",blog:"https://growwithsahil.com/blog"}},8190:function(e,t,l){"use strict";async function s(e){try{return await fetch(e,{redirect:"follow",method:"GET"})}catch(e){return e}}l.d(t,{Z:function(){return s}})}},function(e){e.O(0,[589,216,552,84,971,23,744],function(){return e(e.s=6818)}),_N_E=e.O()}]);