(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2791:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o=n(5893);function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?s(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n(5323),f=n.n(l),h=n(7294);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(c,e);var t,n,u,i=p(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={messages:["Welcome. Everything you put here is completely private. Messages will fade as they go up the page and disappear after a few minutes, or you can refresh the page to clear them too. Let out your frustrations, and watch them slip away into the void."],prev_to:"welcome",message:""},t.handleMessageChange=t.handleMessageChange.bind(s(t)),t.handleSubmit=t.handleSubmit.bind(s(t)),t.handleClear=t.handleClear.bind(s(t)),t.messageInputBox=(0,h.createRef)(),t}return t=c,(n=[{key:"handleMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){try{t.messageInputBox.current.focus()}catch(o){}if(""!==e.message){var n=e.messages.slice();return"messages"!==e.prev_to&&(n=[]),n.push(e.message),{messages:n,prev_to:"messages",message:""}}}))}},{key:"handleClear",value:function(e){e.preventDefault(),this.setState({prev_to:"cleared",messages:["Poof: it's gone; hopefully you feel a little better after letting your frustrations out. If there's something you still need to vent about feel free to continue..."],message:""})}},{key:"render",value:function(){var e=this;return(0,o.jsxs)("div",{className:f().background,children:[(0,o.jsxs)("form",{onSubmit:this.handleSubmit,onReset:this.handleClear,children:[(0,o.jsx)("input",{ref:this.messageInputBox,onChange:this.handleMessageChange,value:this.state.message,className:f().thoughts,placeholder:"Type out your thoughts"}),(0,o.jsx)("button",{type:"submit",children:"Send it off"}),(0,o.jsx)("button",{type:"reset",children:"Clean the void"})]}),(0,o.jsxs)("div",{className:f().vents,children:[this.state.messages.map((function(t,n){return(0,o.jsx)("div",{className:f().message,children:t},"".concat(e.state.prev_to).concat(n))})),(0,o.jsx)("div",{className:f().after})]})]})}}])&&r(t.prototype,n),u&&r(t,u),c}(h.Component)},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2791)}])},5323:function(e){e.exports={background:"Home_background__-lAKF",vents:"Home_vents__2ue17",after:"Home_after__3lzA_",overlay:"Home_overlay__FF_wO",message:"Home_message__1RpEB","message-fade-in-out":"Home_message-fade-in-out__1HhGe",thoughts:"Home_thoughts__1hkq2"}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);