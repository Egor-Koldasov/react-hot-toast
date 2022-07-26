var W=e=>typeof e=="function",f=(e,t)=>W(e)?e(t):e;var $=(()=>{let e=0;return()=>(++e).toString()})(),L=e=>t=>{t&&setTimeout(()=>{let o=t.getBoundingClientRect();e(o)})},P=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();import{useEffect as j,useState as Q}from"react";var J=20;var R=new Map,z=e=>{if(R.has(e))return;let t=setTimeout(()=>{R.delete(e),l({type:4,toastId:e})},1e3);R.set(e,t)},X=e=>{let t=R.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return t.toast.id&&X(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:o}=t;return e.toasts.find(s=>s.id===o.id)?D(e,{type:1,toast:o}):D(e,{type:0,toast:o});case 3:let{toastId:a}=t;return a?z(a):e.toasts.forEach(s=>{z(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},O=[],E={toasts:[],pausedAt:void 0},l=e=>{E=D(E,e),O.forEach(t=>{t(E)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,o]=Q(E);j(()=>(O.push(o),()=>{let r=O.indexOf(o);r>-1&&O.splice(r,1)}),[t]);let a=t.toasts.map(r=>{var s,n;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||Y[r.type],style:{...e.style,...(n=e[r.type])==null?void 0:n.style,...r.style}}});return{...t,toasts:a}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||$()}),b=e=>(t,o)=>{let a=G(t,e,o);return l({type:2,toast:a}),a.id},i=(e,t)=>b("blank")(e,t);i.error=b("error");i.success=b("success");i.loading=b("loading");i.custom=b("custom");i.dismiss=e=>{l({type:3,toastId:e})};i.remove=e=>l({type:4,toastId:e});i.promise=(e,t,o)=>{let a=i.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(r=>(i.success(f(t.success,r),{id:a,...o,...o==null?void 0:o.success}),r)).catch(r=>{i.error(f(t.error,r),{id:a,...o,...o==null?void 0:o.error})}),e};import{useEffect as K,useMemo as Z}from"react";var k=e=>{let{toasts:t,pausedAt:o}=I(e);K(()=>{if(o)return;let r=Date.now(),s=t.map(n=>{if(n.duration===1/0)return;let x=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(x<0){n.visible&&i.dismiss(n.id);return}return setTimeout(()=>i.dismiss(n.id),x)});return()=>{s.forEach(n=>n&&clearTimeout(n))}},[t,o]);let a=Z(()=>({startPause:()=>{l({type:5,time:Date.now()})},endPause:()=>{o&&l({type:6,time:Date.now()})},updateHeight:(r,s)=>l({type:1,toast:{id:r,height:s}}),calculateOffset:(r,s)=>{let{reverseOrder:n=!1,gutter:x=8,defaultPosition:T}=s||{},c=t.filter(d=>(d.position||T)===(r.position||T)&&d.height),S=c.findIndex(d=>d.id===r.id),A=c.filter((d,g)=>g<S&&d.visible).length;return c.filter(d=>d.visible).slice(...n?[A+1]:[0,A]).reduce((d,g)=>d+(g.height||0)+x,0)}}),[t,o]);return{toasts:t,handlers:a}};import{css as B,styled as ee,extractCss as te}from"goober";var _={},N={k:1},oe=e=>{_.target=e,N.target=e};var H=B.bind(_),m=ee.bind(_),p=B.bind(N);import*as u from"react";import*as y from"react";var re=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,se=p`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ae=p`
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

  animation: ${re} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${se} 0.15s ease-out forwards;
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
    animation: ${ae} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,C=m("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var ie=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=p`
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
}`,w=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
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
`;var pe=m("div")`
  position: absolute;
`,me=m("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,de=p`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=m("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${de} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:a}=e;return t!==void 0?typeof t=="string"?y.createElement(ue,null,t):t:o==="blank"?null:y.createElement(me,null,y.createElement(C,{...a}),o!=="loading"&&y.createElement(pe,null,o==="error"?y.createElement(V,{...a}):y.createElement(w,{...a})))};var le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,fe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Te="0%{opacity:0;} 100%{opacity:1;}",ye="0%{opacity:1;} 100%{opacity:0;}",xe=m("div",u.forwardRef)`
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
`,ge=m("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,be=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=P()?[Te,ye]:[le(a),fe(a)];return{animation:t?`${p(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${p(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=u.memo(({toast:e,position:t,style:o,children:a})=>{let r=e!=null&&e.height?be(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(M,{toast:e}),n=u.createElement(ge,{...e.ariaProps},f(e.message,e));return u.createElement(xe,{className:e.className,style:{...r,...o,...e.style}},typeof a=="function"?a({icon:s,message:n}):u.createElement(u.Fragment,null,s,n))});import{setup as he}from"goober";import*as h from"react";he(h.createElement);var Se=(e,t)=>{let o=e.includes("top"),a=o?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...a,...r}},Ae=H`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,v=16,Pe=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:a,children:r,containerStyle:s,containerClassName:n})=>{let{toasts:x,handlers:T}=k(o);return h.createElement("div",{style:{position:"fixed",zIndex:9999,top:v,left:v,right:v,bottom:v,pointerEvents:"none",...s},className:n,onMouseEnter:T.startPause,onMouseLeave:T.endPause},x.map(c=>{let S=c.position||t,A=T.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),U=Se(S,A),d=c.height?void 0:L(g=>{T.updateHeight(c.id,g.height)});return h.createElement("div",{ref:d,className:c.visible?Ae:"",key:c.id,style:U},c.type==="custom"?f(c.message,c):r?r(c):h.createElement(F,{toast:c,position:S}))}))};var It=i;export{w as CheckmarkIcon,V as ErrorIcon,C as LoaderIcon,F as ToastBar,M as ToastIcon,Pe as Toaster,oe as bindCssTarget,It as default,te as extractCss,f as resolveValue,i as toast,k as useToaster,I as useToasterStore};
//# sourceMappingURL=index.mjs.map