var h=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(l,t,o)=>t in l?h(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,m=(l,t)=>{for(var o in t||(t={}))E.call(t,o)&&p(l,o,t[o]);if(f)for(var o of f(t))M.call(t,o)&&p(l,o,t[o]);return l},v=(l,t)=>_(l,b(t));import{d as g,r as c,o as k,e as D,w,a as x,b as y,c as V,f as s,g as I,t as L,F as N,h as A}from"./vendor.f896c5fc.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(n){if(n.ep)return;n.ep=!0;const e=o(n);fetch(n.href,e)}};B();const C={class:"vue-easymde-editor"},O=g({props:{modelValue:null,options:null},emits:["update:modelValue","change","blur"],setup(l,{expose:t,emit:o}){const a=l,n=c();let e=null;const r=c(a.modelValue||"");return k(()=>{if(n.value){const u=v(m({},a.options||{}),{element:n.value,initialValue:a.modelValue||""});e=new D(u),e.codemirror.on("change",()=>{if(e){const i=e.value();r.value=i,o("update:modelValue",i),o("change",i)}}),e.codemirror.on("blur",()=>{e&&o("blur")})}}),w(()=>a.modelValue,u=>{e&&u!==r.value&&e.value(u||"")}),t({clear:()=>{e&&e.value("")},getMDEInstance:()=>e}),x(()=>{e&&e.cleanup(),e=null}),(u,i)=>(y(),V("div",C,[s("textarea",{ref_key:"textArea",ref:n},`
    `,512)]))}}),F=s("h1",null,"Vue3 component wrapper for EasyMDE",-1),S=g({setup(l){const t=c("initial value"),o=c(null);setTimeout(()=>{t.value="**updated**"},2e3);const a=()=>{o.value&&(console.log(o.value.getMDEInstance()),o.value.clear())},n=()=>{console.log("editor blur event triggered")};return(e,r)=>(y(),V(N,null,[F,s("button",{onClick:a},"Clear Value"),s("button",{onClick:r[0]||(r[0]=d=>t.value="## new value")},"Set Value"),I(O,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=d=>t.value=d),ref_key:"editor",ref:o,onBlur:n},null,8,["modelValue"]),s("p",null,"current value: "+L(t.value),1)],64))}});A(S).mount("#app");
