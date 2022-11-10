"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7046],{94457:function(e,r,t){t.d(r,{IO:function(){return p},IU:function(){return c},YR:function(){return d},wg:function(){return f},x4:function(){return l}});var n=t(47568),a=t(26042),i=t(69396),o=t(34051),u=t.n(o),s=t(15794);function c(e){var r=e.username,t=e.email,a=e.password,i=e.teacher,o=e.organization,c=e.hCaptchaResponse,l=e.hCaptchaSiteKey,d=e.privacyInvite,p=e.source;return function(){var e=(0,n.Z)(u().mark((function e(n,f){var h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"FETCH_SIGNUP_REQUEST"}),e.prev=2,e.next=5,(0,s.uz)("/signup",{email:t,username:r,password:a,teacher:i,organization:o,privacyInvite:d,hCaptchaResponse:c,hCaptchaSiteKey:l,source:p});case 5:h=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),n({type:"FETCH_SIGNUP_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 12:return n({type:"FETCH_SIGNUP_SUCCESS",user:h}),e.abrupt("return",{user:f().user.userInfo});case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r,t){return e.apply(this,arguments)}}()}function l(e){var r=e.username,t=e.password,a=e.teacher,i=e.hCaptchaResponse,o=e.hCaptchaSiteKey;return function(){var e=(0,n.Z)(u().mark((function e(n,c){var l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"FETCH_LOGIN_REQUEST"}),e.prev=2,e.next=5,(0,s.uz)("/login",{username:r,password:t,teacher:a,hCaptchaResponse:i,hCaptchaSiteKey:o});case 5:l=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),n({type:"FETCH_LOGIN_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 12:return n({type:"FETCH_LOGIN_SUCCESS",user:l}),e.abrupt("return",{user:c().user.userInfo});case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r,t){return e.apply(this,arguments)}}()}function d(e){var r=e.provider;return function(){var e=(0,n.Z)(u().mark((function e(t,n){var o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_USER_INFO_REQUEST"}),e.prev=2,e.next=5,(0,s.LK)("/is_authenticated");case 5:o=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),t({type:"FETCH_USER_INFO_FAILURE",error:e.t0}),e.abrupt("return",{error:e.t0});case 12:if(o.success){e.next=17;break}return(c=new Error("Unauthorized")).status=401,t({type:"FETCH_USER_INFO_FAILURE",error:c}),e.abrupt("return",{error:c});case 17:return t({type:"FETCH_USER_INFO_SUCCESS",user:(0,i.Z)((0,a.Z)({},o.user),{loginMethod:r,should_complete_profile:o.should_complete_profile})}),e.abrupt("return",{user:n().user.userInfo});case 19:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(r,t){return e.apply(this,arguments)}}()}function p(){return{type:"AUTH_MODAL_INCREMENT_PROMPT_COUNT"}}function f(){return{type:"AUTH_MODAL_DISMISS"}}},89735:function(e,r,t){t.d(r,{j:function(){return o}});var n=t(26042),a=t(16998),i=t(86292),o=function(e){var r=a.Z.get("gfa_ref")||a.Z.get("_growth_ref")||document.referrer,t=a.Z.get("gfa_campaign")||a.Z.get("_growth_campaign"),o=a.Z.get("gfa_landed_on")||a.Z.get("_growth_landing");(0,i.yV)((0,n.Z)({id:e},r?{firstAcquisitionSource:r}:{},t?{firstAcquisitionCampaign:t}:{},o?{firstAcquisitionLandedOn:o}:{}))}},72329:function(e,r,t){t.d(r,{Z:function(){return Y}});var n=t(35944),a=t(60536),i=t.n(a),o=t(67294),u=t(47568),s=t(10253),c=t(34051),l=t.n(c),d=t(78135),p=t(27206),f=t(8766),h=t(92002),m=t(77365),v=t(94457),g=t(55768),b=t(30992),Z=t(3171),w=t(42941),x=t(86292),y=t(1144),k=function(e){var r=e.isLogin;return(0,n.BX)(y.x,{variant:"small",color:"dimmer",children:["Trouble ",r?"logging in":"signing up","? ",(0,n.tZ)("a",{href:"https://replit.com/support",target:"_blank",rel:"noopener noreferrer",children:"Get help"})]})},C=t(88075);var E="a20d9b66-6747-404a-9393-c449c4611661";function _(e){if(e.error)return[{message:e.error.message,state:"error"}];if(e.warning)return[{message:e.warning.message,state:"warning"}];if(e.value){if(e.isValid)return[{message:"",state:"success"}];if(e.touched)return[{message:"",state:"loading"}]}}var S=function(e){var r=e.email,t=void 0===r?"":r,a=e.username,i=void 0===a?"":a,c=e.password,y=void 0===c?"":c,S=e.schoolName,T=void 0===S?"":S,U=e.isTeacher,R=e.randomUsername,I=void 0===R?"":R,L=e.privacyInvite,A=e.onSubmit,B=e.onChangeAuth,N=e.toggleTeacher,P=e.source,z=void 0===P?"explicit":P,O=e.message,j=(0,s.Z)(o.useState(!1),2),F=j[0],D=j[1],H=(0,s.Z)(o.useState(!1),2),V=H[0],G=H[1],M=o.useRef(null),Y=(0,d.I0)(),X=(0,b.Y)(L?I:i,f.Z.username),K=(0,b.Y)(L?"".concat(I,"@teams.noreply.replit.com"):t,U?f.Z.teacherEmail:f.Z.email),q=(0,b.Y)(y||"",f.Z.password),Q=(0,b.Y)(T||"",f.Z.school),W=function(){var e=(0,u.Z)(l().mark((function e(r){var t,n,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),D(!0),X.isValid){e.next=9;break}return e.next=5,X.validate();case 5:if(!e.sent){e.next=9;break}return D(!1),e.abrupt("return");case 9:if(K.isValid){e.next=16;break}return e.next=12,K.validate();case 12:if(!e.sent){e.next=16;break}return D(!1),e.abrupt("return");case 16:if(q.isValid){e.next=23;break}return e.next=19,q.validate();case 19:if(!e.sent){e.next=23;break}return D(!1),e.abrupt("return");case 23:if(!U||Q.isValid){e.next=30;break}return e.next=26,Q.validate();case 26:if(!e.sent){e.next=30;break}return D(!1),e.abrupt("return");case 30:return e.prev=31,e.next=34,(0,g.Z)(E,(function(){(0,x.j)(x.U3.AUTH_FORM_CAPTCHA_TRIGGERED,{authenticationType:"signup"})}));case 34:t=e.sent,e.next=42;break;case 37:return e.prev=37,e.t0=e.catch(31),A({error:"Something went wrong trying to submit. Please try again."}),D(!1),e.abrupt("return");case 42:return e.next=44,Y((0,v.IU)({username:X.value,password:q.value,privacyInvite:L,email:K.value,teacher:U,organization:Q.value,hCaptchaResponse:t,hCaptchaSiteKey:E,source:z}));case 44:if(n=e.sent,D(!1),G(!0),!("error"in n)){e.next=53;break}if(a=n.error,A({error:a.status&&a.message?a.message:"Something went wrong"}),!(a.status&&a.status>=500)){e.next=52;break}throw a;case 52:return e.abrupt("return");case 53:i=n.user,A({user:i,newUser:!0,organization:Q.value});case 55:case"end":return e.stop()}}),e,null,[[31,37]])})));return function(r){return e.apply(this,arguments)}}(),$=function(e){e.preventDefault(),N()},J=U&&!Q.value,ee=L&&!K.value,re=function(e){B&&(e.preventDefault(),B(),(0,x.j)(x.U3.LOGIN_REQUESTED,{from:"signup",location:"form"}))};return(0,n.tZ)("form",{onSubmit:W,children:(0,n.BX)(Z.G7,{css:[Z.l0.colWithGap(8)],children:[(0,n.tZ)(Z.h4,{variant:"headerDefault",level:1,children:U?"Create a teacher account":"Create a Replit account"}),!L&&(0,n.tZ)(Z.G7,{onClick:$,role:"button",tabIndex:0,onKeyDown:$,children:(0,n.tZ)(Z.xv,{children:U?(0,n.tZ)("a",{children:"Not a teacher?"}):(0,n.tZ)("a",{children:"Teacher? Sign up for our education product."})})}),O?(0,n.tZ)(Z.E_,{colorway:"primary",text:O}):null,(0,n.tZ)(p.ZP,{label:L?"Use our default or pick a username that\u2019s not your real name.":void 0,"aria-label":L?void 0:"Username",name:"username",ref:M,placeholder:"Username",onBlur:X.handleBlur,validationResults:_(X),onChange:function(e){return X.setValue(e.target.value)},value:X.value,autoComplete:"on",autoFocus:!0,autoCorrect:"off",autoCapitalize:"off",onValidationError:function(){(0,x.j)(x.U3.AUTH_FORM_VALIDATION_ERROR,{field:"username"})}}),L?null:(0,n.tZ)(p.ZP,{name:"email",placeholder:"Email","aria-label":"Email",onBlur:K.handleBlur,validationResults:_(K),onChange:function(e){return K.setValue(e.target.value)},value:K.value,autoComplete:"on",autoCorrect:"off",autoCapitalize:"off",onValidationError:function(){(0,x.j)(x.U3.AUTH_FORM_VALIDATION_ERROR,{field:"email"})}}),(0,n.tZ)(p.ZP,{name:"password",type:"password","aria-label":"Password",placeholder:"Password",onBlur:q.handleBlur,validationResults:_(q),onChange:function(e){return q.setValue(e.target.value)},value:q.value,onValidationError:function(){(0,x.j)(x.U3.AUTH_FORM_VALIDATION_ERROR,{field:"password"})}}),U?(0,n.tZ)(p.ZP,{type:"text",name:"organization",placeholder:"School or Organization name","aria-label":"School or Organization name",onBlur:Q.handleBlur,validationResults:_(Q),onChange:function(e){return Q.setValue(e.target.value)},value:Q.value,onValidationError:function(){(0,x.j)(x.U3.AUTH_FORM_VALIDATION_ERROR,{field:"organization"})}}):null,(0,n.BX)(Z.G7,{css:[Z.l0.colWithGap(4)],children:[(0,n.tZ)(Z.zx,{type:"submit",colorway:V?"positive":"primary",big:!0,stretch:!0,disabled:!q.value||!X.value||ee||J||V||F,iconLeft:F?(0,n.tZ)(m.Z,{}):V?(0,n.tZ)(C.Z,{}):(0,n.tZ)(h.Z,{}),dataCy:"signup-create-account",text:"Create account",css:[F&&Z.pt.backgroundPulse(Z.TV.accentPrimaryDimmest,Z.TV.accentPrimaryDimmer),(V||F)&&{color:"".concat(Z.TV.foregroundDefault," !important"),cursor:"default"},Z.l0.borderRadius(4)]}),(0,n.tZ)(w.Z,{size:3}),!L&&B&&(0,n.BX)(Z.xv,{children:["Have an account?"," ",(0,n.tZ)("a",{role:"button",tabIndex:0,onKeyDown:function(e){return re(e)},onClick:function(e){return re(e)},children:"Log in"})]}),(0,n.tZ)(k,{isLogin:!1})]}),!1]})})},T=t(41664),U=t.n(T),R=t(48850),I=t(9517),L=t(43484);function A(e){var r=e.username,t=void 0===r?"":r,a=e.password,i=void 0===a?"":a,c=e.isTeacher,f=e.onSubmit,h=e.onChangeAuth,y=e.source,k=e.message,E=(0,s.Z)(o.useState(!1),2),_=E[0],S=E[1],T=(0,s.Z)(o.useState(!1),2),A=T[0],B=T[1],N=o.useRef(null),P=(0,d.I0)(),z=(0,b.Y)(t,(function(){return null})),O=(0,b.Y)(i,(function(){return null})),j=function(){var e=(0,u.Z)(l().mark((function e(r){var t,n,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.preventDefault&&r.preventDefault(),!_){e.next=3;break}return e.abrupt("return");case 3:return S(!0),e.next=6,z.validate();case 6:if(!e.sent){e.next=12;break}return null===(t=N.current)||void 0===t||t.focus(),S(!1),e.abrupt("return");case 12:return e.next=14,O.validate();case 14:if(!e.sent){e.next=18;break}return S(!1),e.abrupt("return");case 18:return e.prev=19,e.next=22,(0,g.Z)(void 0,(function(){(0,x.j)(x.U3.AUTH_FORM_CAPTCHA_TRIGGERED,{authenticationType:"login"})}));case 22:n=e.sent,e.next=30;break;case 25:return e.prev=25,e.t0=e.catch(19),f({error:"Something went wrong trying to submit. Please try again."}),S(!1),e.abrupt("return");case 30:return e.next=32,P((0,v.x4)({username:z.value,password:O.value,hCaptchaResponse:n,hCaptchaSiteKey:g.w,teacher:c}));case 32:if(a=e.sent,S(!1),!("error"in a)){e.next=40;break}if(i=a.error,f({error:i.status&&i.message?i.message:"Something went wrong"}),!(i.status&&i.status>=500)){e.next=39;break}throw i;case 39:return e.abrupt("return");case 40:B(!0),(0,x.j)(x.U3.LOGIN_SUCCESSFUL,{source:y,siteVersion:(0,L.Z)()?"firewall":"regular"}),f({user:a.user});case 43:case"end":return e.stop()}}),e,null,[[19,25]])})));return function(r){return e.apply(this,arguments)}}();return(0,n.tZ)("form",{className:"login-form",onSubmit:j,method:"POST",action:"/login",children:(0,n.BX)(Z.G7,{css:[Z.l0.colWithGap(8)],children:[(0,n.tZ)(Z.h4,{variant:"headerDefault",level:1,children:"Log in to your account"}),(0,n.tZ)(w.Z,{}),k?(0,n.tZ)(Z.E_,{colorway:"primary",text:k}):null,(0,n.tZ)(w.Z,{}),(0,n.tZ)(p.ZP,{ref:N,name:"username",placeholder:"Email or Username","aria-label":"Email or Username",value:z.value,onBlur:z.handleBlur,onChange:function(e){return z.setValue(e.currentTarget.value)},autoComplete:"on",autoFocus:!0,autoCorrect:"off",autoCapitalize:"off",validationResults:z.error?[{message:z.error.message,state:"error"}]:void 0,required:!0}),(0,n.tZ)(R.Z,{validated:!1,name:"password",placeholder:"Password","aria-label":"Password",value:O.value,onBlur:O.handleBlur,onChange:function(e){return O.setValue(e.currentTarget.value)},validationResults:O.error?[{message:O.error.message,state:"error"}]:void 0,required:!0},"password"),(0,n.tZ)(Z.zx,{type:"submit",onClick:j,colorway:A?"positive":"primary",big:!0,stretch:!0,disabled:!O.value||!z.value||_||A,iconRight:_?(0,n.tZ)(m.Z,{}):A?(0,n.tZ)(C.Z,{}):(0,n.tZ)(I.Z,{}),dataCy:"log-in-btn",text:"Log in",css:[_&&Z.pt.backgroundPulse(Z.TV.accentPrimaryDimmest,Z.TV.accentPrimaryDimmer),(A||_)&&{color:"".concat(Z.TV.foregroundDefault," !important"),cursor:"default"},Z.l0.borderRadius(4)]}),(0,n.tZ)(w.Z,{}),h&&(0,n.BX)(Z.xv,{children:["New to Replit?"," ",(0,n.tZ)("a",{href:"/signup",onClick:function(e){e.preventDefault(),h(),(0,x.j)(x.U3.SIGNUP_REQUESTED,{from:"login",location:"form"})},children:"Sign up"})]}),(0,n.tZ)(Z.xv,{children:(0,n.tZ)(U(),{href:"/forgot",children:"Forgot password?"})}),!1]})})}var B=t(14924),N=t(94184),P=t.n(N),z=t(30019),O=t(19526),j=t(6951),F=t(44781),D=t(67003),H=["google","github","facebook"];var V=function(e){var r=e.onClick,t=e.provider,a=(0,D.Fg)().isDarkColorScheme;return(0,n.BX)("div",{className:"jsx-872e72fe1dfe1a05 social-login-container",children:[(0,n.tZ)(j.Z,{onClick:r,fullWidth:!0,size:"small",children:(0,n.BX)(O.Ug,{align:"center",justify:"space-between",spacing:2,children:[(0,n.tZ)("div",{style:{backgroundImage:"url(/public/images/".concat(t,".png)")},css:a&&"github"===t&&{filter:"brightness(0) invert(1)"},className:"jsx-872e72fe1dfe1a05 "+(P()("social-login-icon",(0,B.Z)({},t,t))||"")}),(0,n.BX)(F.Z,{size:"small",children:["Continue with"," ","".concat(t.substring(0,1).toUpperCase()).concat(t.substring(1))]}),(0,n.tZ)(w.Z,{})]})}),(0,n.tZ)(i(),{id:"872e72fe1dfe1a05",children:".social-login-container.jsx-872e72fe1dfe1a05{min-width:280px}.social-login-container.jsx-872e72fe1dfe1a05 button .content{width:100%}.social-login-icon.jsx-872e72fe1dfe1a05{height:22px;width:22px;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain;background-repeat:no-repeat}"})]})},G=function(e){var r=e.isTeacher,t=e.isLogin,a=e.onSubmit,s=e.source,c=e.googleClassroom,p=(0,d.I0)(),f=o.useRef(null),h=function(e,n){e.preventDefault();var i="/auth/".concat(n,"/get?close=1");r&&(i+="&teacher=1"),s&&(i+="&source=".concat(s)),(0,x.j)(x.U3.AUTH_FORM_SSO_REQUESTED,{provider:n,authenticationType:t?"login":"signup",isTeacher:r?"true":"false"});var o=window.open(i),c=function(){var e=(0,u.Z)(l().mark((function e(i){var u,c,d,h;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i.origin===window.location.origin||"https://replit.com"===i.origin||"https://repl.it"===i.origin||"https://firewalledreplit.com"===i.origin)&&("authenticated"===i.data||"authenticated:new_user"===i.data)){e.next=2;break}return e.abrupt("return");case 2:return f.current&&f.current(),o&&o.close(),e.next=6,p((0,v.YR)({provider:n}));case 6:if(!("error"in(u=e.sent))){e.next=14;break}if(c=u.error,a({error:c.status&&c.message?c.message:"Something went wrong"}),(0,x.j)(x.U3.AUTH_FORM_SUBMISSION_FAILED,{provider:n,authenticationType:t?"login":"signup",isTeacher:r?"true":"false",errorStatus:c.status}),401===c.status){e.next=13;break}throw c;case 13:return e.abrupt("return");case 14:d=u.user,h="authenticated:new_user"===i.data,t&&!h&&(0,x.j)(x.U3.LOGIN_SUCCESSFUL,{source:s,siteVersion:(0,L.Z)()?"firewall":"regular"}),a({user:d,social:!0,newUser:h});case 18:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();window.addEventListener("message",c),f.current=function(){f.current=null,window.removeEventListener("message",c)}};return o.useEffect((function(){return function(){f.current&&f.current()}}),[]),(0,n.BX)(O.gC,{children:[c?(0,n.BX)(O.gC,{align:"center",children:[(0,n.tZ)(z.Z,{level:4,align:"center",children:"Login with Google"}),(0,n.tZ)("div",{className:"jsx-ec4a0caca93c2428",children:(0,n.tZ)(V,{provider:"google",onClick:function(e){return h(e,"google")}})})]}):(0,n.BX)(n.HY,{children:[(0,n.tZ)(w.Z,{size:2}),(0,n.tZ)("div",{className:"jsx-ec4a0caca93c2428 social-spacer"}),(0,n.tZ)(w.Z,{}),(0,n.tZ)(O.gC,{spacing:1,children:H.map((function(e){return(0,n.tZ)(V,{onClick:function(r){return h(r,e)},provider:e},e)}))})]}),(0,n.tZ)(i(),{id:"ec4a0caca93c2428",children:".social-spacer.jsx-ec4a0caca93c2428{width:100%;border-bottom:1px solid var(--outline-dimmest)}"})]})},M=function(){return(0,n.BX)("div",{className:"jsx-ebf1f482d98c40ac signup-form-email-disclaimer",children:["By continuing, you agree to Replit\u2019s"," ",(0,n.tZ)("a",{href:"/site/terms",target:"_blank",className:"jsx-ebf1f482d98c40ac",children:"Terms of Service"})," ","and"," ",(0,n.tZ)("a",{href:"/site/privacy",target:"_blank",className:"jsx-ebf1f482d98c40ac",children:"Privacy Policy"}),", and to receiving emails with updates.",(0,n.tZ)(i(),{id:"ebf1f482d98c40ac",children:".signup-form-email-disclaimer.jsx-ebf1f482d98c40ac{font-size:12px;margin-top:20px;color:var(--foreground-dimmer);line-height:14px}"})]})},Y=function(e){var r=e.onSubmit,t=e.isLogin,a=e.email,o=e.isTeacher,u=e.toggleTeacher,s=e.onChangeAuth,c=e.privacyInvite,l=e.randomUsername,d=e.source,p=void 0===d?"explicit":d,f=e.googleClassroom,h=e.message;return(0,n.BX)("div",{className:"jsx-c4d8c9697df04b1d",children:[(0,n.tZ)(i(),{id:"c4d8c9697df04b1d",children:"div.jsx-c4d8c9697df04b1d{max-width:280px;margin-top:auto;margin-bottom:auto;color:var(--accent-foreground-default)}"}),t&&(0,n.tZ)(A,{isTeacher:o,onSubmit:r,onChangeAuth:s,source:p,message:h}),!t&&!f&&(0,n.tZ)(S,{isTeacher:o,email:a,onSubmit:r,toggleTeacher:u,onChangeAuth:s,privacyInvite:c,randomUsername:l,source:p,message:h}),!c&&(0,n.tZ)(G,{isTeacher:o,onSubmit:r,source:p,isLogin:t,googleClassroom:f}),(0,n.tZ)(M,{}),(0,n.tZ)(w.Z,{size:2}),(0,n.tZ)(k,{isLogin:!0})]})}},80498:function(e,r,t){t.d(r,{a:function(){return S},Z:function(){return _}});var n=t(4111),a=t(47568),i=t(51438),o=t(52951),u=t(14924),s=t(28668),c=t(26042),l=t(69396),d=t(99534),p=t(10253),f=t(25171),h=t(34051),m=t.n(h),v=t(35944),g=t(60536),b=t.n(g),Z=t(67294),w=t(28173),x=t(48966),y=t(15794),k={isEmail:[[x.isEmail,"Invalid email address"]],email:[[x.isEmail,"Invalid email address"],[function(){var e=(0,a.Z)(m().mark((function e(r){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.uz)("/data/user/exists",{email:r});case 2:return t=e.sent.exists,e.abrupt("return",!t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),"Email already in use"]],username:[[function(e){return(0,x.isByteLength)(e,2,15)},"Your username must be between 2 and 15 characters"],[function(e){return!!e.match(/^[0-9a-zA-Z]+$/)},"Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)"],[function(){var e=(0,a.Z)(m().mark((function e(r){var t;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.uz)("/data/user/exists",{username:r});case 2:return t=e.sent.exists,e.abrupt("return",!t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),"Username is taken"]],name:[[function(e){return(0,x.isByteLength)(e,1,255)},"Your name must be at least 1 character long"]],classroomName:[[function(e){return(0,x.isByteLength)(e,1,255)},"Classroom name must be at least 1 character long"]],replTitle:[[function(e){return(0,x.isByteLength)(e,1,60)},"Titles must be between 1 and 60 characters"]],replDescription:[[function(e){return(0,x.isByteLength)(e,0,255)},"Description should not be longer than 255 characters"]],notEmpty:[[function(e){return!(0,x.isEmpty)(e)},"Cannot be empty"]],postTitle:[[function(e){return(0,x.isByteLength)(e,1,100)&&!!e.match(/[0-9a-zA-Z]+/)},"Your post title must be less than 100 characters and contain at least one alphanumeric character"]],replTag:[[function(e){return(0,x.isByteLength)(e,2,15)},"Tag must be between 2 and 15 characters"],[function(e){return!!e.match(/^[0-9a-zA-Z_]+$/)},"Tag must be alphanumeric characters"]],replFolderName:[[function(e){return(0,x.isByteLength)(e.trim(),1,60)},"Folder name must be between 1 and 60 characters"],[function(e){return!e.match(/[/*?"\\]+/)},'Folder name cannot contain /, *, ", ? \\']]},C=t(43902),E=t(27206),_=function(e){(0,s.Z)(t,e);var r=(0,f.Z)(t);function t(){return(0,i.Z)(this,t),r.apply(this,arguments)}return(0,o.Z)(t,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"select",value:function(){this.input&&this.input.select()}},{key:"blur",value:function(){this.input&&this.input.blur()}},{key:"render",value:function(){var e=this,r=this.props,t=r.error,n=r.isLoading,a=(0,d.Z)(r,["error","isLoading"]),i=t?[{message:t,state:"error"}]:void 0;return(0,v.BX)("div",{className:"jsx-ac5406405936ddf form-input-with-ui",children:[(0,v.tZ)(E.ZP,(0,l.Z)((0,c.Z)({},a),{validationResults:i,ref:function(r){return e.input=r}})),n?(0,v.tZ)(C.Z,{style:{right:"8px",top:"12px",height:"16px",width:"16px",position:"absolute"}}):null,(0,v.tZ)(b(),{id:"ac5406405936ddf",children:".form-input-with-ui.jsx-ac5406405936ddf{position:relative;width:100%}"})]})}}]),t}(Z.Component);(0,u.Z)(_,"defaultProps",{isLoading:!1,type:"text",value:"",required:!1});var S=function(e){(0,s.Z)(t,e);var r=(0,f.Z)(t);function t(e){var o;(0,i.Z)(this,t),o=r.call(this,e),(0,u.Z)((0,n.Z)(o),"onBlur",(function(e){o.props.onBlur&&o.props.onBlur(e),o.validateNow()})),(0,u.Z)((0,n.Z)(o),"onChange",(function(e){o.props.onChange(e),o.clearErrTimeout=setTimeout((function(){return o.setState({error:null})}),200),o.validate()})),(0,u.Z)((0,n.Z)(o),"validateNow",(function(){o.validate.cancel(),o._validate()}));var s=(0,n.Z)(o);return(0,u.Z)((0,n.Z)(o),"_validate",(0,a.Z)(m().mark((function e(){var r,t,n,a,i,o,u,c,l,d,f;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,t=s.props.validators||k[s.props.validator]){e.next=4;break}throw new Error("Please supply validators or a type of validator");case 4:n=!0,a=!1,i=void 0,e.prev=5,o=t[Symbol.iterator]();case 7:if(n=(u=o.next()).done){e.next=25;break}if(c=(0,p.Z)(u.value,2),l=c[0],d=c[1],!(f=l(s.props.value)).then){e.next=16;break}return s.setState({isLoading:!0}),e.next=14,f;case 14:f=e.sent,s.setState({isLoading:!1});case 16:if(f){e.next=22;break}return s.props.onValidation(d),r=!1,s.setState({error:d}),s.clearErrTimeout&&clearTimeout(s.clearErrTimeout),e.abrupt("break",25);case 22:n=!0,e.next=7;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(5),a=!0,i=e.t0;case 31:e.prev=31,e.prev=32,n||null==o.return||o.return();case 34:if(e.prev=34,!a){e.next=37;break}throw i;case 37:return e.finish(34);case 38:return e.finish(31);case 39:r&&(s.setState({error:null}),s.props.onValidation(null));case 40:case"end":return e.stop()}}),e,null,[[5,27,31,39],[32,,34,38]])})))),(0,u.Z)((0,n.Z)(o),"validate",(0,w.Z)((function(){return o._validate()}),o.props.debounceTime)),o.state={error:null,isLoading:!1},o}return(0,o.Z)(t,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"select",value:function(){this.input&&this.input.select()}},{key:"blur",value:function(){this.input&&this.input.blur()}},{key:"render",value:function(){var e=this,r=this.props,t=(r.onValidation,r.validator,r.validators,r.debounceTime,(0,d.Z)(r,["onValidation","validator","validators","debounceTime"])),n=(0,l.Z)((0,c.Z)({},t),{onChange:this.onChange,onBlur:this.onBlur,ref:function(r){return e.input=r},error:this.state.error,isLoading:this.state.isLoading});return(0,v.tZ)(_,(0,c.Z)({},n))}}]),t}(Z.Component);(0,u.Z)(S,"defaultProps",{debounceTime:1e3})},48850:function(e,r,t){var n=t(4111),a=t(51438),i=t(52951),o=t(14924),u=t(28668),s=t(26042),c=t(69396),l=t(25171),d=t(35944),p=t(60536),f=t.n(p),h=t(67294),m=t(80498),v=t(27206),g=function(e){(0,u.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;return(0,a.Z)(this,t),e=r.apply(this,arguments),(0,o.Z)((0,n.Z)(e),"state",{isShown:!1}),(0,o.Z)((0,n.Z)(e),"toggleShowHide",(function(){e.setState({isShown:!e.state.isShown})})),e}return(0,i.Z)(t,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,r=this.state.isShown,t=r?"HIDE":"SHOW";return(0,d.BX)("div",{className:"jsx-36c139331f6f2b3d password-input",children:[this.props.validated?(0,d.tZ)(m.a,(0,c.Z)((0,s.Z)({ref:function(r){return e.input=r},type:r?"text":"password"},this.props),{validated:void 0})):(0,d.tZ)(v.ZP,(0,c.Z)((0,s.Z)({ref:function(r){return e.input=r}},this.props),{type:r?"text":"password",validated:void 0})),this.props.value&&this.props.value.length>0&&(0,d.tZ)("div",{onClick:this.toggleShowHide,className:"jsx-36c139331f6f2b3d password-show-toggle",children:t}),(0,d.tZ)(f(),{id:"36c139331f6f2b3d",children:".password-input.jsx-36c139331f6f2b3d{position:relative}.password-input.jsx-36c139331f6f2b3d input{padding-right:67px!important}.password-show-toggle.jsx-36c139331f6f2b3d{position:absolute;right:19px;line-height:16px;top:12px;cursor:pointer}"})]})}}]),t}(h.Component);(0,o.Z)(g,"defaultProps",{validated:!1,theme:"replitLight"}),r.Z=g},55768:function(e,r,t){t.d(r,{Z:function(){return h},w:function(){return u}});var n=t(47568),a=t(34051),i=t.n(a),o=t(34155),u="473079ba-e99f-4e25-a635-e9b661c7dd3e",s=0;function c(){var e=Math.floor(500*Math.random());return 1e3*Math.pow(1.7,s)+e}var l=null;function d(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=document.createElement("script")).src="https://js.hcaptcha.com/1/api.js?render=explicit&host=repl.it",e.abrupt("return",new Promise((function(e,t){r.onload=f((function(){l=null,e()})),r.onerror=function(){s++,l=new Promise((function(e,r){setTimeout((function(){d().then(e,r)}),c())})),5===s&&t(new Error("Failed to load captcha script after ".concat(5," times")))},window.document.head.appendChild(r)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return function(){"undefined"===typeof window.hcaptcha?setTimeout((function(){f(e)}),100):e()}}function h(e,r){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:if("true"!==o.env.IS_CYPRESS_AUTOMATED_TEST&&"true"!==o.env.SKIP_HCAPTCHA){e.next=4;break}return e.abrupt("return","bypassed");case 4:if(!l){e.next=7;break}return e.next=7,l;case 7:return n=window.hcaptcha,e.abrupt("return",new Promise((function(e,a){var i=document.createElement("div"),o=n.render(i,{sitekey:r||u,size:"invisible",callback:function(r){n.reset(o),window.document.body.contains(i)&&window.document.body.removeChild(i),e(r)},"open-callback":function(){t&&t()},"close-callback":function(){n.reset(o),window.document.body.contains(i)&&window.document.body.removeChild(i),a(new Error("HCaptcha closed"))},"chalexpired-callback":function(){n.reset(o),window.document.body.contains(i)&&window.document.body.removeChild(i),a(new Error("HCaptcha challenge expired"))},"error-callback":function(){n.reset(o),window.document.body.contains(i)&&window.document.body.removeChild(i),a(new Error("HCaptcha render error"))},"expired-callback":function(){n.reset(o),window.document.body.contains(i)&&window.document.body.removeChild(i),a(new Error("HCaptcha render expired"))}});window.document.body.appendChild(i),n.execute(o)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l=d()},43484:function(e,r,t){function n(){return"firewalledreplit.com"===(null===window||void 0===window?void 0:window.location.hostname)}t.d(r,{Z:function(){return n}})},8766:function(e,r,t){var n=t(47568),a=t(34051),i=t.n(a),o=t(83868),u=t.n(o),s=t(93235),c=t.n(s),l=t(15794),d=function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:if(u()(r)){e.next=4;break}return e.abrupt("return",{message:"Invalid email address"});case 4:return e.next=6,(0,l.uz)("/data/user/exists",{email:r});case 6:if(!e.sent.exists){e.next=9;break}return e.abrupt("return",{message:"Email already in use"});case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();r.Z={isValidEmail:function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",{message:"Must include valid email address"});case 2:if(u()(r)){e.next=4;break}return e.abrupt("return",{message:"Invalid email address"});case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),email:d,teacherEmail:function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,d(r);case 4:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",t);case 7:return e.next=9,(0,l.uz)("/data/user/is-teacher-email",{email:r});case 9:if(e.sent.isTeacherEmail){e.next=12;break}return e.abrupt("return",{message:"Ensure you\u2019re using your institution\u2019s email",severity:"warning"});case 12:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),username:function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:if(c()(r,{min:2,max:15})){e.next=4;break}return e.abrupt("return",{message:"Your username must be between 2 and 15 characters"});case 4:if(r.match(/^[0-9a-zA-Z]+$/)){e.next=6;break}return e.abrupt("return",{message:"Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)"});case 6:return e.next=8,(0,l.uz)("/data/user/exists",{username:r});case 8:if(!e.sent.exists){e.next=11;break}return e.abrupt("return",{message:"Username is taken"});case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),teamUsername:function(){var e=(0,n.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:if(c()(r,{min:2,max:28})){e.next=4;break}return e.abrupt("return",{message:"Your username must be between 2 and 28 characters"});case 4:if(r.match(/^[0-9a-zA-Z-]+$/)){e.next=6;break}return e.abrupt("return",{message:"Username can only contain alphanumeric characters (letters A-Z, numbers 0-9) and hyphens."});case 6:if(!r.match(/^-.*|.*-$|.*--.*/)){e.next=8;break}return e.abrupt("return",{message:"A username can not start or end with hyphens, or contain two consecutive hyphens."});case 8:return e.next=10,(0,l.uz)("/data/user/exists",{username:r});case 10:if(!e.sent.exists){e.next=13;break}return e.abrupt("return",{message:"Username is taken"});case 13:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),password:function(e){return e?c()(e,{min:8})?void 0:{message:"Must be at least 8 characters"}:null},school:function(e){return null}}}}]);
//# sourceMappingURL=7046-6626d4d280d34648.js.map