(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[44],{1044:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(31),o=a(5),r=a(10),l=a(15),c=a(0),i=a.n(c),p=a(1),s=a.n(p),m=a(944),u=a(4),d=["defaultOpen"],g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(m.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,d)))},t}(c.Component);g.propTypes=Object(n.a)({defaultOpen:s.a.bool},m.a.propTypes)},1045:function(e,t,a){"use strict";var n=a(5),o=a(8),r=a(0),l=a.n(r),c=a(1),i=a.n(c),p=a(3),s=a.n(p),m=a(4),u={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(s()(t,"popover-header"),a);return l.a.createElement(r,Object(n.a)({},c,{className:i}))};d.propTypes=u,d.defaultProps={tag:"h3"},t.a=d},1046:function(e,t,a){"use strict";var n=a(5),o=a(8),r=a(0),l=a.n(r),c=a(1),i=a.n(c),p=a(3),s=a.n(p),m=a(4),u={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(m.mapToCssModules)(s()(t,"popover-body"),a);return l.a.createElement(r,Object(n.a)({},c,{className:i}))};d.propTypes=u,d.defaultProps={tag:"div"},t.a=d},1611:function(e,t,a){"use strict";a.r(t);var n=a(11),o=a(12),r=a(14),l=a(13),c=a(0),i=a.n(c),p=a(1081),s=a(1082),m=a(829),u=a(1083),d=a(1084),g=a(1085),v=a(1076),b=a(803),E=a(804),h=a(1086),P=a(879),f=a(880),y=a(170),T=a(944),k=a(1045),B=a(1046),O=a(3),C=a.n(O),N=a(294),j=a(266),w=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  Popover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverControlled extends React.Component {\n\n  state = {\n    popoverOpen: false\n  }\n\n  togglePopover = () => {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    })\n  }\n\n  render() {\n    return(\n      <Button color="primary" outline id="controlledPopover">\n        Controlled\n      </Button>\n      <Popover\n        placement="top"\n        target="controlledPopover"\n        isOpen={this.state.popoverOpen}\n        toggle={this.togglePopover}\n      >\n        <PopoverHeader>Controlled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread\n          cake lemon drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </Popover>\n    )\n  }\n}\nexport default PopoverControlled\n')),U=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverUncontrolled extends React.Component {\n\n  render() {\n    return(\n      <Button color="primary" outline id="uncontrolledPopover">\n        Controlled\n      </Button>\n      <UncontrolledPopover placement="top" target="uncontrolledPopover">\n        <PopoverHeader>Uncontrolled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread\n          cake lemon drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverUncontrolled\n')),L=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverPositions extends React.Component {\n\n  render() {\n    return(\n      <Button\n      color="primary"\n      outline\n      id="popTop"\n      className="mr-1 mb-1"\n    >\n      Top\n    </Button>\n    <UncontrolledPopover placement="top" target="popTop">\n      <PopoverHeader>Popover Top</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popRight"\n      className="mr-1 mb-1"\n    >\n      Right\n    </Button>\n    <UncontrolledPopover placement="right" target="popRight">\n      <PopoverHeader>Popover Right</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popBottom"\n      className="mr-1 mb-1"\n    >\n      Bottom\n    </Button>\n    <UncontrolledPopover placement="bottom" target="popBottom">\n      <PopoverHeader>Popover Bottom</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popLeft"\n      className="mr-1 mb-1"\n    >\n      Left\n    </Button>\n    <UncontrolledPopover placement="left" target="popLeft">\n      <PopoverHeader>Popover Left</PopoverHeader>\n      <PopoverBody>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Doloremque, cumque.\n      </PopoverBody>\n    </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverPositions\n')),R=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"\n\nclass PopoverTriggers extends React.Component {\n\n  render() {\n    return(\n      <Button\n      color="primary"\n      outline\n      id="popFocus"\n      className="mr-1 mb-1"\n    >\n      Focus\n    </Button>\n    <UncontrolledPopover\n      trigger="focus"\n      placement="top"\n      target="popFocus"\n    >\n      <PopoverHeader>Focus Trigger</PopoverHeader>\n      <PopoverBody>\n        Focusing on the trigging element makes this popover appear.\n        Blurring (clicking away) makes it disappear. You cannot\n        select this text as the popover will disappear when you try.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      color="primary"\n      outline\n      id="popClick"\n      className="mr-1 mb-1"\n    >\n      Click\n    </Button>\n    <UncontrolledPopover\n      trigger="click"\n      placement="top"\n      target="popClick"\n    >\n      <PopoverHeader>Click Trigger</PopoverHeader>\n      <PopoverBody>\n        Clicking on the triggering element makes this popover\n        appear. Clicking on it again will make it disappear. You can\n        select this text, but clicking away (somewhere other than\n        the triggering element) will not dismiss this popover.\n      </PopoverBody>\n    </UncontrolledPopover>\n\n    <Button\n      trigger="legacy"\n      color="primary"\n      outline\n      id="popLegacy"\n      className="mr-1"\n    >\n      Legacy\n    </Button>\n    <UncontrolledPopover placement="top" target="popLegacy">\n      <PopoverHeader>Legacy Trigger</PopoverHeader>\n      <PopoverBody>\n        Legacy is a reactstrap special trigger value (outside of\n        bootstrap\'s spec/standard). Before reactstrap correctly\n        supported click and focus, it had a hybrid which was very\n        useful and has been brought back as trigger="legacy". One\n        advantage of the legacy trigger is that it allows the\n        popover text to be selected while also closing when clicking\n        outside the triggering element and popover itself.\n      </PopoverBody>\n    </UncontrolledPopover>\n    )\n  }\n}\nexport default PopoverTriggers\n')),H=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1",popoverOpen:!1},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e.togglePopover=function(){e.setState({popoverOpen:!e.state.popoverOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(g.a,null,"Controlled Popover"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(N.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(j.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"For controlled Popover you'll have to manage state of component.controlled Popover require ",i.a.createElement("code",null,"isOpen")," and"," ",i.a.createElement("code",null,"toggle")," props to work."),i.a.createElement(P.a,{activeTab:this.state.activeTab},i.a.createElement(f.a,{className:"justify-content-center d-flex",tabId:"1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"controlledPopover"},"Controlled"),i.a.createElement(T.a,{placement:"top",target:"controlledPopover",isOpen:this.state.popoverOpen,toggle:this.togglePopover},i.a.createElement(k.a,null,"Controlled Popover"),i.a.createElement(B.a,null,"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."))),i.a.createElement(f.a,{className:"component-code",tabId:"2"},w)))))}}]),a}(i.a.Component),x=a(1044),q=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(g.a,null,"Uncontrolled Popover"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(N.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(j.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."),i.a.createElement(P.a,{activeTab:this.state.activeTab},i.a.createElement(f.a,{className:"justify-content-center d-flex",tabId:"1"},i.a.createElement(y.a,{color:"primary",outline:!0,id:"uncontrolledPopover"},"Uncontrolled"),i.a.createElement(x.a,{placement:"top",target:"uncontrolledPopover"},i.a.createElement(k.a,null,"Uncontrolled Popover"),i.a.createElement(B.a,null,"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."))),i.a.createElement(f.a,{className:"component-code",tabId:"2"},U)))))}}]),a}(i.a.Component),M=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(g.a,null,"Popover Positions"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(N.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(j.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"placement")," to place you popover at desired position."),i.a.createElement(P.a,{activeTab:this.state.activeTab},i.a.createElement(f.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popTop"},"Top"),i.a.createElement(x.a,{placement:"top",target:"popTop"},i.a.createElement(k.a,null,"Popover Top"),i.a.createElement(B.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popRight"},"Right"),i.a.createElement(x.a,{placement:"right",target:"popRight"},i.a.createElement(k.a,null,"Popover Right"),i.a.createElement(B.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popBottom"},"Bottom"),i.a.createElement(x.a,{placement:"bottom",target:"popBottom"},i.a.createElement(k.a,null,"Popover Bottom"),i.a.createElement(B.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popLeft"},"Left"),i.a.createElement(x.a,{placement:"left",target:"popLeft"},i.a.createElement(k.a,null,"Popover Left"),i.a.createElement(B.a,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.")))),i.a.createElement(f.a,{className:"component-code",tabId:"2"},L)))))}}]),a}(i.a.Component),F=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeTab:"1"},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(g.a,null,"Popover Triggers"),i.a.createElement("div",{className:"views"},i.a.createElement(v.a,{tabs:!0},i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(N.a,{size:15}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(j.a,{size:15})))))),i.a.createElement(h.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"trigger")," for various trigger options.Trigger each popover to see information about the trigger."),i.a.createElement(P.a,{activeTab:this.state.activeTab},i.a.createElement(f.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popFocus"},"Focus"),i.a.createElement(x.a,{trigger:"focus",placement:"top",target:"popFocus"},i.a.createElement(k.a,null,"Focus Trigger"),i.a.createElement(B.a,null,"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."))),i.a.createElement("div",{className:"d-inline-block mr-1 mb-1"},i.a.createElement(y.a.Ripple,{color:"primary",outline:!0,id:"popClick"},"Click"),i.a.createElement(x.a,{trigger:"click",placement:"top",target:"popClick"},i.a.createElement(k.a,null,"Click Trigger"),i.a.createElement(B.a,null,"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."))),i.a.createElement("div",{className:"d-inline-block mb-1"},i.a.createElement(y.a.Ripple,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy"},"Legacy"),i.a.createElement(x.a,{placement:"top",target:"popLegacy"},i.a.createElement(k.a,null,"Legacy Trigger"),i.a.createElement(B.a,null,'Legacy is a reactstrap special trigger value (outside of bootstrap\'s spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.')))),i.a.createElement(f.a,{className:"component-code",tabId:"2"},R)))))}}]),a}(i.a.Component),z=a(1182),I=a.n(z),D=(a(1183),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){I.a.highlightAll()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{breadCrumbTitle:"Popovers",breadCrumbParent:"Components",breadCrumbActive:"Popovers"}),i.a.createElement(p.a,null,i.a.createElement(s.a,{md:"6",sm:"12"},i.a.createElement(H,null)),i.a.createElement(s.a,{md:"6",sm:"12"},i.a.createElement(q,null))),i.a.createElement(p.a,null,i.a.createElement(s.a,{sm:"12"},i.a.createElement(M,null)),i.a.createElement(s.a,{sm:"12"},i.a.createElement(F,null))))}}]),a}(i.a.Component));t.default=D},944:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),l=a(3),c=a.n(l),i=a(135),p=function(e){var t=c()("popover","show",e.popperClassName),a=c()("popover-inner",e.innerClassName);return r.a.createElement(i.a,Object(n.a)({},e,{popperClassName:t,innerClassName:a}))};p.propTypes=i.b,p.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},t.a=p}}]);
//# sourceMappingURL=44.70dfa874.chunk.js.map