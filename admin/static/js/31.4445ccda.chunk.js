(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[31],{1147:function(e,t,c){"use strict";c.r(t);var n=c(58),s=c(619),r=c.n(s),i=c(620),a=c(156),l=c(1),o=c(621),d=c(646),j=c(628),u=c.n(j),b=c(623),h=c(1133),p=c(624),O=c(626),x=c(627),m=c(29),f=function(e){var t=e.post,c=e.setPost,s=e.setToastMessage,j=(e.toastMessages,e.loadPostsList),u=Object(l.useState)([]),b=Object(a.a)(u,2),h=b[0],f=b[1],g=Object(l.useState)(!1),y=Object(a.a)(g,2),w=y[0],v=y[1],k=Object(l.useState)(),P=Object(a.a)(k,2),C=P[0],N=P[1],A=function(e){if(!e)return"";for(var t=[],c=e.length-1;c>=0;c--)t.unshift(["&#",e[c].charCodeAt(),";"].join(""));return t.join("")},S=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))},T=function(){var e=Object(i.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),v(!0),n=function(){var e=Object(i.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===c){e.next=7;break}return n={title:t.title,description:A(S(t.description)),isPublic:t.isPublic.toString(),category:t.category},-2!==c&&(n.medias=[c]),e.next=5,Object(d.b)(t._id,n,s);case 5:e.sent.ok?(j(),s([{title:"Congrats!",description:"The information of post with id: "+t._id+" has been successfuly changed",type:"success"}])):s([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 7:v(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!C){e.next=8;break}return e.next=6,Object(x.b)(C,s,n);case 6:e.next=9;break;case 8:n(-2);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)();case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent.data,f(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){D()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.g,{children:Object(m.jsx)(o.h,{children:Object(m.jsx)(o.U,{children:Object(m.jsxs)(o.l,{sm:"12",children:[Object(m.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"ID: "+t._id}),Object(m.jsx)("div",{className:"small text-muted",children:(new Date).toDateString()})]})})})}),Object(m.jsx)(o.v,{action:"",method:"post",onSubmit:T,children:Object(m.jsx)(o.U,{children:Object(m.jsx)(o.l,{sm:"12",children:Object(m.jsxs)(o.g,{children:[Object(m.jsxs)(o.h,{children:[Object(m.jsxs)(o.w,{children:[Object(m.jsx)(o.K,{htmlFor:"name",children:"Post Title"}),Object(m.jsx)(o.E,{type:"text",id:"name",required:!0,placeholder:"Enter Name...",onInput:function(e){return c(Object(n.a)(Object(n.a)({},t),{},{title:e.target.value}))},value:t.title,autoComplete:"name"})]}),Object(m.jsxs)(o.w,{row:!0,children:[Object(m.jsx)(o.K,{col:!0,md:"2",htmlFor:"file-input",children:"Image/Video"}),Object(m.jsx)(o.l,{xs:"12",md:"9",className:"ml-n3 mt-1",children:Object(m.jsx)(o.F,{id:"file-input",name:"file-input",onChange:function(e){return N(e.target.files[0])}})})]}),Object(m.jsxs)(o.w,{children:[Object(m.jsx)(o.K,{htmlFor:"select",children:"Category"}),Object(m.jsx)(o.l,{xs:"12",md:"3",children:Object(m.jsx)(o.V,{custom:!0,name:"category",className:"ml-n3",id:"category",required:!0,onChange:function(e){c(Object(n.a)(Object(n.a)({},t),{},{category:e.target.value}))},value:t.category._id,children:h.filter((function(e){return"general"===e.type})).map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name},e._id)}))})})]}),Object(m.jsxs)(o.w,{row:!0,children:[Object(m.jsx)(o.l,{tag:"label",sm:"3",className:"col-form-label",children:"I want to publish this post:"}),Object(m.jsx)(o.l,{sm:"1",className:"ml-n5",children:Object(m.jsx)(o.gb,{onChange:function(e){return c(Object(n.a)(Object(n.a)({},t),{},{isPublic:e.target.checked}))},className:"ml-n4 mt-1",color:"info",checked:!!t.isPublic})})]}),Object(m.jsxs)(o.w,{children:[Object(m.jsx)(o.K,{htmlFor:"textarea-input",children:"Description"}),Object(m.jsx)(O.a,{apiKey:"1jrhxry4u21vyt133p3fetgz3s60eyigcj4zi629g6vczaia",initialValue:S(t.description),init:{height:300,menubar:!1,plugins:["advlist autolink lists link image charmap preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code","insertdatetime media nonbreaking table directionality","emoticons template paste textpattern imagetools codesample"],toolbar:"bold italic sizeselect fontselect fontsizeselect | hr alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | insertfile undo redo | forecolor backcolor emoticons | "},onEditorChange:function(e,s){c(Object(n.a)(Object(n.a)({},t),{},{description:e}))}})]})]}),Object(m.jsxs)(o.i,{className:"d-flex",children:[Object(m.jsx)(o.f,{type:"submit",size:"md",className:"btn btn-info",children:"Edit Post"})," ",Object(m.jsx)(o.L,{size:"sm",className:"btn btn-danger ml-2",children:"Cancel"}),w?Object(m.jsx)("div",{className:"w-25",children:Object(m.jsx)(o.eb,{className:"ml-2"})}):null]})]})})})})]})},g=function(e){return Object(m.jsx)(b.a,{content:h.a[e],className:"mr-3 ml-1"})},y=function(e){var t,c=e.post;return console.log("post: ",c),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.g,{children:Object(m.jsx)(o.h,{children:Object(m.jsx)(o.U,{children:Object(m.jsxs)(o.l,{sm:"12",children:[Object(m.jsxs)("h4",{id:"traffic",className:"card-title mb-0",children:["ID: ",c._id]}),Object(m.jsx)("div",{className:"small text-muted",children:(new Date).toDateString()})]})})})}),c?Object(m.jsxs)(o.U,{children:[Object(m.jsx)(o.l,{sm:"6",children:Object(m.jsxs)(o.M,{children:[Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Title: "}),c.title]}),Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Category: "}),c.category?c.category.name:"no category specified"]}),Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Author: "}),c.owner?c.owner.email:"no owner specified"]}),Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Is this post visible for users: "}),Object(m.jsx)(o.b,{color:c.isPublic?"success":"danger",className:"ml-2 p-2",children:c.isPublic?"Yes":"No"})]}),Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Posted At: "}),c.createdAt?c.createdAt.replace("T"," ").replace("Z",""):""]}),Object(m.jsxs)(o.N,{children:[Object(m.jsx)("strong",{children:"Last Update At: "}),c.updatedAt?c.updatedAt.replace("T"," ").replace("Z",""):""]})]})}),Object(m.jsxs)(o.l,{sm:"6",children:[Object(m.jsx)(o.M,{children:Object(m.jsxs)(o.N,{children:[c.likeCount,g("cilThumbUp"),c.shareCount,g("cilShare"),c.seenCount,g("cilCast")]})}),c.medias.length>0?Object(m.jsx)(o.D,{style:{maxHeight:"300px",maxWidth:"100%",marginTop:"10px"},src:c.medias[0].path}):null]})]}):null,Object(m.jsxs)(o.g,{className:"mt-4",children:[Object(m.jsx)(o.k,{children:"Description:"}),Object(m.jsx)(o.h,{children:Object(m.jsx)(o.U,{children:Object(m.jsx)(o.l,{sm:"12",children:Object(m.jsx)(O.a,{apiKey:"1jrhxry4u21vyt133p3fetgz3s60eyigcj4zi629g6vczaia",initialValue:(t=c.description,t.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))),init:{height:300,menubar:!1,plugins:["advlist autolink lists link image charmap preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code","insertdatetime media nonbreaking table directionality","emoticons template paste textpattern imagetools codesample"],toolbar:""}})})})})]})]})},w=function(e){return Object(m.jsx)(b.a,{content:h.a[e]})};t.default=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],j=Object(l.useState)({show:!1}),b=Object(a.a)(j,2),h=b[0],p=b[1],O=Object(l.useState)([]),x=Object(a.a)(O,2),g=x[0],v=x[1],k=Object(l.useState)(""),P=Object(a.a)(k,2),C=P[0],N=P[1],A=Object(l.useState)(!0),S=Object(a.a)(A,2),T=S[0],D=S[1],L=Object(l.useState)([]),z=Object(a.a)(L,2),E=z[0],M=z[1],U=function(){var e=Object(i.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,Object(d.c)();case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent.data,console.log(c),s(c),_(C,c),D(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(e,t){e=e.toLowerCase();var n=(t||c).filter((function(t){return t.title.toLowerCase().includes(e)||t.owner.email.toLowerCase().includes(e)||t.createdAt.toLowerCase().includes(e)})).sort((function(e,t){return e.createdAt-t.createdAt})).reverse();v(n),N(e)},I=function(){var e=Object(i.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(t,{isDeleted:"true"},M);case 2:if(!(c=e.sent).ok){e.next=9;break}return M([{title:"Congrats!",description:"The Post with id: "+t+" has been successfuly deleted",type:"success"}]),e.next=7,U();case 7:e.next=10;break;case 9:M([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 10:console.log(c),p({show:!1,type:"delete"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(t,{isPublic:!h.isPublic+""},M);case 2:if(!(c=e.sent).ok){e.next=9;break}return M([{title:"Congrats!",description:"The publicity status of Post with id: "+t+" has been successfuly changed",type:"success"}]),e.next=7,U();case 7:e.next=10;break;case 9:M([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]);case 10:console.log(c),p({show:!1});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){U()}),[]);var K=[{name:Object(m.jsx)("strong",{children:"Title"}),selector:"title",sortable:!0,left:!0},{name:Object(m.jsx)("strong",{children:"Posted Date"}),selector:"createdAt",sortable:!0,left:!0,cell:function(e){return e.createdAt.split("T")[0]}},{name:Object(m.jsx)("strong",{children:"Author"}),selector:"owner.email",sortable:!0,center:!0},{name:Object(m.jsx)("strong",{children:"Is Visible"}),selector:"isPublic",sortable:!0,center:!0,cell:function(e){return Object(m.jsx)(o.b,{color:e.isPublic?"success":"danger",className:"float-right",children:e.isPublic?"Yes":"No"})}},{name:"",selector:"_id",cell:function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(o.L,{className:"card-header-action",onClick:function(){return p(Object(n.a)(Object(n.a)({},e),{},{show:!h.show,type:"detail"}))},children:w("cilInfo")}),Object(m.jsx)(o.L,{className:"card-header-action",onClick:function(){return p(Object(n.a)(Object(n.a)({},e),{},{show:!h.show,type:"edit"}))},children:w("cilPencil")}),Object(m.jsx)(o.L,{className:"card-header-action",onClick:function(){return p({id:e._id,title:e.title,isPublic:e.isPublic,show:!h.show,type:"isPublic"})},children:w("cilCloudUpload")}),Object(m.jsx)(o.L,{className:"card-header-action",onClick:function(){return p({id:e._id,title:e.title,show:!h.show,type:"delete"})},children:w("cilTrash")})]})}}];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.g,{children:Object(m.jsxs)(o.h,{children:[Object(m.jsx)(o.U,{children:Object(m.jsx)(o.l,{sm:"6"})}),Object(m.jsx)(o.U,{children:Object(m.jsxs)(o.l,{sm:"12",children:[Object(m.jsx)(o.E,{type:"text",id:"searchText",placeholder:"search by keyword ...",onInput:function(e){return _(e.target.value)}}),Object(m.jsx)(u.a,{title:"Posts List",columns:K,data:g,highlightOnHover:!0,pagination:!0,progressPending:T})]})})]})}),Object(m.jsxs)(o.O,{show:h.show,onClosed:function(){p({show:!1,type:h.type}),M([])},color:"delete"===h.type?"danger":"isPublic"===h.type?"warning":"info",size:"edit"===h.type||"detail"===h.type?"xl":"",children:[Object(m.jsx)(o.R,{closeButton:!0,children:Object(m.jsx)(o.S,{children:"delete"===h.type?"Delete Post account":"edit"===h.type?"Edit Post profile":"detail"===h.type?"Post detail":"Change Publicity status"})}),h.show?Object(m.jsxs)(o.P,{children:["delete"===h.type?Object(m.jsxs)("div",{children:["Are you sure you want to delete ",Object(m.jsx)("strong",{children:h.title}),"?"]}):"isPublic"===h.type?Object(m.jsxs)("div",{children:["Are you sure you want to change publicity status of ",Object(m.jsx)("strong",{children:h.title}),"?"]}):null,"edit"===h.type?Object(m.jsx)(f,{loadPostsList:U,post:h,setPost:p,setToastMessage:M,toastMessages:E}):"detail"===h.type?Object(m.jsx)(y,{post:h}):null]}):null,"delete"===h.type||"isPublic"===h.type?Object(m.jsxs)(o.Q,{children:[Object(m.jsx)(o.f,{color:"delete"===h.type?"danger":"warning",onClick:function(){return"delete"===h.type?I(h.id):F(h.id)},children:"Yes"}),Object(m.jsx)(o.f,{color:"secondary",onClick:function(){return p({show:!1})},children:"Cancel"})]}):null]}),E.map((function(e){return console.log(e),Object(m.jsx)(o.lb,{position:"bottom-right",children:Object(m.jsxs)(o.ib,{show:!0,autohide:3e3,fade:!0,color:e.type,children:[Object(m.jsx)(o.kb,{closeButton:!0,children:e.title}),Object(m.jsx)(o.jb,{children:e.description})]},Math.floor(1e6*Math.random()))},"toaster"+Math.floor(1e6*Math.random()))}))]})}}}]);
//# sourceMappingURL=31.4445ccda.chunk.js.map