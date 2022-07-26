"use strict";var K=Object.create;var R=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var re=(e,t)=>{for(var o in t)R(e,o,{get:t[o],enumerable:!0})},H=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ee(t))!oe.call(e,r)&&r!==o&&R(e,r,{get:()=>t[r],enumerable:!(s=Z(t,r))||s.enumerable});return e};var L=(e,t,o)=>(o=e!=null?K(te(e)):{},H(t||!e||!e.__esModule?R(o,"default",{value:e,enumerable:!0}):o,e)),se=e=>H(R({},"__esModule",{value:!0}),e);var Ve={};re(Ve,{CheckmarkIcon:()=>M,ErrorIcon:()=>V,LoaderIcon:()=>w,ToastBar:()=>U,ToastIcon:()=>F,Toaster:()=>G,default:()=>Ce,resolveValue:()=>u,setCssTarget:()=>X,toast:()=>i,useToaster:()=>C,useToasterStore:()=>k});module.exports=se(Ve);var ae=e=>typeof e=="function",u=(e,t)=>ae(e)?e(t):e;var W=(()=>{let e=0;return()=>(++e).toString()})(),j=e=>t=>{t&&setTimeout(()=>{let o=t.getBoundingClientRect();e(o)})},E=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var D=require("react"),ne=20;var O=new Map,Q=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),f({type:4,toastId:e})},1e3);O.set(e,t)},ie=e=>{let t=O.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ne)};case 1:return t.toast.id&&ie(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:o}=t;return e.toasts.find(a=>a.id===o.id)?z(e,{type:1,toast:o}):z(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?Q(s):e.toasts.forEach(a=>{Q(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+r}))}}},v=[],I={toasts:[],pausedAt:void 0},f=e=>{I=z(I,e),v.forEach(t=>{t(I)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},k=(e={})=>{let[t,o]=(0,D.useState)(I);(0,D.useEffect)(()=>(v.push(o),()=>{let r=v.indexOf(o);r>-1&&v.splice(r,1)}),[t]);let s=t.toasts.map(r=>{var a,n;return{...e,...e[r.type],...r,duration:r.duration||((a=e[r.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||ce[r.type],style:{...e.style,...(n=e[r.type])==null?void 0:n.style,...r.style}}});return{...t,toasts:s}};var me=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||W()}),S=e=>(t,o)=>{let s=me(t,e,o);return f({type:2,toast:s}),s.id},i=(e,t)=>S("blank")(e,t);i.error=S("error");i.success=S("success");i.loading=S("loading");i.custom=S("custom");i.dismiss=e=>{f({type:3,toastId:e})};i.remove=e=>f({type:4,toastId:e});i.promise=(e,t,o)=>{let s=i.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(r=>(i.success(u(t.success,r),{id:s,...o,...o==null?void 0:o.success}),r)).catch(r=>{i.error(u(t.error,r),{id:s,...o,...o==null?void 0:o.error})}),e};var _=require("react");var C=e=>{let{toasts:t,pausedAt:o}=k(e);(0,_.useEffect)(()=>{if(o)return;let r=Date.now(),a=t.map(n=>{if(n.duration===1/0)return;let x=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(x<0){n.visible&&i.dismiss(n.id);return}return setTimeout(()=>i.dismiss(n.id),x)});return()=>{a.forEach(n=>n&&clearTimeout(n))}},[t,o]);let s=(0,_.useMemo)(()=>({startPause:()=>{f({type:5,time:Date.now()})},endPause:()=>{o&&f({type:6,time:Date.now()})},updateHeight:(r,a)=>f({type:1,toast:{id:r,height:a}}),calculateOffset:(r,a)=>{let{reverseOrder:n=!1,gutter:x=8,defaultPosition:T}=a||{},c=t.filter(d=>(d.position||T)===(r.position||T)&&d.height),A=c.findIndex(d=>d.id===r.id),P=c.filter((d,b)=>b<A&&d.visible).length;return c.filter(d=>d.visible).slice(...n?[P+1]:[0,P]).reduce((d,b)=>d+(b.height||0)+x,0)}}),[t,o]);return{toasts:t,handlers:s}};var y=require("goober");var B={},J={k:1},de=e=>{B.target=e,J.target=e},le=(e,t)=>{e.innerHTML=(0,y.extractCss)(t),e.id="_goober";let s=(t||document).querySelector("#_goober");s&&s.remove()},X=e=>{le(e),de(e)};var q=y.css.bind(B),m=y.styled.bind(B),p=y.css.bind(J);var l=L(require("react"));var g=L(require("react"));var ue=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=p`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=p`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,V=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Te} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ye=p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,w=m("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ye} 1s linear infinite;
`;var ge=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,xe=p`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,M=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var be=m("div")`
  position: absolute;
`,Se=m("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,he=p`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ae=m("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${he} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,F=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return t!==void 0?typeof t=="string"?g.createElement(Ae,null,t):t:o==="blank"?null:g.createElement(Se,null,g.createElement(w,{...s}),o!=="loading"&&g.createElement(be,null,o==="error"?g.createElement(V,{...s}):g.createElement(M,{...s})))};var Pe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Re=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",Oe="0%{opacity:1;} 100%{opacity:0;}",ve=m("div",l.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ie=m("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,De=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=E()?[Ee,Oe]:[Pe(s),Re(s)];return{animation:t?`${p(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${p(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},U=l.memo(({toast:e,position:t,style:o,children:s})=>{let r=e!=null&&e.height?De(e.position||t||"top-center",e.visible):{opacity:0},a=l.createElement(F,{toast:e}),n=l.createElement(Ie,{...e.ariaProps},u(e.message,e));return l.createElement(ve,{className:e.className,style:{...r,...o,...e.style}},typeof s=="function"?s({icon:a,message:n}):l.createElement(l.Fragment,null,a,n))});var Y=require("goober"),h=L(require("react"));(0,Y.setup)(h.createElement);var ke=(e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...r}},_e=q`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,G=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:r,containerStyle:a,containerClassName:n})=>{let{toasts:x,handlers:T}=C(o);return h.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:n,onMouseEnter:T.startPause,onMouseLeave:T.endPause},x.map(c=>{let A=c.position||t,P=T.calculateOffset(c,{reverseOrder:e,gutter:s,defaultPosition:t}),N=ke(A,P),d=c.height?void 0:j(b=>{T.updateHeight(c.id,b.height)});return h.createElement("div",{ref:d,className:c.visible?_e:"",key:c.id,style:N},c.type==="custom"?u(c.message,c):r?r(c):h.createElement(U,{toast:c,position:A}))}))};var Ce=i;0&&(module.exports={CheckmarkIcon,ErrorIcon,LoaderIcon,ToastBar,ToastIcon,Toaster,resolveValue,setCssTarget,toast,useToaster,useToasterStore});
//# sourceMappingURL=index.js.map