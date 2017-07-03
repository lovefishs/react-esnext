webpackJsonp([1],{172:function(e,t){},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(12),c=o(l),s=n(174),f=n(175),m=o(f),d=n(177),p=o(d),h=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n.handleCommentDelete=n.handleCommentDelete.bind(n),n.state={comments:[]},n}return a(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("comment.delete",this.handleCommentDelete),(0,s.fetch)("/api/comments").then(function(e){return e.json()}).then(function(t){0===t.error_code&&e.setState({comments:t.data})})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("comment.delete",this.handleCommentDelete)}},{key:"handleCommentDelete",value:function(e){var t=this,n=Number(e.detail);isNaN(n)||(0,s.fetch)("/api/comments/"+n,{method:"delete"}).then(function(e){return e.json()}).then(function(e){0===e.error_code&&t.setState({comments:t.state.comments.filter(function(e){return e.id!==n})})})}},{key:"handleSubmit",value:function(e){var t=this;(0,s.fetch)("/api/comments",{method:"post",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){0===e.error_code&&t.setState({comments:e.data})})}},{key:"render",value:function(){var e=this.state.comments;return c.default.createElement("div",null,c.default.createElement("h1",null,"Comments"),c.default.createElement(m.default,{onSubmit:this.handleSubmit}),c.default.createElement("hr",null),c.default.createElement(p.default,{comments:e}),c.default.createElement("hr",null))}}]),t}(l.Component);t.default=h},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.mode=t.mode||"cors",t.headers=Object.assign({},{Accept:"*/*","Content-Type":"application/json; charset=UTF-8"},t.headers),"multipart/form-data-import"===t.headers["Content-Type"]&&delete t.headers["Content-Type"],window.fetch(e,t)}},175:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(12),c=o(l),s=n(29),f=o(s),m=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n.state={submitting:!1},n}return a(t,e),i(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var n=document.querySelector("#author").value.trim(),o=document.querySelector("#comment").value.trim();this.props.onSubmit({author:n,comment:o}),this.setState({submitting:!0}),setTimeout(function(){t.setState({submitting:!1})},3e3)}},{key:"render",value:function(){var e=this.state.submitting;return c.default.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},c.default.createElement("label",{className:"sr-only",htmlFor:"author"},"Author"),c.default.createElement("input",{type:"text",className:"form-control",id:"author",name:"author",placeholder:"Author"}),c.default.createElement("label",{className:"sr-only",htmlFor:"comment"},"Comment"),c.default.createElement("div",{className:"input-group"},c.default.createElement("div",{className:"input-group-addon"},"@"),c.default.createElement("input",{type:"text",className:"form-control",id:"comment",name:"",placeholder:"Comment"})),c.default.createElement("button",{type:"submit",className:"btn btn-primary",disabled:e},"Submit"))}}]),t}(l.Component);m.propTypes={onSubmit:f.default.func.isRequired},m.defaultProps={onSubmit:function(){}},t.default=m},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(12),s=o(c),f=n(29),m=o(f),d=n(178),p=o(d),h=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleGroupItemMouse=n.handleGroupItemMouse.bind(n),n.state={},n}return a(t,e),l(t,[{key:"handleGroupItemMouse",value:function(e){e.stopPropagation();var t="mouseenter"===e.type?"add":"remove";e.currentTarget.classList[t]("active")}},{key:"render",value:function(){var e=this.props.comments;return s.default.createElement("ul",{className:"list-group"},e.map(function(e){return s.default.createElement(p.default,i({key:e.id},e))}))}}]),t}(c.Component);h.propTypes={comments:m.default.arrayOf(m.default.shape({id:m.default.number.isRequired,author:m.default.string.isRequired,comment:m.default.string.isRequired})).isRequired},h.defaultProps={comments:[]},t.default=h},178:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),u=o(r),a=n(29),i=o(a),l=function(e){e.stopPropagation();var t="mouseenter"===e.type?"add":"remove";e.currentTarget.classList[t]("active")},c=function(e){document.dispatchEvent(new CustomEvent("comment.delete",{detail:e.currentTarget.dataset.id}))},s=function(e){var t=e.id,n=e.author,o=e.comment;return u.default.createElement("li",{className:"list-group-item",onMouseEnter:l,onMouseLeave:l},u.default.createElement("span",null,n,": ",o),u.default.createElement("button",{type:"button",className:"btn btn-danger btn-sm",style:{position:"absolute",top:"50%",right:"10px",transform:"translate3d(0, -50%, 0)"},"data-id":t,onClick:c},"x"))};s.propTypes={id:i.default.number.isRequired,author:i.default.string.isRequired,comment:i.default.string.isRequired},t.default=s},80:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(12),u=o(r),a=n(53),i=o(a);n(172);var l=n(173),c=o(l);i.default.render(u.default.createElement(c.default,null),document.getElementById("root")),function(){document.addEventListener("DOMContentLoaded",function(e){e.preventDefault(),console.log("DOMContentLoaded")})}()}},[80]);