(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();function P(){}function it(t,e){for(const o in e)t[o]=e[o];return t}function Ye(t){return t()}function Fe(){return Object.create(null)}function ie(t){t.forEach(Ye)}function We(t){return typeof t=="function"}function pe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ue;function at(t,e){return ue||(ue=document.createElement("a")),ue.href=e,t===ue.href}function ot(t){return Object.keys(t).length===0}function rt(t,e,o,a){if(t){const n=Ze(t,e,o,a);return t[0](n)}}function Ze(t,e,o,a){return t[1]&&a?it(o.ctx.slice(),t[1](a(e))):o.ctx}function nt(t,e,o,a){if(t[2]&&a){const n=t[2](a(o));if(e.dirty===void 0)return n;if(typeof n=="object"){const l=[],u=Math.max(e.dirty.length,n.length);for(let b=0;b<u;b+=1)l[b]=e.dirty[b]|n[b];return l}return e.dirty|n}return e.dirty}function dt(t,e,o,a,n,l){if(n){const u=Ze(e,o,a,l);t.p(u,n)}}function st(t){if(t.ctx.length>32){const e=[],o=t.ctx.length/32;for(let a=0;a<o;a++)e[a]=-1;return e}return-1}function C(t,e){t.appendChild(e)}function _(t,e,o){t.insertBefore(e,o||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function j(){return z(" ")}function Ke(){return z("")}function D(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function Tt(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let te;function ee(t){te=t}function lt(){if(!te)throw new Error("Function called outside component initialization");return te}function ut(t){lt().$$.on_mount.push(t)}const Q=[],Ve=[],fe=[],He=[],ct=Promise.resolve();let Ne=!1;function ft(){Ne||(Ne=!0,ct.then(Xe))}function Me(t){fe.push(t)}const Oe=new Set;let ce=0;function Xe(){const t=te;do{for(;ce<Q.length;){const e=Q[ce];ce++,ee(e),bt(e.$$)}for(ee(null),Q.length=0,ce=0;Ve.length;)Ve.pop()();for(let e=0;e<fe.length;e+=1){const o=fe[e];Oe.has(o)||(Oe.add(o),o())}fe.length=0}while(Q.length);for(;He.length;)He.pop()();Ne=!1,Oe.clear(),ee(t)}function bt(t){if(t.fragment!==null){t.update(),ie(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Me)}}const be=new Set;let H;function yt(){H={r:0,c:[],p:H}}function wt(){H.r||ie(H.c),H=H.p}function V(t,e){t&&t.i&&(be.delete(t),t.i(e))}function W(t,e,o,a){if(t&&t.o){if(be.has(t))return;be.add(t),H.c.push(()=>{be.delete(t),a&&(o&&t.d(1),a())}),t.o(e)}else a&&a()}function Se(t){t&&t.c()}function ye(t,e,o,a){const{fragment:n,after_update:l}=t.$$;n&&n.m(e,o),a||Me(()=>{const u=t.$$.on_mount.map(Ye).filter(We);t.$$.on_destroy?t.$$.on_destroy.push(...u):ie(u),t.$$.on_mount=[]}),l.forEach(Me)}function we(t,e){const o=t.$$;o.fragment!==null&&(ie(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(Q.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,o,a,n,l,u,b=[-1]){const g=te;ee(t);const f=t.$$={fragment:null,ctx:[],props:l,update:P,not_equal:n,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:Fe(),dirty:b,skip_bound:!1,root:e.target||g.$$.root};u&&u(f.root);let B=!1;if(f.ctx=o?o(t,e.props||{},(O,i,...d)=>{const r=d.length?d[0]:i;return f.ctx&&n(f.ctx[O],f.ctx[O]=r)&&(!f.skip_bound&&f.bound[O]&&f.bound[O](r),B&&mt(t,O)),i}):[],f.update(),B=!0,ie(f.before_update),f.fragment=a?a(f.ctx):!1,e.target){if(e.hydrate){const O=Tt(e.target);f.fragment&&f.fragment.l(O),O.forEach(v)}else f.fragment&&f.fragment.c();e.intro&&V(t.$$.fragment),ye(t,e.target,e.anchor,e.customElement),Xe()}ee(g)}class he{$destroy(){we(this,1),this.$destroy=P}$on(e,o){if(!We(o))return P;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(o),()=>{const n=a.indexOf(o);n!==-1&&a.splice(n,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const U={"9/1":{date:"9/1",day:"B",TT:"TT 5"},"9/6":{date:"9/6",day:"A",TT:"TT 1"},"9/7":{date:"9/7",day:"B",TT:"Advisory"},"9/8":{date:"9/8",day:"A",TT:"TT 2"},"9/9":{date:"9/9",day:"B",TT:"TT 6"},"9/12":{date:"9/12",day:"A",TT:"TT 3"},"9/13":{date:"9/13",day:"B",TT:"TT 7"},"9/14":{date:"9/14",day:"A",TT:"Advisory"},"9/15":{date:"9/15",day:"B",TT:"TT 8"},"9/16":{date:"9/16",day:"A",TT:"TT 4"},"9/19":{date:"9/19",day:"B",TT:"TT 5"},"9/20":{date:"9/20",day:"A",TT:"TT 1"},"9/21":{date:"9/21",day:"B",TT:"Advisory"},"9/22":{date:"9/22",day:"A",TT:"TT 2"},"9/23":{date:"9/23",day:"B",TT:"TT 6"},"9/27":{date:"9/27",day:"A",TT:"TT 3"},"9/28":{date:"9/28",day:"B",TT:"Advisory"},"9/29":{date:"9/29",day:"A",TT:"TT 4"},"9/30":{date:"9/30",day:"B",TT:"TT 7"},"10/3":{date:"10/3",day:"A",TT:"TT 1"},"10/4":{date:"10/4",day:"B",TT:"TT 8"},"10/6":{date:"10/6",day:"A",TT:"TT 2"},"10/7":{date:"10/7",day:"B",TT:"TT 5"},"10/11":{date:"10/11",day:"A",TT:"TT 3"},"10/12":{date:"10/12",day:"B",TT:"Advisory",special:"PSAT Day"},"10/13":{date:"10/13",day:"A",TT:"TT 4"},"10/14":{date:"10/14",day:"B",TT:"TT 6"},"10/17":{date:"10/17",day:"A",TT:"TT 1"},"10/18":{date:"10/18",day:"B",TT:"TT 7"},"10/19":{date:"10/19",day:"A",TT:"Advisory"},"10/20":{date:"10/20",day:"B",TT:"TT 8"},"10/21":{date:"10/21",day:"A",TT:"TT 2"},"10/25":{date:"10/25",day:"B",TT:"TT 5"},"10/26":{date:"10/26",day:"A",TT:"Advisory"},"10/27":{date:"10/27",day:"B",TT:"TT 6"},"10/28":{date:"10/28",day:"A",TT:"TT 3"},"11/2":{date:"11/2",day:"B",TT:"Advisory"},"11/3":{date:"11/3",day:"A",TT:"TT 4"},"11/4":{date:"11/4",day:"B",TT:"TT 7"},"11/7":{date:"11/7",day:"A",TT:"TT 1"},"11/9":{date:"11/9",day:"B",TT:"Advisory"},"11/10":{date:"11/10",day:"A",TT:"TT 2"},"11/11":{date:"11/11",day:"B",TT:"TT 8"},"11/14":{date:"11/14",day:"A",TT:"TT 3"},"11/15":{date:"11/15",day:"B",TT:"TT 5"},"11/16":{date:"11/16",day:"A",TT:"Advisory"},"11/17":{date:"11/17",day:"B",TT:"TT 6"},"11/18":{date:"11/18",day:"A",TT:"TT 4"},"11/21":{date:"11/21",day:"B",TT:"TT 7"},"11/22":{date:"11/22",day:"A",TT:"TT 1"},"11/28":{date:"11/28",day:"B",TT:"TT 8"},"11/29":{date:"11/29",day:"A",TT:"TT 2"},"11/30":{date:"11/30",day:"B",TT:"Advisory"},"12/1":{date:"12/1",day:"A",TT:"TT 3"},"12/2":{date:"12/2",day:"B",TT:"TT 5"},"12/5":{date:"12/5",day:"A",TT:"TT 4"},"12/6":{date:"12/6",day:"B",TT:"TT 6"},"12/7":{date:"12/7",day:"A",TT:"Advisory"},"12/8":{date:"12/8",day:"B",TT:"TT 7"},"12/9":{date:"12/9",day:"A",TT:"TT 1"},"12/12":{date:"12/12",day:"B",TT:"TT 8"},"12/13":{date:"12/13",day:"A",TT:"TT 2"},"12/14":{date:"12/14",day:"B",TT:"Advisory"},"12/15":{date:"12/15",day:"A",TT:"TT 3"},"12/16":{date:"12/16",day:"B",TT:"TT 5"},"1/3":{date:"1/3",day:"A",TT:"TT 4"},"1/4":{date:"1/4",day:"B",TT:"Advisory"},"1/5":{date:"1/5",day:"A",TT:"TT 1"},"1/6":{date:"1/6",day:"B",TT:"TT 6"},"1/9":{date:"1/9",day:"A",TT:"TT 2"},"1/10":{date:"1/10",day:"B",TT:"TT 7"},"1/11":{date:"1/11",day:"A",TT:"Advisory"},"1/12":{date:"1/12",day:"B",TT:"TT 8"},"1/13":{date:"1/13",day:"A",TT:"TT 3"},"1/17":{date:"1/17",day:"B",TT:"TT 5"},"1/18":{date:"1/18",day:"A",TT:"Advisory"},"1/19":{date:"1/19",day:"B",TT:"TT 6"},"1/20":{date:"1/20",day:"A",TT:"TT 4"},"1/25":{date:"1/25",day:"B",TT:"Advisory"},"1/26":{date:"1/26",day:"A",TT:"TT 1"},"1/27":{date:"1/27",day:"B",TT:"TT 7"},"1/30":{date:"1/30",day:"A",TT:"TT 2"},"1/31":{date:"1/31",day:"B",TT:"TT 8"},"2/1":{date:"2/1",day:"A",TT:"Advisory"},"2/2":{date:"2/2",day:"B",TT:"TT 5"},"2/3":{date:"2/3",day:"A",TT:"TT 3"},"2/6":{date:"2/6",day:"B",TT:"TT 6"},"2/7":{date:"2/7",day:"A",TT:"TT 4"},"2/8":{date:"2/8",day:"B",TT:"Advisory"},"2/9":{date:"2/9",day:"A",TT:"TT 1"},"2/10":{date:"2/10",day:"B",TT:"TT 7"},"2/13":{date:"2/13",day:"A",TT:"TT 2"},"2/14":{date:"2/14",day:"B",TT:"TT 8"},"2/15":{date:"2/15",day:"A",TT:"Advisory"},"2/16":{date:"2/16",day:"B",TT:"TT 5"},"2/17":{date:"2/17",day:"A",TT:"TT 3"},"2/21":{date:"2/21",day:"B",TT:"TT 6"},"2/22":{date:"2/22",day:"A",TT:"Advisory"},"2/23":{date:"2/23",day:"B",TT:"TT 7"},"2/24":{date:"2/24",day:"A",TT:"TT 4"},"2/27":{date:"2/27",day:"B",TT:"TT 8"},"2/28":{date:"2/28",day:"A",TT:"TT 1"},"3/1":{date:"3/1",day:"B",TT:"Advisory"},"3/2":{date:"3/2",day:"A",TT:"TT 2"},"3/3":{date:"3/3",day:"B",TT:"TT 5"},"3/6":{date:"3/6",day:"A",TT:"TT 3"},"3/7":{date:"3/7",day:"B",TT:"TT 6"},"3/8":{date:"3/8",day:"A",TT:"Advisory"},"3/9":{date:"3/9",day:"B",TT:"TT 7"},"3/10":{date:"3/10",day:"A",TT:"TT 4"},"3/14":{date:"3/14",day:"B",TT:"TT 8"},"3/15":{date:"3/15",day:"A",TT:"Advisory"},"3/16":{date:"3/16",day:"B",TT:"TT 5"},"3/17":{date:"3/17",day:"A",TT:"TT 1"},"3/20":{date:"3/20",day:"B",TT:"TT 6"},"3/21":{date:"3/21",day:"A",TT:"TT 2"},"3/22":{date:"3/22",day:"B",TT:"Advisory"},"3/23":{date:"3/23",day:"A",TT:"TT 3"},"3/24":{date:"3/24",day:"B",TT:"TT 7"},"3/28":{date:"3/28",day:"A",TT:"TT 4"},"3/29":{date:"3/29",day:"B",TT:"Advisory"},"3/30":{date:"3/30",day:"A",TT:"TT 1"},"3/31":{date:"3/31",day:"B",TT:"TT 8"},"4/10":{date:"4/10",day:"A",TT:"TT 2"},"4/11":{date:"4/11",day:"B",TT:"TT 5"},"4/12":{date:"4/12",day:"A",TT:"Advisory"},"4/13":{date:"4/13",day:"B",TT:"TT 6"},"4/14":{date:"4/14",day:"A",TT:"TT 3"},"4/17":{date:"4/17",day:"B",TT:"TT 7"},"4/18":{date:"4/18",day:"A",TT:"TT 4"},"4/19":{date:"4/19",day:"B",TT:"Advisory"},"4/20":{date:"4/20",day:"A",TT:"TT 1"},"4/24":{date:"4/24",day:"B",TT:"TT 8"},"4/25":{date:"4/25",day:"A",TT:"TT 2"},"4/26":{date:"4/26",day:"B",TT:"Advisory"},"4/27":{date:"4/27",day:"A",TT:"TT 3"},"4/28":{date:"4/28",day:"B",TT:"TT 5"},"5/1":{date:"5/1",day:"A",TT:"TT 4"},"5/2":{date:"5/2",day:"B",TT:"TT 6"},"5/3":{date:"5/3",day:"A",TT:"Advisory"},"5/4":{date:"5/4",day:"B",TT:"TT 7"},"5/5":{date:"5/5",day:"A",TT:"TT 1"},"5/8":{date:"5/8",day:"B",TT:"TT 8"},"5/9":{date:"5/9",day:"A",TT:"TT 2"},"5/10":{date:"5/10",day:"B",TT:"Advisory"},"5/11":{date:"5/11",day:"A",TT:"TT 3"},"5/12":{date:"5/12",day:"B",TT:"TT 5"},"5/15":{date:"5/15",day:"A",TT:"TT 4"},"5/16":{date:"5/16",day:"B",TT:"TT 6"},"5/17":{date:"5/17",day:"A",TT:"Advisory"},"5/18":{date:"5/18",day:"B",TT:"TT 7"},"5/19":{date:"5/19",day:"A",TT:"TT 1"},"5/22":{date:"5/22",day:"B",TT:"TT 8"},"5/23":{date:"5/23",day:"A",TT:"TT 2"},"5/24":{date:"5/24",day:"B",TT:"Advisory"},"5/25":{date:"5/25",day:"A",TT:"TT 3"},"5/26":{date:"5/26",day:"B",TT:"TT 5"},"5/30":{date:"5/30",day:"A",TT:"TT 4"},"5/31":{date:"5/31",day:"B",TT:"Advisory"},"6/1":{date:"6/1",day:"A",TT:"TT 1"},"6/2":{date:"6/2",day:"B",TT:"TT 6"},"6/5":{date:"6/5",day:"A",TT:"TT 2"},"6/6":{date:"6/6",day:"B",TT:"TT 7"},"6/7":{date:"6/7",day:"A",TT:"Advisory"},"6/8":{date:"6/8",day:"B",TT:"TT 8"}};var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ie={exports:{}};(function(t,e){(function(o,a){var n="0.7.32",l="",u="?",b="function",g="undefined",f="object",B="string",O="major",i="model",d="name",r="type",s="vendor",T="version",M="architecture",L="console",y="mobile",w="tablet",N="smarttv",I="wearable",Z="embedded",F=350,R="Amazon",c="Apple",k="ASUS",Re="BlackBerry",G="Browser",ae="Chrome",Je="Edge",oe="Firefox",re="Google",Ce="Huawei",_e="LG",Ae="Microsoft",De="Motorola",ne="Opera",ge="Samsung",qe="Sharp",de="Sony",Be="Xiaomi",ke="Zebra",ze="Facebook",Qe=function(m,A){var p={};for(var S in m)A[S]&&A[S].length%2===0?p[S]=A[S].concat(m[S]):p[S]=m[S];return p},se=function(m){for(var A={},p=0;p<m.length;p++)A[m[p].toUpperCase()]=m[p];return A},Pe=function(m,A){return typeof m===B?K(A).indexOf(K(m))!==-1:!1},K=function(m){return m.toLowerCase()},et=function(m){return typeof m===B?m.replace(/[^\d\.]/g,l).split(".")[0]:a},xe=function(m,A){if(typeof m===B)return m=m.replace(/^\s\s*/,l).replace(/\s\s*$/,l),typeof A===g?m:m.substring(0,F)},X=function(m,A){for(var p=0,S,h,le,E,J,$;p<A.length&&!J;){var Ue=A[p],je=A[p+1];for(S=h=0;S<Ue.length&&!J;)if(J=Ue[S++].exec(m),J)for(le=0;le<je.length;le++)$=J[++h],E=je[le],typeof E===f&&E.length>0?E.length===2?typeof E[1]==b?this[E[0]]=E[1].call(this,$):this[E[0]]=E[1]:E.length===3?typeof E[1]===b&&!(E[1].exec&&E[1].test)?this[E[0]]=$?E[1].call(this,$,E[2]):a:this[E[0]]=$?$.replace(E[1],E[2]):a:E.length===4&&(this[E[0]]=$?E[3].call(this,$.replace(E[1],E[2])):a):this[E]=$||a;p+=2}},Ee=function(m,A){for(var p in A)if(typeof A[p]===f&&A[p].length>0){for(var S=0;S<A[p].length;S++)if(Pe(A[p][S],m))return p===u?a:p}else if(Pe(A[p],m))return p===u?a:p;return m},tt={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},$e={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Le={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[T,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[T,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,T],[/opios[\/ ]+([\w\.]+)/i],[T,[d,ne+" Mini"]],[/\bopr\/([\w\.]+)/i],[T,[d,ne]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,T],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[T,[d,"UC"+G]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[T,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[T,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[T,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[T,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[T,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+G],T],[/\bfocus\/([\w\.]+)/i],[T,[d,oe+" Focus"]],[/\bopt\/([\w\.]+)/i],[T,[d,ne+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[T,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[T,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[T,[d,ne+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[T,[d,"MIUI "+G]],[/fxios\/([-\w\.]+)/i],[T,[d,oe]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+G]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+G],T],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],T],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,T],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,ze],T],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,T],[/\bgsa\/([\w\.]+) .*safari\//i],[T,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[T,[d,ae+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,ae+" WebView"],T],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[T,[d,"Android "+G]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,T],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[T,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[T,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[T,Ee,tt]],[/(webkit|khtml)\/([\w\.]+)/i],[d,T],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],T],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[T,[d,oe+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,T]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[M,"amd64"]],[/(ia32(?=;))/i],[[M,K]],[/((?:i[346]|x)86)[;\)]/i],[[M,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[M,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[M,"armhf"]],[/windows (ce|mobile); ppc;/i],[[M,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[M,/ower/,l,K]],[/(sun4\w)[;\)]/i],[[M,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[M,K]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[i,[s,ge],[r,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[i,[s,ge],[r,y]],[/\((ip(?:hone|od)[\w ]*);/i],[i,[s,c],[r,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[s,c],[r,w]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[i,[s,Ce],[r,w]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[i,[s,Ce],[r,y]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[i,/_/g," "],[s,Be],[r,y]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[i,/_/g," "],[s,Be],[r,w]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[i,[s,"OPPO"],[r,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[i,[s,"Vivo"],[r,y]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[i,[s,"Realme"],[r,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[i,[s,De],[r,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[i,[s,De],[r,w]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[i,[s,_e],[r,w]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[i,[s,_e],[r,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[i,[s,"Lenovo"],[r,w]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[i,/_/g," "],[s,"Nokia"],[r,y]],[/(pixel c)\b/i],[i,[s,re],[r,w]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[i,[s,re],[r,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[s,de],[r,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[i,"Xperia Tablet"],[s,de],[r,w]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[i,[s,"OnePlus"],[r,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[i,[s,R],[r,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[i,/(.+)/g,"Fire Phone $1"],[s,R],[r,y]],[/(playbook);[-\w\),; ]+(rim)/i],[i,s,[r,w]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[i,[s,Re],[r,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[i,[s,k],[r,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[i,[s,k],[r,y]],[/(nexus 9)/i],[i,[s,"HTC"],[r,w]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[s,[i,/_/g," "],[r,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[i,[s,"Acer"],[r,w]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[i,[s,"Meizu"],[r,y]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[i,[s,qe],[r,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[s,i,[r,y]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[s,i,[r,w]],[/(surface duo)/i],[i,[s,Ae],[r,w]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[i,[s,"Fairphone"],[r,y]],[/(u304aa)/i],[i,[s,"AT&T"],[r,y]],[/\bsie-(\w*)/i],[i,[s,"Siemens"],[r,y]],[/\b(rct\w+) b/i],[i,[s,"RCA"],[r,w]],[/\b(venue[\d ]{2,7}) b/i],[i,[s,"Dell"],[r,w]],[/\b(q(?:mv|ta)\w+) b/i],[i,[s,"Verizon"],[r,w]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[i,[s,"Barnes & Noble"],[r,w]],[/\b(tm\d{3}\w+) b/i],[i,[s,"NuVision"],[r,w]],[/\b(k88) b/i],[i,[s,"ZTE"],[r,w]],[/\b(nx\d{3}j) b/i],[i,[s,"ZTE"],[r,y]],[/\b(gen\d{3}) b.+49h/i],[i,[s,"Swiss"],[r,y]],[/\b(zur\d{3}) b/i],[i,[s,"Swiss"],[r,w]],[/\b((zeki)?tb.*\b) b/i],[i,[s,"Zeki"],[r,w]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[s,"Dragon Touch"],i,[r,w]],[/\b(ns-?\w{0,9}) b/i],[i,[s,"Insignia"],[r,w]],[/\b((nxa|next)-?\w{0,9}) b/i],[i,[s,"NextBook"],[r,w]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[s,"Voice"],i,[r,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[s,"LvTel"],i,[r,y]],[/\b(ph-1) /i],[i,[s,"Essential"],[r,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[i,[s,"Envizen"],[r,w]],[/\b(trio[-\w\. ]+) b/i],[i,[s,"MachSpeed"],[r,w]],[/\btu_(1491) b/i],[i,[s,"Rotor"],[r,w]],[/(shield[\w ]+) b/i],[i,[s,"Nvidia"],[r,w]],[/(sprint) (\w+)/i],[s,i,[r,y]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[s,Ae],[r,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[s,ke],[r,w]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[s,ke],[r,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[s,i,[r,L]],[/droid.+; (shield) bui/i],[i,[s,"Nvidia"],[r,L]],[/(playstation [345portablevi]+)/i],[i,[s,de],[r,L]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[i,[s,Ae],[r,L]],[/smart-tv.+(samsung)/i],[s,[r,N]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[s,ge],[r,N]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[s,_e],[r,N]],[/(apple) ?tv/i],[s,[i,c+" TV"],[r,N]],[/crkey/i],[[i,ae+"cast"],[s,re],[r,N]],[/droid.+aft(\w)( bui|\))/i],[i,[s,R],[r,N]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[i,[s,qe],[r,N]],[/(bravia[\w ]+)( bui|\))/i],[i,[s,de],[r,N]],[/(mitv-\w{5}) bui/i],[i,[s,Be],[r,N]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[s,xe],[i,xe],[r,N]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[r,N]],[/((pebble))app/i],[s,i,[r,I]],[/droid.+; (glass) \d/i],[i,[s,re],[r,I]],[/droid.+; (wt63?0{2,3})\)/i],[i,[s,ke],[r,I]],[/(quest( 2)?)/i],[i,[s,ze],[r,I]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[s,[r,Z]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[i,[r,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[i,[r,w]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[r,w]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[r,y]],[/(android[-\w\. ]{0,9});.+buil/i],[i,[s,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[T,[d,Je+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[T,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,T],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[T,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,T],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[T,Ee,$e]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[T,Ee,$e]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[T,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[T,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[T,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,T],[/\(bb(10);/i],[T,[d,Re]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[T,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[T,[d,oe+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[T,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[T,[d,ae+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],T],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,T],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],T],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,T]]},q=function(m,A){if(typeof m===f&&(A=m,m=a),!(this instanceof q))return new q(m,A).getResult();var p=m||(typeof o!==g&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:l),S=A?Qe(Le,A):Le;return this.getBrowser=function(){var h={};return h[d]=a,h[T]=a,X.call(h,p,S.browser),h.major=et(h.version),h},this.getCPU=function(){var h={};return h[M]=a,X.call(h,p,S.cpu),h},this.getDevice=function(){var h={};return h[s]=a,h[i]=a,h[r]=a,X.call(h,p,S.device),h},this.getEngine=function(){var h={};return h[d]=a,h[T]=a,X.call(h,p,S.engine),h},this.getOS=function(){var h={};return h[d]=a,h[T]=a,X.call(h,p,S.os),h},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return p},this.setUA=function(h){return p=typeof h===B&&h.length>F?xe(h,F):h,this},this.setUA(p),this};q.VERSION=n,q.BROWSER=se([d,T,O]),q.CPU=se([M]),q.DEVICE=se([i,s,r,L,y,N,w,I,Z]),q.ENGINE=q.OS=se([d,T]),t.exports&&(e=t.exports=q),e.UAParser=q;var Y=typeof o!==g&&(o.jQuery||o.Zepto);if(Y&&!Y.ua){var Te=new q;Y.ua=Te.getResult(),Y.ua.get=function(){return Te.getUA()},Y.ua.set=function(m){Te.setUA(m);var A=Te.getResult();for(var p in A)Y.ua[p]=A[p]}}})(typeof window=="object"?window:pt)})(Ie,Ie.exports);const vt=Ie.exports;function Ge(t){let e;const o=t[5].default,a=rt(o,t,t[4],null);return{c(){a&&a.c()},m(n,l){a&&a.m(n,l),e=!0},p(n,l){a&&a.p&&(!e||l&16)&&dt(a,o,n,n[4],e?nt(o,n[4],l,null):st(n[4]),null)},i(n){e||(V(a,n),e=!0)},o(n){W(a,n),e=!1},d(n){a&&a.d(n)}}}function ht(t){let e,o,a=t[0]&&Ge(t);return{c(){a&&a.c(),e=Ke()},m(n,l){a&&a.m(n,l),_(n,e,l),o=!0},p(n,[l]){n[0]?a?(a.p(n,l),l&1&&V(a,1)):(a=Ge(n),a.c(),V(a,1),a.m(e.parentNode,e)):a&&(yt(),W(a,1,1,()=>{a=null}),wt())},i(n){o||(V(a),o=!0)},o(n){W(a),o=!1},d(n){a&&a.d(n),n&&v(e)}}}function _t(t,e,o){let{$$slots:a={},$$scope:n}=e,{showInDevice:l=void 0}=e,{showInBrowser:u=void 0}=e,{showInOs:b=void 0}=e,g=!1;ut(()=>{const i=new vt;let d=i.getBrowser(),r=i.getDevice(),s=i.getOS(),T=!0;l&&!O(f(r),l)&&(T=!1),u&&!O(B(d.name),u)&&(T=!1),b&&!O(B(s.name),b)&&(T=!1),o(0,g=T)});const f=i=>i.type?B(i.type):"desktop",B=i=>i.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),O=(i,d)=>Array.isArray(d)?d.some(r=>i===B(r)):i===B(d);return t.$$set=i=>{"showInDevice"in i&&o(1,l=i.showInDevice),"showInBrowser"in i&&o(2,u=i.showInBrowser),"showInOs"in i&&o(3,b=i.showInOs),"$$scope"in i&&o(4,n=i.$$scope)},[g,l,u,b,n,a]}class At extends he{constructor(e){super(),ve(this,e,_t,ht,pe,{showInDevice:1,showInBrowser:2,showInOs:3})}}function gt(t){let e,o,a;return{c(){e=x("link"),o=j(),a=x("main"),a.innerHTML='<div class="bg w3-row svelte-15yri29"><img src="https://tuskytime.org/_nuxt/tuskylogo.9abafe6e.png" alt="oy" width="80px"/><b>TUSCARORA TIME</b></div>',D(e,"rel","stylesheet"),D(e,"href","https://www.w3schools.com/w3css/4/w3.css")},m(n,l){_(n,e,l),_(n,o,l),_(n,a,l)},p:P,i:P,o:P,d(n){n&&v(e),n&&v(o),n&&v(a)}}}class Bt extends he{constructor(e){super(),ve(this,e,null,gt,pe,{})}}function kt(t){let e;return{c(){e=x("main"),e.innerHTML='<p class="foot svelte-172e3cg">not affiliated with LCPS or Tuscarora, A recreation of <a href="https://tuskytime.org">Tuskytime.org</a> by, Easton Snow</p>'},m(o,a){_(o,e,a)},p:P,i:P,o:P,d(o){o&&v(e)}}}class xt extends he{constructor(e){super(),ve(this,e,null,kt,pe,{})}}function Et(t){let e,o,a,n,l;return{c(){e=x("lg"),e.innerHTML="<b>There is no school buffoon</b>",o=x("br"),a=j(),n=x("img"),D(e,"class","svelte-16etplu"),at(n.src,l="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg")||D(n,"src",l),D(n,"width","400px"),D(n,"alt","you buffoon")},m(u,b){_(u,e,b),_(u,o,b),_(u,a,b),_(u,n,b)},p:P,d(u){u&&v(e),u&&v(o),u&&v(a),u&&v(n)}}}function Ot(t){let e,o,a,n,l,u,b,g,f,B,O=U[t[0]].day+"",i,d,r,s,T,M,L,y;function w(c,k){return U[c[0]].day=="B"?Nt:St}let N=w(t),I=N(t);function Z(c,k){return U[c[0]].TT=="Advisory"?It:Mt}let F=Z(t),R=F(t);return{c(){e=x("br"),o=j(),a=z(t[0]),n=x("br"),l=x("br"),u=z(`
      TODAY IS
      `),I.c(),b=x("br"),g=j(),f=x("lg"),B=x("b"),i=z(O),d=x("br"),r=z(`
      DAY`),s=x("br"),T=z(`
      AND IT'S TUSKY TIME`),M=x("br"),L=j(),R.c(),y=Ke(),D(f,"class","svelte-16etplu")},m(c,k){_(c,e,k),_(c,o,k),_(c,a,k),_(c,n,k),_(c,l,k),_(c,u,k),I.m(c,k),_(c,b,k),_(c,g,k),_(c,f,k),C(f,B),C(B,i),C(f,d),_(c,r,k),_(c,s,k),_(c,T,k),_(c,M,k),_(c,L,k),R.m(c,k),_(c,y,k)},p(c,k){k&1&&me(a,c[0]),N!==(N=w(c))&&(I.d(1),I=N(c),I&&(I.c(),I.m(b.parentNode,b))),k&1&&O!==(O=U[c[0]].day+"")&&me(i,O),F===(F=Z(c))&&R?R.p(c,k):(R.d(1),R=F(c),R&&(R.c(),R.m(y.parentNode,y)))},d(c){c&&v(e),c&&v(o),c&&v(a),c&&v(n),c&&v(l),c&&v(u),I.d(c),c&&v(b),c&&v(g),c&&v(f),c&&v(r),c&&v(s),c&&v(T),c&&v(M),c&&v(L),R.d(c),c&&v(y)}}}function St(t){let e;return{c(){e=z(`AN
      `)},m(o,a){_(o,e,a)},d(o){o&&v(e)}}}function Nt(t){let e;return{c(){e=z(`A
        `)},m(o,a){_(o,e,a)},d(o){o&&v(e)}}}function Mt(t){let e,o,a=U[t[0]].TT+"",n,l;return{c(){e=x("lg"),o=x("b"),n=z(a),l=x("br"),D(e,"class","svelte-16etplu")},m(u,b){_(u,e,b),C(e,o),C(o,n),_(u,l,b)},p(u,b){b&1&&a!==(a=U[u[0]].TT+"")&&me(n,a)},d(u){u&&v(e),u&&v(l)}}}function It(t){let e,o,a=U[t[0]].TT+"",n,l,u,b,g;return{c(){e=x("advise"),o=x("b"),n=z(a),l=x("br"),u=j(),b=x("b"),g=x("m"),g.textContent=`${t[1]}`,D(e,"class","svelte-16etplu"),D(g,"class","svelte-16etplu")},m(f,B){_(f,e,B),C(e,o),C(o,n),_(f,l,B),_(f,u,B),_(f,b,B),C(b,g)},p(f,B){B&1&&a!==(a=U[f[0]].TT+"")&&me(n,a)},d(f){f&&v(e),f&&v(l),f&&v(u),f&&v(b)}}}function Rt(t){let e;return{c(){e=x("div"),D(e,"class","box svelte-16etplu")},m(o,a){_(o,e,a)},p:P,d(o){o&&v(e)}}}function Ct(t){let e,o,a,n,l,u,b,g,f;o=new Bt({});function B(d,r){return U[d[0]]!=null?Ot:Et}let O=B(t),i=O(t);return u=new At({props:{showInBrowser:"chrome",showInDevice:"desktop",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),g=new xt({}),{c(){e=x("main"),Se(o.$$.fragment),a=j(),n=x("div"),i.c(),l=j(),Se(u.$$.fragment),b=j(),Se(g.$$.fragment),D(n,"class","boing svelte-16etplu")},m(d,r){_(d,e,r),ye(o,e,null),C(e,a),C(e,n),i.m(n,null),C(e,l),ye(u,e,null),C(e,b),ye(g,e,null),f=!0},p(d,[r]){O===(O=B(d))&&i?i.p(d,r):(i.d(1),i=O(d),i&&(i.c(),i.m(n,null)));const s={};r&256&&(s.$$scope={dirty:r,ctx:d}),u.$set(s)},i(d){f||(V(o.$$.fragment,d),V(u.$$.fragment,d),V(g.$$.fragment,d),f=!0)},o(d){W(o.$$.fragment,d),W(u.$$.fragment,d),W(g.$$.fragment,d),f=!1},d(d){d&&v(e),we(o),i.d(),we(u),we(g)}}}function Dt(t){return Math.floor(Math.random()*t)}function qt(t,e,o){let a=new Date,n;n=a.getMonth()+1+"/"+a.getDate();let l=["busky bime","you wasted electricity for me to tell you it's wednesday","duhh","hmm it's wednesday i wonder what TT it is","bro it's wednesday"];const u=Dt(5);let b=l[u];return[n,b]}class zt extends he{constructor(e){super(),ve(this,e,qt,Ct,pe,{})}}new zt({target:document.getElementById("app")});
