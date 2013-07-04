
/*!
 * jQuery UI 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.7",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;

/*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);
;
/**
 * @file
 * Attaches the behaviors for the Overlay parent pages.
 */

(function ($) {

/**
 * Open the overlay, or load content into it, when an admin link is clicked.
 */
Drupal.behaviors.overlayParent = {
  attach: function (context, settings) {
    if (Drupal.overlay.isOpen) {
      Drupal.overlay.makeDocumentUntabbable(context);
    }

    if (this.processed) {
      return;
    }
    this.processed = true;

    $(window)
      // When the hash (URL fragment) changes, open the overlay if needed.
      .bind('hashchange.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOperateByURLFragment'))
      // Trigger the hashchange handler once, after the page is loaded, so that
      // permalinks open the overlay.
      .triggerHandler('hashchange.drupal-overlay');

    $(document)
      // Instead of binding a click event handler to every link we bind one to
      // the document and only handle events that bubble up. This allows other
      // scripts to bind their own handlers to links and also to prevent
      // overlay's handling.
      .bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOverrideLink'));
  }
};

/**
 * Overlay object for parent windows.
 *
 * Events
 * Overlay triggers a number of events that can be used by other scripts.
 * - drupalOverlayOpen: This event is triggered when the overlay is opened.
 * - drupalOverlayBeforeClose: This event is triggered when the overlay attempts
 *   to close. If an event handler returns false, the close will be prevented.
 * - drupalOverlayClose: This event is triggered when the overlay is closed.
 * - drupalOverlayBeforeLoad: This event is triggered right before a new URL
 *   is loaded into the overlay.
 * - drupalOverlayReady: This event is triggered when the DOM of the overlay
 *   child document is fully loaded.
 * - drupalOverlayLoad: This event is triggered when the overlay is finished
 *   loading.
 * - drupalOverlayResize: This event is triggered when the overlay is being
 *   resized to match the parent window.
 */
Drupal.overlay = Drupal.overlay || {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  isLoading: false
};

Drupal.overlay.prototype = {};

/**
 * Open the overlay.
 *
 * @param url
 *   The URL of the page to open in the overlay.
 *
 * @return
 *   TRUE if the overlay was opened, FALSE otherwise.
 */
Drupal.overlay.open = function (url) {
  // Just one overlay is allowed.
  if (this.isOpen || this.isOpening) {
    return this.load(url);
  }
  this.isOpening = true;
  // Store the original document title.
  this.originalTitle = document.title;

  // Create the dialog and related DOM elements.
  this.create();

  this.isOpening = false;
  this.isOpen = true;
  $(document.documentElement).addClass('overlay-open');
  this.makeDocumentUntabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayOpen');

  return this.load(url);
};

/**
 * Create the underlying markup and behaviors for the overlay.
 */
Drupal.overlay.create = function () {
  this.$container = $(Drupal.theme('overlayContainer'))
    .appendTo(document.body);

  // Overlay uses transparent iframes that cover the full parent window.
  // When the overlay is open the scrollbar of the parent window is hidden.
  // Because some browsers show a white iframe background for a short moment
  // while loading a page into an iframe, overlay uses two iframes. By loading
  // the page in a hidden (inactive) iframe the user doesn't see the white
  // background. When the page is loaded the active and inactive iframes
  // are switched.
  this.activeFrame = this.$iframeA = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.inactiveFrame = this.$iframeB = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.$iframeA.bind('load.drupal-overlay', { self: this.$iframeA[0], sibling: this.$iframeB }, $.proxy(this, 'loadChild'));
  this.$iframeB.bind('load.drupal-overlay', { self: this.$iframeB[0], sibling: this.$iframeA }, $.proxy(this, 'loadChild'));

  // Add a second class "drupal-overlay-open" to indicate these event handlers
  // should only be bound when the overlay is open.
  var eventClass = '.drupal-overlay.drupal-overlay-open';
  $(window)
    .bind('resize' + eventClass, $.proxy(this, 'eventhandlerOuterResize'));
  $(document)
    .bind('drupalOverlayLoad' + eventClass, $.proxy(this, 'eventhandlerOuterResize'))
    .bind('drupalOverlayReady' + eventClass +
          ' drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerSyncURLFragment'))
    .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRefreshPage'))
    .bind('drupalOverlayBeforeClose' + eventClass +
          ' drupalOverlayBeforeLoad' + eventClass +
          ' drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerDispatchEvent'));

  if ($('.overlay-displace-top, .overlay-displace-bottom').length) {
    $(document)
      .bind('drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerAlterDisplacedElements'))
      .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRestoreDisplacedElements'));
  }
};

/**
 * Load the given URL into the overlay iframe.
 *
 * Use this method to change the URL being loaded in the overlay if it is
 * already open.
 *
 * @return
 *   TRUE if URL is loaded into the overlay, FALSE otherwise.
 */
