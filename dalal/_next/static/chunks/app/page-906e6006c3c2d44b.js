(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7502:function(e,t,l){Promise.resolve().then(l.t.bind(l,231,23)),Promise.resolve().then(l.bind(l,9161)),Promise.resolve().then(l.bind(l,5756)),Promise.resolve().then(l.bind(l,3281)),Promise.resolve().then(l.bind(l,4745))},4214:function(e,t,l){"use strict";var a=l(3963);t.Z=void 0;var n=a(l(9118)),r=l(7437);t.Z=(0,n.default)((0,r.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12m10-2.79V11h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.31-.31.85-.09.85.36"}),"ArrowCircleLeftRounded")},8403:function(e,t,l){"use strict";var a=l(3963);t.Z=void 0;var n=a(l(9118)),r=l(7437);t.Z=(0,n.default)((0,r.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10 2.79V13H9c-.55 0-1-.45-1-1s.45-1 1-1h3V9.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79c-.31.31-.85.09-.85-.36"}),"ArrowCircleRightRounded")},5997:function(e,t,l){"use strict";var a=l(3963);t.Z=void 0;var n=a(l(9118)),r=l(7437);t.Z=(0,n.default)((0,r.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},1932:function(e,t,l){"use strict";var a=l(2265),n=a&&"object"==typeof a&&"default"in a?a:{default:a};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let r=a.forwardRef(function(e,t){let{style:l={},className:r="",autoFill:s=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:c=!1,direction:x="left",speed:d=50,delay:m=0,loop:p=0,gradient:u=!1,gradientColor:f="white",gradientWidth:h=200,onFinish:g,onCycleComplete:b,onMount:w,children:v}=e,[y,j]=a.useState(0),[N,k]=a.useState(0),[Z,C]=a.useState(1),[S,E]=a.useState(!1),L=a.useRef(null),_=t||L,T=a.useRef(null),F=a.useCallback(()=>{if(T.current&&_.current){let e=_.current.getBoundingClientRect(),t=T.current.getBoundingClientRect(),l=e.width,a=t.width;("up"===x||"down"===x)&&(l=e.height,a=t.height),s&&l&&a?C(a<l?Math.ceil(l/a):1):C(1),j(l),k(a)}},[s,_,x]);a.useEffect(()=>{if(S&&(F(),T.current&&_.current)){let e=new ResizeObserver(()=>F());return e.observe(_.current),e.observe(T.current),()=>{e&&e.disconnect()}}},[F,_,S]),a.useEffect(()=>{F()},[F,v]),a.useEffect(()=>{E(!0)},[]),a.useEffect(()=>{"function"==typeof w&&w()},[]);let R=a.useMemo(()=>s?N*Z/d:N<y?y/d:N/d,[s,y,N,Z,d]),z=a.useMemo(()=>Object.assign(Object.assign({},l),{"--pause-on-hover":!i||o?"paused":"running","--pause-on-click":!i||o&&!c||c?"paused":"running","--width":"up"===x||"down"===x?"100vh":"100%","--transform":"up"===x?"rotate(-90deg)":"down"===x?"rotate(90deg)":"none"}),[l,i,o,c,x]),A=a.useMemo(()=>({"--gradient-color":f,"--gradient-width":"number"==typeof h?"".concat(h,"px"):h}),[f,h]),P=a.useMemo(()=>({"--play":i?"running":"paused","--direction":"left"===x?"normal":"reverse","--duration":"".concat(R,"s"),"--delay":"".concat(m,"s"),"--iteration-count":p?"".concat(p):"infinite","--min-width":s?"auto":"100%"}),[i,x,R,m,p,s]),I=a.useMemo(()=>({"--transform":"up"===x?"rotate(90deg)":"down"===x?"rotate(-90deg)":"none"}),[x]),M=a.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>n.default.createElement(a.Fragment,{key:t},a.Children.map(v,e=>n.default.createElement("div",{style:I,className:"rfm-child"},e)))),[I,v]);return S?n.default.createElement("div",{ref:_,style:z,className:"rfm-marquee-container "+r},u&&n.default.createElement("div",{style:A,className:"rfm-overlay"}),n.default.createElement("div",{className:"rfm-marquee",style:P,onAnimationIteration:b,onAnimationEnd:g},n.default.createElement("div",{className:"rfm-initial-child-container",ref:T},a.Children.map(v,e=>n.default.createElement("div",{style:I,className:"rfm-child"},e))),M(Z-1)),n.default.createElement("div",{className:"rfm-marquee",style:P},M(Z))):null});t.Z=r},9161:function(e,t,l){"use strict";var a=l(7437),n=l(8355),r=l(2265),s=l(1240),i=l(7138),o=l(3123),c=l(4214),x=l(8403),d=l(8190);l(8452),t.default=function(){let e=(0,n.L9)("home.blogSection"),[t,l]=(0,r.useState)(0),m=(0,r.useRef)([]),p=(0,r.useRef)(),[u,f]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(m.current[t]&&p.current){let e=m.current[t].offsetLeft;p.current.scrollTo({left:e,behavior:"smooth"})}},[t]),(0,r.useEffect)(()=>{(async()=>{let e=await (0,d.Z)("https://growwithsahil.com/blog/wp-json/wp/v2/posts?_fields=slug,title,excerpt&acf_format=standard");f(await e.json())})()},[]),(0,a.jsxs)(s.Z,{innerClass:"xl:pt-20 lg:pt-16 md:pt-14 pt-8 xl:pb-20 lg:pb-16 md:pb-14 pb-10 text-center",children:[(0,a.jsx)("h2",{className:"font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl ",children:e.heading}),(0,a.jsx)("p",{className:"text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ",children:e.subHeading.map((e,t)=>(0,a.jsx)(r.Fragment,{children:e.para?(0,a.jsx)("span",{children:e.para}):(0,a.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}),(0,a.jsxs)("div",{className:"relative xl:mt-16 lg:mt-14 md:mt-12 mt-10 ",children:[(0,a.jsx)("div",{className:"relative md:overflow-hidden overflow-x-scroll flex",ref:p,children:u.map((e,t)=>(0,a.jsx)("div",{ref:e=>m.current[t]=e,className:"lg:w-[calc(100%/4)] md:w-[calc(100%/3)] w-[220px] flex-shrink-0 xl:px-3 px-2 ",children:(0,a.jsxs)("div",{className:"rounded-xl overflow-hidden text-start ",children:[(0,a.jsx)("img",{loading:"lazy",src:(0,n.F6)("blogImage.png"),alt:e.heading,className:"w-full aspect-auto"}),(0,a.jsxs)("div",{className:"px-2.5 pt-4 pb-3.5 border-x-2 border-b-2 rounded-b-xl ",children:[(0,a.jsx)("p",{className:"line-clamp-2 font-bold xl:text-[23px] lg:text-[19px] md:text-[18px] text-[17px] leading-[1.2] ",children:e.title.rendered}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered},className:"blogPara"}),(0,a.jsxs)("div",{className:"xl:mt-10 mt-8 flex justify-between",children:[(0,a.jsxs)("p",{className:"flex flex-col font-medium xl:text-xs text-[10px] text-paraSecondary ",children:[(0,a.jsx)("span",{children:"Published by"}),(0,a.jsx)("span",{children:"Sahil Khan"})]}),(0,a.jsx)(i.default,{prefetch:!1,href:"".concat(o.Z.blog,"/").concat(e.slug),target:"_blank",className:"bg-primaryColor text-black hover:bg-black hover:text-white xl:px-3 px-2 py-1 rounded-md font-semibold xl:text-base text-sm transition-all duration-300 ease-in-out",children:"Read More"})]})]})]})},t))}),(0,a.jsxs)("div",{className:"md:inline-flex hidden xl:mt-4 mt-3 xl:gap-x-2 gap-x-1.5 items-center text-slate-300",children:[(0,a.jsx)(c.Z,{className:"xl:text-3xl text-2xl cursor-pointer",onClick:function(){l(e=>e-1>0?e-1:0)}}),[!0,!0,!0].map((e,t)=>(0,a.jsx)("div",{className:"xl:border-[4px] border-[3px] rounded-full border-slate-100 "},t)),(0,a.jsx)(x.Z,{className:"xl:text-3xl text-2xl cursor-pointer",onClick:function(){l(e=>{let t=p.current.scrollWidth-p.current.clientWidth;return m.current[e+1].offsetLeft<=t?e+1:e})}})]})]})]})}},5756:function(e,t,l){"use strict";var a=l(7437),n=l(2265),r=l(1240),s=l(8355),i=l(7138),o=l(5997),c=l(8190);t.default=function(){let e=(0,s.L9)("home.growthResourcesSection"),[t,l]=(0,n.useState)(0),x=(0,n.useRef)([]),d=(0,n.useRef)(),[m,p]=(0,n.useState)([]);return(0,n.useEffect)(()=>{if(x.current[t]&&d.current){let e=x.current[t].offsetLeft;d.current.scrollTo({left:e,behavior:"smooth"})}},[t]),(0,n.useEffect)(()=>{(async()=>{let e=await (0,c.Z)("https://growwithsahil.com/blog/wp-json/wp/v2/resource-api/?_fields=acf,content,slug&acf_format=standard");p(await e.json())})()},[]),(0,a.jsxs)(r.Z,{innerClass:"xl:pt-20 lg:pt-16 md:pt-14 pt-10 text-center",children:[(0,a.jsx)("h2",{className:"font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl ",children:e.heading}),(0,a.jsx)("p",{className:"text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ",children:e.subHeading.map((e,t)=>(0,a.jsx)(n.Fragment,{children:e.para?(0,a.jsx)("span",{children:e.para}):(0,a.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}),(0,a.jsxs)("div",{className:"xl:mt-14 lg:mt-12 md:mt-10 mt-8  text-start relative",children:[(0,a.jsx)("span",{className:"absolute md:block hidden left-0 -translate-x-2/3 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none",onClick:function(){l(e=>e-1>0?e-1:0)},children:"<"}),(0,a.jsx)("div",{className:"flex md:overflow-hidden overflow-x-scroll relative xl:max-w-[65rem] lg:max-w-[58rem] md:max-w-[37rem] max-w-none mx-auto ",ref:d,children:m.map((e,t)=>(0,a.jsx)("div",{ref:e=>x.current[t]=e,className:"lg:w-[calc(100%/3)] md:w-[calc(100%/2)] w-[230px] md:px-0 px-2 flex-shrink-0 ",children:(0,a.jsxs)("div",{className:" bg-black text-white md:p-4 p-2.5 md:pb-4 pb-3 rounded-xl xl:max-w-[320px] lg:max-w-[284px] md:max-w-[270px] max-w-none mx-auto ",children:[(0,a.jsx)("div",{style:{backgroundImage:"url(".concat(e.acf.featured_image,")")},className:"bg-white md:h-40 h-28 rounded-xl bg-no-repeat bg-center bg-cover "}),(0,a.jsx)("p",{className:"font-bold xl:text-[22px] lg:text-[20px] md:text-[18px] text-[15px] leading-snug mt-2.5 line-clamp-2",children:e.acf.resource_name}),(0,a.jsx)("p",{className:"text-paraSecondary xl:text-sm md:text-xs text-[10px] tracking-wide leading-normal mt-2 inline-block !line-clamp-3 ",children:e.acf.out_description}),(0,a.jsx)("div",{className:"mt-6 text-center",children:(0,a.jsxs)(i.default,{prefetch:!1,href:(0,s.pE)("/".concat(e.slug),"/growth-resources"),className:"bg-primaryColor text-black md:px-3 px-2 xl:py-2 lg:py-1.5 py-1 rounded-md font-semibold inline-flex items-center xl:text-lg md:text-base text-sm xl:gap-x-2 lg:gap-x-1.5 md:gap-x-1 gap-x-0.5 hover:gap-x-4 transition-all duration-300 ease-in-out ",children:[e.acf.cta_text,(0,a.jsx)(o.Z,{className:"lg:text-xl md:text-lg text-base "})]})})]})},t))}),(0,a.jsx)("span",{className:"absolute md:block hidden right-0 translate-x-2/3 top-1/2 -translate-y-1/2 font-bold text-5xl cursor-pointer select-none",onClick:function(){l(e=>{let t=d.current.scrollWidth-d.current.clientWidth;return x.current[e+1].offsetLeft<=t?e+1:e})},children:">"})]})]})}},3281:function(e,t,l){"use strict";let a;l.d(t,{w:function(){return a}});var n=l(7437),r=l(2265),s=l(1240),i=l(8355),o=l(3244);t.default=function(e){let{home:t,about:l}=e,c=(0,i.L9)("".concat(t?"home":l&&"about",".heroSection"));return a=(0,r.useRef)(),(0,n.jsxs)(s.Z,{ref:a,outerClass:"bg-black text-white xl:h-screen h-auto ",innerClass:"h-full flex flex-col justify-center relative lg:py-48 md:py-36 pt-28 ",children:[(0,n.jsxs)("div",{className:"relative z-10 md:text-start text-center",children:[(0,n.jsx)("h1",{className:"flex flex-col font-bold xl:text-[54px] lg:text-[45px] md:text-[38px] text-[24px] leading-[1.35] py-0 ",children:c.heading.map((e,t)=>(0,n.jsx)("span",{children:e.map((e,t)=>(0,n.jsx)("span",{className:"".concat(e.styleBg&&"text-black bg-primaryColor px-3 rounded-lg "),children:e.para},t))},t))}),(0,n.jsx)("p",{className:"text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full mt-4 tracking-wide leading-normal ",children:c.subHeading.map((e,t)=>(0,n.jsx)(r.Fragment,{children:e.para?(0,n.jsx)("span",{children:e.para}):(0,n.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}),(0,n.jsx)("div",{className:"flex items-center md:justify-start justify-center",children:(null==c?void 0:c.benefitsList)&&(0,n.jsx)("div",{className:"flex items-start lg:flex-row flex-col font-medium xl:text-lg lg:text-base md:text-sm text-xs gap-x-6 gap-y-1 mt-4 ",children:c.benefitsList.map((e,t)=>(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)("img",{src:(0,i.I)(e.imageUrl),alt:e.alt,className:"aspect-auto md:w-4 w-3"}),(0,n.jsx)("p",{children:e.para})]},t))})}),(0,n.jsx)("div",{className:"lg:mt-10 md:mt-8 ".concat(t?"mt-10":l&&"mt-6"," "),children:(0,n.jsx)(o.Z,{home:t,about:l})}),(0,n.jsx)("div",{className:"md:hidden block w-full ".concat(t?"mt-14":l&&"mt-2"," "),children:(0,n.jsx)("img",{loading:"lazy",src:(0,i.F6)(c.mainImageUrl),alt:"shail profile picture",className:"h-auto max-w-none ms-auto ".concat(t?"w-full":l&&"w-[70%] max-w-[300px] -mr-[20px] ","  ")})})]}),(0,n.jsx)("div",{className:"hidden md:block absolute lg:w-[50%] w-[55%] bottom-0 right-0 ".concat(t?"translate-x-[10%]":l&&""," "),children:(0,n.jsx)("img",{loading:"lazy",src:(0,i.F6)(c.mainImageUrl),alt:"shail profile picture",className:"h-auto max-w-none ms-auto ".concat(t?"w-full":l&&"xl:w-[380px] lg:w-[340px] w-[250px] lg:-mr-0 -mr-[40px] ","  ")})})]})}},4745:function(e,t,l){"use strict";let a;l.d(t,{x:function(){return a}});var n=l(7437),r=l(2265),s=l(1240),i=l(8355),o=l(1932),c=l(7138),x=l(3123),d=l(5997);t.default=function(){let e=(0,i.L9)("home.marketingToolSection");return a=(0,r.useRef)(),(0,n.jsxs)(s.Z,{innerClass:"bg-black text-white rounded-3xl text-center xl:pt-10 lg:pt-9 md:pt-8 pt-7 xl:pb-9 lg:pb-8 md:pb-7 pb-6 ",ref:a,children:[(0,n.jsx)("h2",{className:"font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl ",children:e.heading}),(0,n.jsx)("p",{className:"text-paraSecondary xl:text-xl lg:text-lg md:text-base text-sm xl:w-[580px] lg:w-[500px] md:w-[460px] w-full xl:mt-3 lg:mt-2 mt-1 tracking-wide leading-normal inline-block ",children:e.subHeading.map((e,t)=>(0,n.jsx)(r.Fragment,{children:e.para?(0,n.jsx)("span",{children:e.para}):(0,n.jsx)("a",{href:e.href,className:"underline underline-offset-4",children:e.link})},t))}),(0,n.jsxs)("div",{className:"xl:pt-8 lg:pt-7 md:pt-6 pt-5 xl:pb-10 lg:pb-9 md:pb-8 pb-7 space-y-1 relative",children:[(0,n.jsx)("div",{className:"absolute h-full xl:w-20 lg:w-16 md:w-14 w-12 top-0 left-0 bg-blackSideLeft z-10 "}),(0,n.jsx)(o.Z,{className:"xl:py-6 lg:py-5 md:py-3.5 py-3 ",direction:"left",speed:"35",children:e.marketingToolList.map((e,t)=>(0,n.jsx)(c.default,{prefetch:!1,href:x.Z.marketingTools,className:"xl:px-4 lg:px-3 md:px-3 px-2.5 xl:py-4 lg:py-3 md:py-2 py-2 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out lg:border-[3px] border-[2px] border-primaryColor rounded-lg xl:text-lg md:text-base text-sm font-medium xl:mx-2.5 lg:mx-2 md:mx-1.5 mx-1 ",children:e.name},t))}),(0,n.jsx)(o.Z,{className:"xl:py-6 lg:py-5 md:py-3.5 py-3",direction:"right",speed:"35",children:e.marketingToolList.map((e,t)=>(0,n.jsx)(c.default,{prefetch:!1,href:x.Z.marketingTools,className:"xl:px-4 lg:px-3 md:px-3 px-2.5 xl:py-4 lg:py-3 md:py-2 py-2 bg-black hover:bg-primaryColor hover:text-black transition-all duration-300 ease-in-out border-[3px] border-primaryColor rounded-lg xl:text-lg md:text-base text-sm font-medium xl:mx-2.5 lg:mx-2 md:mx-1.5 mx-1 ",children:e.name},t))}),(0,n.jsx)("div",{className:"absolute h-full xl:w-20 lg:w-16 md:w-14 w-12 top-0 right-0 bg-blackSideRight z-10 "})]}),(0,n.jsxs)(c.default,{prefetch:!1,href:x.Z.marketingTools,className:"bg-primaryColor text-black lg:px-4 px-3 xl:py-3 lg:py-2.5 py-2 rounded-md font-semibold inline-flex items-center xl:text-lg md:text-base text-sm xl:gap-x-2 lg:gap-x-1.5 md:gap-x-1 gap-x-0.5 hover:gap-x-4 transition-all duration-300 ease-in-out ",children:[(0,n.jsx)("span",{children:e.button}),(0,n.jsx)(d.Z,{className:"lg:text-xl text-lg"})]})]})}},3244:function(e,t,l){"use strict";var a=l(7437),n=l(8355),r=l(2265),s=l(1257),i=l(8819),o=l(5219),c=l(8190);t.Z=function(e){let{home:t,about:l}=e,x=(0,n.L9)("util.emailForm"),[d,m]=(0,r.useState)(!1),[p,u]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[g,b]=(0,r.useState)(""),[w,v]=(0,r.useState)(!1),[y,j]=(0,r.useState)(!1),N=(0,o.usePathname)();function k(e,t){"name"===t?h(e):"phone"===t?b(e):"email"===t&&(u(e),v(!1))}async function Z(e){if(e.preventDefault(),""!==p&&""!==g&&""!==f)try{let e=await (0,c.Z)("https://script.google.com/macros/s/AKfycbwWGLFIebBTTuhecu_5DldCE7iiTZcAPE_LXxZan-PCqO_PyrzFZHIdvJ6ag0J5w4dY/exec?name=".concat(f,"&phone=").concat(g,"&email=").concat(p,"&location=").concat(N));if(200===e.status)j(!0);else throw Error("Failed to Post Data")}catch(e){console.log("error",e)}}function C(e){return!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{open:d,onClose:function(){m(!1),u(""),h(""),b(""),v(!1)},onChangeValue:k,name:f,phone:g,onSubmitApi:Z,popupForm:!0,thankyou:y}),(0,a.jsxs)("form",{className:"inline-flex flex-wrap justify-center lg:gap-x-3 gap-x-2 ".concat(w?"gap-y-6":"gap-y-3","  lg:text-lg text-base "),children:[x.inputList.map((e,t)=>(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(i.Z,{name:e.name,placeholder:e.placeholder,type:e.type,trueType:e.trueType,value:p,onChange:k,required:!0,inputCss:"text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg lg:w-[280px] w-[240px]"},t),w&&(0,a.jsx)("p",{className:"absolute md:text-sm text-xs md:mt-2 mt-1 w-full text-center text-red-500 ",children:"Invalid Email"})]},t)),(0,a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==p&&C(p)?m(!0):""===p||C(p)||v(!0)},className:"bg-primaryColor text-black lg:py-2 py-1.5 lg:px-4 px-3 rounded-lg font-semibold ",children:x.button["".concat(t?"home":l&&"about")].para})]})]})}},8819:function(e,t,l){"use strict";var a=l(7437),n=l(9712),r=l.n(n);l(2265),t.Z=function(e){let{placeholder:t,value:l="",onChange:n=()=>{},trueType:s,required:i,type:o,name:c="",inputCss:x=""}=e;return(0,a.jsx)("input",{name:c,id:c,type:o,required:i,className:r().className+" outline-none ".concat(x," "),placeholder:t,value:l,onChange:e=>{let t;return t=e.target.value,void("number"===s?n(t=t.replace(/[^0-9]/g,""),c):"text"===s?n(t=t.replace(/[^a-zA-Z]/g,""),c):"email"==s?n(t=t.replace(/[ ]/g,""),c):"phone"==s&&n(t=t.replace(/[^0-9]/g,"").slice(0,10),c))}})}},1257:function(e,t,l){"use strict";var a=l(7437),n=l(8355),r=l(9617);l(2265);var s=l(8819),i=l(1074),o=l(7138);t.Z=function(e){let{open:t,onClose:l,onChangeValue:c,email:x,phone:d,name:m,onSubmitApi:p,popupForm:u,popupDownload:f,inValid:h,thankyou:g}=e,b=(0,n.L9)("util.".concat(u?"popupForm":f&&"popupDownload")),w=(0,n.L9)("util.".concat(u?"popupThankyou":f&&"popupDownloadThankyou")),v=(0,n.L9)("util.socialShareList");return(0,a.jsx)(r.Z,{open:t,children:(0,a.jsxs)("div",{className:"lg:w-[420px] md:w-[380px] w-full relative md:p-6 p-4 py-6 ",children:[(0,a.jsx)(i.Z,{onClick:l,className:"absolute top-1 right-1 md:text-3xl text-xl cursor-pointer "}),g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"flex flex-col font-bold md:text-2xl text-xl items-center ",children:w.heading.map((e,t)=>(0,a.jsx)("span",{children:e},t))}),(0,a.jsx)("p",{className:"font-semibold text-center md:text-base text-sm md:mt-4 mt-3",children:w.mainPara}),(0,a.jsx)("p",{className:"font-semibold text-center md:text-base text-sm md:mt-7 mt-6",children:w.socialPara}),(0,a.jsx)("div",{className:"flex items-center justify-center gap-x-3 xl:mt-3 lg:mt-3 mt-2",children:v.map((e,t)=>(0,a.jsx)(o.default,{href:e.link,target:"_blank",prefetch:!1,className:"bg-black rounded-full p-2",children:(0,a.jsx)("img",{loading:"lazy",src:(0,n.I)(e.imageUrl),alt:"linkedin icon",className:"aspect-auto xl:w-3.5 w-3 "})},t))})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"flex flex-col font-bold md:text-2xl text-xl items-center ",children:b.heading.map((e,t)=>(0,a.jsx)("span",{children:e},t))}),(0,a.jsxs)("form",{id:b.formId,className:"flex flex-col gap-y-3 md:mt-6 mt-4 relative ",children:[b.inputList.map((e,t)=>(0,a.jsxs)("div",{className:"grid relative",children:[(0,a.jsx)(s.Z,{name:e.name,placeholder:e.placeholder,type:e.type,trueType:e.trueType,value:"name"===e.name?m:"phone"===e.name?d:"email"===e.name&&x,onChange:c,inputCss:"text-slate-600 lg:px-3 px-2 lg:py-2 py-1.5 rounded-lg border-2 border-slate-200/70 ".concat(h&&"email"===e.name&&"mb-3"," ")}),h&&"email"===e.name&&(0,a.jsx)("p",{className:"absolute bottom-0 translate-y-1/2 md:text-sm text-xs w-full text-center text-red-500 ",children:"Invalid Email"})]},t)),(0,a.jsx)("div",{className:"flex justify-center md:mt-3 mt-2",children:(0,a.jsx)("button",{type:"submit",onClick:p,className:"bg-primaryColor text-black lg:px-20 px-16 md:w-auto w-full lg:py-3 py-2 rounded font-medium ",children:b.button.para})})]})]})]})})}},3123:function(e,t){"use strict";t.Z={home:"/",about:"/about",services:"/services",contact:"/contact",marketingTools:"/marketing-tools",growthResources:"/growth-resources",blog:"https://growwithsahil.com/blog"}},8190:function(e,t,l){"use strict";async function a(e){try{return await fetch(e,{redirect:"follow",method:"GET"})}catch(e){return e}}l.d(t,{Z:function(){return a}})},8452:function(){}},function(e){e.O(0,[777,3,589,318,84,971,23,744],function(){return e(e.s=7502)}),_N_E=e.O()}]);