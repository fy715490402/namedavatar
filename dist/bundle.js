!function(){return function t(e,r,n){function i(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var c=r[a]={exports:{}};e[a][0].call(c.exports,function(t){var r=e[a][1][t];return i(r||t)},c,c.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}}()({1:[function(t,e,r){"use strict";function n(t,e){this.name=t,this.options=e}n.prototype.createSVG=function(){var t=document.createElement("svg");if("width"in this.options){var e=options.width,r="height"in this.options?this.options.height:e;t.setAttributes("width",e),t.setAttributes("height",r)}var n=document.createElement("rect");n.setAttribute("fill",this.getBackgroundColor()),n.setAttribute("x",0),n.setAttribute("y",0),n.setAttribute("width","100%"),n.setAttribute("height","100%"),t.appendChild(n);var i=document.createElement("text");return i.setAttribute("fill",this.getTextColor()),i.setAttribute("x","50%"),i.setAttribute("y","50%"),i.setAttribute("text-anchor","middle"),i.setAttribute("alignment-baseline","central"),i.setAttribute("font-size",12),i.textContent=this.name,t.appendChild(i),t},n.prototype.getTextColor=function(){return"#FFF"},n.prototype.getBackgroundColor=function(){if("backgroundColor"in this.options)return this.options.backgroundColor;var t=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#607D8B"];return t[this.name?this.name.charCodeAt(0)%t.length:Math.floor(Math.random()*t.length)]},e.exports=n},{}],2:[function(t,e,r){var n=t("./image"),i=t("./name");NamedAvatar.prototype.setImgs=function(t){for(var e=0;e<t.length;e++)this.setImg(t[e],t[e].getAttribute("data-name"))},NamedAvatar.prototype.setImg=function(t,e){var r=new i(e).getName(),o="data:image/svg+xml;utf8,"+new n(r).createSVG().outerHTML;t.setAttribute("src",o)},e.exports=NamedAvatar},{"./image":1,"./name":3}],3:[function(t,e,r){function n(t,e){this.fullName=t,this.options=e}n.prototype.getName=function(){var t=this.fullName;if(t){if(t.charCodeAt()>256)return t.slice(1);var e=t.split(" ");return 1===e.length?e[0].length>6?e[0].charAt(0).toUpperCase():e[0]:e[e.length-1]}},e.exports=n},{}]},{},[2]);