(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[5],{624:function(n,e,t){"use strict";t.d(e,"d",(function(){return s})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return p}));var r=t(619),o=t.n(r),i=t(620),a=t(622),c="Bearer "+localStorage.getItem("HDI-token"),s=function(){var n=Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Object(a.a)("CategoriesList"),{method:"GET",mode:"cors",headers:{Authorization:c,Accept:"application/json"}}).catch((function(n){console.log(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=Object(i.a)(o.a.mark((function n(e,t,r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesEdit")+"/"+e,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(t)}).then((function(n){return n})).catch((function(n){console.log(n),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(o.a.mark((function n(e,t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesDelete")+"/"+e,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"}}).then((function(n){return n})).catch((function(n){console.log(n),t([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=Object(i.a)(o.a.mark((function n(e,t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("CategoriesAdd"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n})).catch((function(n){console.log(n),t([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},626:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var r=t(1),o=t(57),i=function(){return(i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},a={onActivate:o.func,onAddUndo:o.func,onBeforeAddUndo:o.func,onBeforeExecCommand:o.func,onBeforeGetContent:o.func,onBeforeRenderUI:o.func,onBeforeSetContent:o.func,onBeforePaste:o.func,onBlur:o.func,onChange:o.func,onClearUndos:o.func,onClick:o.func,onContextMenu:o.func,onCopy:o.func,onCut:o.func,onDblclick:o.func,onDeactivate:o.func,onDirty:o.func,onDrag:o.func,onDragDrop:o.func,onDragEnd:o.func,onDragGesture:o.func,onDragOver:o.func,onDrop:o.func,onExecCommand:o.func,onFocus:o.func,onFocusIn:o.func,onFocusOut:o.func,onGetContent:o.func,onHide:o.func,onInit:o.func,onKeyDown:o.func,onKeyPress:o.func,onKeyUp:o.func,onLoadContent:o.func,onMouseDown:o.func,onMouseEnter:o.func,onMouseLeave:o.func,onMouseMove:o.func,onMouseOut:o.func,onMouseOver:o.func,onMouseUp:o.func,onNodeChange:o.func,onObjectResizeStart:o.func,onObjectResized:o.func,onObjectSelected:o.func,onPaste:o.func,onPostProcess:o.func,onPostRender:o.func,onPreProcess:o.func,onProgressState:o.func,onRedo:o.func,onRemove:o.func,onReset:o.func,onSaveContent:o.func,onSelectionChange:o.func,onSetAttrib:o.func,onSetContent:o.func,onShow:o.func,onSubmit:o.func,onUndo:o.func,onVisualAid:o.func},c=i({apiKey:o.string,id:o.string,inline:o.bool,init:o.object,initialValue:o.string,onEditorChange:o.func,outputFormat:o.oneOf(["html","text"]),value:o.string,tagName:o.string,cloudChannel:o.string,plugins:o.oneOfType([o.string,o.array]),toolbar:o.oneOfType([o.string,o.array]),disabled:o.bool,textareaName:o.string,tinymceScriptSrc:o.string,scriptLoading:o.shape({async:o.bool,defer:o.bool,delay:o.number})},a),s=function(n){return"function"===typeof n},u=function(n){return n in a},p=function(n){return n.substr(2)},l=function(n,e,t,r,o){return function(n,e,t,r,o,i,a){var c=Object.keys(o).filter(u),s=Object.keys(i).filter(u),l=c.filter((function(n){return void 0===i[n]})),d=s.filter((function(n){return void 0===o[n]}));l.forEach((function(n){var e=p(n),r=a[e];t(e,r),delete a[e]})),d.forEach((function(t){var o=r(n,t),i=p(t);a[i]=o,e(i,o)}))}(o,n.on.bind(n),n.off.bind(n),(function(e,t){return function(r){var o;return null===(o=e(t))||void 0===o?void 0:o(r,n)}}),e,t,r)},d=0,f=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++d+String(e)},h=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},v=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},g=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},y=function(){var n=g();return{load:function(e,t,r,o,i,a){var c=function(){return function(n,e,t,r,o,i){var a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=n,a.src=t,a.async=r,a.defer=o,a.addEventListener("load",(function n(){a.removeEventListener("load",n),i()})),e.head&&e.head.appendChild(a)}(n.scriptId,e,t,r,o,(function(){n.listeners.forEach((function(n){return n()})),n.scriptLoaded=!0}))};n.scriptLoaded?a():(n.listeners.push(a),n.scriptLoading||(n.scriptLoading=!0,i>0?setTimeout(c,i):c()))},reinitialize:function(){n=g()}}}(),b=t(629),m=function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),C=function(){return(C=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},k=function(){var n,e,t;return(null===(t=null===(e=null===(n=Object(b.a)())||void 0===n?void 0:n.Env)||void 0===e?void 0:e.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},w=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput":"SelectionChange"},j=function(n){function e(e){var t,o,i,a=n.call(this,e)||this;return a.rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var n=a.editor,e=a.props.value;n&&e&&e!==a.currentContent&&n.undoManager.ignore((function(){if(n.setContent(e),a.valueCursor&&(!a.inline||n.hasFocus()))try{n.selection.moveToBookmark(a.valueCursor)}catch(t){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(n){var e;void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(a.valueCursor=null===(e=a.editor)||void 0===e?void 0:e.selection.getBookmark(3))},a.handleBeforeInputSpecial=function(n){"Enter"!==n.key&&"Backspace"!==n.key&&"Delete"!==n.key||a.handleBeforeInput(n)},a.handleEditorChange=function(n){var e=a.editor;if(e&&e.initialized){var t=e.getContent();if(void 0!==a.props.value&&a.props.value!==t&&(clearTimeout(a.rollbackTimer),a.rollbackTimer=window.setTimeout(a.rollbackChange,1)),t!==a.currentContent&&(a.currentContent=t,s(a.props.onEditorChange))){var r=a.props.outputFormat,o="html"===r?t:e.getContent({format:r});a.props.onEditorChange(o,e)}}},a.handleEditorChangeSpecial=function(n){"Backspace"!==n.key&&"Delete"!==n.key||a.handleEditorChange(n)},a.initialise=function(){var n=a.elementRef.current;if(n){var e=Object(b.a)();if(!e)throw new Error("tinymce should have been loaded into global scope");var t,r,o=C(C({},a.props.init),{selector:void 0,target:n,readonly:a.props.disabled,inline:a.inline,plugins:(t=a.props.init&&a.props.init.plugins,r=a.props.plugins,v(t).concat(v(r))),toolbar:a.props.toolbar||a.props.init&&a.props.init.toolbar,setup:function(e){a.editor=e,a.bindHandlers({}),a.inline&&!h(n)&&e.once("PostRender",(function(n){e.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&s(a.props.init.setup)&&a.props.init.setup(e)},init_instance_callback:function(n){var e,t,r=a.getInitialValue();a.currentContent=null!==(e=a.currentContent)&&void 0!==e?e:n.getContent(),a.currentContent!==r&&(a.currentContent=r,n.setContent(r),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var o=null!==(t=a.props.disabled)&&void 0!==t&&t;n.setMode(o?"readonly":"design"),a.props.init&&s(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(n)}});a.inline||(n.style.visibility=""),h(n)&&(n.value=a.getInitialValue()),e.init(o)}},a.id=a.props.id||f("tiny-react"),a.elementRef=r.createRef(),a.inline=null!==(i=null!==(t=a.props.inline)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.inline)&&void 0!==i&&i,a.boundHandlers={},a}return m(e,n),e.prototype.componentDidUpdate=function(n){var e,t,r=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(e=this.currentContent)&&void 0!==e?e:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact((function(){var n;if(!r.inline||o.hasFocus())try{n=o.selection.getBookmark(3)}catch(c){}var e=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var t=0,i=[n,e];t<i.length;t++){var a=i[t];if(a)try{o.selection.moveToBookmark(a),r.valueCursor=a;break}catch(c){}}}))}if(this.props.disabled!==n.disabled){var i=null!==(t=this.props.disabled)&&void 0!==t&&t;this.editor.setMode(i?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n,e,t,r,o,i;null!==Object(b.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&y.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(e=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async)&&void 0!==e&&e,null!==(r=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer)&&void 0!==r&&r,null!==(i=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==i?i:0,this.initialise)},e.prototype.componentWillUnmount=function(){var n=this,e=this.editor;e&&(e.off(k(),this.handleEditorChange),e.off(w(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){e.off(t,n.boundHandlers[t])})),this.boundHandlers={},e.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.renderInline=function(){var n=this.props.tagName,e=void 0===n?"div":n;return r.createElement(e,{ref:this.elementRef,id:this.id})},e.prototype.renderIframe=function(){return r.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},e.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var n=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+n+"/tinymce.min.js"},e.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},e.prototype.bindHandlers=function(n){var e=this;if(void 0!==this.editor){l(this.editor,n,this.props,this.boundHandlers,(function(n){return e.props[n]}));var t=function(n){return void 0!==n.onEditorChange||void 0!==n.value},r=t(n),o=t(this.props);!r&&o?(this.editor.on(k(),this.handleEditorChange),this.editor.on(w(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):r&&!o&&(this.editor.off(k(),this.handleEditorChange),this.editor.off(w(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=c,e.defaultProps={cloudChannel:"5"},e}(r.Component)},627:function(n,e,t){"use strict";t.d(e,"b",(function(){return d})),t.d(e,"a",(function(){return f}));var r=t(619),o=t.n(r),i=t(620),a=t(622),c=t(632),s="indigenous-images",u=new(t.n(c).a.S3)({accessKeyId:"AKIAWBK3UNFZVVF7OF4B",secretAccessKey:"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"}),p="Bearer "+localStorage.getItem("HDI-token"),l=function(){var n=Object(i.a)(o.a.mark((function n(e,t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("MediasAdd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:p,Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n})).catch((function(n){console.log(n),t([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=Object(i.a)(o.a.mark((function n(e,t,r){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a={Bucket:s,Key:Math.floor(1e10*Math.random()).toString(),Body:e,ContentType:"image/jpeg",ACL:"public-read-write"},u.upload(a,function(){var n=Object(i.a)(o.a.mark((function n(i,a){var c,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i&&t([{title:"Error!",description:"An error occured while processing the request: "+i,type:"danger"}]),console.log("File uploaded successfully.",a),n.next=4,l({type:"image",extension:"."+e.name.split(".")[1],path:a.Location},t);case 4:if(!(c=n.sent).ok){n.next=13;break}return n.next=8,c.json();case 8:return s=n.sent,n.next=11,r(s.data._id);case 11:n.next=16;break;case 13:return n.next=15,r(-1);case 15:t([{title:"Error!",description:"An error occured while processing the request: "+i,type:"danger"}]);case 16:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(i.a)(o.a.mark((function n(e,t,r){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=[],e.forEach((function(n){var e={Bucket:s,Key:Math.floor(1e10*Math.random()).toString(),Body:n.content,ContentType:"image/jpeg",ACL:"public-read-write"};a.push({type:n.type,promise:u.upload(e).promise()})})),Promise.all(a.map((function(n){return n.promise}))).then(function(){var n=Object(i.a)(o.a.mark((function n(i){var a,c,s,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=[],c=0;case 2:if(!(c<i.length)){n.next=23;break}if(console.log("File uploaded successfully.",i[c]),"icon"===e[c].type){n.next=19;break}return n.next=7,l({type:"image",extension:".jpg",path:i[c].Location},t);case 7:if(!(s=n.sent).ok){n.next=15;break}return n.next=11,s.json();case 11:u=n.sent,a.push(u.data._id),n.next=17;break;case 15:return t([{title:"Error!",description:"An error occured while processing the request",type:"danger"}]),n.abrupt("return");case 17:n.next=20;break;case 19:a.push(i[c].Location);case 20:c++,n.next=2;break;case 23:return n.next=25,r(a);case 25:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},629:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return o}));var r=function(){return"undefined"!==typeof window?window:n},o=function(){var n=r();return n&&n.tinymce?n.tinymce:null}}).call(this,t(83))},630:function(n,e){},646:function(n,e,t){"use strict";t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return p})),t.d(e,"a",(function(){return s}));var r=t(619),o=t.n(r),i=t(620),a=t(622),c="Bearer "+localStorage.getItem("HDI-token"),s=function(){var n=Object(i.a)(o.a.mark((function n(e,t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("PostsAdd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(e)}).then((function(n){return n})).catch((function(n){console.log(n),t([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Object(a.a)("PostsList"),{method:"GET",mode:"cors",headers:{Authorization:c,Accept:"application/json"}}).catch((function(n){console.log(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=Object(i.a)(o.a.mark((function n(e,t,r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Object(a.a)("PostsEdit")+"/"+e,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json",Authorization:c,Accept:"application/json"},body:JSON.stringify(t)}).then((function(n){return n})).catch((function(n){console.log(n),r([{title:"Error!",description:"An error occured while processing the request",type:"danger"}])})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5.82383299.chunk.js.map