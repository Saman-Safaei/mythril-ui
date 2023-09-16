"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("vue");function Re(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Ie(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ve=function(){function e(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?process.env.NODE_ENV==="production":t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ie(this));var a=this.tags[this.tags.length-1];if(process.env.NODE_ENV!=="production"){var s=n.charCodeAt(0)===64&&n.charCodeAt(1)===105;s&&this._alreadyInsertedOrderInsensitiveRule&&console.error(`You're attempting to insert the following rule:
`+n+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!s}if(this.isSpeedy){var i=Re(a);try{i.insertRule(n,i.cssRules.length)}catch(o){process.env.NODE_ENV!=="production"&&!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n)&&console.error('There was a problem inserting the following rule: "'+n+'"',o)}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0,process.env.NODE_ENV!=="production"&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),x="-ms-",K="-moz-",l="-webkit-",ne="comm",se="rule",ae="decl",_e="@import",ve="@keyframes",De="@layer",Pe=Math.abs,H=String.fromCharCode,Te=Object.assign;function Me(e,r){return E(e,0)^45?(((r<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function be(e){return e.trim()}function je(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function re(e,r){return e.indexOf(r)}function E(e,r){return e.charCodeAt(r)|0}function L(e,r,t){return e.slice(r,t)}function I(e){return e.length}function ie(e){return e.length}function Y(e,r){return r.push(e),e}function Be(e,r){return e.map(r).join("")}var Z=1,T=1,we=0,O=0,v=0,M="";function Q(e,r,t,n,a,s,i){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:Z,column:T,length:i,return:""}}function B(e,r){return Te(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function Le(){return v}function ze(){return v=O>0?E(M,--O):0,T--,v===10&&(T=1,Z--),v}function k(){return v=O<we?E(M,O++):0,T++,v===10&&(T=1,Z++),v}function V(){return E(M,O)}function F(){return O}function G(e,r){return L(M,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ee(e){return Z=T=1,we=I(M=e),O=0,[]}function xe(e){return M="",e}function q(e){return be(G(O-1,te(e===91?e+2:e===40?e+1:e)))}function We(e){for(;(v=V())&&v<33;)k();return z(e)>2||z(v)>3?"":" "}function Ge(e,r){for(;--r&&k()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return G(e,F()+(r<6&&V()==32&&k()==32))}function te(e){for(;k();)switch(v){case e:return O;case 34:case 39:e!==34&&e!==39&&te(v);break;case 40:e===41&&te(e);break;case 92:k();break}return O}function Ye(e,r){for(;k()&&e+v!==47+10;)if(e+v===42+42&&V()===47)break;return"/*"+G(r,O-1)+"*"+H(e===47?e:k())}function Fe(e){for(;!z(V());)k();return G(e,O)}function qe(e){return xe(U("",null,null,null,[""],e=Ee(e),0,[0],e))}function U(e,r,t,n,a,s,i,o,f){for(var u=0,c=0,h=i,b=0,C=0,S=0,p=1,N=1,y=1,w=0,$="",j=a,_=s,R=n,m=$;N;)switch(S=w,w=k()){case 40:if(S!=108&&E(m,h-1)==58){re(m+=d(q(w),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:m+=q(w);break;case 9:case 10:case 13:case 32:m+=We(S);break;case 92:m+=Ge(F()-1,7);continue;case 47:switch(V()){case 42:case 47:Y(Ue(Ye(k(),F()),r,t),f);break;default:m+="/"}break;case 123*p:o[u++]=I(m)*y;case 125*p:case 59:case 0:switch(w){case 0:case 125:N=0;case 59+c:y==-1&&(m=d(m,/\f/g,"")),C>0&&I(m)-h&&Y(C>32?fe(m+";",n,t,h-1):fe(d(m," ","")+";",n,t,h-2),f);break;case 59:m+=";";default:if(Y(R=ce(m,r,t,u,c,a,o,$,j=[],_=[],h),s),w===123)if(c===0)U(m,r,R,R,j,s,h,o,_);else switch(b===99&&E(m,3)===110?100:b){case 100:case 108:case 109:case 115:U(e,R,R,n&&Y(ce(e,R,R,0,0,a,o,$,a,j=[],h),_),a,_,h,o,n?j:_);break;default:U(m,R,R,R,[""],_,0,o,_)}}u=c=C=0,p=y=1,$=m="",h=i;break;case 58:h=1+I(m),C=S;default:if(p<1){if(w==123)--p;else if(w==125&&p++==0&&ze()==125)continue}switch(m+=H(w),w*p){case 38:y=c>0?1:(m+="\f",-1);break;case 44:o[u++]=(I(m)-1)*y,y=1;break;case 64:V()===45&&(m+=q(k())),b=V(),c=h=I($=m+=Fe(F())),w++;break;case 45:S===45&&I(m)==2&&(p=0)}}return s}function ce(e,r,t,n,a,s,i,o,f,u,c){for(var h=a-1,b=a===0?s:[""],C=ie(b),S=0,p=0,N=0;S<n;++S)for(var y=0,w=L(e,h+1,h=Pe(p=i[S])),$=e;y<C;++y)($=be(p>0?b[y]+" "+w:d(w,/&\f/g,b[y])))&&(f[N++]=$);return Q(e,r,t,a===0?se:o,f,u,c)}function Ue(e,r,t){return Q(e,r,t,ne,H(Le()),L(e,2,-2),0)}function fe(e,r,t,n){return Q(e,r,t,ae,L(e,0,n),L(e,n+1,-1),n)}function P(e,r){for(var t="",n=ie(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function Ke(e,r,t,n){switch(e.type){case De:if(e.children.length)break;case _e:case ae:return e.return=e.return||e.value;case ne:return"";case ve:return e.return=e.value+"{"+P(e.children,n)+"}";case se:e.value=e.props.join(",")}return I(t=P(e.children,n))?e.return=e.value+"{"+t+"}":""}function Je(e){var r=ie(e);return function(t,n,a,s){for(var i="",o=0;o<r;o++)i+=e[o](t,n,a,s)||"";return i}}function He(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ze(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Qe=function(r,t,n){for(var a=0,s=0;a=s,s=V(),a===38&&s===12&&(t[n]=1),!z(s);)k();return G(r,O)},Xe=function(r,t){var n=-1,a=44;do switch(z(a)){case 0:a===38&&V()===12&&(t[n]=1),r[n]+=Qe(O-1,t,n);break;case 2:r[n]+=q(a);break;case 4:if(a===44){r[++n]=V()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=H(a)}while(a=k());return r},er=function(r,t){return xe(Xe(Ee(r),t))},ue=new WeakMap,rr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!ue.get(n))&&!a){ue.set(r,!0);for(var s=[],i=er(t,s),o=n.props,f=0,u=0;f<i.length;f++)for(var c=0;c<o.length;c++,u++)r.props[u]=s[f]?i[f].replace(/&\f/g,o[c]):o[c]+" "+i[f]}}},tr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}},nr="emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason",sr=function(r){return r.type==="comm"&&r.children.indexOf(nr)>-1},ar=function(r){return function(t,n,a){if(!(t.type!=="rule"||r.compat)){var s=t.value.match(/(:first|:nth|:nth-last)-child/g);if(s){for(var i=!!t.parent,o=i?t.parent.children:a,f=o.length-1;f>=0;f--){var u=o[f];if(u.line<t.line)break;if(u.column<t.column){if(sr(u))return;break}}s.forEach(function(c){console.error('The pseudo class "'+c+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+c.split("-child")[0]+'-of-type".')})}}}},Se=function(r){return r.type.charCodeAt(1)===105&&r.type.charCodeAt(0)===64},ir=function(r,t){for(var n=r-1;n>=0;n--)if(!Se(t[n]))return!0;return!1},le=function(r){r.type="",r.value="",r.return="",r.children="",r.props=""},or=function(r,t,n){Se(r)&&(r.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),le(r)):ir(t,n)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),le(r)))};function Ne(e,r){switch(Me(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+K+e+x+e+e;case 6828:case 4268:return l+e+x+e+e;case 6165:return l+e+x+"flex-"+e+e;case 5187:return l+e+d(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+x+"flex-$1$2")+e;case 5443:return l+e+x+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return l+e+x+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return l+e+x+d(e,"shrink","negative")+e;case 5292:return l+e+x+d(e,"basis","preferred-size")+e;case 6060:return l+"box-"+d(e,"-grow","")+l+e+x+d(e,"grow","positive")+e;case 4554:return l+d(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+x+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(e)-1-r>6)switch(E(e,r+1)){case 109:if(E(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+K+(E(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~re(e,"stretch")?Ne(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(E(e,r+1)!==115)break;case 6444:switch(E(e,I(e)-3-(~re(e,"!important")&&10))){case 107:return d(e,":",":"+l)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+(E(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+x+"$2box$3")+e}break;case 5936:switch(E(e,r+11)){case 114:return l+e+x+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+x+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+x+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return l+e+x+e+e}return e}var cr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ae:r.return=Ne(r.value,r.length);break;case ve:return P([B(r,{value:d(r.value,"@","@"+l)})],a);case se:if(r.length)return Be(r.props,function(s){switch(je(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return P([B(r,{props:[d(s,/:(read-\w+)/,":"+K+"$1")]})],a);case"::placeholder":return P([B(r,{props:[d(s,/:(plac\w+)/,":"+l+"input-$1")]}),B(r,{props:[d(s,/:(plac\w+)/,":"+K+"$1")]}),B(r,{props:[d(s,/:(plac\w+)/,x+"input-$1")]})],a)}return""})}},fr=[cr],ur=function(r){var t=r.key;if(process.env.NODE_ENV!=="production"&&!t)throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(p){var N=p.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(p),p.setAttribute("data-s",""))})}var a=r.stylisPlugins||fr;if(process.env.NODE_ENV!=="production"&&/[^a-z-]/.test(t))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+t+'" was passed');var s={},i,o=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(p){for(var N=p.getAttribute("data-emotion").split(" "),y=1;y<N.length;y++)s[N[y]]=!0;o.push(p)});var f,u=[rr,tr];process.env.NODE_ENV!=="production"&&u.push(ar({get compat(){return S.compat}}),or);{var c,h=[Ke,process.env.NODE_ENV!=="production"?function(p){p.root||(p.return?c.insert(p.return):p.value&&p.type!==ne&&c.insert(p.value+"{}"))}:He(function(p){c.insert(p)})],b=Je(u.concat(a,h)),C=function(N){return P(qe(N),b)};f=function(N,y,w,$){c=w,process.env.NODE_ENV!=="production"&&y.map!==void 0&&(c={insert:function(_){w.insert(_+y.map)}}),C(N?N+"{"+y.styles+"}":y.styles),$&&(S.inserted[y.name]=!0)}}var S={key:t,sheet:new Ve({key:t,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return S.sheet.hydrate(o),S};function lr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var dr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},de=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,hr="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",pr=/[A-Z]|^ms/g,Oe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oe=function(r){return r.charCodeAt(1)===45},he=function(r){return r!=null&&typeof r!="boolean"},X=Ze(function(e){return oe(e)?e:e.replace(pr,"-$&").toLowerCase()}),J=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Oe,function(n,a,s){return A={name:a,styles:s,next:A},a})}return dr[r]!==1&&!oe(r)&&typeof t=="number"&&t!==0?t+"px":t};if(process.env.NODE_ENV!=="production"){var mr=/(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/,yr=["normal","none","initial","inherit","unset"],gr=J,vr=/^-ms-/,br=/-(.)/g,pe={};J=function(r,t){if(r==="content"&&(typeof t!="string"||yr.indexOf(t)===-1&&!mr.test(t)&&(t.charAt(0)!==t.charAt(t.length-1)||t.charAt(0)!=='"'&&t.charAt(0)!=="'")))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+t+"\"'`");var n=gr(r,t);return n!==""&&!oe(r)&&r.indexOf("-")!==-1&&pe[r]===void 0&&(pe[r]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+r.replace(vr,"ms-").replace(br,function(a,s){return s.toUpperCase()})+"?")),n}}var ke="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function W(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0){if(process.env.NODE_ENV!=="production"&&t.toString()==="NO_COMPONENT_SELECTOR")throw new Error(ke);return t}switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return A={name:t.name,styles:t.styles,next:A},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)A={name:n.name,styles:n.styles,next:A},n=n.next;var a=t.styles+";";return process.env.NODE_ENV!=="production"&&t.map!==void 0&&(a+=t.map),a}return wr(e,r,t)}case"function":{if(e!==void 0){var s=A,i=t(e);return A=s,W(e,r,i)}else process.env.NODE_ENV!=="production"&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break}case"string":if(process.env.NODE_ENV!=="production"){var o=[],f=t.replace(Oe,function(c,h,b){var C="animation"+o.length;return o.push("const "+C+" = keyframes`"+b.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+C+"}"});o.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(o,["`"+f+"`"]).join(`
`)+`

You should wrap it with \`css\` like this:

`+("css`"+f+"`"))}break}if(r==null)return t;var u=r[t];return u!==void 0?u:t}function wr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=W(e,r,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=s+"{"+r[i]+"}":he(i)&&(n+=X(s)+":"+J(s,i)+";");else{if(s==="NO_COMPONENT_SELECTOR"&&process.env.NODE_ENV!=="production")throw new Error(ke);if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var o=0;o<i.length;o++)he(i[o])&&(n+=X(s)+":"+J(s,i[o])+";");else{var f=W(e,r,i);switch(s){case"animation":case"animationName":{n+=X(s)+":"+f+";";break}default:process.env.NODE_ENV!=="production"&&s==="undefined"&&console.error(hr),n+=s+"{"+f+"}"}}}}return n}var me=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ce;process.env.NODE_ENV!=="production"&&(Ce=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var A,ee=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,s="";A=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,s+=W(n,t,i)):(process.env.NODE_ENV!=="production"&&i[0]===void 0&&console.error(de),s+=i[0]);for(var o=1;o<r.length;o++)s+=W(n,t,r[o]),a&&(process.env.NODE_ENV!=="production"&&i[o]===void 0&&console.error(de),s+=i[o]);var f;process.env.NODE_ENV!=="production"&&(s=s.replace(Ce,function(b){return f=b,""})),me.lastIndex=0;for(var u="",c;(c=me.exec(s))!==null;)u+="-"+c[1];var h=lr(s)+u;return process.env.NODE_ENV!=="production"?{name:h,styles:s,map:f,next:A,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:h,styles:s,next:A}},Er=!0;function Ae(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var xr=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Er===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},Sr=function(r,t,n){xr(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var s=t;do r.insert(t===s?"."+a:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function ye(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function ge(e,r,t){var n=[],a=Ae(e,n,t);return n.length<2?t:a+r(n)}var Nr=function(r){var t=ur(r);t.sheet.speedy=function(o){if(process.env.NODE_ENV!=="production"&&this.ctr!==0)throw new Error("speedy must be changed before any rules are inserted");this.isSpeedy=o},t.compat=!0;var n=function(){for(var f=arguments.length,u=new Array(f),c=0;c<f;c++)u[c]=arguments[c];var h=ee(u,t.registered,void 0);return Sr(t,h,!1),t.key+"-"+h.name},a=function(){for(var f=arguments.length,u=new Array(f),c=0;c<f;c++)u[c]=arguments[c];var h=ee(u,t.registered),b="animation-"+h.name;return ye(t,{name:h.name,styles:"@keyframes "+b+"{"+h.styles+"}"}),b},s=function(){for(var f=arguments.length,u=new Array(f),c=0;c<f;c++)u[c]=arguments[c];var h=ee(u,t.registered);ye(t,h)},i=function(){for(var f=arguments.length,u=new Array(f),c=0;c<f;c++)u[c]=arguments[c];return ge(t.registered,n,Or(u))};return{css:n,cx:i,injectGlobal:s,keyframes:a,hydrate:function(f){f.forEach(function(u){t.inserted[u]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Ae.bind(null,t.registered),merge:ge.bind(null,t.registered,n)}},Or=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(a!=null){var s=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))s=e(a);else{s="";for(var i in a)a[i]&&i&&(s&&(s+=" "),s+=i)}break}default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},$e=Nr({key:"css"}),kr=$e.cx,D=$e.css;function Cr(){const e=g.inject("mythril-theme",{}),r=D(e.button.base),t=kr(D([e.button.variant.solid]),D({backgroundColor:"red"})),n=D(e.button.variant.outlined),a=D(e.button.variant.ghost),s=D(e.button.variant.text);return{baseStyle:r,solidStyle:t,outlinedStyle:n,ghostStyle:a,textStyle:s}}const Ar=g.defineComponent({__name:"MButton",props:{variant:{default:"solid"},label:{default:""},loading:{type:Boolean}},setup(e){const{baseStyle:r,outlinedStyle:t,solidStyle:n,ghostStyle:a,textStyle:s}=Cr();return(i,o)=>(g.openBlock(),g.createElementBlock("button",{class:g.normalizeClass([g.unref(r),{[g.unref(n)]:i.$props.variant==="solid",[g.unref(t)]:i.$props.variant==="outlined",[g.unref(a)]:i.$props.variant==="ghost",[g.unref(s)]:i.$props.variant==="text"}])},[i.loading?(g.openBlock(),g.createElementBlock(g.Fragment,{key:1},[g.createTextVNode(" Loading ")],64)):(g.openBlock(),g.createElementBlock(g.Fragment,{key:0},[g.renderSlot(i.$slots,"start"),g.createElementVNode("span",null,g.toDisplayString(i.label),1),g.renderSlot(i.$slots,"end")],64))],2))}});exports.MButton=Ar;
