var W=e=>typeof e=="function",f=(e,t)=>W(e)?e(t):e;var $=(()=>{let e=0;return()=>(++e).toString()})(),L=e=>t=>{t&&setTimeout(()=>{let o=t.getBoundingClientRect();e(o)})},P=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();import{useEffect as j,useState as Q}from"react";var J=20;var R=new Map,z=e=>{if(R.has(e))return;let t=setTimeout(()=>{R.delete(e),u({type:4,toastId:e})},1e3);R.set(e,t)},X=e=>{let t=R.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,J)};case 1:return t.toast.id&&X(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:o}=t;return e.toasts.find(s=>s.id===o.id)?I(e,{type:1,toast:o}):I(e,{type:0,toast:o});case 3:let{toastId:a}=t;return a?z(a):e.toasts.forEach(s=>{z(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+r}))}}},E=[],O={toasts:[],pausedAt:void 0},u=e=>{O=I(O,e),E.forEach(t=>{t(O)})},q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,o]=Q(O);j(()=>(E.push(o),()=>{let r=E.indexOf(o);r>-1&&E.splice(r,1)}),[t]);let a=t.toasts.map(r=>{var s,n;return{...e,...e[r.type],...r,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||q[r.type],style:{...e.style,...(n=e[r.type])==null?void 0:n.style,...r.style}}});return{...t,toasts:a}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||$()}),b=e=>(t,o)=>{let a=G(t,e,o);return u({type:2,toast:a}),a.id},i=(e,t)=>b("blank")(e,t);i.error=b("error");i.success=b("success");i.loading=b("loading");i.custom=b("custom");i.dismiss=e=>{u({type:3,toastId:e})};i.remove=e=>u({type:4,toastId:e});i.promise=(e,t,o)=>{let a=i.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(r=>(i.success(f(t.success,r),{id:a,...o,...o==null?void 0:o.success}),r)).catch(r=>{i.error(f(t.error,r),{id:a,...o,...o==null?void 0:o.error})}),e};import{useEffect as K,useMemo as Z}from"react";var k=e=>{let{toasts:t,pausedAt:o}=D(e);K(()=>{if(o)return;let r=Date.now(),s=t.map(n=>{if(n.duration===1/0)return;let g=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(g<0){n.visible&&i.dismiss(n.id);return}return setTimeout(()=>i.dismiss(n.id),g)});return()=>{s.forEach(n=>n&&clearTimeout(n))}},[t,o]);let a=Z(()=>({startPause:()=>{u({type:5,time:Date.now()})},endPause:()=>{o&&u({type:6,time:Date.now()})},updateHeight:(r,s)=>u({type:1,toast:{id:r,height:s}}),calculateOffset:(r,s)=>{let{reverseOrder:n=!1,gutter:g=8,defaultPosition:T}=s||{},c=t.filter(d=>(d.position||T)===(r.position||T)&&d.height),h=c.findIndex(d=>d.id===r.id),A=c.filter((d,x)=>x<h&&d.visible).length;return c.filter(d=>d.visible).slice(...n?[A+1]:[0,A]).reduce((d,x)=>d+(x.height||0)+g,0)}}),[t,o]);return{toasts:t,handlers:a}};import{css as B,styled as ee,extractCss as te}from"goober";var _={},N={k:1},oe=e=>{_.target=e,N.target=e},re=(e,t)=>{e.innerHTML=te(t),e.id="_goober";let a=(t||document).querySelector("#_goober");a&&a.remove()},se=e=>{re(e),oe(e)};var H=B.bind(_),m=ee.bind(_),p=B.bind(N);import*as l from"react";import*as y from"react";var ae=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ne=p`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ie=p`
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

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ne} 0.15s ease-out forwards;
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
    animation: ${ie} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ce=p`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=m("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ce} 1s linear infinite;
`;var pe=p`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,me=p`
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

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${me} 0.2s ease-out forwards;
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
`;var de=m("div")`
  position: absolute;
`,le=m("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ue=p`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=m("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ue} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:a}=e;return t!==void 0?typeof t=="string"?y.createElement(fe,null,t):t:o==="blank"?null:y.createElement(le,null,y.createElement(V,{...a}),o!=="loading"&&y.createElement(de,null,o==="error"?y.createElement(C,{...a}):y.createElement(w,{...a})))};var Te=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ge="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=m("div",l.forwardRef)`
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
`,Se=m("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,he=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=P()?[ge,xe]:[Te(a),ye(a)];return{animation:t?`${p(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${p(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=l.memo(({toast:e,position:t,style:o,children:a})=>{let r=e!=null&&e.height?he(e.position||t||"top-center",e.visible):{opacity:0},s=l.createElement(M,{toast:e}),n=l.createElement(Se,{...e.ariaProps},f(e.message,e));return l.createElement(be,{className:e.className,style:{...r,...o,...e.style}},typeof a=="function"?a({icon:s,message:n}):l.createElement(l.Fragment,null,s,n))});import{setup as Ae}from"goober";import*as S from"react";Ae(S.createElement);var Pe=(e,t)=>{let o=e.includes("top"),a=o?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...a,...r}},Re=H`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,v=16,Ee=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:a,children:r,containerStyle:s,containerClassName:n})=>{let{toasts:g,handlers:T}=k(o);return S.createElement("div",{style:{position:"fixed",zIndex:9999,top:v,left:v,right:v,bottom:v,pointerEvents:"none",...s},className:n,onMouseEnter:T.startPause,onMouseLeave:T.endPause},g.map(c=>{let h=c.position||t,A=T.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),U=Pe(h,A),d=c.height?void 0:L(x=>{T.updateHeight(c.id,x.height)});return S.createElement("div",{ref:d,className:c.visible?Re:"",key:c.id,style:U},c.type==="custom"?f(c.message,c):r?r(c):S.createElement(F,{toast:c,position:h}))}))};var _t=i;export{w as CheckmarkIcon,C as ErrorIcon,V as LoaderIcon,F as ToastBar,M as ToastIcon,Ee as Toaster,_t as default,f as resolveValue,se as setCssTarget,i as toast,k as useToaster,D as useToasterStore};
//# sourceMappingURL=index.mjs.map