Drupal.overlay.load = function (url) {
  if (!this.isOpen) {
    return false;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayBeforeLoad');

  $(document.documentElement).addClass('overlay-loading');

  // The contentDocument property is not supported in IE until IE8.
  var iframeDocument = this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document;

  // location.replace doesn't create a history entry. location.href does.
  // In this case, we want location.replace, as we're creating the history
  // entry using URL fragments.
  iframeDocument.location.replace(url);

  return true;
};

/**
 * Close the overlay and remove markup related to it from the document.
 *
 * @return
 *   TRUE if the overlay was closed, FALSE otherwise.
 */
Drupal.overlay.close = function () {
  // Prevent double execution when close is requested more than once.
  if (!this.isOpen || this.isClosing) {
    return false;
  }

  // Allow other scripts to respond to this event.
  var event = $.Event('drupalOverlayBeforeClose');
  $(document).trigger(event);
  // If a handler returned false, the close will be prevented.
  if (event.isDefaultPrevented()) {
    return false;
  }

  this.isClosing = true;
  this.isOpen = false;
  $(document.documentElement).removeClass('overlay-open');
  // Restore the original document title.
  document.title = this.originalTitle;
  this.makeDocumentTabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayClose');

  // When the iframe is still loading don't destroy it immediately but after
  // the content is loaded (see Drupal.overlay.loadChild).
  if (!this.isLoading) {
    this.destroy();
    this.isClosing = false;
  }
  return true;
};

/**
 * Destroy the overlay.
 */
Drupal.overlay.destroy = function () {
  $([document, window]).unbind('.drupal-overlay-open');
  this.$container.remove();

  this.$container = null;
  this.$iframeA = null;
  this.$iframeB = null;

  this.iframeWindow = null;
};

/**
 * Redirect the overlay parent window to the given URL.
 *
 * @param url
 *   Can be an absolute URL or a relative link to the domain root.
 */
Drupal.overlay.redirect = function (url) {
  // Create a native Link object, so we can use its object methods.
  var link = $(url.link(url)).get(0);

  // If the link is already open, force the hashchange event to simulate reload.
  if (window.location.href == link.href) {
    $(window).triggerHandler('hashchange.drupal-overlay');
  }

  window.location.href = link.href;
  return true;
};

/**
 * Bind the child window.
 *
 * Note that this function is fired earlier than Drupal.overlay.loadChild.
 */
Drupal.overlay.bindChild = function (iframeWindow, isClosing) {
  this.iframeWindow = iframeWindow;

  // We are done if the child window is closing.
  if (isClosing || this.isClosing || !this.isOpen) {
    return;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayReady');
};

/**
 * Event handler: load event handler for the overlay iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: load
 *   - event.currentTarget: iframe
 */
Drupal.overlay.loadChild = function (event) {
  var iframe = event.data.self;
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var iframeWindow = iframeDocument.defaultView || iframeDocument.parentWindow;
  if (iframeWindow.location == 'about:blank') {
    return;
  }

  this.isLoading = false;
  $(document.documentElement).removeClass('overlay-loading');
  event.data.sibling.removeClass('overlay-active').attr({ 'tabindex': -1 });

  // Only continue when overlay is still open and not closing.
  if (this.isOpen && !this.isClosing) {
    // And child document is an actual overlayChild.
    if (iframeWindow.Drupal && iframeWindow.Drupal.overlayChild) {
      // Replace the document title with title of iframe.
      document.title = iframeWindow.document.title;

      this.activeFrame = $(iframe)
        .addClass('overlay-active')
        // Add a title attribute to the iframe for accessibility.
        .attr('title', Drupal.t('@title dialog', { '@title': iframeWindow.jQuery('#overlay-title').text() })).removeAttr('tabindex');
      this.inactiveFrame = event.data.sibling;

      // Load an empty document into the inactive iframe.
      (this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document).location.replace('about:blank');

      // Move the focus to just before the "skip to main content" link inside
      // the overlay.
      this.activeFrame.focus();
      var skipLink = iframeWindow.jQuery('a:first');
      Drupal.overlay.setFocusBefore(skipLink, iframeWindow.document);

      // Allow other scripts to respond to this event.
      $(document).trigger('drupalOverlayLoad');
    }
    else {
      window.location = iframeWindow.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }
  }
  else {
    this.destroy();
  }
};

/**
 * Creates a placeholder element to receive document focus.
 *
 * Setting the document focus to a link will make it visible, even if it's a
 * "skip to main content" link that should normally be visible only when the
 * user tabs to it. This function can be used to set the document focus to
 * just before such an invisible link.
 *
 * @param $element
 *   The jQuery element that should receive focus on the next tab press.
 * @param document
 *   The iframe window element to which the placeholder should be added. The
 *   placeholder element has to be created inside the same iframe as the element
 *   it precedes, to keep IE happy. (http://bugs.jquery.com/ticket/4059)
 */
Drupal.overlay.setFocusBefore = function ($element, document) {
  // Create an anchor inside the placeholder document.
  var placeholder = document.createElement('a');
  var $placeholder = $(placeholder).addClass('element-invisible').attr('href', '#');
  // Put the placeholder where it belongs, and set the document focus to it.
  $placeholder.insertBefore($element);
  $placeholder.focus();
  // Make the placeholder disappear as soon as it loses focus, so that it
  // doesn't appear in the tab order again.
  $placeholder.one('blur', function () {
    $(this).remove();
  });
};

/**
 * Check if the given link is in the administrative section of the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL represents an administrative link, FALSE otherwise.
 */
Drupal.overlay.isAdminLink = function (url) {
  if (Drupal.overlay.isExternalLink(url)) {
    return false;
  }

  var path = this.getPath(url);

  // Turn the list of administrative paths into a regular expression.
  if (!this.adminPathRegExp) {
    var prefix = '';
    if (Drupal.settings.overlay.pathPrefixes.length) {
      // Allow path prefixes used for language negatiation followed by slash,
      // and the empty string.
      prefix = '(' + Drupal.settings.overlay.pathPrefixes.join('/|') + '/|)';
    }
    var adminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.admin.replace(/\s+/g, '|') + ')$';
    var nonAdminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.non_admin.replace(/\s+/g, '|') + ')$';
    adminPaths = adminPaths.replace(/\*/g, '.*');
    nonAdminPaths = nonAdminPaths.replace(/\*/g, '.*');
    this.adminPathRegExp = new RegExp(adminPaths);
    this.nonAdminPathRegExp = new RegExp(nonAdminPaths);
  }

  return this.adminPathRegExp.exec(path) && !this.nonAdminPathRegExp.exec(path);
};

/**
 * Determine whether a link is external to the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL is external to the site, FALSE otherwise.
 */
Drupal.overlay.isExternalLink = function (url) {
  var re = RegExp('^((f|ht)tps?:)?//(?!' + window.location.host + ')');
  return re.test(url);
};

/**
 * Event handler: resizes overlay according to the size of the parent window.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerOuterResize = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  // IE6 uses position:absolute instead of position:fixed.
  if (typeof document.body.style.maxHeight != 'string') {
    this.activeFrame.height($(window).height());
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayResize');
};

/**
 * Event handler: resizes displaced elements so they won't overlap the scrollbar
 * of overlay's iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerAlterDisplacedElements = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  $(this.iframeWindow.document.body).css({
    marginTop: Drupal.overlay.getDisplacement('top'),
    marginBottom: Drupal.overlay.getDisplacement('bottom')
  })
  // IE7 isn't reflowing the document immediately.
  // @todo This might be fixed in a cleaner way.
  .addClass('overlay-trigger-reflow').removeClass('overlay-trigger-reflow');

  var documentHeight = this.iframeWindow.document.body.clientHeight;
  var documentWidth = this.iframeWindow.document.body.clientWidth;
  // IE6 doesn't support maxWidth, use width instead.
  var maxWidthName = (typeof document.body.style.maxWidth == 'string') ? 'maxWidth' : 'width';

  if (Drupal.overlay.leftSidedScrollbarOffset === undefined && $(document.documentElement).attr('dir') === 'rtl') {
    // We can't use element.clientLeft to detect whether scrollbars are placed
    // on the left side of the element when direction is set to "rtl" as most
    // browsers dont't support it correctly.
    // http://www.gtalbot.org/BugzillaSection/DocumentAllDHTMLproperties.html
    // There seems to be absolutely no way to detect whether the scrollbar
    // is on the left side in Opera; always expect scrollbar to be on the left.
    if ($.browser.opera) {
      Drupal.overlay.leftSidedScrollbarOffset = document.documentElement.clientWidth - this.iframeWindow.document.documentElement.clientWidth + this.iframeWindow.document.documentElement.clientLeft;
    }
    else if (this.iframeWindow.document.documentElement.clientLeft) {
      Drupal.overlay.leftSidedScrollbarOffset = this.iframeWindow.document.documentElement.clientLeft;
    }
    else {
      var el1 = $('<div style="direction: rtl; overflow: scroll;"></div>').appendTo(document.body);
      var el2 = $('<div></div>').appendTo(el1);
      Drupal.overlay.leftSidedScrollbarOffset = parseInt(el2[0].offsetLeft - el1[0].offsetLeft);
      el1.remove();
    }
  }

  // Consider any element that should be visible above the overlay (such as
  // a toolbar).
  $('.overlay-displace-top, .overlay-displace-bottom').each(function () {
    var data = $(this).data();
    var maxWidth = documentWidth;
    // In IE, Shadow filter makes element to overlap the scrollbar with 1px.
    if (this.filters && this.filters.length && this.filters.item('DXImageTransform.Microsoft.Shadow')) {
      maxWidth -= 1;
    }

    if (Drupal.overlay.leftSidedScrollbarOffset) {
      $(this).css('left', Drupal.overlay.leftSidedScrollbarOffset);
    }

    // Prevent displaced elements overlapping window's scrollbar.
    var currentMaxWidth = parseInt($(this).css(maxWidthName));
    if ((data.drupalOverlay && data.drupalOverlay.maxWidth) || isNaN(currentMaxWidth) || currentMaxWidth > maxWidth || currentMaxWidth <= 0) {
      $(this).css(maxWidthName, maxWidth);
      (data.drupalOverlay = data.drupalOverlay || {}).maxWidth = true;
    }

    // Use a more rigorous approach if the displaced element still overlaps
    // window's scrollbar; clip the element on the right.
    var offset = $(this).offset();
    var offsetRight = offset.left + $(this).outerWidth();
    if ((data.drupalOverlay && data.drupalOverlay.clip) || offsetRight > maxWidth) {
      if (Drupal.overlay.leftSidedScrollbarOffset) {
        $(this).css('clip', 'rect(auto, auto, ' + (documentHeight - offset.top) + 'px, ' + (Drupal.overlay.leftSidedScrollbarOffset + 2) + 'px)');
      }
      else {
        $(this).css('clip', 'rect(auto, ' + (maxWidth - offset.left) + 'px, ' + (documentHeight - offset.top) + 'px, auto)');
      }
      (data.drupalOverlay = data.drupalOverlay || {}).clip = true;
    }
  });
};

/**
 * Event handler: restores size of displaced elements as they were before
 * overlay was opened.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerRestoreDisplacedElements = function (event) {
  var $displacedElements = $('.overlay-displace-top, .overlay-displace-bottom');
  try {
    $displacedElements.css({ maxWidth: '', clip: '' });
  }
  // IE bug that doesn't allow unsetting style.clip (http://dev.jquery.com/ticket/6512).
  catch (err) {
    $displacedElements.attr('style', function (index, attr) {
      return attr.replace(/clip\s*:\s*rect\([^)]+\);?/i, '');
    });
  }
};

/**
 * Event handler: overrides href of administrative links to be opened in
 * the overlay.
 *
 * This click event handler should be bound to any document (for example the
 * overlay iframe) of which you want links to open in the overlay.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: click, mouseup
 *   - event.currentTarget: document
 *
 * @see Drupal.overlayChild.behaviors.addClickHandler
 */
Drupal.overlay.eventhandlerOverrideLink = function (event) {
  // In some browsers the click event isn't fired for right-clicks. Use the
  // mouseup event for right-clicks and the click event for everything else.
  if ((event.type == 'click' && event.button == 2) || (event.type == 'mouseup' && event.button != 2)) {
    return;
  }

  var $target = $(event.target);

  // Only continue if clicked target (or one of its parents) is a link.
  if (!$target.is('a')) {
    $target = $target.closest('a');
    if (!$target.length) {
      return;
    }
  }

  // Never open links in the overlay that contain the overlay-exclude class.
  if ($target.hasClass('overlay-exclude')) {
    return;
  }

  // Close the overlay when the link contains the overlay-close class.
  if ($target.hasClass('overlay-close')) {
    // Clearing the overlay URL fragment will close the overlay.
    $.bbq.removeState('overlay');
    return;
  }

  var target = $target[0];
  var href = target.href;
  // Only handle links that have an href attribute and use the HTTP(S) protocol.
  if (href != undefined && href != '' && target.protocol.match(/^https?\:/)) {
    var anchor = href.replace(target.ownerDocument.location.href, '');
    // Skip anchor links.
    if (anchor.length == 0 || anchor.charAt(0) == '#') {
      return;
    }
    // Open admin links in the overlay.
    else if (this.isAdminLink(href)) {
      // If the link contains the overlay-restore class and the overlay-context
      // state is set, also update the parent window's location.
      var parentLocation = ($target.hasClass('overlay-restore') && typeof $.bbq.getState('overlay-context') == 'string')
        ? Drupal.settings.basePath + $.bbq.getState('overlay-context')
        : null;
      href = this.fragmentizeLink($target.get(0), parentLocation);
      // Only override default behavior when left-clicking and user is not
      // pressing the ALT, CTRL, META (Command key on the Macintosh keyboard)
      // or SHIFT key.
      if (event.button == 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        // Redirect to a fragmentized href. This will trigger a hashchange event.
        this.redirect(href);
        // Prevent default action and further propagation of the event.
        return false;
      }
      // Otherwise alter clicked link's href. This is being picked up by
      // the default action handler.
      else {
        $target
          // Restore link's href attribute on blur or next click.
          .one('blur mousedown', { target: target, href: target.href }, function (event) { $(event.data.target).attr('href', event.data.href); })
          .attr('href', href);
      }
    }
    // Non-admin links should close the overlay and open in the main window,
    // which is the default action for a link. We only need to handle them
    // if the overlay is open and the clicked link is inside the overlay iframe.
    else if (this.isOpen && target.ownerDocument === this.iframeWindow.document) {
      // Open external links in the immediate parent of the frame, unless the
      // link already has a different target.
      if (target.hostname != window.location.hostname) {
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
      else {
        // Add the overlay-context state to the link, so "overlay-restore" links
        // can restore the context.
        if ($target[0].hash) {
          // Leave links with an existing fragment alone. Adding an extra
          // parameter to a link like "node/1#section-1" breaks the link.
        }
        else {
          // For links with no existing fragment, add the overlay context.
          $target.attr('href', $.param.fragment(href, { 'overlay-context': this.getPath(window.location) + window.location.search }));
        }

        // When the link has a destination query parameter and that destination
        // is an admin link we need to fragmentize it. This will make it reopen
        // in the overlay.
        var params = $.deparam.querystring(href);
        if (params.destination && this.isAdminLink(params.destination)) {
          var fragmentizedDestination = $.param.fragment(this.getPath(window.location), { overlay: params.destination });
          $target.attr('href', $.param.querystring(href, { destination: fragmentizedDestination }));
        }

        // Make the link open in the immediate parent of the frame, unless the
        // link already has a different target.
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
    }
  }
};

/**
 * Event handler: opens or closes the overlay based on the current URL fragment.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: hashchange
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerOperateByURLFragment = function (event) {
  // If we changed the hash to reflect an internal redirect in the overlay,
  // its location has already been changed, so don't do anything.
  if ($.data(window.location, window.location.href) === 'redirect') {
    $.data(window.location, window.location.href, null);
    return;
  }

  // Get the overlay URL from the current URL fragment.
  var state = $.bbq.getState('overlay');
  if (state) {
    // Append render variable, so the server side can choose the right
    // rendering and add child frame code to the page if needed.
    var url = $.param.querystring(Drupal.settings.basePath + state, { render: 'overlay' });

    this.open(url);
    this.resetActiveClass(this.getPath(Drupal.settings.basePath + state));
  }
  // If there is no overlay URL in the fragment and the overlay is (still)
  // open, close the overlay.
  else if (this.isOpen && !this.isClosing) {
    this.close();
    this.resetActiveClass(this.getPath(window.location));
  }
};

/**
 * Event handler: makes sure the internal overlay URL is reflected in the parent
 * URL fragment.
 *
 * Normally the parent URL fragment determines the overlay location. However, if
 * the overlay redirects internally, the parent doesn't get informed, and the
 * parent URL fragment will be out of date. This is a sanity check to make
 * sure we're in the right place.
 *
 * The parent URL fragment is also not updated automatically when overlay's
 * open, close or load functions are used directly (instead of through
 * eventhandlerOperateByURLFragment).
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayReady, drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerSyncURLFragment = function (event) {
  if (this.isOpen) {
    var expected = $.bbq.getState('overlay');
    // This is just a sanity check, so we're comparing paths, not query strings.
    if (this.getPath(Drupal.settings.basePath + expected) != this.getPath(this.iframeWindow.document.location)) {
      // There may have been a redirect inside the child overlay window that the
      // parent wasn't aware of. Update the parent URL fragment appropriately.
      var newLocation = Drupal.overlay.fragmentizeLink(this.iframeWindow.document.location);
      // Set a 'redirect' flag on the new location so the hashchange event handler
      // knows not to change the overlay's content.
      $.data(window.location, newLocation, 'redirect');
      // Use location.replace() so we don't create an extra history entry.
      window.location.replace(newLocation);
    }
  }
  else {
    $.bbq.removeState('overlay');
  }
};

/**
 * Event handler: if the child window suggested that the parent refresh on
 * close, force a page refresh.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerRefreshPage = function (event) {
  if (Drupal.overlay.refreshPage) {
    window.location.reload(true);
  }
};

/**
 * Event handler: dispatches events to the overlay document.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerDispatchEvent = function (event) {
  if (this.iframeWindow && this.iframeWindow.document) {
    this.iframeWindow.jQuery(this.iframeWindow.document).trigger(event);
  }
};

/**
 * Make a regular admin link into a URL that will trigger the overlay to open.
 *
 * @param link
 *   A JavaScript Link object (i.e. an <a> element).
 * @param parentLocation
 *   (optional) URL to override the parent window's location with.
 *
 * @return
 *   A URL that will trigger the overlay (in the form
 *   /node/1#overlay=admin/config).
 */
Drupal.overlay.fragmentizeLink = function (link, parentLocation) {
  // Don't operate on links that are already overlay-ready.
  var params = $.deparam.fragment(link.href);
  if (params.overlay) {
    return link.href;
  }

  // Determine the link's original destination. Set ignorePathFromQueryString to
  // true to prevent transforming this link into a clean URL while clean URLs
  // may be disabled.
  var path = this.getPath(link, true);
  // Preserve existing query and fragment parameters in the URL, except for
  // "render=overlay" which is re-added in Drupal.overlay.eventhandlerOperateByURLFragment.
  var destination = path + link.search.replace(/&?render=overlay/, '').replace(/\?$/, '') + link.hash;

  // Assemble and return the overlay-ready link.
  return $.param.fragment(parentLocation || window.location.href, { overlay: destination });
};

/**
 * Refresh any regions of the page that are displayed outside the overlay.
 *
 * @param data
 *   An array of objects with information on the page regions to be refreshed.
 *   For each object, the key is a CSS class identifying the region to be
 *   refreshed, and the value represents the section of the Drupal $page array
 *   corresponding to this region.
 */
Drupal.overlay.refreshRegions = function (data) {
  $.each(data, function () {
    var region_info = this;
    $.each(region_info, function (regionClass) {
      var regionName = region_info[regionClass];
      var regionSelector = '.' + regionClass;
      // Allow special behaviors to detach.
      Drupal.detachBehaviors($(regionSelector));
      $.get(Drupal.settings.basePath + Drupal.settings.overlay.ajaxCallback + '/' + regionName, function (newElement) {
        $(regionSelector).replaceWith($(newElement));
        Drupal.attachBehaviors($(regionSelector), Drupal.settings);
      });
    });
  });
};

/**
 * Reset the active class on links in displaced elements according to
 * given path.
 *
 * @param activePath
 *   Path to match links against.
 */
Drupal.overlay.resetActiveClass = function(activePath) {
  var self = this;
  var windowDomain = window.location.protocol + window.location.hostname;

  $('.overlay-displace-top, .overlay-displace-bottom')
  .find('a[href]')
  // Remove active class from all links in displaced elements.
  .removeClass('active')
  // Add active class to links that match activePath.
  .each(function () {
    var linkDomain = this.protocol + this.hostname;
    var linkPath = self.getPath(this);

    // A link matches if it is part of the active trail of activePath, except
    // for frontpage links.
    if (linkDomain == windowDomain && (activePath + '/').indexOf(linkPath + '/') === 0 && (linkPath !== '' || activePath === '')) {
      $(this).addClass('active');
    }
  });
};

/**
 * Helper function to get the (corrected) Drupal path of a link.
 *
 * @param link
 *   Link object or string to get the Drupal path from.
 * @param ignorePathFromQueryString
 *   Boolean whether to ignore path from query string if path appears empty.
 *
 * @return
 *   The Drupal path.
 */
Drupal.overlay.getPath = function (link, ignorePathFromQueryString) {
  if (typeof link == 'string') {
    // Create a native Link object, so we can use its object methods.
    link = $(link.link(link)).get(0);
  }

  var path = link.pathname;
  // Ensure a leading slash on the path, omitted in some browsers.
  if (path.charAt(0) != '/') {
    path = '/' + path;
  }
  path = path.replace(new RegExp(Drupal.settings.basePath + '(?:index.php)?'), '');
  if (path == '' && !ignorePathFromQueryString) {
    // If the path appears empty, it might mean the path is represented in the
    // query string (clean URLs are not used).
    var match = new RegExp('([?&])q=(.+)([&#]|$)').exec(link.search);
    if (match && match.length == 4) {
      path = match[2];
    }
  }

  return path;
};

/**
 * Get the total displacement of given region.
 *
 * @param region
 *   Region name. Either "top" or "bottom".
 *
 * @return
 *   The total displacement of given region in pixels.
 */
Drupal.overlay.getDisplacement = function (region) {
  var displacement = 0;
  var lastDisplaced = $('.overlay-displace-' + region + ':last');
  if (lastDisplaced.length) {
    displacement = lastDisplaced.offset().top + lastDisplaced.outerHeight();

    // In modern browsers (including IE9), when box-shadow is defined, use the
    // normal height.
    var cssBoxShadowValue = lastDisplaced.css('box-shadow');
    var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
    // In IE8 and below, we use the shadow filter to apply box-shadow styles to
    // the toolbar. It adds some extra height that we need to remove.
    if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))) {
      displacement -= lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;
      displacement = Math.max(0, displacement);
    }
  }
  return displacement;
};

/**
 * Makes elements outside the overlay unreachable via the tab key.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes changed. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentUntabbable = function (context) {
  // Manipulating tabindexes for the entire document is unacceptably slow in IE6
  // and IE7, so in those browsers, the underlying page will still be reachable
  // via the tab key. However, we still make the links within the Disable
  // message unreachable, because the same message also exists within the
  // child document. The duplicate copy in the underlying document is only for
  // assisting screen-reader users navigating the document with reading commands
  // that follow markup order rather than tab order.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    $('#overlay-disable-message a', context).attr('tabindex', -1);
    return;
  }

  context = context || document.body;
  var $overlay, $tabbable, $hasTabindex;

  // Determine which elements on the page already have a tabindex.
  $hasTabindex = $('[tabindex] :not(.overlay-element)', context);
  // Record the tabindex for each element, so we can restore it later.
  $hasTabindex.each(Drupal.overlay._recordTabindex);
  // Add the tabbable elements from the current context to any that we might
  // have previously recorded.
  Drupal.overlay._hasTabindex = $hasTabindex.add(Drupal.overlay._hasTabindex);

  // Set tabindex to -1 on everything outside the overlay and toolbars, so that
  // the underlying page is unreachable.

  // By default, browsers make a, area, button, input, object, select, textarea,
  // and iframe elements reachable via the tab key.
  $tabbable = $('a, area, button, input, object, select, textarea, iframe');
  // If another element (like a div) has a tabindex, it's also tabbable.
  $tabbable = $tabbable.add($hasTabindex);
  // Leave links inside the overlay and toolbars alone.
  $overlay = $('.overlay-element, #overlay-container, .overlay-displace-top, .overlay-displace-bottom').find('*');
  $tabbable = $tabbable.not($overlay);
  // We now have a list of everything in the underlying document that could
  // possibly be reachable via the tab key. Make it all unreachable.
  $tabbable.attr('tabindex', -1);
};

/**
 * Restores the original tabindex value of a group of elements.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes restored. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentTabbable = function (context) {
  // Manipulating tabindexes is unacceptably slow in IE6 and IE7. In those
  // browsers, the underlying page was never made unreachable via tab, so
  // there is no work to be done here.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    return;
  }

  var $needsTabindex;
  context = context || document.body;

  // Make the underlying document tabbable again by removing all existing
  // tabindex attributes.
  var $tabindex = $('[tabindex]', context);
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    // removeAttr('tabindex') is broken in IE6-7, but the DOM function
    // removeAttribute works.
    var i;
    var length = $tabindex.length;
    for (i = 0; i < length; i++) {
      $tabindex[i].removeAttribute('tabIndex');
    }
  }
  else {
    $tabindex.removeAttr('tabindex');
  }

  // Restore the tabindex attributes that existed before the overlay was opened.
  $needsTabindex = $(Drupal.overlay._hasTabindex, context);
  $needsTabindex.each(Drupal.overlay._restoreTabindex);
  Drupal.overlay._hasTabindex = Drupal.overlay._hasTabindex.not($needsTabindex);
};

/**
 * Record the tabindex for an element, using $.data.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._recordTabindex = function () {
  var $element = $(this);
  var tabindex = $(this).attr('tabindex');
  $element.data('drupalOverlayOriginalTabIndex', tabindex);
};

/**
 * Restore an element's original tabindex.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._restoreTabindex = function () {
  var $element = $(this);
  var tabindex = $element.data('drupalOverlayOriginalTabIndex');
  $element.attr('tabindex', tabindex);
};

/**
 * Theme function to create the overlay iframe element.
 */
Drupal.theme.prototype.overlayContainer = function () {
  return '<div id="overlay-container"><div class="overlay-modal-background"></div></div>';
};

/**
 * Theme function to create an overlay iframe element.
 */
Drupal.theme.prototype.overlayElement = function (url) {
  return '<iframe class="overlay-element" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>';
};

})(jQuery);
;

