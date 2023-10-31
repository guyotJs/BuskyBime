(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();function R(){}function dt(t,e){for(const a in e)t[a]=e[a];return t}function Je(t){return t()}function We(){return Object.create(null)}function le(t){t.forEach(Je)}function Qe(t){return typeof t=="function"}function he(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let pe;function Tt(t,e){return pe||(pe=document.createElement("a")),pe.href=e,t===pe.href}function lt(t){return Object.keys(t).length===0}function ut(t,e,a,i){if(t){const r=et(t,e,a,i);return t[0](r)}}function et(t,e,a,i){return t[1]&&i?dt(a.ctx.slice(),t[1](i(e))):a.ctx}function ft(t,e,a,i){if(t[2]&&i){const r=t[2](i(a));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],f=Math.max(e.dirty.length,r.length);for(let p=0;p<f;p+=1)s[p]=e.dirty[p]|r[p];return s}return e.dirty|r}return e.dirty}function ct(t,e,a,i,r,s){if(r){const f=et(e,a,i,s);t.p(f,r)}}function bt(t){if(t.ctx.length>32){const e=[],a=t.ctx.length/32;for(let i=0;i<a;i++)e[i]=-1;return e}return-1}function P(t,e){t.appendChild(e)}function m(t,e,a){t.insertBefore(e,a||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function L(){return U(" ")}function tt(){return U("")}function ge(t,e,a,i){return t.addEventListener(e,a,i),()=>t.removeEventListener(e,a,i)}function S(t,e,a){a==null?t.removeAttribute(e):t.getAttribute(e)!==a&&t.setAttribute(e,a)}function wt(t){return Array.from(t.childNodes)}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let Te;function se(t){Te=t}function yt(){if(!Te)throw new Error("Function called outside component initialization");return Te}function mt(t){yt().$$.on_mount.push(t)}const ne=[],Ze=[],_e=[],Ke=[],pt=Promise.resolve();let Re=!1;function vt(){Re||(Re=!0,pt.then(it))}function je(t){_e.push(t)}const Ce=new Set;let ve=0;function it(){const t=Te;do{for(;ve<ne.length;){const e=ne[ve];ve++,se(e),_t(e.$$)}for(se(null),ne.length=0,ve=0;Ze.length;)Ze.pop()();for(let e=0;e<_e.length;e+=1){const a=_e[e];Ce.has(a)||(Ce.add(a),a())}_e.length=0}while(ne.length);for(;Ke.length;)Ke.pop()();Re=!1,Ce.clear(),se(t)}function _t(t){if(t.fragment!==null){t.update(),le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(je)}}const Ae=new Set;let ee;function at(){ee={r:0,c:[],p:ee}}function ot(){ee.r||le(ee.c),ee=ee.p}function j(t,e){t&&t.i&&(Ae.delete(t),t.i(e))}function z(t,e,a,i){if(t&&t.o){if(Ae.has(t))return;Ae.add(t),ee.c.push(()=>{Ae.delete(t),i&&(a&&t.d(1),i())}),t.o(e)}else i&&i()}function Z(t){t&&t.c()}function G(t,e,a,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,a),i||je(()=>{const f=t.$$.on_mount.map(Je).filter(Qe);t.$$.on_destroy?t.$$.on_destroy.push(...f):le(f),t.$$.on_mount=[]}),s.forEach(je)}function W(t,e){const a=t.$$;a.fragment!==null&&(le(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(ne.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,a,i,r,s,f,p=[-1]){const B=Te;se(t);const w=t.$$={fragment:null,ctx:[],props:s,update:R,not_equal:r,bound:We(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(B?B.$$.context:[])),callbacks:We(),dirty:p,skip_bound:!1,root:e.target||B.$$.root};f&&f(w.root);let A=!1;if(w.ctx=a?a(t,e.props||{},(b,o,...T)=>{const n=T.length?T[0]:o;return w.ctx&&r(w.ctx[b],w.ctx[b]=n)&&(!w.skip_bound&&w.bound[b]&&w.bound[b](n),A&&At(t,b)),o}):[],w.update(),A=!0,le(w.before_update),w.fragment=i?i(w.ctx):!1,e.target){if(e.hydrate){const b=wt(e.target);w.fragment&&w.fragment.l(b),b.forEach(y)}else w.fragment&&w.fragment.c();e.intro&&j(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),it()}se(B)}class Be{$destroy(){W(this,1),this.$destroy=R}$on(e,a){if(!Qe(a))return R;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(a),()=>{const r=i.indexOf(a);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K={"8/31":{date:"8/31",day:"B",TT:"TT 5"},"9/5":{date:"9/5",day:"A",TT:"TT 1"},"9/6":{date:"9/6",day:"B",TT:"Advisory"},"9/7":{date:"9/7",day:"A",TT:"TT 2"},"9/8":{date:"9/8",day:"B",TT:"TT 6"},"9/11":{date:"9/11",day:"A",TT:"TT 3"},"9/12":{date:"9/12",day:"B",TT:"TT 7"},"9/13":{date:"9/13",day:"A",TT:"Advisory"},"9/14":{date:"9/14",day:"B",TT:"TT 8"},"9/15":{date:"9/15",day:"A",TT:"Club/ Advisory"},"9/18":{date:"9/18",day:"B",TT:"TT 5"},"9/19":{date:"9/19",day:"A",TT:"TT 4"},"9/20":{date:"9/20",day:"B",TT:"Advisory"},"9/21":{date:"9/21",day:"A",TT:"TT 1"},"9/22":{date:"9/22",day:"B",TT:"TT 6"},"9/26":{date:"9/26",day:"A",TT:"TT 2"},"9/27":{date:"9/27",day:"B",TT:"Advisory"},"9/28":{date:"9/28",day:"A",TT:"TT 3"},"9/29":{date:"9/29",day:"B",TT:"TT 7"},"10/2":{date:"10/2",day:"A",TT:"TT 4"},"10/3":{date:"10/3",day:"B",TT:"TT 8"},"10/4":{date:"10/4",day:"A",TT:"Advisory"},"10/5":{date:"10/5",day:"B",TT:"TT 5"},"10/6":{date:"10/6",day:"A",TT:"TT 1"},"10/10":{date:"10/10",day:"B",TT:"TT 6"},"10/11":{date:"10/11",day:"A",TT:"Advisory",special:"PSAT Day"},"10/12":{date:"10/12",day:"B",TT:"TT 7"},"10/13":{date:"10/13",day:"A",TT:"TT 2"},"10/16":{date:"10/16",day:"B",TT:"TT 8"},"10/17":{date:"10/17",day:"A",TT:"TT 3"},"10/18":{date:"10/18",day:"B",TT:"Advisory"},"10/19":{date:"10/19",day:"A",TT:"TT 4"},"10/20":{date:"10/20",day:"B",TT:"Club/ Advisory"},"10/23":{date:"10/23",day:"A",TT:"TT 1"},"10/24":{date:"10/24",day:"B",TT:"TT 5"},"10/25":{date:"10/25",day:"A",TT:"Advisory"},"10/26":{date:"10/26",day:"B",TT:"TT 6"},"10/27":{date:"10/27",day:"A",TT:"TT 2"},"11/1":{date:"11/1",day:"B",TT:"Advisory"},"11/2":{date:"11/2",day:"A",TT:"TT 3"},"11/3":{date:"11/3",day:"B",TT:"TT 7"},"11/6":{date:"11/6",day:"A",TT:"TT 4"},"11/8":{date:"11/8",day:"B",TT:"Advisory"},"11/9":{date:"11/9",day:"A",TT:"TT 1"},"11/10":{date:"11/10",day:"B",TT:"TT 8"},"11/14":{date:"11/14",day:"A",TT:"TT 2"},"11/15":{date:"11/15",day:"B",TT:"Advisory"},"11/16":{date:"11/16",day:"A",TT:"TT 3"},"11/17":{date:"11/17",day:"B",TT:"TT 5"},"11/20":{date:"11/20",day:"A",TT:"TT 4"},"11/21":{date:"11/21",day:"B",TT:"TT 6"},"11/27":{date:"11/27",day:"A",TT:"TT 1"},"11/28":{date:"11/28",day:"B",TT:"TT 7"},"11/29":{date:"11/29",day:"A",TT:"Advisory"},"11/30":{date:"11/30",day:"B",TT:"TT 8"},"12/1":{date:"12/1",day:"A",TT:"Club/ Advisory"},"12/4":{date:"12/4",day:"B",TT:"TT 5"},"12/5":{date:"12/5",day:"A",TT:"TT 2"},"12/6":{date:"12/6",day:"B",TT:"Advisory"},"12/7":{date:"12/7",day:"A",TT:"TT 3"},"12/8":{date:"12/8",day:"B",TT:"TT 6"},"12/11":{date:"12/11",day:"A",TT:"TT 4"},"12/12":{date:"12/12",day:"B",TT:"TT 7"},"12/13":{date:"12/13",day:"A",TT:"Advisory"},"12/14":{date:"12/14",day:"B",TT:"TT 8"},"12/15":{date:"12/15",day:"A",TT:"TT 1"},"12/18":{date:"12/18",day:"B",TT:"TT 5"},"12/19":{date:"12/19",day:"A",TT:"TT 2"},"12/20":{date:"12/20",day:"B",TT:"Advisory"},"1/2":{date:"1/2",day:"A",TT:"TT 3"},"1/3":{date:"1/3",day:"B",TT:"Advisory"},"1/4":{date:"1/4",day:"A",TT:"TT 4"},"1/5":{date:"1/5",day:"B",TT:"Club/ Advisory"},"1/8":{date:"1/8",day:"A",TT:"TT 1"},"1/9":{date:"1/9",day:"B",TT:"TT 6"},"1/10":{date:"1/10",day:"A",TT:"Advisory"},"1/11":{date:"1/11",day:"B",TT:"TT 7"},"1/12":{date:"1/12",day:"A",TT:"TT 2"},"1/16":{date:"1/16",day:"B",TT:"TT 8"},"1/17":{date:"1/17",day:"A",TT:"Advisory"},"1/18":{date:"1/18",day:"B",TT:"TT 5"},"1/19":{date:"1/19",day:"A",TT:"TT 3"},"1/23":{date:"1/23",day:"B",TT:"TT 6"},"1/24":{date:"1/24",day:"A",TT:"Advisory"},"1/25":{date:"1/25",day:"B",TT:"TT 7"},"1/26":{date:"1/26",day:"A",TT:"Club/ Advisory"},"1/29":{date:"1/29",day:"B",TT:"TT 8"},"1/30":{date:"1/30",day:"A",TT:"TT 4"},"1/31":{date:"1/31",day:"B",TT:"Advisory"},"2/1":{date:"2/1",day:"A",TT:"TT 1"},"2/2":{date:"2/2",day:"B",TT:"TT 5"},"2/5":{date:"2/5",day:"A",TT:"TT 2"},"2/6":{date:"2/6",day:"B",TT:"TT 6"},"2/7":{date:"2/7",day:"A",TT:"Advisory"},"2/8":{date:"2/8",day:"B",TT:"TT 7"},"2/12":{date:"2/12",day:"A",TT:"TT 3"},"2/13":{date:"2/13",day:"B",TT:"TT 8"},"2/14":{date:"2/14",day:"A",TT:"Advisory"},"2/15":{date:"2/15",day:"B",TT:"TT 5"},"2/16":{date:"2/16",day:"A",TT:"TT 4"},"2/20":{date:"2/20",day:"B",TT:"TT 6"},"2/21":{date:"2/21",day:"A",TT:"Advisory"},"2/22":{date:"2/22",day:"B",TT:"TT 7"},"2/23":{date:"2/23",day:"A",TT:"TT 1"},"2/26":{date:"2/26",day:"B",TT:"TT 8"},"2/27":{date:"2/27",day:"A",TT:"TT 2"},"2/28":{date:"2/28",day:"B",TT:"Advisory"},"2/29":{date:"2/29",day:"A",TT:"TT 3"},"3/1":{date:"3/1",day:"B",TT:"Club/ Advisory"},"3/4":{date:"3/4",day:"A",TT:"TT 4"},"3/6":{date:"3/6",day:"B",TT:"Advisory"},"3/7":{date:"3/7",day:"A",TT:"TT 1"},"3/8":{date:"3/8",day:"B",TT:"TT 5"},"3/11":{date:"3/11",day:"A",TT:"TT 2"},"3/12":{date:"3/12",day:"B",TT:"TT 6"},"3/13":{date:"3/13",day:"A",TT:"Advisory"},"3/14":{date:"3/14",day:"B",TT:"TT 7"},"3/15":{date:"3/15",day:"A",TT:"TT 3"},"3/18":{date:"3/18",day:"B",TT:"TT 8"},"3/19":{date:"3/19",day:"A",TT:"TT 4"},"3/20":{date:"3/20",day:"B",TT:"Advisory"},"3/21":{date:"3/21",day:"A",TT:"TT 1"},"3/22":{date:"3/22",day:"B",TT:"TT 5"},"4/1":{date:"4/1",day:"A",TT:"TT 2"},"4/2":{date:"4/2",day:"B",TT:"TT 6"},"4/3":{date:"4/3",day:"A",TT:"Advisory"},"4/4":{date:"4/4",day:"B",TT:"TT 7"},"4/8":{date:"4/8",day:"A",TT:"TT 3"},"4/9":{date:"4/9",day:"B",TT:"TT 8"},"4/11":{date:"4/11",day:"A",TT:"TT 4"},"4/12":{date:"4/12",day:"B",TT:"TT 5"},"4/15":{date:"4/15",day:"A",TT:"TT 1"},"4/16":{date:"4/16",day:"B",TT:"TT 6"},"4/17":{date:"4/17",day:"A",TT:"Advisory"},"4/18":{date:"4/18",day:"B",TT:"TT 7"},"4/19":{date:"4/19",day:"A",TT:"Club/ Advisory"},"4/22":{date:"4/22",day:"B",TT:"TT 8"},"4/23":{date:"4/23",day:"A",TT:"TT 2"},"4/24":{date:"4/24",day:"B",TT:"Advisory"},"4/25":{date:"4/25",day:"A",TT:"TT 3"},"4/26":{date:"4/26",day:"B",TT:"TT 5"},"4/29":{date:"4/29",day:"A",TT:"TT 4"},"4/30":{date:"4/30",day:"B",TT:"TT 6"},"5/1":{date:"5/1",day:"A",TT:"Advisory"},"5/2":{date:"5/2",day:"B",TT:"TT 7"},"5/3":{date:"5/3",day:"A",TT:"TT 1"},"5/6":{date:"5/6",day:"B",TT:"TT 8"},"5/7":{date:"5/7",day:"A",TT:"TT 2"},"5/8":{date:"5/8",day:"B",TT:"Advisory"},"5/9":{date:"5/9",day:"A",TT:"TT 3"},"5/10":{date:"5/10",day:"B",TT:"TT 5"},"5/13":{date:"5/13",day:"A",TT:"TT 4"},"5/14":{date:"5/14",day:"B",TT:"TT 6"},"5/15":{date:"5/15",day:"A",TT:"Advisory"},"5/16":{date:"5/16",day:"B",TT:"TT 7"},"5/17":{date:"5/17",day:"A",TT:"TT 1"},"5/20":{date:"5/20",day:"B",TT:"TT 8"},"5/21":{date:"5/21",day:"A",TT:"TT 2"},"5/22":{date:"5/22",day:"B",TT:"Advisory"},"5/23":{date:"5/23",day:"A",TT:"TT 3"},"5/24":{date:"5/24",day:"B",TT:"Club/ Advisory"},"5/28":{date:"5/28",day:"A",TT:"TT 4"},"5/29":{date:"5/29",day:"B",TT:"Advisory"},"5/30":{date:"5/30",day:"A",TT:"TT 1"},"5/31":{date:"5/31",day:"B",TT:"TT 5"},"6/3":{date:"6/3",day:"A",TT:"TT 2"},"6/4":{date:"6/4",day:"B",TT:"TT 6"},"6/5":{date:"6/5",day:"A",TT:"Advisory"},"6/6":{date:"6/6",day:"B",TT:"TT 7"},"6/7":{date:"6/7",day:"A",TT:"TT 3"},"6/10":{date:"6/10",day:"B",TT:"TT 8"},"6/11":{date:"6/11",day:"A",TT:"TT 4"},"6/12":{date:"6/12",day:"B",TT:"Advisory"},"6/13":{date:"6/13",day:"A",TT:"TT 1"},"6/14":{date:"6/14",day:"B",TT:"TT 5"}};var ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Le={exports:{}};(function(t,e){(function(a,i){var r="0.7.32",s="",f="?",p="function",B="undefined",w="object",A="string",b="major",o="model",T="name",n="type",d="vendor",l="version",C="architecture",I="console",_="mobile",v="tablet",N="smarttv",M="wearable",q="embedded",F=350,c="Amazon",u="Apple",x="ASUS",ie="BlackBerry",V="Browser",X="Chrome",ue="Edge",J="Firefox",fe="Google",qe="Huawei",$e="LG",xe="Microsoft",ze="Motorola",ce="Opera",Ee="Samsung",Pe="Sharp",be="Sony",Oe="Xiaomi",Se="Zebra",Ue="Facebook",rt=function(h,E){var g={};for(var D in h)E[D]&&E[D].length%2===0?g[D]=E[D].concat(h[D]):g[D]=h[D];return g},we=function(h){for(var E={},g=0;g<h.length;g++)E[h[g].toUpperCase()]=h[g];return E},Fe=function(h,E){return typeof h===A?ae(E).indexOf(ae(h))!==-1:!1},ae=function(h){return h.toLowerCase()},nt=function(h){return typeof h===A?h.replace(/[^\d\.]/g,s).split(".")[0]:i},Ne=function(h,E){if(typeof h===A)return h=h.replace(/^\s\s*/,s).replace(/\s\s*$/,s),typeof E===B?h:h.substring(0,F)},oe=function(h,E){for(var g=0,D,$,me,O,re,Y;g<E.length&&!re;){var Ye=E[g],Ge=E[g+1];for(D=$=0;D<Ye.length&&!re;)if(re=Ye[D++].exec(h),re)for(me=0;me<Ge.length;me++)Y=re[++$],O=Ge[me],typeof O===w&&O.length>0?O.length===2?typeof O[1]==p?this[O[0]]=O[1].call(this,Y):this[O[0]]=O[1]:O.length===3?typeof O[1]===p&&!(O[1].exec&&O[1].test)?this[O[0]]=Y?O[1].call(this,Y,O[2]):i:this[O[0]]=Y?Y.replace(O[1],O[2]):i:O.length===4&&(this[O[0]]=Y?O[3].call(this,Y.replace(O[1],O[2])):i):this[O]=Y||i;g+=2}},De=function(h,E){for(var g in E)if(typeof E[g]===w&&E[g].length>0){for(var D=0;D<E[g].length;D++)if(Fe(E[g][D],h))return g===f?i:g}else if(Fe(E[g],h))return g===f?i:g;return h},st={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},He={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ve={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[l,[T,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[l,[T,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[T,l],[/opios[\/ ]+([\w\.]+)/i],[l,[T,ce+" Mini"]],[/\bopr\/([\w\.]+)/i],[l,[T,ce]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[T,l],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[l,[T,"UC"+V]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[l,[T,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[l,[T,"WeChat"]],[/konqueror\/([\w\.]+)/i],[l,[T,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[l,[T,"IE"]],[/yabrowser\/([\w\.]+)/i],[l,[T,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[T,/(.+)/,"$1 Secure "+V],l],[/\bfocus\/([\w\.]+)/i],[l,[T,J+" Focus"]],[/\bopt\/([\w\.]+)/i],[l,[T,ce+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[l,[T,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[l,[T,"Dolphin"]],[/coast\/([\w\.]+)/i],[l,[T,ce+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[l,[T,"MIUI "+V]],[/fxios\/([-\w\.]+)/i],[l,[T,J]],[/\bqihu|(qi?ho?o?|360)browser/i],[[T,"360 "+V]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[T,/(.+)/,"$1 "+V],l],[/(comodo_dragon)\/([\w\.]+)/i],[[T,/_/g," "],l],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[T,l],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[T],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[T,Ue],l],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[T,l],[/\bgsa\/([\w\.]+) .*safari\//i],[l,[T,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[l,[T,X+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[T,X+" WebView"],l],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[l,[T,"Android "+V]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[T,l],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[l,[T,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[l,T],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[T,[l,De,st]],[/(webkit|khtml)\/([\w\.]+)/i],[T,l],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[T,"Netscape"],l],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[l,[T,J+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[T,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[C,"amd64"]],[/(ia32(?=;))/i],[[C,ae]],[/((?:i[346]|x)86)[;\)]/i],[[C,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/windows (ce|mobile); ppc;/i],[[C,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[C,/ower/,s,ae]],[/(sun4\w)[;\)]/i],[[C,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[C,ae]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[d,Ee],[n,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[d,Ee],[n,_]],[/\((ip(?:hone|od)[\w ]*);/i],[o,[d,u],[n,_]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[d,u],[n,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[o,[d,qe],[n,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[o,[d,qe],[n,_]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[o,/_/g," "],[d,Oe],[n,_]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[d,Oe],[n,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[d,"OPPO"],[n,_]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[d,"Vivo"],[n,_]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[o,[d,"Realme"],[n,_]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[d,ze],[n,_]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[d,ze],[n,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[d,$e],[n,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[d,$e],[n,_]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[d,"Lenovo"],[n,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[d,"Nokia"],[n,_]],[/(pixel c)\b/i],[o,[d,fe],[n,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[d,fe],[n,_]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[d,be],[n,_]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[d,be],[n,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[d,"OnePlus"],[n,_]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[d,c],[n,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[d,c],[n,_]],[/(playbook);[-\w\),; ]+(rim)/i],[o,d,[n,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[d,ie],[n,_]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[d,x],[n,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[d,x],[n,_]],[/(nexus 9)/i],[o,[d,"HTC"],[n,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[d,[o,/_/g," "],[n,_]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[d,"Acer"],[n,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[d,"Meizu"],[n,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[d,Pe],[n,_]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[d,o,[n,_]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[d,o,[n,v]],[/(surface duo)/i],[o,[d,xe],[n,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[d,"Fairphone"],[n,_]],[/(u304aa)/i],[o,[d,"AT&T"],[n,_]],[/\bsie-(\w*)/i],[o,[d,"Siemens"],[n,_]],[/\b(rct\w+) b/i],[o,[d,"RCA"],[n,v]],[/\b(venue[\d ]{2,7}) b/i],[o,[d,"Dell"],[n,v]],[/\b(q(?:mv|ta)\w+) b/i],[o,[d,"Verizon"],[n,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[d,"Barnes & Noble"],[n,v]],[/\b(tm\d{3}\w+) b/i],[o,[d,"NuVision"],[n,v]],[/\b(k88) b/i],[o,[d,"ZTE"],[n,v]],[/\b(nx\d{3}j) b/i],[o,[d,"ZTE"],[n,_]],[/\b(gen\d{3}) b.+49h/i],[o,[d,"Swiss"],[n,_]],[/\b(zur\d{3}) b/i],[o,[d,"Swiss"],[n,v]],[/\b((zeki)?tb.*\b) b/i],[o,[d,"Zeki"],[n,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[d,"Dragon Touch"],o,[n,v]],[/\b(ns-?\w{0,9}) b/i],[o,[d,"Insignia"],[n,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[d,"NextBook"],[n,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],o,[n,_]],[/\b(lvtel\-)?(v1[12]) b/i],[[d,"LvTel"],o,[n,_]],[/\b(ph-1) /i],[o,[d,"Essential"],[n,_]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[d,"Envizen"],[n,v]],[/\b(trio[-\w\. ]+) b/i],[o,[d,"MachSpeed"],[n,v]],[/\btu_(1491) b/i],[o,[d,"Rotor"],[n,v]],[/(shield[\w ]+) b/i],[o,[d,"Nvidia"],[n,v]],[/(sprint) (\w+)/i],[d,o,[n,_]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[d,xe],[n,_]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[d,Se],[n,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[d,Se],[n,_]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,o,[n,I]],[/droid.+; (shield) bui/i],[o,[d,"Nvidia"],[n,I]],[/(playstation [345portablevi]+)/i],[o,[d,be],[n,I]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[d,xe],[n,I]],[/smart-tv.+(samsung)/i],[d,[n,N]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[d,Ee],[n,N]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[d,$e],[n,N]],[/(apple) ?tv/i],[d,[o,u+" TV"],[n,N]],[/crkey/i],[[o,X+"cast"],[d,fe],[n,N]],[/droid.+aft(\w)( bui|\))/i],[o,[d,c],[n,N]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[o,[d,Pe],[n,N]],[/(bravia[\w ]+)( bui|\))/i],[o,[d,be],[n,N]],[/(mitv-\w{5}) bui/i],[o,[d,Oe],[n,N]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[d,Ne],[o,Ne],[n,N]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[n,N]],[/((pebble))app/i],[d,o,[n,M]],[/droid.+; (glass) \d/i],[o,[d,fe],[n,M]],[/droid.+; (wt63?0{2,3})\)/i],[o,[d,Se],[n,M]],[/(quest( 2)?)/i],[o,[d,Ue],[n,M]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[d,[n,q]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[o,[n,_]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[n,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[n,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[n,_]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[d,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[l,[T,ue+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[l,[T,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[T,l],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[l,T]],os:[[/microsoft (windows) (vista|xp)/i],[T,l],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[T,[l,De,He]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[T,"Windows"],[l,De,He]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[l,/_/g,"."],[T,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[T,"Mac OS"],[l,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[l,T],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[T,l],[/\(bb(10);/i],[l,[T,ie]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[l,[T,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[l,[T,J+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[l,[T,"webOS"]],[/crkey\/([\d\.]+)/i],[l,[T,X+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[T,"Chromium OS"],l],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[T,l],[/(sunos) ?([\w\.\d]*)/i],[[T,"Solaris"],l],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[T,l]]},H=function(h,E){if(typeof h===w&&(E=h,h=i),!(this instanceof H))return new H(h,E).getResult();var g=h||(typeof a!==B&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:s),D=E?rt(Ve,E):Ve;return this.getBrowser=function(){var $={};return $[T]=i,$[l]=i,oe.call($,g,D.browser),$.major=nt($.version),$},this.getCPU=function(){var $={};return $[C]=i,oe.call($,g,D.cpu),$},this.getDevice=function(){var $={};return $[d]=i,$[o]=i,$[n]=i,oe.call($,g,D.device),$},this.getEngine=function(){var $={};return $[T]=i,$[l]=i,oe.call($,g,D.engine),$},this.getOS=function(){var $={};return $[T]=i,$[l]=i,oe.call($,g,D.os),$},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function($){return g=typeof $===A&&$.length>F?Ne($,F):$,this},this.setUA(g),this};H.VERSION=r,H.BROWSER=we([T,l,b]),H.CPU=we([C]),H.DEVICE=we([o,d,n,I,_,N,v,M,q]),H.ENGINE=H.OS=we([T,l]),t.exports&&(e=t.exports=H),e.UAParser=H;var te=typeof a!==B&&(a.jQuery||a.Zepto);if(te&&!te.ua){var ye=new H;te.ua=ye.getResult(),te.ua.get=function(){return ye.getUA()},te.ua.set=function(h){ye.setUA(h);var E=ye.getResult();for(var g in E)te.ua[g]=E[g]}}})(typeof window=="object"?window:ht)})(Le,Le.exports);const gt=Le.exports;function Xe(t){let e;const a=t[5].default,i=ut(a,t,t[4],null);return{c(){i&&i.c()},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&16)&&ct(i,a,r,r[4],e?ft(a,r[4],s,null):bt(r[4]),null)},i(r){e||(j(i,r),e=!0)},o(r){z(i,r),e=!1},d(r){i&&i.d(r)}}}function kt(t){let e,a,i=t[0]&&Xe(t);return{c(){i&&i.c(),e=tt()},m(r,s){i&&i.m(r,s),m(r,e,s),a=!0},p(r,[s]){r[0]?i?(i.p(r,s),s&1&&j(i,1)):(i=Xe(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(at(),z(i,1,1,()=>{i=null}),ot())},i(r){a||(j(i),a=!0)},o(r){z(i),a=!1},d(r){i&&i.d(r),r&&y(e)}}}function Bt(t,e,a){let{$$slots:i={},$$scope:r}=e,{showInDevice:s=void 0}=e,{showInBrowser:f=void 0}=e,{showInOs:p=void 0}=e,B=!1;mt(()=>{const o=new gt;let T=o.getBrowser(),n=o.getDevice(),d=o.getOS(),l=!0;s&&!b(w(n),s)&&(l=!1),f&&!b(A(T.name),f)&&(l=!1),p&&!b(A(d.name),p)&&(l=!1),a(0,B=l)});const w=o=>o.type?A(o.type):"desktop",A=o=>o.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),b=(o,T)=>Array.isArray(T)?T.some(n=>o===A(n)):o===A(T);return t.$$set=o=>{"showInDevice"in o&&a(1,s=o.showInDevice),"showInBrowser"in o&&a(2,f=o.showInBrowser),"showInOs"in o&&a(3,p=o.showInOs),"$$scope"in o&&a(4,r=o.$$scope)},[B,s,f,p,r,i]}class Q extends Be{constructor(e){super(),ke(this,e,Bt,kt,he,{showInDevice:1,showInBrowser:2,showInOs:3})}}function $t(t){let e;return{c(){e=k("main"),e.innerHTML='<div class="bg w3-row svelte-15yri29"><img src="https://tuskytime.org/assets/tuskylogo.png" alt="oy" width="80px"/><b>TUSCARORA TIME</b></div>'},m(a,i){m(a,e,i)},p:R,i:R,o:R,d(a){a&&y(e)}}}class xt extends Be{constructor(e){super(),ke(this,e,null,$t,he,{})}}function Et(t){let e;return{c(){e=k("main"),e.innerHTML='<p class="foot svelte-1xbxuop">Not affiliated with LCPS or Tuscarora, A recreation of <a href="https://tuskytime.org">Tuskytime.org</a> by, Easton Snow in <em>Svelte</em></p>'},m(a,i){m(a,e,i)},p:R,i:R,o:R,d(a){a&&y(e)}}}class Ot extends Be{constructor(e){super(),ke(this,e,null,Et,he,{})}}function St(t){let e,a,i;return{c(){e=k("button"),e.textContent="<",S(e,"id","changeday"),S(e,"class","svelte-17whwlj")},m(r,s){m(r,e,s),a||(i=ge(e,"click",t[3]),a=!0)},p:R,d(r){r&&y(e),a=!1,i()}}}function Nt(t){let e,a,i;return{c(){e=k("button"),e.textContent="<",S(e,"id","changeday"),S(e,"class","svelte-17whwlj")},m(r,s){m(r,e,s),a||(i=ge(e,"click",t[3]),a=!0)},p:R,d(r){r&&y(e),a=!1,i()}}}function Dt(t){let e,a,i,r,s,f,p,B,w,A;return e=new Q({props:{showInDevice:"desktop",$$slots:{default:[It]},$$scope:{ctx:t}}}),i=new Q({props:{showInDevice:"mobile",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment),a=L(),Z(i.$$.fragment),r=L(),s=k("img"),p=k("br"),B=L(),w=k("m"),w.textContent="(You rn)",Tt(s.src,f="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg")||S(s,"src",f),S(s,"width","400px"),S(s,"alt","you buffoon"),S(w,"class","svelte-17whwlj")},m(b,o){G(e,b,o),m(b,a,o),G(i,b,o),m(b,r,o),m(b,s,o),m(b,p,o),m(b,B,o),m(b,w,o),A=!0},p(b,o){const T={};o&257&&(T.$$scope={dirty:o,ctx:b}),e.$set(T);const n={};o&256&&(n.$$scope={dirty:o,ctx:b}),i.$set(n)},i(b){A||(j(e.$$.fragment,b),j(i.$$.fragment,b),A=!0)},o(b){z(e.$$.fragment,b),z(i.$$.fragment,b),A=!1},d(b){W(e,b),b&&y(a),W(i,b),b&&y(r),b&&y(s),b&&y(p),b&&y(B),b&&y(w)}}}function Ct(t){let e,a,i,r,s,f,p,B,w,A,b=K[t[0]].day+"",o,T,n,d,l,C,I,_;function v(u,x){return K[u[0]].day=="B"?jt:Rt}let N=v(t),M=N(t);function q(u,x){return K[u[0]].TT=="Advisory"?qt:Lt}let F=q(t),c=F(t);return{c(){e=k("br"),a=L(),i=U(t[0]),r=k("br"),s=k("br"),f=U(`
      TODAY IS
      `),M.c(),p=k("br"),B=L(),w=k("lg"),A=k("b"),o=U(b),T=k("br"),n=U(`
      DAY`),d=k("br"),l=U(`
      AND IT'S TUSKY TIME`),C=k("br"),I=L(),c.c(),_=tt(),S(w,"class","svelte-17whwlj")},m(u,x){m(u,e,x),m(u,a,x),m(u,i,x),m(u,r,x),m(u,s,x),m(u,f,x),M.m(u,x),m(u,p,x),m(u,B,x),m(u,w,x),P(w,A),P(A,o),P(w,T),m(u,n,x),m(u,d,x),m(u,l,x),m(u,C,x),m(u,I,x),c.m(u,x),m(u,_,x)},p(u,x){x&1&&de(i,u[0]),N!==(N=v(u))&&(M.d(1),M=N(u),M&&(M.c(),M.m(p.parentNode,p))),x&1&&b!==(b=K[u[0]].day+"")&&de(o,b),F===(F=q(u))&&c?c.p(u,x):(c.d(1),c=F(u),c&&(c.c(),c.m(_.parentNode,_)))},i:R,o:R,d(u){u&&y(e),u&&y(a),u&&y(i),u&&y(r),u&&y(s),u&&y(f),M.d(u),u&&y(p),u&&y(B),u&&y(w),u&&y(n),u&&y(d),u&&y(l),u&&y(C),u&&y(I),c.d(u),u&&y(_)}}}function It(t){let e,a,i,r,s;return{c(){e=U(t[0]),a=k("br"),i=L(),r=k("buffoonDesktop"),r.innerHTML="<b>There is no school buffoon</b>",s=k("br"),S(r,"class","svelte-17whwlj")},m(f,p){m(f,e,p),m(f,a,p),m(f,i,p),m(f,r,p),m(f,s,p)},p(f,p){p&1&&de(e,f[0])},d(f){f&&y(e),f&&y(a),f&&y(i),f&&y(r),f&&y(s)}}}function Mt(t){let e,a;return{c(){e=k("mobile"),e.innerHTML="<b>There is no school buffoon</b>",a=k("br"),S(e,"class","svelte-17whwlj")},m(i,r){m(i,e,r),m(i,a,r)},p:R,d(i){i&&y(e),i&&y(a)}}}function Rt(t){let e;return{c(){e=U(`AN
      `)},m(a,i){m(a,e,i)},d(a){a&&y(e)}}}function jt(t){let e;return{c(){e=U(`A
        `)},m(a,i){m(a,e,i)},d(a){a&&y(e)}}}function Lt(t){let e,a,i=K[t[0]].TT+"",r,s;return{c(){e=k("lg"),a=k("b"),r=U(i),s=k("br"),S(e,"class","svelte-17whwlj")},m(f,p){m(f,e,p),P(e,a),P(a,r),m(f,s,p)},p(f,p){p&1&&i!==(i=K[f[0]].TT+"")&&de(r,i)},d(f){f&&y(e),f&&y(s)}}}function qt(t){let e,a,i=K[t[0]].TT+"",r,s,f,p,B;return{c(){e=k("advise"),a=k("b"),r=U(i),s=k("br"),f=L(),p=k("b"),B=k("m"),B.textContent=`${t[1]}`,S(e,"class","svelte-17whwlj"),S(B,"class","svelte-17whwlj")},m(w,A){m(w,e,A),P(e,a),P(a,r),m(w,s,A),m(w,f,A),m(w,p,A),P(p,B)},p(w,A){A&1&&i!==(i=K[w[0]].TT+"")&&de(r,i)},d(w){w&&y(e),w&&y(s),w&&y(f),w&&y(p)}}}function zt(t){let e,a,i;return{c(){e=k("button"),e.textContent=">",S(e,"id","changeday"),S(e,"class","svelte-17whwlj")},m(r,s){m(r,e,s),a||(i=ge(e,"click",t[2]),a=!0)},p:R,d(r){r&&y(e),a=!1,i()}}}function Pt(t){let e,a,i;return{c(){e=k("button"),e.textContent=">",S(e,"id","changedaymobile"),S(e,"class","svelte-17whwlj")},m(r,s){m(r,e,s),a||(i=ge(e,"click",t[2]),a=!0)},p:R,d(r){r&&y(e),a=!1,i()}}}function Ut(t){let e;return{c(){e=k("div"),S(e,"class","box svelte-17whwlj")},m(a,i){m(a,e,i)},p:R,d(a){a&&y(e)}}}function Ft(t){let e,a,i,r,s,f,p,B,w,A,b,o,T,n,d,l,C,I,_,v,N;i=new xt({}),f=new Q({props:{showInDevice:"desktop",$$slots:{default:[St]},$$scope:{ctx:t}}}),B=new Q({props:{showInDevice:"mobile",$$slots:{default:[Nt]},$$scope:{ctx:t}}});const M=[Ct,Dt],q=[];function F(c,u){return K[c[0]]!=null?0:1}return b=F(t),o=q[b]=M[b](t),n=new Q({props:{showInDevice:"desktop",$$slots:{default:[zt]},$$scope:{ctx:t}}}),l=new Q({props:{showInDevice:"mobile",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),I=new Q({props:{showInBrowser:"chrome",showInDevice:"desktop",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),v=new Ot({}),{c(){e=k("link"),a=L(),Z(i.$$.fragment),r=L(),s=k("main"),Z(f.$$.fragment),p=L(),Z(B.$$.fragment),w=L(),A=k("div"),o.c(),T=L(),Z(n.$$.fragment),d=L(),Z(l.$$.fragment),C=L(),Z(I.$$.fragment),_=L(),Z(v.$$.fragment),S(e,"rel","stylesheet"),S(e,"href","https://www.w3schools.com/w3css/4/w3.css"),S(A,"class","boing svelte-17whwlj"),S(s,"class","svelte-17whwlj")},m(c,u){m(c,e,u),m(c,a,u),G(i,c,u),m(c,r,u),m(c,s,u),G(f,s,null),P(s,p),G(B,s,null),P(s,w),P(s,A),q[b].m(A,null),P(s,T),G(n,s,null),P(s,d),G(l,s,null),m(c,C,u),G(I,c,u),m(c,_,u),G(v,c,u),N=!0},p(c,[u]){const x={};u&256&&(x.$$scope={dirty:u,ctx:c}),f.$set(x);const ie={};u&256&&(ie.$$scope={dirty:u,ctx:c}),B.$set(ie);let V=b;b=F(c),b===V?q[b].p(c,u):(at(),z(q[V],1,1,()=>{q[V]=null}),ot(),o=q[b],o?o.p(c,u):(o=q[b]=M[b](c),o.c()),j(o,1),o.m(A,null));const X={};u&256&&(X.$$scope={dirty:u,ctx:c}),n.$set(X);const ue={};u&256&&(ue.$$scope={dirty:u,ctx:c}),l.$set(ue);const J={};u&256&&(J.$$scope={dirty:u,ctx:c}),I.$set(J)},i(c){N||(j(i.$$.fragment,c),j(f.$$.fragment,c),j(B.$$.fragment,c),j(o),j(n.$$.fragment,c),j(l.$$.fragment,c),j(I.$$.fragment,c),j(v.$$.fragment,c),N=!0)},o(c){z(i.$$.fragment,c),z(f.$$.fragment,c),z(B.$$.fragment,c),z(o),z(n.$$.fragment,c),z(l.$$.fragment,c),z(I.$$.fragment,c),z(v.$$.fragment,c),N=!1},d(c){c&&y(e),c&&y(a),W(i,c),c&&y(r),c&&y(s),W(f),W(B),q[b].d(),W(n),W(l),c&&y(C),W(I,c),c&&y(_),W(v,c)}}}const Ie=864e5;function Ht(t){return Math.floor(Math.random()*t)}function Me(t){var e=(""+t.getDate()).slice(-2),a=(""+(t.getMonth()+1)).slice(-2);return a+"/"+e}function Vt(t,e,a){let i,r=0,s=new Date(Date.now()+r*Ie),f=["busky bime","you wasted electricity for me to tell you it's wednesday","duhh","hmm it's wednesday i wonder what TT it is","bro it's wednesday"],p=Ht(5),B=f[p];function w(){r+=1,s=new Date(Date.now()+r*Ie),a(0,i=Me(s))}function A(){r-=1,s=new Date(Date.now()+r*Ie),a(0,i=Me(s))}return i=Me(s),[i,B,w,A]}class Yt extends Be{constructor(e){super(),ke(this,e,Vt,Ft,he,{})}}new Yt({target:document.getElementById("app")});
