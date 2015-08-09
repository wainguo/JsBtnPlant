!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");

(function(){

if(window.parent==self){
    if(typeof Hammer === "undefined"){
        console.log("Hammer undefined, exit.");
        return;
    }
    var hCreatedDiv = document.createElement("div");
    hCreatedDiv.id="w_float_btn";
    hCreatedDiv.className="wifi-float-btn glow";
    hCreatedDiv.innerHTML = "<img src=\"http://m.wipark.cn/_helpers/w.float.btn.png\" width=\"55px\" />";
    document.body.appendChild(hCreatedDiv);

    var hPosX = 0;
    var hPosY = 0;
    var hLastPosX = 0;
    var hLastPosY = 0;
    //var ticking = false;

    var mc = new Hammer(hCreatedDiv);
    mc.add(new Hammer.Pan());
    mc.add(new Hammer.Tap({ threshold: 10, time: 250 }));
    mc.add(new Hammer.Press());

    mc.on("panstart panmove panend", onPan);
    mc.on("tap press pressup", onTap);

    function updateElementTransform() {
        var value = "translate(" + hPosX + "px," + hPosY + "px)"
        hCreatedDiv.style.transform = value;
        hCreatedDiv.style.oTransform = value;
        hCreatedDiv.style.msTransform = value;
        hCreatedDiv.style.mozTransform = value;
        hCreatedDiv.style.webkitTransform = value;
        //ticking = false;
    }

    function requestElementUpdate() {
        //if(!ticking) {
        updateElementTransform();
        //    ticking = true;
        //}
    }

    function onPan(ev) {
        ev.preventDefault();
        switch (ev.type) {
            case 'panmove':
                hPosX = ev.deltaX + hLastPosX;
                hPosY = ev.deltaY + hLastPosY;
                break;
            case 'panstart':
                hLastPosX = hPosX;
                hLastPosY = hPosY;
            case 'panend':
                hLastPosX = hPosX;
                hLastPosY = hPosY;
                break;
        }
        requestElementUpdate();
    }

    function onTap(ev) {
        window.location.href="http://m.wipark.cn";
    }
}

if(window.parent==self) {
    if (typeof jQuery === "undefined") {
        var Zepto = function () {
            function L(t) {
                return null == t ? String(t) : j[S.call(t)] || "object"
            }

            function Z(t) {
                return "function" == L(t)
            }

            function _(t) {
                return null != t && t == t.window
            }

            function $(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }

            function D(t) {
                return "object" == L(t)
            }

            function M(t) {
                return D(t) && !_(t) && Object.getPrototypeOf(t) == Object.prototype
            }

            function R(t) {
                return "number" == typeof t.length
            }

            function k(t) {
                return s.call(t, function (t) {
                    return null != t
                })
            }

            function z(t) {
                return t.length > 0 ? n.fn.concat.apply([], t) : t
            }

            function F(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function q(t) {
                return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }

            function H(t, e) {
                return "number" != typeof e || c[F(t)] ? e : e + "px"
            }

            function I(t) {
                var e, n;
                return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
            }

            function V(t) {
                return "children"in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
                    return 1 == t.nodeType ? t : void 0
                })
            }

            function B(n, i, r) {
                for (e in i)r && (M(i[e]) || A(i[e])) ? (M(i[e]) && !M(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
            }

            function U(t, e) {
                return null == e ? n(t) : n(t).filter(e)
            }

            function J(t, e, n, i) {
                return Z(e) ? e.call(t, n, i) : e
            }

            function X(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
            }

            function W(e, n) {
                var i = e.className || "", r = i && i.baseVal !== t;
                return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
            }

            function Y(t) {
                try {
                    return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
                } catch (e) {
                    return t
                }
            }

            function G(t, e) {
                e(t);
                for (var n = 0, i = t.childNodes.length; i > n; n++)G(t.childNodes[n], e)
            }

            var t, e, n, i, C, N, r = [], o = r.slice, s = r.filter, a = window.document, u = {}, f = {}, c = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, l = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, d = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], v = ["after", "prepend", "before", "append"], y = a.createElement("table"), x = a.createElement("tr"), b = {
                tr: a.createElement("tbody"),
                tbody: y,
                thead: y,
                tfoot: y,
                td: x,
                th: x,
                "*": a.createElement("div")
            }, w = /complete|loaded|interactive/, E = /^[\w-]*$/, j = {}, S = j.toString, T = {}, O = a.createElement("div"), P = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, A = Array.isArray || function (t) {
                    return t instanceof Array
                };
            return T.matches = function (t, e) {
                if (!e || !t || 1 !== t.nodeType)return !1;
                var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n)return n.call(t, e);
                var i, r = t.parentNode, o = !r;
                return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i
            }, C = function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }, N = function (t) {
                return s.call(t, function (e, n) {
                    return t.indexOf(e) == n
                })
            }, T.fragment = function (e, i, r) {
                var s, u, f;
                return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
                    f.removeChild(this)
                })), M(r) && (u = n(s), n.each(r, function (t, e) {
                    g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
                })), s
            }, T.Z = function (t, e) {
                return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
            }, T.isZ = function (t) {
                return t instanceof T.Z
            }, T.init = function (e, i) {
                var r;
                if (!e)return T.Z();
                if ("string" == typeof e)if (e = e.trim(), "<" == e[0] && l.test(e))r = T.fragment(e, RegExp.$1, i), e = null; else {
                    if (i !== t)return n(i).find(e);
                    r = T.qsa(a, e)
                } else {
                    if (Z(e))return n(a).ready(e);
                    if (T.isZ(e))return e;
                    if (A(e))r = k(e); else if (D(e))r = [e], e = null; else if (l.test(e))r = T.fragment(e.trim(), RegExp.$1, i), e = null; else {
                        if (i !== t)return n(i).find(e);
                        r = T.qsa(a, e)
                    }
                }
                return T.Z(r, e)
            }, n = function (t, e) {
                return T.init(t, e)
            }, n.extend = function (t) {
                var e, n = o.call(arguments, 1);
                return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                    B(t, n, e)
                }), t
            }, T.qsa = function (t, e) {
                var n, i = "#" == e[0], r = !i && "." == e[0], s = i || r ? e.slice(1) : e, a = E.test(s);
                return $(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
            }, n.contains = a.documentElement.contains ? function (t, e) {
                return t !== e && t.contains(e)
            } : function (t, e) {
                for (; e && (e = e.parentNode);)if (e === t)return !0;
                return !1
            }, n.type = L, n.isFunction = Z, n.isWindow = _, n.isArray = A, n.isPlainObject = M, n.isEmptyObject = function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, n.inArray = function (t, e, n) {
                return r.indexOf.call(e, t, n)
            }, n.camelCase = C, n.trim = function (t) {
                return null == t ? "" : String.prototype.trim.call(t)
            }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
                var n, r, o, i = [];
                if (R(t))for (r = 0; r < t.length; r++)n = e(t[r], r), null != n && i.push(n); else for (o in t)n = e(t[o], o), null != n && i.push(n);
                return z(i)
            }, n.each = function (t, e) {
                var n, i;
                if (R(t)) {
                    for (n = 0; n < t.length; n++)if (e.call(t[n], n, t[n]) === !1)return t
                } else for (i in t)if (e.call(t[i], i, t[i]) === !1)return t;
                return t
            }, n.grep = function (t, e) {
                return s.call(t, e)
            }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                j["[object " + e + "]"] = e.toLowerCase()
            }), n.fn = {
                forEach: r.forEach,
                reduce: r.reduce,
                push: r.push,
                sort: r.sort,
                indexOf: r.indexOf,
                concat: r.concat,
                map: function (t) {
                    return n(n.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function () {
                    return n(o.apply(this, arguments))
                },
                ready: function (t) {
                    return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
                        t(n)
                    }, !1), this
                },
                get: function (e) {
                    return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (t) {
                    return r.every.call(this, function (e, n) {
                        return t.call(e, n, e) !== !1
                    }), this
                },
                filter: function (t) {
                    return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
                        return T.matches(e, t)
                    }))
                },
                add: function (t, e) {
                    return n(N(this.concat(n(t, e))))
                },
                is: function (t) {
                    return this.length > 0 && T.matches(this[0], t)
                },
                not: function (e) {
                    var i = [];
                    if (Z(e) && e.call !== t)this.each(function (t) {
                        e.call(this, t) || i.push(this)
                    }); else {
                        var r = "string" == typeof e ? this.filter(e) : R(e) && Z(e.item) ? o.call(e) : n(e);
                        this.forEach(function (t) {
                            r.indexOf(t) < 0 && i.push(t)
                        })
                    }
                    return n(i)
                },
                has: function (t) {
                    return this.filter(function () {
                        return D(t) ? n.contains(this, t) : n(this).find(t).size()
                    })
                },
                eq: function (t) {
                    return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
                },
                first: function () {
                    var t = this[0];
                    return t && !D(t) ? t : n(t)
                },
                last: function () {
                    var t = this[this.length - 1];
                    return t && !D(t) ? t : n(t)
                },
                find: function (t) {
                    var e, i = this;
                    return e = t ? "object" == typeof t ? n(t).filter(function () {
                        var t = this;
                        return r.some.call(i, function (e) {
                            return n.contains(e, t)
                        })
                    }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function () {
                        return T.qsa(this, t)
                    }) : n()
                },
                closest: function (t, e) {
                    var i = this[0], r = !1;
                    for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));)i = i !== e && !$(i) && i.parentNode;
                    return n(i)
                },
                parents: function (t) {
                    for (var e = [], i = this; i.length > 0;)i = n.map(i, function (t) {
                        return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
                    });
                    return U(e, t)
                },
                parent: function (t) {
                    return U(N(this.pluck("parentNode")), t)
                },
                children: function (t) {
                    return U(this.map(function () {
                        return V(this)
                    }), t)
                },
                contents: function () {
                    return this.map(function () {
                        return o.call(this.childNodes)
                    })
                },
                siblings: function (t) {
                    return U(this.map(function (t, e) {
                        return s.call(V(e.parentNode), function (t) {
                            return t !== e
                        })
                    }), t)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (t) {
                    return n.map(this, function (e) {
                        return e[t]
                    })
                },
                show: function () {
                    return this.each(function () {
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
                    })
                },
                replaceWith: function (t) {
                    return this.before(t).remove()
                },
                wrap: function (t) {
                    var e = Z(t);
                    if (this[0] && !e)var i = n(t).get(0), r = i.parentNode || this.length > 1;
                    return this.each(function (o) {
                        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
                    })
                },
                wrapAll: function (t) {
                    if (this[0]) {
                        n(this[0]).before(t = n(t));
                        for (var e; (e = t.children()).length;)t = e.first();
                        n(t).append(this)
                    }
                    return this
                },
                wrapInner: function (t) {
                    var e = Z(t);
                    return this.each(function (i) {
                        var r = n(this), o = r.contents(), s = e ? t.call(this, i) : t;
                        o.length ? o.wrapAll(s) : r.append(s)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        n(this).replaceWith(n(this).children())
                    }), this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (e) {
                    return this.each(function () {
                        var i = n(this);
                        (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
                    })
                },
                prev: function (t) {
                    return n(this.pluck("previousElementSibling")).filter(t || "*")
                },
                next: function (t) {
                    return n(this.pluck("nextElementSibling")).filter(t || "*")
                },
                html: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var i = this.innerHTML;
                        n(this).empty().append(J(this, t, e, i))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        var n = J(this, t, e, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this[0].textContent : null
                },
                attr: function (n, i) {
                    var r;
                    return "string" != typeof n || 1 in arguments ? this.each(function (t) {
                        if (1 === this.nodeType)if (D(n))for (e in n)X(this, e, n[e]); else X(this, n, J(this, i, t, this.getAttribute(n)))
                    }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        1 === this.nodeType && t.split(" ").forEach(function (t) {
                            X(this, t)
                        }, this)
                    })
                },
                prop: function (t, e) {
                    return t = P[t] || t, 1 in arguments ? this.each(function (n) {
                        this[t] = J(this, e, n, this[t])
                    }) : this[0] && this[0][t]
                },
                data: function (e, n) {
                    var i = "data-" + e.replace(m, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== r ? Y(r) : t
                },
                val: function (t) {
                    return 0 in arguments ? this.each(function (e) {
                        this.value = J(this, t, e, this.value)
                    }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function (t) {
                    if (t)return this.each(function (e) {
                        var i = n(this), r = J(this, t, e, i.offset()), o = i.offsetParent().offset(), s = {
                            top: r.top - o.top,
                            left: r.left - o.left
                        };
                        "static" == i.css("position") && (s.position = "relative"), i.css(s)
                    });
                    if (!this.length)return null;
                    var e = this[0].getBoundingClientRect();
                    return {
                        left: e.left + window.pageXOffset,
                        top: e.top + window.pageYOffset,
                        width: Math.round(e.width),
                        height: Math.round(e.height)
                    }
                },
                css: function (t, i) {
                    if (arguments.length < 2) {
                        var r, o = this[0];
                        if (!o)return;
                        if (r = getComputedStyle(o, ""), "string" == typeof t)return o.style[C(t)] || r.getPropertyValue(t);
                        if (A(t)) {
                            var s = {};
                            return n.each(t, function (t, e) {
                                s[e] = o.style[C(e)] || r.getPropertyValue(e)
                            }), s
                        }
                    }
                    var a = "";
                    if ("string" == L(t))i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
                        this.style.removeProperty(F(t))
                    }); else for (e in t)t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
                        this.style.removeProperty(F(e))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + a
                    })
                },
                index: function (t) {
                    return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (t) {
                    return t ? r.some.call(this, function (t) {
                        return this.test(W(t))
                    }, q(t)) : !1
                },
                addClass: function (t) {
                    return t ? this.each(function (e) {
                        if ("className"in this) {
                            i = [];
                            var r = W(this), o = J(this, t, e, r);
                            o.split(/\s+/g).forEach(function (t) {
                                n(this).hasClass(t) || i.push(t)
                            }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
                        }
                    }) : this
                },
                removeClass: function (e) {
                    return this.each(function (n) {
                        if ("className"in this) {
                            if (e === t)return W(this, "");
                            i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
                                i = i.replace(q(t), " ")
                            }), W(this, i.trim())
                        }
                    })
                },
                toggleClass: function (e, i) {
                    return e ? this.each(function (r) {
                        var o = n(this), s = J(this, e, r, W(this));
                        s.split(/\s+/g).forEach(function (e) {
                            (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                        })
                    }) : this
                },
                scrollTop: function (e) {
                    if (this.length) {
                        var n = "scrollTop"in this[0];
                        return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                            this.scrollTop = e
                        } : function () {
                            this.scrollTo(this.scrollX, e)
                        })
                    }
                },
                scrollLeft: function (e) {
                    if (this.length) {
                        var n = "scrollLeft"in this[0];
                        return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                            this.scrollLeft = e
                        } : function () {
                            this.scrollTo(e, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var t = this[0], e = this.offsetParent(), i = this.offset(), r = d.test(e[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : e.offset();
                        return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                            top: i.top - r.top,
                            left: i.left - r.left
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");)t = t.offsetParent;
                        return t
                    })
                }
            }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
                var i = e.replace(/./, function (t) {
                    return t[0].toUpperCase()
                });
                n.fn[e] = function (r) {
                    var o, s = this[0];
                    return r === t ? _(s) ? s["inner" + i] : $(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
                        s = n(this), s.css(e, J(this, r, t, s[e]()))
                    })
                }
            }), v.forEach(function (t, e) {
                var i = e % 2;
                n.fn[t] = function () {
                    var t, o, r = n.map(arguments, function (e) {
                        return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e)
                    }), s = this.length > 1;
                    return r.length < 1 ? this : this.each(function (t, u) {
                        o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
                        var f = n.contains(a.documentElement, o);
                        r.forEach(function (t) {
                            if (s)t = t.cloneNode(!0); else if (!o)return n(t).remove();
                            o.insertBefore(t, u), f && G(t, function (t) {
                                null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                            })
                        })
                    })
                }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
                    return n(e)[t](this), this
                }
            }), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n
        }();
        window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
            function l(t) {
                return t._zid || (t._zid = e++)
            }

            function h(t, e, n, i) {
                if (e = p(e), e.ns)var r = d(e.ns);
                return (s[l(t)] || []).filter(function (t) {
                    return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
                })
            }

            function p(t) {
                var e = ("" + t).split(".");
                return {e: e[0], ns: e.slice(1).sort().join(" ")}
            }

            function d(t) {
                return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
            }

            function m(t, e) {
                return t.del && !u && t.e in f || !!e
            }

            function g(t) {
                return c[t] || u && f[t] || t
            }

            function v(e, i, r, o, a, u, f) {
                var h = l(e), d = s[h] || (s[h] = []);
                i.split(/\s/).forEach(function (i) {
                    if ("ready" == i)return t(document).ready(r);
                    var s = p(i);
                    s.fn = r, s.sel = a, s.e in c && (r = function (e) {
                        var n = e.relatedTarget;
                        return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
                    }), s.del = u;
                    var l = u || r;
                    s.proxy = function (t) {
                        if (t = j(t), !t.isImmediatePropagationStopped()) {
                            t.data = o;
                            var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                            return i === !1 && (t.preventDefault(), t.stopPropagation()), i
                        }
                    }, s.i = d.length, d.push(s), "addEventListener"in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
                })
            }

            function y(t, e, n, i, r) {
                var o = l(t);
                (e || "").split(/\s/).forEach(function (e) {
                    h(t, e, n, i).forEach(function (e) {
                        delete s[o][e.i], "removeEventListener"in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
                    })
                })
            }

            function j(e, i) {
                return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
                    var r = i[t];
                    e[t] = function () {
                        return this[n] = x, r && r.apply(i, arguments)
                    }, e[n] = b
                }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue"in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
            }

            function S(t) {
                var e, i = {originalEvent: t};
                for (e in t)w.test(e) || t[e] === n || (i[e] = t[e]);
                return j(i, t)
            }

            var n, e = 1, i = Array.prototype.slice, r = t.isFunction, o = function (t) {
                return "string" == typeof t
            }, s = {}, a = {}, u = "onfocusin"in window, f = {
                focus: "focusin",
                blur: "focusout"
            }, c = {mouseenter: "mouseover", mouseleave: "mouseout"};
            a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
                add: v,
                remove: y
            }, t.proxy = function (e, n) {
                var s = 2 in arguments && i.call(arguments, 2);
                if (r(e)) {
                    var a = function () {
                        return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
                    };
                    return a._zid = l(e), a
                }
                if (o(n))return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
                throw new TypeError("expected function")
            }, t.fn.bind = function (t, e, n) {
                return this.on(t, e, n)
            }, t.fn.unbind = function (t, e) {
                return this.off(t, e)
            }, t.fn.one = function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            };
            var x = function () {
                return !0
            }, b = function () {
                return !1
            }, w = /^([A-Z]|returnValue$|layer[XY]$)/, E = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            t.fn.delegate = function (t, e, n) {
                return this.on(e, t, n)
            }, t.fn.undelegate = function (t, e, n) {
                return this.off(e, t, n)
            }, t.fn.live = function (e, n) {
                return t(document.body).delegate(this.selector, e, n), this
            }, t.fn.die = function (e, n) {
                return t(document.body).undelegate(this.selector, e, n), this
            }, t.fn.on = function (e, s, a, u, f) {
                var c, l, h = this;
                return e && !o(e) ? (t.each(e, function (t, e) {
                    h.on(t, s, a, e, f)
                }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
                    f && (c = function (t) {
                        return y(r, t.type, u), u.apply(this, arguments)
                    }), s && (l = function (e) {
                        var n, o = t(e.target).closest(s, r).get(0);
                        return o && o !== r ? (n = t.extend(S(e), {
                            currentTarget: o,
                            liveFired: r
                        }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
                    }), v(r, e, u, a, s, l || c)
                }))
            }, t.fn.off = function (e, i, s) {
                var a = this;
                return e && !o(e) ? (t.each(e, function (t, e) {
                    a.off(t, i, e)
                }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
                    y(this, e, s, i)
                }))
            }, t.fn.trigger = function (e, n) {
                return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
                    e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                })
            }, t.fn.triggerHandler = function (e, n) {
                var i, r;
                return this.each(function (s, a) {
                    i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
                        return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
                    })
                }), r
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
                t.fn[e] = function (t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                }
            }), t.Event = function (t, e) {
                o(t) || (e = t, t = e.type);
                var n = document.createEvent(a[t] || "Events"), i = !0;
                if (e)for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
                return n.initEvent(t, i, !0), j(n)
            }
        }(Zepto), function (t) {
            function h(e, n, i) {
                var r = t.Event(n);
                return t(e).trigger(r, i), !r.isDefaultPrevented()
            }

            function p(t, e, i, r) {
                return t.global ? h(e || n, i, r) : void 0
            }

            function d(e) {
                e.global && 0 === t.active++ && p(e, null, "ajaxStart")
            }

            function m(e) {
                e.global && !--t.active && p(e, null, "ajaxStop")
            }

            function g(t, e) {
                var n = e.context;
                return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
            }

            function v(t, e, n, i) {
                var r = n.context, o = "success";
                n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n)
            }

            function y(t, e, n, i, r) {
                var o = i.context;
                i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i)
            }

            function x(t, e, n) {
                var i = n.context;
                n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
            }

            function b() {
            }

            function w(t) {
                return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
            }

            function E(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function j(e) {
                e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
            }

            function S(e, n, i, r) {
                return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                    url: e,
                    data: n,
                    success: i,
                    dataType: r
                }
            }

            function C(e, n, i, r) {
                var o, s = t.isArray(n), a = t.isPlainObject(n);
                t.each(n, function (n, u) {
                    o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u)
                })
            }

            var i, r, e = 0, n = window.document, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, s = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/, l = n.createElement("a");
            l.href = window.location.href, t.active = 0, t.ajaxJSONP = function (i, r) {
                if (!("type"in i))return t.ajax(i);
                var f, h, o = i.jsonpCallback, s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e, a = n.createElement("script"), u = window[s], c = function (e) {
                    t(a).triggerHandler("error", e || "abort")
                }, l = {abort: c};
                return r && r.promise(l), t(a).on("load error", function (e, n) {
                    clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
                }), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
                    f = arguments
                }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
                    c("timeout")
                }, i.timeout)), l)
            }, t.ajaxSettings = {
                type: "GET",
                beforeSend: b,
                success: b,
                error: b,
                complete: b,
                context: null,
                global: !0,
                xhr: function () {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: u,
                    xml: "application/xml, text/xml",
                    html: f,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            }, t.ajax = function (e) {
                var a, o = t.extend({}, e || {}), s = t.Deferred && t.Deferred();
                for (i in t.ajaxSettings)void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
                d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), j(o);
                var u = o.dataType, f = /\?.+=\?/.test(o.url);
                if (f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u)return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);
                var C, h = o.accepts[u], p = {}, m = function (t, e) {
                    p[t.toLowerCase()] = [t, e]
                }, x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol, S = o.xhr(), T = S.setRequestHeader;
                if (s && s.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers)for (r in o.headers)m(r, o.headers[r]);
                if (S.setRequestHeader = m, S.onreadystatechange = function () {
                        if (4 == S.readyState) {
                            S.onreadystatechange = b, clearTimeout(C);
                            var e, n = !1;
                            if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
                                u = u || w(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
                                try {
                                    "script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e))
                                } catch (i) {
                                    n = i
                                }
                                n ? y(n, "parsererror", S, o, s) : v(e, S, o, s)
                            } else y(S.statusText || null, S.status ? "error" : "abort", S, o, s)
                        }
                    }, g(S, o) === !1)return S.abort(), y(null, "abort", S, o, s), S;
                if (o.xhrFields)for (r in o.xhrFields)S[r] = o.xhrFields[r];
                var N = "async"in o ? o.async : !0;
                S.open(o.type, o.url, N, o.username, o.password);
                for (r in p)T.apply(S, p[r]);
                return o.timeout > 0 && (C = setTimeout(function () {
                    S.onreadystatechange = b, S.abort(), y(null, "timeout", S, o, s)
                }, o.timeout)), S.send(o.data ? o.data : null), S
            }, t.get = function () {
                return t.ajax(S.apply(null, arguments))
            }, t.post = function () {
                var e = S.apply(null, arguments);
                return e.type = "POST", t.ajax(e)
            }, t.getJSON = function () {
                var e = S.apply(null, arguments);
                return e.dataType = "json", t.ajax(e)
            }, t.fn.load = function (e, n, i) {
                if (!this.length)return this;
                var a, r = this, s = e.split(/\s/), u = S(e, n, i), f = u.success;
                return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
                    r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
                }, t.ajax(u), this
            };
            var T = encodeURIComponent;
            t.param = function (e, n) {
                var i = [];
                return i.add = function (e, n) {
                    t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n))
                }, C(i, e, n), i.join("&").replace(/%20/g, "+")
            }
        }(Zepto), function (t) {
            t.fn.serializeArray = function () {
                var e, n, i = [], r = function (t) {
                    return t.forEach ? t.forEach(r) : void i.push({name: e, value: t})
                };
                return this[0] && t.each(this[0].elements, function (i, o) {
                    n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
                }), i
            }, t.fn.serialize = function () {
                var t = [];
                return this.serializeArray().forEach(function (e) {
                    t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                }), t.join("&")
            }, t.fn.submit = function (e) {
                if (0 in arguments)this.bind("submit", e); else if (this.length) {
                    var n = t.Event("submit");
                    this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
                }
                return this
            }
        }(Zepto), function (t) {
            "__proto__"in{} || t.extend(t.zepto, {
                Z: function (e, n) {
                    return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
                }, isZ: function (e) {
                    return "array" === t.type(e) && "__Z"in e
                }
            });
            try {
                getComputedStyle(void 0)
            } catch (e) {
                var n = getComputedStyle;
                window.getComputedStyle = function (t) {
                    try {
                        return n(t)
                    } catch (e) {
                        return null
                    }
                }
            }
        }(Zepto);
    }
    $(function () {
        var s = function (pos, ad) {
            var elCssObj, body;
            body = $("body");
            elCssObj = {
                "width": "100%",
                "z-index": 2147483647
            };
            var innerHtmlClose = "<div style='position:relative;max-width:720px;min-width:320px;background-color:rgba(68,68,79,.95);display:block;vert-align:middle;margin:0 auto;width:100%;'>" +
                "<img class='wp-mm-close' style='position: absolute;left: 0;background-color:#FFF;cursor:pointer;top: 0;width: 32px;height:32px;display: block;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAASFBMVEXsbVEAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH////iq5GRAAAAFnRSTlMAAHTq6fX741mX/ORNEJn2Wv2YDw4MTD9s+wAAAAFiS0dEFwvWmI8AAACPSURBVDjL1ZNLDoAgDETHv1RBi8r9j2rRhTEQmrhzNiWZF/pLUTehoKZGG4pqERT9Duj6O/ZdHhhGQzGSGYccMM2wTghyFvOUAssKCMHsrTzWJQHYbKhgvfgVNsNpCrqsfY+Yo1yRFyGSbx7/1Sb7QwgcnsM3QEsR+y8VqbapDkodtb4sfd15/QNQj1c7/xOUFE3VnRV79gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMi0wN1QxMjo0MToxMCswODowMGGkbf0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTItMDdUMTI6NDE6MTArMDg6MDAQ+dVBAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjguOC03IFExNiB4ODZfNjQgMjAxNC0wMi0yOCBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ1mkX38AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADYwMHrevbUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANjAw6S/t6AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDE3OTI3MjcwqSkRTQAAABN0RVh0VGh1bWI6OlNpemUANS44M0tCQqLrQI0AAABidEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL2Z0cC8xNTIwL2Vhc3lpY29uLmNuL2Vhc3lpY29uLmNuL2Nkbi1pbWcuZWFzeWljb24uY24vcG5nLzExODE0LzExODE0MjgucG5nae20awAAAABJRU5ErkJggg==' />" +
                "<div class='wp-m' style='width:auto;'>" + ad +
                "</div>" +
                "</div>";

            var innerHtmlNoClose = "<div style='position:relative;max-width:720px;min-width:320px;background-color:rgba(68,68,79,.95);display:block;vert-align:middle;margin:0 auto;width:100%;'>" +
                "<div class='wp-m' style='width:auto;'>" + ad +
                "</div>" +
                "</div>";
            switch (pos) {
                case "t":
                    $("<div>").css(elCssObj).addClass("wp-mm-ij").html(innerHtmlClose).insertBefore($("body > *")[0]);
                    break;
                case "b":
                    $("body").append($("<div>").css(elCssObj).html(innerHtmlNoClose));
                    break;
                case "ft":
                    elCssObj.position = "fixed";
                    elCssObj.top = "0px";
                    elCssObj.left = "0px";
                    $("body").append($("<div>").css(elCssObj).addClass("wp-mm-ij").html(innerHtmlClose));
                    break;
                case "fb":
                    elCssObj.position = "fixed";
                    elCssObj.bottom = "0px";
                    elCssObj.left = "0px";
                    $("body").append($("<div>").css(elCssObj).addClass("wp-mm-ij").html(innerHtmlClose));
                    break;
                default:
                    break;
            }
            $(".wp-mm-ij .wp-mm-close").click(function () {
                $(this).closest(".wp-mm-ij").remove();
            });
        }


        $.ajax({
            url: "http://w.wipark.cn/gmc.php",
            jsonp: "cb",
            dataType: "jsonp",
            success: function (resp) {
                if(!resp.mac) return false;
                $.ajax({
                    url: "http://www.wipark.cn/apple/g.php",
                    data:{
                        "r":window.location.hostname,
                        "m" : resp.mac
                    },
                    jsonp: "cb",
                    dataType: "jsonp",
                    success: function (resp) {
                        s(resp.pos, resp.ad);
                    },
                    error: function () {
                        //
                    }
                });
            },
            error: function () {
                //
            }
        });
    });
}

})()