/*
 * jQuery UI Position 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+parseInt(c.curCSS(this,"marginRight",true))||0,w=m+q+parseInt(c.curCSS(this,"marginBottom",true))||0,i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=m/2;
i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;

/*
 * jQuery UI Autocomplete 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){d.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},_create:function(){var a=this,b=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){f=false;var e=d.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:a._move("previousPage",
c);break;case e.PAGE_DOWN:a._move("nextPage",c);break;case e.UP:a._move("previous",c);c.preventDefault();break;case e.DOWN:a._move("next",c);c.preventDefault();break;case e.ENTER:case e.NUMPAD_ENTER:if(a.menu.active){f=true;c.preventDefault()}case e.TAB:if(!a.menu.active)return;a.menu.select(c);break;case e.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);
break}}}).bind("keypress.autocomplete",function(c){if(f){f=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||
"body",b)[0]).mousedown(function(c){var e=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(g){g.target!==a.element[0]&&g.target!==e&&!d.ui.contains(e,g.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,e){e=e.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:e})&&/^key/.test(c.originalEvent.type)&&a.element.val(e.value)},selected:function(c,e){var g=e.item.data("item.autocomplete"),
h=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=h;setTimeout(function(){a.previous=h;a.selectedItem=g},1)}false!==a._trigger("select",c,{item:g})&&a.element.val(g.value);a.term=a.element.val();a.close(c);a.selectedItem=g},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0])},_initSource:function(){var a=this,b,f;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,e){e(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){f=this.options.source;this.source=
function(c,e){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:f,data:c,dataType:"json",success:function(g,h,i){i===a.xhr&&e(g);a.xhr=null},error:function(g){g===a.xhr&&e([]);a.xhr=null}})}}else this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.element.addClass("ui-autocomplete-loading");
this.source({term:a},this.response)},_response:function(a){if(a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&
a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),
this.element.outerWidth()))},_renderMenu:function(a,b){var f=this;d.each(b,function(c,e){f._renderItem(a,e)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});
d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(a,b){var f=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return f.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var a=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){if(d(b.target).closest(".ui-menu-item a").length){b.preventDefault();a.select(b)}});this.refresh()},refresh:function(){var a=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(b){a.activate(b,d(this).parent())}).mouseleave(function(){a.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var f=b.offset().top-this.element.offset().top,c=this.element.attr("scrollTop"),e=this.element.height();if(f<0)this.element.attr("scrollTop",c+f);else f>=e&&this.element.attr("scrollTop",c+f-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",a,{item:b})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,f){if(this.active){a=this.active[a+"All"](".ui-menu-item").eq(0);
a.length?this.activate(f,a):this.activate(f,this.element.children(b))}else this.activate(f,this.element.children(b))},nextPage:function(a){if(this.hasScroll())if(!this.active||this.last())this.activate(a,this.element.children(".ui-menu-item:first"));else{var b=this.active.offset().top,f=this.element.height(),c=this.element.children(".ui-menu-item").filter(function(){var e=d(this).offset().top-b-f+d(this).height();return e<10&&e>-10});c.length||(c=this.element.children(".ui-menu-item:last"));this.activate(a,
c)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(a){if(this.hasScroll())if(!this.active||this.first())this.activate(a,this.element.children(".ui-menu-item:last"));else{var b=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-b+f-d(this).height();return c<10&&c>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(a,result)}else this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})})(jQuery);
;

/*
 * jQuery UI Button 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,e=a([]);if(c)e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return e};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",e="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(e)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var f=b.element[0];h(f).not(f).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(f){if(c.disabled)return false;if(f.keyCode==a.ui.keyCode.SPACE||f.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(f){f.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){this.buttonElement=this.element.parents().last().find("label[for="+this.element.attr("id")+"]");this.element.addClass("ui-helper-hidden-accessible");var b=this.element.is(":checked");b&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=
this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||
this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary;if(d.primary||d.secondary){b.addClass("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){b.addClass(e?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary");
this.hasTitle||b.attr("title",c)}}else b.addClass("ui-button-text-only")}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;
(function ($) {

/**
 * Retrieves the summary for the first element.
 */
