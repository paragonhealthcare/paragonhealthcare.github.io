(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[48],{1600:function(e,a,t){"use strict";t.r(a);var c=t(11),s=t(12),n=t(14),r=t(13),m=t(0),i=t.n(m),l=t(1083),o=t(1086),d=t(802),p=t(408),u=t(175),E=t(179),g=t(29),h=t(829),v=(t(856),t(35)),N=t.n(v);N.a.defaults.baseURL="https://paragonheathcare.herokuapp.com";var f=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(c.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={items:[],data:[]},e.handleItemsMove=function(a,t){if(console.log("aaaaaaas",t),t){var c=JSON.parse(localStorage.getItem("logInUserData")),s=c.wishlist.findIndex((function(e){return e===t.productId}));alert(s),s>=0&&c.wishlist.splice(s,1);var n={_id:c._id,wishlist:c.wishlist};N.a.post("/paragon/api//update/user",n).then((function(e){})),localStorage.setItem("logInUserData",JSON.stringify(c))}var r=e.state.items;r.push(a),e.setState({items:r})},e.componentWillMount=function(){var a=JSON.parse(localStorage.getItem("logInUserData")),t=a.wishlist?a.wishlist:[];console.log("body",t),N.a.post("paragon/api/products/get",{products:t}).then((function(a){e.setState({data:a.data})}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state.data.map((function(a,t){return i.a.createElement(l.a,{className:"ecommerce-card ".concat(e.state.items.includes(t)?"d-none":""),key:t},i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"item-img text-center"},i.a.createElement(g.b,{to:"/ecommerce/product-detail"},i.a.createElement("img",{className:"img-fluid",src:a.image?a.image:"https://i.pinimg.com/736x/da/1f/9e/da1f9e1050f1cc2cccc390a8c1b5aa40.jpg",alt:a.name}))),i.a.createElement(o.a,null,i.a.createElement("div",{className:"item-wrapper"},i.a.createElement("div",{className:"item-rating"},i.a.createElement(d.a,{color:"primary",className:"badge-md"},i.a.createElement("span",{className:"mr-50 align-middle"},a.stars),i.a.createElement(p.a,{size:14}))),i.a.createElement("div",{className:"product-price"},i.a.createElement("h6",{className:"item-price"},a.price))),i.a.createElement("div",{className:"item-name"},i.a.createElement(g.b,{to:"/ecommerce/product-detail"},i.a.createElement("span",null,a.name)),i.a.createElement("p",{className:"item-company"},"By ",i.a.createElement("span",{className:"company-name"},a.by))),i.a.createElement("div",{className:"item-desc"},i.a.createElement("p",{className:"item-description"},a.desc))),i.a.createElement("div",{className:"item-options text-center"},i.a.createElement("div",{className:"item-wrapper"},i.a.createElement("div",{className:"item-rating"},i.a.createElement(d.a,{color:"primary",className:"badge-md"},i.a.createElement("span",{className:"mr-50 align-middle"},a.stars),i.a.createElement(p.a,{size:14}))),i.a.createElement("div",{className:"product-price"},i.a.createElement("h6",{className:"item-price"},a.price))),i.a.createElement("div",{className:"wishlist",onClick:function(){return e.handleItemsMove(t,a)}},i.a.createElement(u.a,{size:15}),i.a.createElement("span",{className:"align-middle ml-50"},"Remove")),i.a.createElement("div",{className:"cart",onClick:function(){return e.handleItemsMove(t)}},i.a.createElement(E.a,{size:15}),i.a.createElement("span",{className:"align-middle ml-50"},"Move To Cart")))))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{breadCrumbTitle:"Wish List",breadCrumbParent:"eCommerce",breadCrumbActive:"Wishlist"}),i.a.createElement("div",{className:"ecommerce-application"},i.a.createElement("div",{className:"grid-view wishlist-items"},a.length>0?a:"No items in Wishlist")))}}]),t}(i.a.Component);a.default=f},856:function(e,a,t){}}]);
//# sourceMappingURL=48.ec7ceee9.chunk.js.map