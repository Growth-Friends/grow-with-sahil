(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{5997:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var a=r(n(9118)),i=n(7437);t.Z=(0,a.default)((0,i.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward")},7630:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var a=r(n(9118)),i=n(7437);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},9504:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var a=r(n(9118)),i=n(7437);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},3100:function(e,t,n){"use strict";var r=n(2988),a=n(3950),i=n(2265),o=n(3630),s=n(5014),l=n(909),c=n(7700),u=n(5931),d=n(8095),f=n(7437);let m=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(e,t,n){let r=function(e,t,n){let r;let a=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),o=(0,d.Z)(t);if(t.fakeTransform)r=t.fakeTransform;else{let e=o.getComputedStyle(t);r=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let s=0,l=0;if(r&&"none"!==r&&"string"==typeof r){let e=r.split("(")[1].split(")")[0].split(",");s=parseInt(e[4],10),l=parseInt(e[5],10)}return"left"===e?i?"translateX(".concat(i.right+s-a.left,"px)"):"translateX(".concat(o.innerWidth+s-a.left,"px)"):"right"===e?i?"translateX(-".concat(a.right-i.left-s,"px)"):"translateX(-".concat(a.left+a.width-s,"px)"):"up"===e?i?"translateY(".concat(i.bottom+l-a.top,"px)"):"translateY(".concat(o.innerHeight+l-a.top,"px)"):i?"translateY(-".concat(a.top-i.top+a.height-l,"px)"):"translateY(-".concat(a.top+a.height-l,"px)")}(e,t,"function"==typeof n?n():n);r&&(t.style.webkitTransform=r,t.style.transform=r)}let h=i.forwardRef(function(e,t){let n=(0,c.Z)(),h={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},v={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:g,appear:y=!0,children:w,container:x,direction:E="down",easing:b=h,in:k,onEnter:Z,onEntered:C,onEntering:_,onExit:R,onExited:N,onExiting:z,style:M,timeout:T=v,TransitionComponent:S=o.ZP}=e,j=(0,a.Z)(e,m),q=i.useRef(null),L=(0,l.Z)(w.ref,q,t),X=e=>t=>{e&&(void 0===t?e(q.current):e(q.current,t))},A=X((e,t)=>{p(E,e,x),(0,u.n)(e),Z&&Z(e,t)}),F=X((e,t)=>{let a=(0,u.C)({timeout:T,style:M,easing:b},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",(0,r.Z)({},a)),e.style.transition=n.transitions.create("transform",(0,r.Z)({},a)),e.style.webkitTransform="none",e.style.transform="none",_&&_(e,t)}),H=X(C),B=X(z),O=X(e=>{let t=(0,u.C)({timeout:T,style:M,easing:b},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),p(E,e,x),R&&R(e)}),Y=X(e=>{e.style.webkitTransition="",e.style.transition="",N&&N(e)}),I=i.useCallback(()=>{q.current&&p(E,q.current,x)},[E,x]);return i.useEffect(()=>{if(k||"down"===E||"right"===E)return;let e=(0,s.Z)(()=>{q.current&&p(E,q.current,x)}),t=(0,d.Z)(q.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[E,k,x]),i.useEffect(()=>{k||I()},[k,I]),(0,f.jsx)(S,(0,r.Z)({nodeRef:q,onEnter:A,onEntered:H,onEntering:F,onExit:O,onExited:Y,onExiting:B,addEndListener:e=>{g&&g(q.current,e)},appear:y,in:k,timeout:T},j,{children:(e,t)=>i.cloneElement(w,(0,r.Z)({ref:L,style:(0,r.Z)({visibility:"exited"!==e||k?void 0:"hidden"},M,w.props.style)},t))}))});t.Z=h},1932:function(e,t,n){"use strict";var r=n(2265),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function(e,t){let{style:n={},className:i="",autoFill:o=!1,play:s=!0,pauseOnHover:l=!1,pauseOnClick:c=!1,direction:u="left",speed:d=50,delay:f=0,loop:m=0,gradient:p=!1,gradientColor:h="white",gradientWidth:v=200,onFinish:g,onCycleComplete:y,onMount:w,children:x}=e,[E,b]=r.useState(0),[k,Z]=r.useState(0),[C,_]=r.useState(1),[R,N]=r.useState(!1),z=r.useRef(null),M=t||z,T=r.useRef(null),S=r.useCallback(()=>{if(T.current&&M.current){let e=M.current.getBoundingClientRect(),t=T.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===u||"down"===u)&&(n=e.height,r=t.height),o&&n&&r?_(r<n?Math.ceil(n/r):1):_(1),b(n),Z(r)}},[o,M,u]);r.useEffect(()=>{if(R&&(S(),T.current&&M.current)){let e=new ResizeObserver(()=>S());return e.observe(M.current),e.observe(T.current),()=>{e&&e.disconnect()}}},[S,M,R]),r.useEffect(()=>{S()},[S,x]),r.useEffect(()=>{N(!0)},[]),r.useEffect(()=>{"function"==typeof w&&w()},[]);let j=r.useMemo(()=>o?k*C/d:k<E?E/d:k/d,[o,E,k,C,d]),q=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!s||l?"paused":"running","--pause-on-click":!s||l&&!c||c?"paused":"running","--width":"up"===u||"down"===u?"100vh":"100%","--transform":"up"===u?"rotate(-90deg)":"down"===u?"rotate(90deg)":"none"}),[n,s,l,c,u]),L=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof v?"".concat(v,"px"):v}),[h,v]),X=r.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===u?"normal":"reverse","--duration":"".concat(j,"s"),"--delay":"".concat(f,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":o?"auto":"100%"}),[s,u,j,f,m,o]),A=r.useMemo(()=>({"--transform":"up"===u?"rotate(90deg)":"down"===u?"rotate(-90deg)":"none"}),[u]),F=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(x,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e)))),[A,x]);return R?a.default.createElement("div",{ref:M,style:q,className:"rfm-marquee-container "+i},p&&a.default.createElement("div",{style:L,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:X,onAnimationIteration:y,onAnimationEnd:g},a.default.createElement("div",{className:"rfm-initial-child-container",ref:T},r.Children.map(x,e=>a.default.createElement("div",{style:A,className:"rfm-child"},e))),F(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:X},F(C))):null});t.Z=i},9171:function(e){e.exports={style:{fontFamily:"'__Raleway_5470e1', '__Raleway_Fallback_5470e1'",fontStyle:"normal"},className:"__className_5470e1"}}}]);