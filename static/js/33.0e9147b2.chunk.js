(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[33],{1588:function(e,a,t){},1620:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),s=t(14),l=t(13),c=t(0),o=t.n(c),i=t(1081),u=t(1082),p=t(1083),m=t(1084),d=t(1085),f=t(1086),h=t(853),b=t(878),g=t(862),v=t(844),E=t(170),y=t(815),N=t(249),j=(t(3),t(23)),O=t(561),w=t(25),x=(t(569),t(570),t(35)),k=t.n(x);t(571);O.apps.length;O.auth();var C=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(h.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(v.a,null,"Name")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(v.a,null,"Email")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(v.a,null,"Password")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(v.a,null,"Confirm Password")),o.a.createElement(b.a,null,o.a.createElement(y.a,{color:"primary",icon:o.a.createElement(N.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(E.a.Ripple,{color:"primary",outline:!0,onClick:function(){w.a.push("/pages/login")}},"Login"),o.a.createElement(E.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),R=(Object(j.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){k.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),w.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(C),t(987),t(895),t(1588),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"test1"},o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.a,{className:"m-0 justify-content-center",style:{boxShadow:"0 0 20px 0 rgb(110, 110, 110), 0 5px 5px 0 rgb(117, 117, 117)"}},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(p.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(m.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(f.a,{className:"pt-1 pb-50"},o.a.createElement("div",null),o.a.createElement(h.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(v.a,null,"Name")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(v.a,null,"Email")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(v.a,null,"Password")),o.a.createElement(b.a,{className:"form-label-group"},o.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(v.a,null,"Confirm Password")),o.a.createElement(b.a,null,o.a.createElement(y.a,{color:"primary",icon:o.a.createElement(N.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(E.a.Ripple,{color:"primary",outline:!0,onClick:function(){e.props.history.push("/pages/login")}},"Login"),o.a.createElement(E.a.Ripple,{color:"primary",type:"submit"},"Register"))))))))),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},"hey"))))}}]),t}(o.a.Component));a.default=R},815:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(14),l=t(13),c=t(0),o=t.n(c),i=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},844:function(e,a,t){"use strict";var n=t(5),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(4),m=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,m=e.size,d=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];c.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var s,l=!n;if(Object(p.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=b(l,a,r.size),h.push(Object(p.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=b(l,a,r),h.push(s)}}));var g=Object(p.mapToCssModules)(u()(a,!!s&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=h,a.a=g},853:function(e,a,t){"use strict";var n=t(5),r=t(8),s=t(10),l=t(15),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(3),m=t.n(p),d=t(4),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(m()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},862:function(e,a,t){"use strict";var n=t(5),r=t(8),s=t(10),l=t(15),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(3),m=t.n(p),d=t(4),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,p=e.addon,f=e.plaintext,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),y="form-control";f?(y+="-plaintext",E=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":g&&(y=p?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var N=Object(d.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||u&&"function"===typeof u)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(E,Object(n.a)({},b,{ref:h,className:N,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},878:function(e,a,t){"use strict";var n=t(5),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(3),u=t.n(i),p=t(4),m={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,m=e.tag,d=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.mapToCssModules)(u()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===m&&(d.disabled=c),l.a.createElement(m,Object(n.a)({},d,{className:f}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},895:function(e,a,t){},987:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"}}]);
//# sourceMappingURL=33.0e9147b2.chunk.js.map