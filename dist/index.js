!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],t):e.AvatarEditor=t(e.PropTypes,e.React,e.ReactDOM)}(this,function(e,t,n){"use strict";function a(e,t){return new Promise(function(n,a){var o,i=new Image;i.onload=function(){return n(i)},i.onerror=a,!1==(null!==(o=e)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(i.crossOrigin=t),i.src=e})}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,o=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){o=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),c="undefined"!=typeof File,d={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},l=u?d.touch:d.desktop,g="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,p=function(e){function d(){var e,t,n;o(this,d);for(var a=arguments.length,i=Array(a),h=0;h<a;h++)i[h]=arguments[h];return t=n=s(this,(e=d.__proto__||Object.getPrototypeOf(d)).call.apply(e,[this].concat(i))),n.state={drag:!1,my:null,mx:null,image:{x:.5,y:.5}},n.handleImageReady=function(e){var t=n.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,n.setState({drag:!1,image:t},n.props.onImageReady),n.props.onLoadSuccess(t)},n.clearImage=function(){var e=n.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height)},n.handleMouseDown=function(e){(e=e||window.event).preventDefault(),n.setState({drag:!0,mx:null,my:null})},n.handleMouseUp=function(){n.state.drag&&(n.setState({drag:!1}),n.props.onMouseUp())},n.handleMouseMove=function(e){if(e=e||window.event,!1!==n.state.drag){var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,a=e.targetTouches?e.targetTouches[0].pageY:e.clientY,o={mx:t,my:a},i=n.props.rotate;if(i=(i%=360)<0?i+360:i,n.state.mx&&n.state.my){var s=n.state.mx-t,h=n.state.my-a,u=n.state.image.width*n.props.scale,c=n.state.image.height*n.props.scale,d=n.getCroppingRect(),l=d.x,g=d.y;l*=u,g*=c;var p=function(e){return e*(Math.PI/180)},m=Math.cos(p(i)),v=Math.sin(p(i)),f=g+-s*v+h*m,y={x:(l+s*m+h*v)/u+1/n.props.scale*n.getXScale()/2,y:f/c+1/n.props.scale*n.getYScale()/2};n.props.onPositionChange(y),o.image=r({},n.state.image,y)}n.setState(o),n.props.onMouseMove(e)}},n.setCanvas=function(e){n.canvas=e},s(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,t.Component),i(d,[{key:"componentDidMount",value:function(){var e=n.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=l.native;document.addEventListener(t.move,this.handleMouseMove,!1),document.addEventListener(t.up,this.handleMouseUp,!1),u&&(document.addEventListener(t.mouseMove,this.handleMouseMove,!1),document.addEventListener(t.mouseUp,this.handleMouseUp,!1))}}},{key:"componentWillReceiveProps",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage()}},{key:"componentDidUpdate",value:function(e,t){var a=n.findDOMNode(this.canvas),o=a.getContext("2d");o.clearRect(0,0,a.width,a.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),this.props.onImageChange(o)}},{key:"componentWillUnmount",value:function(){if(document){var e=l.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),u&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,n=e.height,a=e.rotate,o=e.border,i={},r=this.getBorders(o),s=h(r,2),u=s[0],c=s[1],d=t,l=n;return this.isVertical()?(i.width=l,i.height=d):(i.width=d,i.height=l),i.width+=2*u,i.height+=2*c,{canvas:i,rotate:a,width:t,height:n,border:o}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var n=document.createElement("canvas");this.isVertical()?(n.width=e.height,n.height=e.width):(n.width=e.width,n.height=e.height);var a=n.getContext("2d");return a.translate(n.width/2,n.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-n.width/2,-n.height/2),this.isVertical()&&a.translate((n.width-n.height)/2,(n.height-n.width)/2),a.drawImage(t.resource,-e.x,-e.y),n}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,n=e.height,a=document.createElement("canvas");return this.isVertical()?(a.width=n,a.height=t):(a.width=t,a.height=n),this.paintImage(a.getContext("2d"),this.state.image,0,1),a}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),n=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-n/2,width:t,height:n},o=0,i=1-a.width,s=0,h=1-a.height;return(t>1||n>1)&&(o=-a.width,i=1,s=-a.height,h=1),r({},a,{x:Math.max(o,Math.min(a.x,i)),y:Math.max(s,Math.min(a.y,h))})}},{key:"loadImage",value:function(e){var t;c&&e instanceof File?(t=e,new Promise(function(e,n){var o=new FileReader;o.onload=function(t){try{var o=a(t.target.result);e(o)}catch(t){n(t)}},o.readAsDataURL(t)})).then(this.handleImageReady):"string"==typeof e&&a(e,this.props.crossOrigin).then(this.handleImageReady)}},{key:"getInitialSize",value:function(e,t){var n=void 0,a=void 0,o=this.getDimensions();return o.height/o.width>t/e?a=e*((n=this.getDimensions().height)/t):n=t*((a=this.getDimensions().width)/e),{height:n,width:a}}},{key:"paintImage",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;if(t.resource){var o=this.calculatePosition(t,n);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(a,a),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,o.x,o.y,o.width,o.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var n=this.getBorders(t),a=h(n,2),o=a[0],i=a[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=i,d+=o):(c+=o,d+=i),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(g,g),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,n=this.getDimensions(),a=this.getBorders(n.border),o=h(a,2),i=o[0],r=o[1],s=n.canvas.height,u=n.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-i,s/2-r),e.beginPath(),function(e,t,n,a,o,i){if(0===i)e.rect(t,n,a,o);else{var r=a-i,s=o-i;e.translate(t,n),e.arc(i,i,i,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,i,i,1.5*Math.PI,2*Math.PI),e.lineTo(a,s),e.arc(r,s,i,2*Math.PI,.5*Math.PI),e.lineTo(i,o),e.arc(i,s,i,.5*Math.PI,Math.PI),e.translate(-t,-n)}}(e,i,r,u-2*i,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.getDimensions(),n={width:e.canvas.width,height:e.canvas.height,cursor:this.state.drag?"grabbing":"grab"},a={width:e.canvas.width*g,height:e.canvas.height*g,style:r({},n,this.props.style)};return a[l.react.down]=this.handleMouseDown,u&&(a[l.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",r({ref:this.setCanvas},a))}}]),d}();return p.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func},p.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){}},p});
