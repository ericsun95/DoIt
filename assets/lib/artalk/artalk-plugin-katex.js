(function(n,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("katex")):typeof define=="function"&&define.amd?define(["exports","katex"],r):(n=typeof globalThis!="undefined"?globalThis:n||self,r(n["artalk-plugin-katex"]=n["artalk-plugin-katex"]||{},n.katex))})(this,function(n,r){"use strict";var l;const u=/\$.*?\$/,k=/^\$(.*?)\$/,x=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,a=o=>{let f=0;const p=()=>`__atk_katex_id_${f++}__`,s={},c=(t,e)=>{const i=p();return s[i]={isBlock:e,tex:t},i},g={name:"blockMath",level:"block",tokenizer:t=>{const e=x.exec(t);if(e)return{type:"html",raw:e[0],text:c(e[1],!0)}}},h={name:"inlineMath",level:"inline",start:t=>{const e=t.search(u);return e!==-1?e:t.length},tokenizer:t=>{const e=k.exec(t);if(e)return{type:"html",raw:e[0],text:c(e[1],!1)}}};o.on("mounted",()=>{const t=o.getMarked();if(!t){console.error("[artalk-plugin-katex] no marked instance found in artalk context");return}t.use({extensions:[g,h]}),o.updateConf({markedReplacers:[e=>(e=e.replace(/(__atk_katex_id_\d+__)/g,(i,_)=>{const{tex:m,isBlock:w}=s[_];try{return r.renderToString(m,{displayMode:w})}catch(d){return console.error("[artalk-plugin-katex] failed to render katex:",d),`<code>${d}</code>`}}),e)]})})};typeof window!="undefined"&&(!window.ArtalkPlugins&&(window.ArtalkPlugins={}),window.ArtalkPlugins.ArtalkKatexPlugin=a,(l=window.Artalk)==null||l.use(a)),n.ArtalkKatexPlugin=a,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
