window.__require=function t(e,o,r){function n(c,u){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!u&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var l=o[c]={exports:{}};e[c][0].call(l.exports,function(t){return n(e[c][1][t]||t)},l,l.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({videoTest:[function(t,e,o){"use strict";cc._RF.push(e,"db1d5zykXJJ0Zbx/bm2KPyf","videoTest");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,u=i.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.symbolName=null,e._clips=[],e._curIdx=0,e}return r(e,t),e.prototype.onLoad=function(){var t=this;cc.resources.loadDir("video",cc.Asset,null,function(e,o){t._clips=o})},e.prototype.start=function(){this._vido=this.node.getComponentInChildren(cc.VideoPlayer)},e.prototype.onPlay=function(){this.symbolName.string="Symbol: "+this._curIdx.toString(),this._vido.clip=this._clips[this._curIdx],this._vido.play(),this._curIdx++,this._curIdx==this._clips.length&&(this._curIdx=0)},e.prototype.onVideoPlayerEvent=function(t,e){e===cc.VideoPlayer.EventType.COMPLETED&&t.play()},n([u(cc.Label)],e.prototype,"symbolName",void 0),e=n([c],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["videoTest"]);