$.fn.drupalGetSummary = function () {
  var callback = this.data('summaryCallback');
  return (this[0] && callback) ? $.trim(callback(this[0])) : '';
};

/**
 * Sets the summary for all matched elements.
 *
 * @param callback
 *   Either a function that will be called each time the summary is
 *   retrieved or a string (which is returned each time).
 */
$.fn.drupalSetSummary = function (callback) {
  var self = this;

  // To facilitate things, the callback should always be a function. If it's
  // not, we wrap it into an anonymous function which just returns the value.
  if (typeof callback != 'function') {
    var val = callback;
    callback = function () { return val; };
  }

  return this
    .data('summaryCallback', callback)
    // To prevent duplicate events, the handlers are first removed and then
    // (re-)added.
    .unbind('formUpdated.summary')
    .bind('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    })
    // The actual summaryUpdated handler doesn't fire when the callback is
    // changed, so we have to do this manually.
    .trigger('summaryUpdated');
};

/**
 * Sends a 'formUpdated' event each time a form element is modified.
 */
Drupal.behaviors.formUpdated = {
  attach: function (context) {
    // These events are namespaced so that we can remove them later.
    var events = 'change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated';
    $(context)
      // Since context could be an input element itself, it's added back to
      // the jQuery object and filtered again.
      .find(':input').andSelf().filter(':input')
      // To prevent duplicate events, the handlers are first removed and then
      // (re-)added.
      .unbind(events).bind(events, function () {
        $(this).trigger('formUpdated');
      });
  }
};

/**
 * Prepopulate form fields with information from the visitor cookie.
 */
Drupal.behaviors.fillUserInfoFromCookie = {
  attach: function (context, settings) {
    $('form.user-info-from-cookie').once('user-info-from-cookie', function () {
      var formContext = this;
      $.each(['name', 'mail', 'homepage'], function () {
        var $element = $('[name=' + this + ']', formContext);
        var cookie = $.cookie('Drupal.visitor.' + this);
        if ($element.length && cookie) {
          $element.val(cookie);
        }
      });
    });
  }
};

})(jQuery);
;
