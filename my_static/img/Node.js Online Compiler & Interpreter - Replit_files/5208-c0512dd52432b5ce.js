"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5208],{65208:function(t,e,r){r.d(e,{T6:function(){return x},d:function(){return m},ZP:function(){return w}});var n=r(26042),o=r(69396),a=r(10253),c=r(35944),i=r(60536),u=r.n(i),l=r(67294),f=function(t){var e=t.x,r=void 0===e?0:e,n=t.y,o=void 0===n?0:n,a=t.color,i=void 0===a?"white":a,u=t.rotation,l=void 0===u?0:u,f=t.scale,s=void 0===f?1:f,b=t.opacity,d=void 0===b?1:b;return(0,c.BX)("g",{opacity:d,transform:"translate(".concat(r,",").concat(o,") rotate(").concat(l,") scale(").concat(s,")"),children:[(0,c.tZ)("path",{d:"M2.74561 4.1837L8.54842 21.6827L14.3555 19.6677L16.177 25.5455L21.895 23.7733L19.5136 16.1309L20.918 13.6457L20.2765 11.699L18.3781 12.2922L17.7717 10.3807L15.8645 10.9651L15.2581 9.0536L13.3598 9.64684L12.7622 7.72652L10.8506 8.31536L10.2486 6.40822L8.35464 6.98827L7.75262 5.08113L5.84548 5.66997L5.24785 3.76294L2.74561 4.1837Z",fill:"transparent"}),(0,c.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.15188 0.521729L0.237793 1.11232L7.91541 25.9951L9.8295 25.4045L9.2389 23.4904L11.1526 22.8999L10.562 20.9858L8.6483 21.5763L3.33304 4.34982L5.24661 3.75939L5.83718 5.67339L7.75127 5.08279L7.16067 3.1687L5.24661 3.75939L4.65628 1.84521L2.74245 2.43573L2.15188 0.521729ZM9.97168 19.0723L13.7998 17.8906L14.9812 21.7192L16.895 21.1287L18.076 24.9566L16.1619 25.5472L14.9812 21.7192L13.0672 22.3099L12.4766 20.3958L10.562 20.9858L9.97168 19.0723ZM18.6668 26.8707L18.076 24.9566L21.9043 23.7751L22.4949 25.6892L18.6668 26.8707ZM17.0371 14.7957L18.8076 20.5337L18.8093 20.5376L20.7232 19.9471L21.9043 23.7751L23.8186 23.1851L22.6372 19.3564L20.7232 19.9471L19.5418 16.1192L25.2942 14.3442L24.7036 12.4301L22.7797 13.0237L22.189 11.1094L20.2749 11.7L20.8656 13.6143L17.0371 14.7957ZM12.1699 5.81592L10.2559 6.40651L10.8465 8.3206L12.7605 7.73001L12.1699 5.81592ZM17.77 10.3765L19.6841 9.78589L20.2749 11.7L18.3606 12.2906L17.77 10.3765ZM12.7605 7.73001L14.6748 7.1394L15.2654 9.0534L17.1792 8.46289L17.77 10.3765L15.8557 10.9676L15.2654 9.0534L13.3513 9.64409L12.7605 7.73001ZM9.66555 4.49219L7.75127 5.08279L8.34206 6.99687L10.2559 6.40651L9.66555 4.49219Z",fill:i})]})},s=r(47273);var b=function(t){var e=t.length;return e?t[(0,s.Z)(0,e-1)]:void 0},d=r(84365);var L=function(t,e){return(0,d.Z)(e,(function(e){return t[e]}))},p=r(35961);var h=function(t){return null==t?[]:L(t,(0,p.Z)(t))};var y=function(t){return b(h(t))},v=r(14119);var g=function(t){return((0,v.Z)(t)?b:y)(t)},Z=r(31826),j=r(80437),m=1200,x=800,F=function(t,e,r,n,o){return(t-e)*(o-n)/(r-e)+n},A=function(t,e,r,n){var o=Math.floor(Math.sqrt(t)),a=e/o,c=r/o,i=Object.values(j.Z.multiplayer),u=n||{x:e/2,y:r/2};return Array(o*o).fill(0).map((function(t,e){var n=(e+1)%o*a+26,l=Math.floor((e+1)/o)*c+40.5,f=Math.hypot(l-u.y,n-u.x),s=F(f,0,r,.25,3),b=F(1.5*f,0,r,1,0),d=Math.atan2(u.y-l,u.x-n);return{x:n,y:l,scale:s,opacity:b,rotation:180/Math.PI*d,color:g(i)}}))},w=function(t){var e=t.container,r=(0,a.Z)(l.useState((function(){return A(100,m,x)})),2),i=r[0],s=r[1],b=(0,a.Z)(l.useState({height:x,width:m}),2),d=b[0],L=b[1],p=(0,a.Z)(l.useState({x:d.width/2,y:d.height/2}),2),h=p[0],y=p[1];l.useLayoutEffect((function(){if(e){var t=(0,Z.Z)((function(t){var r=e.getBoundingClientRect(),n=t.clientX-r.left,o=t.clientY-r.top;y({x:n,y:o})}),50),r=(0,Z.Z)((function(){L({width:e.clientWidth,height:e.clientHeight}),y({x:e.clientWidth/2,y:e.clientHeight/2}),s(A(100,e.clientWidth,e.clientHeight))}),250);return e.addEventListener("mousemove",t),window.addEventListener("resize",r),r(),function(){e.removeEventListener("mousemove",t),window.removeEventListener("resize",r)}}}),[e]);var v=l.useMemo((function(){return i.map((function(t){var e=.1*(h.x-t.x),r=.1*(h.y-t.y);return(0,o.Z)((0,n.Z)({},t),{x:t.x+e,y:t.y+r,rotation:180/Math.PI*Math.atan2(h.y-t.y,h.x-t.x)+135})}))}),[h,i]);return(0,c.BX)("svg",{viewBox:"0 0 ".concat(d.width," ").concat(d.height),className:u().dynamic([["d71f496bcd27031",[m,x]]])+" cursor-container",children:[v.map((function(t,e){var r=t.x,n=t.y,o=t.rotation,a=t.scale,i=t.opacity,u=t.color;return(0,c.tZ)(f,{x:r,y:n,rotation:o,scale:a,opacity:i,color:u},e)})),(0,c.tZ)(u(),{id:"d71f496bcd27031",dynamic:[m,x],children:".cursor-container.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;max-width:".concat(m,"px;height:").concat(x,"px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}")})]})}},80437:function(t,e){e.Z={brand:{darkBlue:"#0D101E",lightBlue:"#68CDEE",gray:"#6D7D84"},main:{green:{dark:"#0A6640",default:"#0F9960",light:"#3DCC91",25:"rgba(15,153,96,0.25)",15:"rgba(15,153,96,0.15)"},red:{dark:"#A82A2A",default:"#DB3737",light:"#FF7373",25:"rgba(219, 55, 55, 0.25)",15:"rgba(219, 55, 55, 0.15)"},blue:{dark:"#0068AD",default:"#0097FB",light:"#73C4FA",25:"rgba(0, 151, 251, 0.25)",15:"rgba(0, 151, 251, 0.15)"},orange:{dark:"#A14809",default:"#E16D1A",light:"#FC9C58",25:"rgba(225, 109, 26, 0.25)",15:"rgba(225, 109, 26, 0.15)"},purple:{dark:"#6213B1",default:"#9D43F7",light:"#BF80FF",25:"rgba(98, 19, 177, 0.25)",15:"rgba(98, 19, 177, 0.15)"},gold:{dark:"#A67908",default:"#D99E0B",light:"#FFC940",25:"rgba(217, 158, 11, 0.25)",15:"rgba(217, 158, 11, 0.15)"}},neutrals:{black:"#21242C",white:"#FFFFFF",offWhite:"#F7F8FA",black64:"rgba(33, 36, 44, 0.64)",black50:"rgba(33, 36, 44, 0.50)",black16:"rgba(33, 36, 44, 0.16)",black8:"rgba(33, 36, 44, 0.08)",white64:"rgba(255, 255, 255, 0.64)",white50:"rgba(255, 255, 255, 0.50)",white16:"rgba(255, 255, 255, 0.16)",white8:"rgba(255, 255, 255, 0.08)"},multiplayer:{green:"#1BC47D",red:"#EF5533",blue:"#18A0FB",gold:"#FFC700",purple:"#907CFF",teal:"#00B5CE",pink:"#EE46D3"},languages:{java:"#b07219",scheme:"#1e4aec",clojure:"#db5855",haskell:"#5e5086",lua:"#000080",ruby:"#701516",python:"#3572A5",go:"#00ADD8",cpp:"#f34b7d",c:"#555555","c#":"#178600","f#":"#b845fc",rust:"#dea584",swift:"#ffac45",r:"#198CE7",bash:"#000000",crystal:"#000100",julia:"#a270ba",elixir:"#6e4a7e",nim:"#37775b",dart:"#00B4AB",erlang:"#B83998",typescript:"#2b7489",elisp:"#c065db",sql:"#e34c26",php:"#4F5D95",html:"#e34c26",css:"#563d7c",javascript:"#f1e05a"},brands:{github:"#181717",twitter:"#00A8FF",discord:"#7289DA"}}},74053:function(t,e,r){r.d(e,{Z:function(){return f}});var n=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},o=r(14826),a=r(14119),c=r(14048),i=r(77422),u=r(43095),l=Object.prototype.hasOwnProperty;var f=function(t,e){var r=(0,a.Z)(t),f=!r&&(0,o.Z)(t),s=!r&&!f&&(0,c.Z)(t),b=!r&&!f&&!s&&(0,u.Z)(t),d=r||f||s||b,L=d?n(t.length,String):[],p=L.length;for(var h in t)!e&&!l.call(t,h)||d&&("length"==h||s&&("offset"==h||"parent"==h)||b&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||(0,i.Z)(h,p))||L.push(h);return L}},47273:function(t,e){var r=Math.floor,n=Math.random;e.Z=function(t,e){return t+r(n()*(e-t+1))}},67007:function(t,e){e.Z=function(t){return function(e){return t(e)}}},77422:function(t,e,r){var n=r(82222),o=/^(?:0|[1-9]\d*)$/;e.Z=function(t,e){var r="undefined"===typeof t?"undefined":(0,n.Z)(t);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&o.test(t))&&t>-1&&t%1==0&&t<e}},37917:function(t,e){var r=Object.prototype;e.Z=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},47349:function(t,e,r){var n=r(22480);t=r.hmd(t);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=o&&t&&!t.nodeType&&t,c=a&&a.exports===o&&n.Z.process,i=function(){try{var t=a&&a.require&&a.require("util").types;return t||c&&c.binding&&c.binding("util")}catch(e){}}();e.Z=i},91802:function(t,e){e.Z=function(t,e){return function(r){return t(e(r))}}},14826:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(86371),o=r(97926);var a=function(t){return(0,o.Z)(t)&&"[object Arguments]"==(0,n.Z)(t)},c=Object.prototype,i=c.hasOwnProperty,u=c.propertyIsEnumerable,l=a(function(){return arguments}())?a:function(t){return(0,o.Z)(t)&&i.call(t,"callee")&&!u.call(t,"callee")},f=l},10641:function(t,e,r){var n=r(70277),o=r(54829);e.Z=function(t){return null!=t&&(0,o.Z)(t.length)&&!(0,n.Z)(t)}},14048:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(89980);var o=function(){return!1};t=r.hmd(t);var a="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=a&&t&&!t.nodeType&&t,i=c&&c.exports===a?n.Z.Buffer:void 0,u=(i?i.isBuffer:void 0)||o},54829:function(t,e){e.Z=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},43095:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(86371),o=r(54829),a=r(97926),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1;var i=function(t){return(0,a.Z)(t)&&(0,o.Z)(t.length)&&!!c[(0,n.Z)(t)]},u=r(67007),l=r(47349),f=l.Z&&l.Z.isTypedArray,s=f?(0,u.Z)(f):i},35961:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(74053),o=r(37917),a=(0,r(91802).Z)(Object.keys,Object),c=Object.prototype.hasOwnProperty;var i=function(t){if(!(0,o.Z)(t))return a(t);var e=[];for(var r in Object(t))c.call(t,r)&&"constructor"!=r&&e.push(r);return e},u=r(10641);var l=function(t){return(0,u.Z)(t)?(0,n.Z)(t):i(t)}}}]);
//# sourceMappingURL=5208-c0512dd52432b5ce.js.map