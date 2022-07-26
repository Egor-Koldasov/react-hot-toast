"use strict";var K=Object.create;var R=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var re=(e,t)=>{for(var o in t)R(e,o,{get:t[o],enumerable:!0})},H=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ee(t))!oe.call(e,r)&&r!==o&&R(e,r,{get:()=>t[r],enumerable:!(a=Z(t,r))||a.enumerable});return e};var L=(e,t,o)=>(o=e!=null?K(te(e)):{},H(t||!e||!e.__esModule?R(o,"default",{value:e,enumerable:!0}):o,e)),se=e=>H(R({},"__esModule",{value:!0}),e);var _e={};re(_e,{CheckmarkIcon:()=>M,ErrorIcon:()=>C,LoaderIcon:()=>w,ToastBar:()=>U,ToastIcon:()=>F,Toaster:()=>G,bindCssTarget:()=>X,default:()=>ke,extractCss:()=>T.extractCss,resolveValue:()=>l,toast:()=>i,useToaster:()=>V,useToasterStore:()=>k});module.exports=se(_e);var ae=e=>typeof e=="function",l=(e,t)=>ae(e)?e(t):e;var W=(()=>{let e=0;return()=>(++e).toString()})(),j=e=>t=>{t&&setTimeout(()=>{let o=t.getBoundingClientRect();e(o)})},O=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var I=require("react"),ne=20;var E=new Map,Q=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),f({type:4,toastId:e})},1e3);E.set(e,t)},ie=e=>{let t=E.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ne)};case 1:return t.toast.id&&ie(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:o}=t;return e.toasts.find(s=>s.id===o.id)?z(e,{type:1,toast:o}):z(e,{type:0,toast:o});case 3:let{toastId:a}=t;return a?Q(a):e.toasts.forEach(s=>{Q(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},v=[],D={toasts:[],pausedAt:void 0},f=e=>{D=z(D,e),v.forEach(t=>{t(D)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},k=(e={})=>{let[t,o]=(0,I.useState)(D);(0,I.useEffect)(()=>(v.push(o),()=>{let r=v.indexOf(o);r>-1&&v.splice(r,1)}),[t]);let a=t.toasts.map(r=>{var s,n;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||ce[r.type],style:{...e.style,...(n=e[r.type])==null?void 0:n.style,...r.style}}});return{...t,toasts:a}};var me=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||W()}),h=e=>(t,o)=>{let a=me(t,e,o);return f({type:2,toast:a}),a.id},i=(e,t)=>h("blank")(e,t);i.error=h("error");i.success=h("success");i.loading=h("loading");i.custom=h("custom");i.dismiss=e=>{f({type:3,toastId:e})};i.remove=e=>f({type:4,toastId:e});i.promise=(e,t,o)=>{let a=i.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(r=>(i.success(l(t.success,r),{id:a,...o,...o==null?void 0:o.success}),r)).catch(r=>{i.error(l(t.error,r),{id:a,...o,...o==null?void 0:o.error})}),e};var _=require("react");var V=e=>{let{toasts:t,pausedAt:o}=k(e);(0,_.useEffect)(()=>{if(o)return;let r=Date.now(),s=t.map(n=>{if(n.duration===1/0)return;let g=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(g<0){n.visible&&i.dismiss(n.id);return}return setTimeout(()=>i.dismiss(n.id),g)});return()=>{s.forEach(n=>n&&clearTimeout(n))}},[t,o]);let a=(0,_.useMemo)(()=>({startPause:()=>{f({type:5,time:Date.now()})},endPause:()=>{o&&f({type:6,time:Date.now()})},updateHeight:(r,s)=>f({type:1,toast:{id:r,height:s}}),calculateOffset:(r,s)=>{let{reverseOrder:n=!1,gutter:g=8,defaultPosition:y}=s||{},c=t.filter(d=>(d.position||y)===(r.position||y)&&d.height),A=c.findIndex(d=>d.id===r.id),P=c.filter((d,b)=>b<A&&d.visible).length;return c.filter(d=>d.visible).slice(...n?[P+1]:[0,P]).reduce((d,b)=>d+(b.height||0)+g,0)}}),[t,o]);return{toasts:t,handlers:a}};var T=require("goober"),B={},J={k:1},X=e=>{B.target=e,J.target=e};var Y=T.css.bind(B),m=T.styled.bind(B),p=T.css.bind(J);var u=L(require("react"));var x=L(require("react"));var de=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ue=p`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=p`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,C=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ue} 0.15s ease-out forwards;
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
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var fe=p`
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
  animation: ${fe} 1s linear infinite;
`;var Te=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ye=p`
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

  animation: ${Te} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ye} 0.2s ease-out forwards;
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
`;var xe=m("div")`
  position: absolute;
`,ge=m("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=p`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,he=m("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,F=({toast:e})=>{let{icon:t,type:o,iconTheme:a}=e;return t!==void 0?typeof t=="string"?x.createElement(he,null,t):t:o==="blank"?null:x.createElement(ge,null,x.createElement(w,{...a}),o!=="loading"&&x.createElement(xe,null,o==="error"?x.createElement(C,{...a}):x.createElement(M,{...a})))};var Se=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ae=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Pe="0%{opacity:0;} 100%{opacity:1;}",Re="0%{opacity:1;} 100%{opacity:0;}",Oe=m("div",u.forwardRef)`
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
`,Ee=m("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ve=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=O()?[Pe,Re]:[Se(a),Ae(a)];return{animation:t?`${p(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${p(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},U=u.memo(({toast:e,position:t,style:o,children:a})=>{let r=e!=null&&e.height?ve(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(F,{toast:e}),n=u.createElement(Ee,{...e.ariaProps},l(e.message,e));return u.createElement(Oe,{className:e.className,style:{...r,...o,...e.style}},typeof a=="function"?a({icon:s,message:n}):u.createElement(u.Fragment,null,s,n))});var q=require("goober"),S=L(require("react"));(0,q.setup)(S.createElement);var De=(e,t)=>{let o=e.includes("top"),a=o?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...a,...r}},Ie=Y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,G=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:a,children:r,containerStyle:s,containerClassName:n})=>{let{toasts:g,handlers:y}=V(o);return S.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...s},className:n,onMouseEnter:y.startPause,onMouseLeave:y.endPause},g.map(c=>{let A=c.position||t,P=y.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),N=De(A,P),d=c.height?void 0:j(b=>{y.updateHeight(c.id,b.height)});return S.createElement("div",{ref:d,className:c.visible?Ie:"",key:c.id,style:N},c.type==="custom"?l(c.message,c):r?r(c):S.createElement(U,{toast:c,position:A}))}))};var ke=i;0&&(module.exports={CheckmarkIcon,ErrorIcon,LoaderIcon,ToastBar,ToastIcon,Toaster,bindCssTarget,extractCss,resolveValue,toast,useToaster,useToasterStore});
//# sourceMappingURL=index.js.map