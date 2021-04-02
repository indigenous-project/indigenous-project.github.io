(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[23],{694:function(e,t,n){"use strict";n.r(t);var r=n(619),c=n.n(r),s=n(620),i=n(156),o=n(1),a=n(621),l=n(622),u="Bearer "+localStorage.getItem("HDI-token"),d=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(l.a)("RepliesEdit")+"/"+t,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:u,Accept:"application/json"},body:JSON.stringify(n)}).then((function(e){return e})).catch((function(e){console.log(e),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=n(628),h=n.n(p),b=n(623),j=n(1133),f=n(29),x=function(e){return Object(f.jsx)(b.a,{content:j.a[e]})};t.default=function(e){var t=e.discussion,n=e.setToastMessage,r=e.loadDiscussionsList,l=Object(o.useState)({show:!1}),u=Object(i.a)(l,2),p=u[0],b=u[1],j=Object(o.useState)([]),y=Object(i.a)(j,2),O=y[0],g=y[1],w=Object(o.useState)(""),m=Object(i.a)(w,2),v=m[0],k=m[1],C=Object(o.useState)(!0),P=Object(i.a)(C,2),A=P[0],N=P[1],R=function(){var e=Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),n=t.replies,T(v,n),N(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e,n){e=e.toLowerCase();var r=(n||t.replies).filter((function(t){return t.text.toLowerCase().includes(e)||t.owner.firstName.toLowerCase().includes(e)||t.owner.lastName.toLowerCase().includes(e)||t.createdAt.toString().includes(e)})).sort((function(e,t){return e.createdAt-t.createdAt})).reverse();g(r),k(e)},L=function(){var e=Object(s.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s,{isDeleted:"true"},n);case 2:if(!(i=e.sent).ok){e.next=11;break}return n([{title:"Congrats!",description:"The Reply with id: "+s+" has been successfuly deleted",type:"success"}]),t.replies=t.replies.filter((function(e){return e._id!==s})),e.next=8,R();case 8:r(),e.next=12;break;case 11:n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 12:console.log(i),b({show:!1,type:"delete"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(s){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s,{isPublic:!p.isPublic+""},n);case 2:if(!(i=e.sent).ok){e.next=12;break}return n([{title:"Congrats!",description:"The publicity status of Reply with id: "+s+" has been successfuly changed",type:"success"}]),t.replies.find((function(e){return e._id===s})).isPublic=!p.isPublic,e.next=9,R();case 9:r(),e.next=13;break;case 12:n([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 13:console.log(i),b({show:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){R()}),[]);var E=[{name:Object(f.jsx)("strong",{children:"Text"}),selector:"text",sortable:!0,left:!0},{name:Object(f.jsx)("strong",{children:"Category"}),selector:"category",sortable:!0,left:!0,cell:function(e){return e.category?e.category.name:"Not specified"}},{name:Object(f.jsx)("strong",{children:"Replied at"}),selector:"date",sortable:!0,center:!0,cell:function(e){return e.createdAt.split("T")[0]}},{name:Object(f.jsx)("strong",{children:"Author"}),selector:"owner",sortable:!0,center:!0,cell:function(e){return(e.owner.firstName?e.owner.firstName:"")+" "+(e.owner.lastName?e.owner.lastName:"")}},{name:Object(f.jsx)("strong",{children:"Is Visible"}),selector:"isPublic",sortable:!0,center:!0,cell:function(e){return Object(f.jsx)(a.b,{color:e.isPublic?"success":"danger",className:"float-right",children:e.isPublic?"Yes":"No"})}},{name:"",selector:"_id",cell:function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(a.L,{className:"card-header-action",onClick:function(){return b({id:e._id,text:e.text,isPublic:e.isPublic,show:!p.show,type:"isPublic"})},children:x("cilCloudUpload")}),Object(f.jsx)(a.L,{className:"card-header-action",onClick:function(){return b({id:e._id,text:e.text,show:!p.show,type:"delete"})},children:x("cilTrash")})]})}}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(a.g,{children:Object(f.jsxs)(a.h,{children:[Object(f.jsx)(a.U,{children:Object(f.jsx)(a.l,{sm:"6"})}),Object(f.jsx)(a.U,{children:Object(f.jsxs)(a.l,{sm:"12",children:[Object(f.jsx)(a.E,{type:"text",id:"searchText",placeholder:"search by keyword ...",onInput:function(e){return T(e.target.value)}}),Object(f.jsx)(h.a,{title:"Replies List",columns:E,data:O,highlightOnHover:!0,pagination:!0,progressPending:A})]})})]})}),Object(f.jsxs)(a.O,{show:p.show,onClosed:function(){b({show:!1,type:p.type})},color:"delete"===p.type?"danger":"isPublic"===p.type?"warning":"info",size:"edit"===p.type||"detail"===p.type?"xl":"",children:[Object(f.jsx)(a.R,{closeButton:!0,children:Object(f.jsx)(a.S,{children:"delete"===p.type?"Delete Reply account":"edit"===p.type?"Edit Reply profile":"detail"===p.type?"Reply detail":"Change Publicity status"})}),p.show?Object(f.jsx)(a.P,{children:"delete"===p.type?Object(f.jsxs)("div",{children:["Are you sure you want to delete ",Object(f.jsx)("strong",{children:p.text}),"?"]}):"isPublic"===p.type?Object(f.jsxs)("div",{children:["Are you sure you want to change publicity status of ",Object(f.jsx)("strong",{children:p.text}),"?"]}):null}):null,"delete"===p.type||"isPublic"===p.type?Object(f.jsxs)(a.Q,{children:[Object(f.jsx)(a.f,{color:"delete"===p.type?"danger":"warning",onClick:function(){return"delete"===p.type?L(p.id):S(p.id)},children:"Yes"}),Object(f.jsx)(a.f,{color:"secondary",onClick:function(){return b({show:!1})},children:"Cancel"})]}):null]})]})}}}]);
//# sourceMappingURL=23.dd7ac14b.chunk.js.map