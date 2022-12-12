console.log("knoth & renner");

// http://spin.js.org/#v2.3.2
!function(a,b){"object"==typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return m[e]||(k.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",k.cssRules.length),m[e]=1),e}function d(a,b){var c,d,e=a.style;if(b=b.charAt(0).toUpperCase()+b.slice(1),void 0!==e[b])return b;for(d=0;d<l.length;d++)if(c=l[d]+b,void 0!==e[c])return c}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}k.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.scale*d.width,left:d.scale*d.radius,top:-d.scale*d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.scale*(d.length+d.width),k=2*d.scale*j,l=-(d.width+d.length)*d.scale*2+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k,l=["webkit","Moz","ms","O"],m={},n={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=a(null,{className:d.className});if(e(f,{position:d.position,width:0,zIndex:d.zIndex,left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.scale*(f.length+f.width)+"px",height:f.scale*f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.scale*f.radius+"px,0)",borderRadius:(f.corners*f.scale*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.scale*f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),"undefined"!=typeof document){k=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}();var o=e(a("group"),{behavior:"url(#default#VML)"});!d(o,"transform")&&o.adj?i():j=d(o,"animation")}return h});



























//copied it here because it was missing

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);








//different version with a different parent because the spacer did not get the right height


/*
 Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
// Generated by CoffeeScript 1.10.0

/**
@license Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */

(function() {
  var $, win;

  $ = window.jQuery;

  win = $(window);

  $.fn.stick_in_parent_2 = function(opts) {
    var doc, elm, enable_bottoming, fn, i, inner_scrolling, len, manual_spacer, offset_top, outer_width, parent_selector, recalc_every, sticky_class;
    if (opts == null) {
      opts = {};
    }
    sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;
    if (offset_top == null) {
      offset_top = 0;
    }
    if (parent_selector == null) {
      parent_selector = void 0;
    }
    if (inner_scrolling == null) {
      inner_scrolling = true;
    }
    if (sticky_class == null) {
      sticky_class = "is_stuck";
    }
    doc = $(document);
    if (enable_bottoming == null) {
      enable_bottoming = true;
    }
    outer_width = function(el) {
      var _el, computed, w;
      if (window.getComputedStyle) {
        _el = el[0];
        computed = window.getComputedStyle(el[0]);
        w = parseFloat(computed.getPropertyValue("width")) + parseFloat(computed.getPropertyValue("margin-left")) + parseFloat(computed.getPropertyValue("margin-right"));
        if (computed.getPropertyValue("box-sizing") !== "border-box") {
          w += parseFloat(computed.getPropertyValue("border-left-width")) + parseFloat(computed.getPropertyValue("border-right-width")) + parseFloat(computed.getPropertyValue("padding-left")) + parseFloat(computed.getPropertyValue("padding-right"));
        }
        return w;
      } else {
        return el.outerWidth(true);
      }
    };
    fn = function(elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
      var bottomed, detach, fixed, last_pos, last_scroll_height, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;
      if (elm.data("sticky_kit")) {
        return;
      }
      elm.data("sticky_kit", true);
      last_scroll_height = doc.height();
      parent = elm.parent();
      if (parent_selector != null) {
        parent = parent.closest(parent_selector);
      }
      if (!parent.length) {
        throw "failed to find stick parent";
      }
      fixed = false;
      bottomed = false;
      spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");
      if (spacer) {
        spacer.css('position', elm.css('position'));
      }
      recalc = function() {
        var border_top, padding_top, restore;
        if (detached) {
          return;
        }
        last_scroll_height = doc.height();
        border_top = parseInt(parent.css("border-top-width"), 10);
        padding_top = parseInt(parent.css("padding-top"), 10);
        padding_bottom = parseInt(parent.css("padding-bottom"), 10);
        parent_top = parent.offset().top + border_top + padding_top;
        parent_height = parent.height();
        if (fixed) {
          fixed = false;
          bottomed = false;
          if (manual_spacer == null) {
            elm.insertAfter(spacer);
            spacer.detach();
          }
          elm.css({
            position: "",
            top: "",
            width: "",
            bottom: ""
          }).removeClass(sticky_class);
          restore = true;
        }
        top = elm.offset().top - (parseInt(elm.css("margin-top"), 10) || 0) - offset_top;
        height = elm.parent().outerHeight(true); //CHANGED HERE
        el_float = elm.css("float");

        if (spacer) {
          spacer.css({
            width: outer_width(elm),
            height: height,
            display: elm.css("display"),
            "vertical-align": elm.css("vertical-align"),
            "float": el_float,
          });
        }
        if (restore) {
          return tick();
        }
      };
      recalc();
      if (height === parent_height) {
        return;
      }
      last_pos = void 0;
      offset = offset_top;
      recalc_counter = recalc_every;
      tick = function() {
        var css, delta, recalced, scroll, will_bottom, win_height;
        if (detached) {
          return;
        }
        recalced = false;
        if (recalc_counter != null) {
          recalc_counter -= 1;
          if (recalc_counter <= 0) {
            recalc_counter = recalc_every;
            recalc();
            recalced = true;
          }
        }
        if (!recalced && doc.height() !== last_scroll_height) {
          recalc();
          recalced = true;
        }
        scroll = win.scrollTop();
        if (last_pos != null) {
          delta = scroll - last_pos;
        }
        last_pos = scroll;
        if (fixed) {
          if (enable_bottoming) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
            if (bottomed && !will_bottom) {
              bottomed = false;
              elm.css({
                position: "fixed",
                bottom: "",
                top: offset
              }).trigger("sticky_kit:unbottom");
            }
          }
          if (scroll < top) {
            fixed = false;
            offset = offset_top;
            if (manual_spacer == null) {
              if (el_float === "left" || el_float === "right") {
                elm.insertAfter(spacer);
              }
              spacer.detach();
            }
            css = {
              position: "",
              width: "",
              top: ""
            };
            elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
          }
          if (inner_scrolling) {
            win_height = win.height();
            if (height + offset_top > win_height) {
              if (!bottomed) {
                offset -= delta;
                offset = Math.max(win_height - height, offset);
                offset = Math.min(offset_top, offset);
                if (fixed) {
                  elm.css({
                    top: offset + "px"
                  });
                }
              }
            }
          }
        } else {
          if (scroll > top) {
            fixed = true;
            css = {
              position: "fixed",
              top: offset
            };
            css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
            elm.css(css).addClass(sticky_class);
            if (manual_spacer == null) {
              elm.after(spacer);
              if (el_float === "left" || el_float === "right") {
                spacer.append(elm);
              }
            }
            elm.trigger("sticky_kit:stick");
          }
        }
        if (fixed && enable_bottoming) {
          if (will_bottom == null) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
          }
          if (!bottomed && will_bottom) {
            bottomed = true;
            if (parent.css("position") === "static") {
              parent.css({
                position: "relative"
              });
            }
            return elm.css({
              position: "absolute",
              bottom: padding_bottom,
              top: "auto"
            }).trigger("sticky_kit:bottom");
          }
        }
      };
      recalc_and_tick = function() {
        recalc();
        return tick();
      };
      detach = function() {
        detached = true;
        win.off("touchmove", tick);
        win.off("scroll", tick);
        win.off("resize", recalc_and_tick);
        $(document.body).off("sticky_kit:recalc", recalc_and_tick);
        elm.off("sticky_kit:detach", detach);
        elm.removeData("sticky_kit");
        elm.css({
          position: "",
          bottom: "",
          top: "",
          width: ""
        });
        parent.position("position", "");
        if (fixed) {
          if (manual_spacer == null) {
            if (el_float === "left" || el_float === "right") {
              elm.insertAfter(spacer);
            }
            spacer.remove();
          }
          return elm.removeClass(sticky_class);
        }
      };
      win.on("touchmove", tick);
      win.on("scroll", tick);
      win.on("resize", recalc_and_tick);
      $(document.body).on("sticky_kit:recalc", recalc_and_tick);
      elm.on("sticky_kit:detach", detach);
      return setTimeout(tick, 0);
    };
    for (i = 0, len = this.length; i < len; i++) {
      elm = this[i];
      fn($(elm));
    }
    return this;
  };

}).call(this);















$(".issue-title").addClass("old");


$(document).on( 'append.infiniteScroll', function( body, path, items, response ) {
    console.log("loaded");
    //console.log('infiniteScroll', body, path, items, response, Hyphenopoly);

    //$(".issue-title").not(".old").addClass("new-items").css({"color":"red"});
    //
    //Hyphenopoly.hyphenators["de"].then( function(hyphenator_de) {
    //    const nl = document.querySelectorAll(".new-items");
    //    nl.forEach((el) => {
    //        console.log(el);
    //        hyphenator_de(el, ".new-items");
    //    });
    //});
});






var Hyphenopoly = {
        require: {
            "en-us": "FORCEHYPHENOPOLY",
            "de": "FORCEHYPHENOPOLY"
        },
        fallbacks: {
            "en-gb": "en-us",
            "en-au": "en-us",
            "de-DE": "de",      //use de for de-DE
            "de-AT": "de",
            "de-CH": "de"
        },
        paths: {
            patterndir: "/assets/js/hyphenopoly/patterns/",
            maindir: "/assets/js/hyphenopoly/"
        },
        setup: {
            //hide: "none",
            selectors: {
                ".issue-title":  {
                    leftmin: 4,
                    rightmin: 4,
                    minWordLength: 8,
                    //hyphen: "•"
                }
            }
        },
        handleEvent: {
            "hyphenopolyEnd": function () {
                console.log("Hyphenopoly ended");
            },
            "hyphenopolyStart": function () {
                console.log("hyphenopolyStart-Event");
            },
            "polyfill": function () {
                console.log("polyfill-Event");
            },
            "tearDown": function () {
                console.log("tearDown-Event");
            },
            "beforeElementHyphenation": function () {
                console.log("beforeElementHyphenation ended");
            },
            error: function (e) {
                console.log(e);
            }
        }

    };


/**
 * @license Hyphenopoly_Loader 4.2.1 - client side hyphenation
 * ©2020  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */
/* globals Hyphenopoly:readonly */
((w, d, H, o) => {
    "use strict";

    const store = sessionStorage;
    const scriptName = "Hyphenopoly_Loader.js";
    const lcRequire = new Map();

    /**
     * Create Object without standard Object-prototype
     * @returns {Object} empty object
     */
    const empty = () => {
        return o.create(null);
    };

    const shortcuts = {
        "ac": "appendChild",
        "ce": "createElement",
        "ct": "createTextNode"
    };

    /**
     * Shorthand for Object.keys(obj).forEach(function () {})
     * @param {Object} obj the object to iterate
     * @param {function} fn the function to execute
     * @returns {undefined}
     */
    const eachKey = (obj, fn) => {
        return o.keys(obj).forEach(fn);
    };

    /**
     * Set H.cf (Hyphenopoly.clientFeatures) either by reading out previously
     * computed settings from sessionStorage or creating an template object.
     * This is in an iife to keep complexity low.
     */
    (() => {
        if (H.cacheFeatureTests && store.getItem(scriptName)) {
            H.cf = JSON.parse(store.getItem(scriptName));
        } else {
            H.cf = {
                "langs": empty(),
                "pf": false
            };
        }
    })();

    /**
     * Set H.paths and some H.setup fields to defaults or
     * overwrite with user settings.
     * These are iifes to keep complexity low.
     */
    (() => {
        const maindir = d.currentScript.src.replace(scriptName, "");
        const patterndir = maindir + "patterns/";
        if (H.paths) {
            H.paths.maindir = H.paths.maindir || maindir;
            H.paths.patterndir = H.paths.patterndir || patterndir;
        } else {
            H.paths = {
                maindir,
                patterndir
            };
        }
    })();

    (() => {
        if (H.setup) {
            H.setup.CORScredentials = H.setup.CORScredentials || "include";
            H.setup.hide = H.setup.hide || "all";
            H.setup.selectors = H.setup.selectors || {".hyphenate": {}};
            H.setup.timeout = H.setup.timeout || 1000;
        } else {
            H.setup = {
                "CORScredentials": "include",
                "hide": "all",
                "selectors": {".hyphenate": {}},
                "timeout": 1000
            };
        }

        // Change mode string to mode int
        H.setup.hide = (() => {
            const tr = new Map([["all", 1], ["element", 2], ["text", 3]]);
            return tr.get(H.setup.hide) || 0;
        })();
    })();

    /**
     * Copy required languages to local lcRequire (lowercaseRequire) and
     * eventually fallbacks to local lcFallbacks (lowercaseFallbacks).
     * This is in an iife to keep complexity low.
     */
    (() => {
        eachKey(H.require, (k) => {
            /* eslint-disable security/detect-object-injection */
            const fn = (H.fallbacks)
                ? H.fallbacks[k] || k
                : k;
            lcRequire.set(k.toLowerCase(), new Map(
                [["fn", fn], ["wo", H.require[k]]]
            ));
            /* eslint-enable security/detect-object-injection */
        });
    })();

    /**
     * Create deferred Promise
     *
     * Kudos to http://lea.verou.me/2016/12/resolve-promises-externally-with-
     * this-one-weird-trick/
     * @return {promise}
     */
    H.defProm = () => {
        let res = null;
        let rej = null;
        const promise = new Promise((resolve, reject) => {
            res = resolve;
            rej = reject;
        });
        promise.resolve = res;
        promise.reject = rej;

        return promise;
    };

    /**
     * Define function H.hide.
     * This function hides (state = 1) or unhides (state = 0)
     * the whole document (mode == 1) or
     * each selected element (mode == 2) or
     * text of each selected element (mode == 3) or
     * nothing (mode == 0)
     * @param {integer} state - State
     * @param {integer} mode  - Mode
     */
    H.hide = (state, mode) => {
        const sid = "H9Y_Styles";
        if (state === 0) {
            const stylesNode = d.getElementById(sid);
            if (stylesNode) {
                stylesNode.remove();
            }
        } else {
            const vis = "{visibility:hidden!important}";
            const sc = d[shortcuts.ce]("style");
            let myStyle = "";
            sc.id = sid;
            if (mode === 1) {
                myStyle = "html" + vis;
            } else {
                eachKey(H.setup.selectors, (sel) => {
                    if (mode === 2) {
                        myStyle += sel + vis;
                    } else {
                        myStyle += sel + "{color:transparent!important}";
                    }
                });
            }
            sc[shortcuts.ac](d[shortcuts.ct](myStyle));
            d.head[shortcuts.ac](sc);
        }
    };

    const tester = (() => {
        let fakeBody = null;
        const ha = "hyphens:auto";
        const css = `visibility:hidden;-webkit-${ha};-ms-${ha};${ha};width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal`;
        return {

            /**
             * Append fakeBody with tests to target (document)
             * @param {Object} target Where to append fakeBody
             * @returns {Object|null} The body element or null, if no tests
             */
            "ap": () => {
                if (fakeBody) {
                    d.documentElement[shortcuts.ac](fakeBody);
                    return fakeBody;
                }
                return null;
            },

            /**
             * Remove fakeBody
             * @returns {undefined}
             */
            "cl": () => {
                if (fakeBody) {
                    fakeBody.remove();
                }
            },

            /**
             * Create and append div with CSS-hyphenated word
             * @param {string} lang Language
             * @returns {undefined}
             */
            "cr": (lang) => {
                /* eslint-disable security/detect-object-injection */
                if (H.cf.langs[lang]) {
                    return;
                }
                /* eslint-enable security/detect-object-injection */
                fakeBody = fakeBody || d[shortcuts.ce]("body");
                const testDiv = d[shortcuts.ce]("div");
                testDiv.lang = lang;
                testDiv.style.cssText = css;
                testDiv[shortcuts.ac](
                    d[shortcuts.ct](
                        lcRequire.get(lang).get("wo").
                            toLowerCase()
                    )
                );
                fakeBody[shortcuts.ac](testDiv);
            }
        };
    })();

    /**
     * Checks if hyphens (ev.prefixed) is set to auto for the element.
     * @param {Object} elm - the element
     * @returns {Boolean} result of the check
     */
    function checkCSSHyphensSupport(elmStyle) {
        const h = elmStyle.hyphens ||
            elmStyle.webkitHyphens ||
            elmStyle.msHyphens;
        return (h === "auto");
    }

    H.res = new Map([["he", new Map()]]);
    const fw = new Map();

    /**
     * Load hyphenEngines
     *
     * Make sure each .wasm is loaded exactly once, even for fallbacks
     * fw: fetched wasm (maps filename to language)
     * he: hyphenEngines (maps lang to wasm and counter)
     * c (counter) is needed in Hyphenopoly.js to decide
     * if wasm needs to be cloned
     * @param {string} lang The language
     * @returns {undefined}
     */
    function loadhyphenEngine(lang) {
        const filename = lcRequire.get(lang).get("fn") + ".wasm";
        H.cf.pf = true;
        // eslint-disable-next-line security/detect-object-injection
        H.cf.langs[lang] = "H9Y";
        if (fw.has(filename)) {
            const hyphenEngineWrapper = H.res.get("he").get(fw.get(filename));
            hyphenEngineWrapper.c += 1;
            H.res.get("he").set(lang, hyphenEngineWrapper);
        } else {
            H.res.get("he").set(
                lang,
                {
                    "c": 1,
                    "w": w.fetch(H.paths.patterndir + filename)
                }
            );
            fw.set(filename, lang);
        }
    }
    lcRequire.forEach((value, lang) => {
        // eslint-disable-next-line security/detect-object-injection
        if (value.get("wo") === "FORCEHYPHENOPOLY" || H.cf.langs[lang] === "H9Y") {
            loadhyphenEngine(lang);
        } else {
            tester.cr(lang);
        }
    });
    const testContainer = tester.ap();
    if (testContainer) {
        const nl = testContainer.querySelectorAll("div");
        nl.forEach((n) => {
            if (checkCSSHyphensSupport(n.style) && n.offsetHeight > 12) {
                H.cf.langs[n.lang] = "CSS";
            } else {
                loadhyphenEngine(n.lang);
            }
        });
        tester.cl();
    }
    const he = H.handleEvent;
    if (H.cf.pf) {
        H.res.set("DOM", new Promise((res) => {
            if (d.readyState === "loading") {
                d.addEventListener(
                    "DOMContentLoaded",
                    res,
                    {
                        "once": true,
                        "passive": true
                    }
                );
            } else {
                res();
            }
        }));
        if (H.setup.hide === 1) {
            H.hide(1, 1);
        }
        if (H.setup.hide !== 0) {
            H.timeOutHandler = w.setTimeout(() => {
                H.hide(0, null);
                // eslint-disable-next-line no-console
                console.info(scriptName + " timed out.");
            }, H.setup.timeout);
        }
        H.res.get("DOM").then(() => {
            if (H.setup.hide > 1) {
                H.hide(1, H.setup.hide);
            }
        });
        // Load main script
        const script = d[shortcuts.ce]("script");
        script.src = H.paths.maindir + "Hyphenopoly.js";
        d.head[shortcuts.ac](script);
        H.hyphenators = empty();
        eachKey(H.cf.langs, (lang) => {
            /* eslint-disable security/detect-object-injection */
            if (H.cf.langs[lang] === "H9Y") {
                H.hyphenators[lang] = H.defProm();
            }
            /* eslint-enable security/detect-object-injection */
        });
        (() => {
            if (he && he.polyfill) {
                he.polyfill();
            }
        })();
    } else {
        (() => {
            if (he && he.tearDown) {
                he.tearDown();
            }
            w.Hyphenopoly = null;
        })();
    }
    if (H.cacheFeatureTests) {
        store.setItem(scriptName, JSON.stringify(H.cf));
    }
})(window, document, Hyphenopoly, Object);











function columnizer (what) {
    if (!isMobilePhone) {
        //console.log('desktop');
        var $content = what.find('.newsletterContent');

        $content.find('table, thead, tbody, tfoot, colgroup, caption, label, legend, script, style, textarea, button, object, embed, tr, th, td, li, h1, h2, h3, h4, h5, h6, form').addClass('dontsplit');

        $content.find('h1, h2, h3, h4, h5, h6').addClass('dontend');

        $content.find('br').addClass('removeiflast').addClass('removeiffirst');



        // COLUMNIZER
        var content_height = $(window).height() * 0.6;    // the height of the content, discluding the header/footer
        var page = 1;                // the beginning page number to show in the footer
        function buildColumns(){

            if($content.contents().length > 0){

                // when we need to add a new page, use a jq object for a template
                // or use a long HTML string, whatever your preference
                $page = what.find(".page_template:first").clone().addClass("page");

                // fun stuff, like adding page numbers to the footer
                //$page.find(".footer span").append(page);
                what.find('.page_template:last').after($page);
                //$(".container-long-text").append($page);
                //page++;

                // here is the columnizer magic

                what.find('.newsletterContent').columnize({
                    columns: 2,
                    buildOnce: true,
                    target: what.find('.page:last .content'),
                    accuracy : 1,
                    //lastNeverTallest: true,
                    overflow: {
                        height: content_height,
                        id: what.find('.newsletterContent'),
                        doneFunc: function(){
                            //console.log("module-text-long built");
                            buildColumns();
                        }
                    }
                });
            }
        }
        setTimeout(buildColumns, 1);
    }
}


    var arrowHeight = 120;
    var arrowWidth = 15;

    var slickPrevArrow = '<button type="button" class="slick-prev pull-left"><svg viewBox="0 0 50 '+arrowHeight+'"><path d="M '+arrowWidth+','+arrowHeight+' L 1,'+arrowHeight/2+' L '+arrowWidth+',0" class="arrow"></path></svg></button>';
    var slickNextArrow = '<button type="button" class="slick-next pull-right"><svg viewBox="0 0 50 '+arrowHeight+'"><path d="M 21,'+arrowHeight+' L 1,'+arrowHeight/2+' L 21,0" class="arrow"></path></svg></button>';



var isMobilePhone = true;






$(document).ready(function() {

    $(document).mousemove(function(e) {
        $("body").addClass("mouse-move");
        $(document).unbind( "mousemove" );
    });


    //reload page on orientation change
    window.addEventListener("orientationchange", function(event) {
        window.location.reload();
    });


    var newsLetterStart = $("<div id='newsletter-start'>Newsletter</div>");

    var newsletterForm = $("#sidebar-newsletter").find("form");
    //newsletterForm.find(".submit_container button").html("absenden");

    var newsletterFormInput = newsletterForm.find("input");
    newsletterFormInput. attr("required", "true").attr('type', 'email');;
    newsletterForm.hide();

    newsLetterStart.click(function(){
        newsLetterStart.hide();
        newsletterForm.fadeIn();
        newsletterFormInput.focus();
    });

    $("#sidebar-newsletter").append(newsLetterStart);


    $("body").prepend("<div id='check-for-mobile'></div>")

    function checkForMobile() {
        var checkForMobile = $("#check-for-mobile").css('background-color');

        if (checkForMobile === "rgb(0, 0, 255)") { //blue
            isMobilePhone = true;
        } else {
            isMobilePhone = false;
        }
    }

    checkForMobile();

    window.addEventListener("resize", function() {
        checkForMobile();
    }, false);



    setTimeout(function () {
        $("body").removeClass("css-transitions-only-after-page-load")
    }, 10);

    jQuery.expr[':'].regex = function(elem, index, match) {
        var matchParams = match[3].split(','),
            validLabels = /^(data|css):/,
            attr = {
                method: matchParams[0].match(validLabels) ?
                            matchParams[0].split(':')[0] : 'attr',
                property: matchParams.shift().replace(validLabels,'')
            },
            regexFlags = 'ig',
            regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
        return regex.test(jQuery(elem)[attr.method](attr.property));
    }





    if ($("main").hasClass("frontpage")) {

        if ($('.marquee-wrapper').length > 0) {

            //$(".marquee-wrapper p").contents().unwrap()

            var badgeText = $(".marquee-wrapper").html();

            $(".marquee-wrapper").html(Array(10).join(badgeText+"&nbsp;"));

            $("body").addClass("marquee-active");

            console.log($(".marquee-wrapper").width());

            $('.marquee-wrapper').marquee({
                //duration in milliseconds of the marquee
                duration: 20 * $(".marquee-wrapper").width(),
                //gap in pixels between the tickers
                gap: 10,
                //time in milliseconds before the marquee will start animating
                delayBeforeStart: 0,
                //'left' or 'right'
                direction: 'left',
                //true or false - should the marquee be duplicated to show an effect of continues flow
                duplicated: true
            });
        }
    }




    $(".slideshow-big").each(function(){
        $(this).find(".slideshow-big-item").each(function(){
            var image = $(this).find("img");

            //console.log(image[0]);

            $(this).append("<div class='blurry-image'>"+image[0].outerHTML+"</div>");
        })
    })

    $(".slideshow-big").each(function(){

        var theSlideShow = $(this);

        theSlideShow.slick({
            prevArrow: slickPrevArrow,
            nextArrow: slickNextArrow,
        }).on('click', function(e) {
            if (e.clientX > $(window).width()/2) {
                theSlideShow.slick("slickNext");
            } else {
                theSlideShow.slick("slickPrev");
            }
        });

        /*
        $(this).append('<div class="gallery-prev-next"><span class="left"><svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.3 201.1"><path class="arrow" d="M.4.4l100.2 100.2L.4 200.8"/></svg></span><span class="right"><svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.3 201.1"><path class="arrow" d="M.4.4l100.2 100.2L.4 200.8"/></svg></span></div>');

        $(this).mousemove(function(e){

            theSlideShow.find(".gallery-prev-next").show();

            //console.log(e.clientX, e.clientY);
            var offsetLeft = $(this).offset().left;

            theSlideShow.find(".gallery-prev-next")
                .css('left', (e.clientX - offsetLeft) + "px")
                .css('top', (e.clientY) + "px");

            if (e.clientX > $(window).width()/2) {
                theSlideShow.find(".left").hide();
                theSlideShow.find(".right").show();
            } else {
                theSlideShow.find(".left").show();
                theSlideShow.find(".right").hide();
            }

        })

        $(this).mouseout(function(){
            $(this).find(".gallery-prev-next").hide();
        })
        */

    });


    function startSlick(what) {

        what.find('.slideshow-container').each(function(){

            if ($(this).find('figure').length > 1) {

                var $carousel = $(this).each(function(){
                    $(this).slick({
                        prevArrow: slickPrevArrow,
                        nextArrow: slickNextArrow
                    }).on('click', function(e) {
                        if (e.clientX > $(window).width()/2) {
                            $carousel.slick("slickNext");
                        } else {
                            $carousel.slick("slickPrev");
                        }
                    });
                })
            }
        })

    }


    // ACCORDION

    if ($("body").hasClass("edition") || $("body").hasClass("single-project-page")) {

        if (!isMobilePhone) {

            var scrolled = false;
            var coverAndBuyButton = $(".current--issue--cover--image, .editorial--editorial__cover");

            var numberOfButtons = $(".editorial--editorial__cover").find(".buy-button, .has-fullversion, .sold-out").length;

            $(".current--issue--cover--image").addClass("bottom-distance-"+numberOfButtons);


            $(window).scroll(function() {

                if($(window).scrollTop() > 40 && scrolled == false){
                    coverAndBuyButton.addClass("scale-small");
                    scrolled = true;
                } else if($(window).scrollTop() == 0) {
                    coverAndBuyButton.removeClass("scale-small");
                    scrolled = false;
                }
            });

            coverAndBuyButton.hover(
                function(){
                    if ($(window).scrollTop() > 40) {
                        coverAndBuyButton.removeClass("scale-small")
                    }
                },
                function(){
                    if ($(window).scrollTop() > 40) {
                        coverAndBuyButton.addClass("scale-small");
                    }
                }
            );
        }



        var editorial = $(".editorial.row");

        editorial.find(".newsletterContent").removeClass("newsletterContent");
        editorial.find(".index--author").remove();
        editorial.find(".index--teaser").remove();

        $(".editorial--editorial__text").find(".container-long-text").click(function(){
            console.log("click");
            toggleOpen($(this));
        })


        function offSetFunction(wrapper) {
            var chapterWrapper = wrapper.closest(".chapter");

            if (chapterWrapper.find(".chaptermarker").length > 0) {
                console.log("chap marker");
                var offSetTop = $(".header--banner").outerHeight() + chapterWrapper.find(".chaptermarker").outerHeight();
            } else {
                console.log("no chap marker");
                var offSetTop = $(".header--banner").outerHeight();
            }

            if ($(".sticky-headline.is-fixed").length > 0) {
                console.log("sticky-headline")
                //offSetTop = offSetTop + $(".sticky-headline.is-fixed").height();
            }

            //offSetTop = 0;

            return offSetTop
        }

        //ajax complete
        var onComplete = function(what) {

            setupAllToggles();

            var articleWrapper = what.closest("article");
            articleWrapper.addClass("open-article");
            what.nextAll('.article--content').eq(0).show();
            articleWrapper.find('.article--teasertext, .index--teaser.col-xs-9.col-md-8.col-xs-offset-2').eq(0).addClass('open');
            articleWrapper.find('figure').eq(0).addClass('open');

            var rowWrapper = 0;
            var chapterWrapper = 0;

            rowWrapper = what.closest(".row").length;
            chapterWrapper = what.closest(".chapter").length;


            if (chapterWrapper > 0) {
                var wrapper = what.closest(".chapter");
                console.log("chapter wrapper");
            } else
            if (rowWrapper > 0) {
                var wrapper = what.closest(".row");
                //console.log("row wrapper");
            } else {
                //console.log("no wrapper");
            }

            if (rowWrapper > 0 || chapterWrapper > 0) {

                setTimeout(function(){
                    startSlick(articleWrapper);
                }, 100)

                setTimeout(function(){
                    if (wrapper.find(".chaptermarker").length > 0) {
                        var offSetTop = $(".header--banner").outerHeight() + $(".chaptermarker").outerHeight() - 2
                    } else {
                        var offSetTop = $(".header--banner").outerHeight() - 1
                    }

                    // STICK IN PARENT
                    var stickyHeadline = what.closest("article").find(".sticky-headline");

                    console.log(what.closest("article").find(".sticky-headline").length);

                    //there was some bug with the editorial so I added the second if
                    if ((stickyHeadline.length > 0) && (!what.closest("article").hasClass("editorial"))) {

                        if (!$("body").hasClass("single-project-page")) {
                            stickyHeadline.stick_in_parent_2({
                                parent : "article",
                                sticky_class :"is-fixed",
                                offset_top : offSetTop - 2
                            }).on("sticky_kit:unbottom", function(e) {
                                $(e.target).removeClass("bottom");
                            }).on("sticky_kit:bottom", function(e) {
                                $(e.target).addClass("bottom");
                            })
                        }

                    }

                }, 500);


                //Fussnoten

                //<a href="#_edn1" name="_ednref1" title="">[1]</a>
                //<a href="#_ednref1" name="_edn1" title="">[1]</a>

                articleWrapper.find("a:regex(name, _ednref.*)").each(function(){

                    $(this).click(function(e){

                        e.preventDefault();

                        var refLink = $(this).attr("href");
                        refLink = refLink.substring(1, refLink.length);

                        console.log(refLink);

                        var offSetTop = offSetFunction(articleWrapper);

                        var refTarget = articleWrapper.find("a[name='"+refLink+"']");

                        console.log(refTarget);

                        console.log("scrollto");
                        $('html, body').stop().animate({ scrollTop: refTarget.offset().top - offSetTop - 200}, 500);

                        refTarget.addClass("highlight");

                        setTimeout(function(){
                            refTarget.removeClass("highlight")
                        }, 4000);

                    });
                });

                //Scrollback from Footnote

                articleWrapper.find("a:regex(name, _edn.*)").each(function(){

                    $(this).click(function(e){

                        e.preventDefault();

                        var refLink = $(this).attr("href");
                        refLink = refLink.substring(1, refLink.length);

                        var offSetTop = offSetFunction(articleWrapper);

                        var refTarget = articleWrapper.find("a[name='"+refLink+"']");

                        refTarget.addClass("highlight");
                        setTimeout(function(){
                            refTarget.removeClass("highlight")
                        }, 4000);

                        console.log("scrollto");
                        $('html, body').stop().animate({ scrollTop: refTarget.offset().top - offSetTop - 200}, 500);

                    });
                });

            }


            if (!isMobilePhone) {

                what.parent().find('.container-long-text').each(function() {

                    //$(this).find("p").lettering('words');

                    columnizer($(this));

                    //fix columnizer in index georg
                    //if ($(this).closest(".index--teaser").length < 1) {

                    //}

                });
            }

            //resize flickity
            //recalc sticky
            setTimeout(function(){
                //wrapper.find('.slideshow-container').flickity('resize');

                $(document.body).trigger("sticky_kit:recalc");


                setTimeout(function(){
                    var articleOuterHeight = articleWrapper.find(".toggle").outerHeight() + articleWrapper.find(".article--content").outerHeight();

                    articleWrapper.find(".article--content").show();

                    articleWrapper.css({
                        "height":articleOuterHeight
                    });
                }, 100);

                setTimeout(function(){
                    articleWrapper.css({
                        "height":"auto"
                    });
                }, 800);

                $("html").removeClass("busy");
                $("#spinner").remove();

            }, 100);

            setTimeout(function(){
                //wrapper.find('.slideshow-container').flickity('resize');
                $(document.body).trigger("sticky_kit:recalc");
            }, 1000);

            setTimeout(function(){
                //wrapper.find('.slideshow-container').flickity('resize');
                $(document.body).trigger("sticky_kit:recalc");
            }, 2000);

            setTimeout(function(){
                //wrapper.find('.slideshow-container').flickity('resize');
                $(document.body).trigger("sticky_kit:recalc");
            }, 3000);
        }

        function toggleOpen(what, articleId) {
            var articleWrapper = what.closest("article");

            articleWrapper.find('.btn-plus').first().addClass('rotate');

            $("body").addClass("article-is-open");
            //animate image

            $("html").addClass("busy");

            var articleWrapperHeight = articleWrapper.outerHeight();

            articleWrapper.css({
                "height": articleWrapperHeight
            });

            articleWrapper.data("height", articleWrapperHeight);

            //start spinner
            var opts = {
              lines: 12 // The number of lines to draw
            , length: 100 // The length of each line
            , width: 1 // The line thickness
            , radius: 42 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 0 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.1 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // Rounds per second
            , trail: 60 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '50%' // Top position relative to parent
            , left: '50%' // Left position relative to parent
            , shadow: false // Whether to render a shadow
            , hwaccel: true // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
            }

            var spinner = new Spinner(opts).spin();

            $("body").append('<div id="spinner"></div>')
            var target = document.getElementById('spinner');
            target.appendChild(spinner.el);

            //$("#letter-plus").addClass("rotate");
            //end spinner

            console.log("click " + articleId);
            var wrapper = what.closest(".chapter");

            offSetTop = offSetFunction(what);

            //console.log(offSetTop);

            console.log("scrollto");
            $('html, body').stop().animate({ scrollTop: what.offset().top - offSetTop}, 500);

            if(typeof articleId !== "undefined") {

                $.ajax('?article=' + articleId).done(function(r) {
                    //console.log('ajax.r', r);

                    what.closest("article").find('.article--content').hide().html( $('<div>' + r + '</div>'));

                    onComplete(what);
                });
            } else {
                onComplete(what);
            }

        }


        function setupAllToggles() {
            $('main.index .toggle').each(function() {

                var articleId = $(this).data("article-id");

                $(this).off().click(function() {

                    console.log("click");

                    var articleWrapper = $(this).closest("article");

                    location.hash = '#article-'+articleId;

                    //if it is closed
                    if (!articleWrapper.hasClass("open-article")) {

                        toggleOpen($(this), articleId);

                    } else {

                        //closing cleaning up

                        articleWrapper.removeClass("open-article");
                        $(this).find('.btn-plus').first().removeClass('rotate');

                        articleWrapper.find('.article--teasertext, .index--teaser.col-xs-9.col-md-8.col-xs-offset-2').eq(0).removeClass('open');
                        articleWrapper.find('figure').eq(0).removeClass('open');

                        articleWrapper.css({
                            "height":"200vw"
                        });

                        setTimeout(function(){
                            articleWrapper.css({
                                "height":articleWrapper.data("height")+"px"
                            });
                        }, 1);

                        setTimeout(function(){
                            console.log("scrollto");
                            $('html, body').stop().animate({ scrollTop: articleWrapper.offset().top - offSetTop}, 500);
                        }, 1);

                        setTimeout(function(){
                            articleWrapper.css({
                                "height":"auto"
                            });
                            articleWrapper.find('.article--content').eq(0).hide();
                        }, 500);

                        if ($("article.open-article").length === 0) {
                            console.log("article open "+$("article.open").length);

                            $("body").removeClass("article-is-open");
                        }

                        $(this).find('.sticky-headline').trigger("sticky_kit:detach");

                    }

                })
            });

        }

        setupAllToggles();

        var hash = window.location.hash;
        if (hash && (hash.indexOf("article-") >= 0)) {

            hash = hash.replace('#',''); // strip the # at the beginning of the string
            hash = hash.replace('article-', '');

            var hashSplit = hash.split("-");

            console.log(hashSplit);

            if (hashSplit.length > 1) {
                console.log("sub double link", hashSplit);

                toggleOpen($('*[data-article-id="'+hashSplit[0]+'"]'), hashSplit[0]);

                setTimeout(function(){
                    //toggleOpen($('*[data-article-id="'+res[1]+'"]'), res[1]);
                }, 1000);

            } else {
                console.log("normal link", hashSplit);

                toggleOpen($('*[data-article-id="'+hashSplit[0]+'"]'), hashSplit[0]);

            }

        }


    }

    // SPACER FOR HEADER
    function calculateHeight() {
        $('main.index').css('top', $('.header').outerHeight() );
    }

    // RESIZE WINDOW RECALCULATE HEIGHTS
    $(window).resize(function() {
        calculateHeight();
        $(document.body).trigger("sticky_kit:recalc");
    });
    calculateHeight();


    // CUT TEASER TEXT


    // FOOTNOTES
    $('cite').each(function() {
        var width = $(window).width();
        var cite = $(this).attr('data-cite')
        var offset = $(this).offset();

        $(this).parents('article').find('.cite-output').append('<li>'+cite+'</li>')
        //console.log(cite);
        $(this).hover().append('<div class="cite-info">'+cite+'</div>')
        if($(this).offset().left > width/2) {
            $(this).find('.cite-info').css('right','0');
        } else {
            $(this).find('.cite-info').css('left',offset.left);
        }
    });

    // STICKY CHAPTERMARKER + CHAPTERMAKRER BACKGROUNDS

    console.log($(".header--banner").outerHeight() - 1);

    $(".chaptermarker").stick_in_parent({
        parent : ".chapter",
        sticky_class : "is-fixed",
        offset_top : $(".header--banner").outerHeight() - 1
    });


    if (!isMobilePhone) {

        $(document).on('scroll', function(){

            if ($('h1.header--title').length > 0) {
                var startScrolling = $('h1.header--title').outerHeight();
            } else {
                var startScrolling = 0;
            }

            if ($(document).scrollTop() > startScrolling){
                $('.header--issue__title').addClass('show-me');
            } else {
                $('.header--issue__title').removeClass('show-me');
            }

        });

    }


    var keyColor = $(".header-menu").css("background-color");

    if (!$("body").hasClass("startpage-redesign")) {
        $("body").addClass("sidebar-is-hidden");
        console.log("not front");
    } else {
        $("body").addClass("sidebar-is-visible");
    }


    $(window).scroll(function() {

        if (!(isMobilePhone && ($("#site-search-1").is(":focus") || $("#sidebar-newsletter input").is(":focus")))) {

            if($(window).scrollTop() >= 1) {
                $("body").addClass("sidebar-is-hidden");
                $("body").removeClass("sidebar-is-visible");
            }

            if($(window).scrollTop() < 1) {
                $("body").removeClass("sidebar-is-hidden");
                $("body").addClass("sidebar-is-visible");
            }

            var percentScrolled = ($(window).scrollTop()) / ($(document).height()-$(window).height())*100;

            $("#logo-plus").css({
                "top": "calc(1rem + " + percentScrolled*0.95+"vh)"
            })

        }

    });


    if (!isMobilePhone) {

        $("#logo a, #sidebar-plus").hover(
            function(){
                $("body").removeClass("sidebar-is-hidden");
                $("body").addClass("sidebar-is-visible");
            },
            function(){
            }
        )

        $("#sidebar").hover(
            function(){

            }, function(){
                if($(window).scrollTop() > 2) {
                    $("body").addClass("sidebar-is-hidden");
                    $("body").removeClass("sidebar-is-visible");
                }
            }
        )
    }

    if (isMobilePhone) {

        $("#logo-plus").on('click', function(e) {

            if ($("body").hasClass("sidebar-is-hidden")) {
                e.stopPropagation();
                e.preventDefault();
            } else {
                window.location.href = $("#logo a").attr("href");
            }

            $("body").removeClass("sidebar-is-hidden");
            $("body").addClass("sidebar-is-visible");
        })

        menuBackground = $('<div id="menu-background"></div>');
        $("body").append(menuBackground);

        menuBackground.click(function(){
            $("body").addClass("sidebar-is-hidden");
            $("body").removeClass("sidebar-is-visible");
        })
    }


    $(".embedded-video video").each(function(){
        var video = $(this);

        var button = $('<div class="mute"></div>');

        var unmute = $('<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m262.78 57.853c-5.042-2.556-11.091-2.059-15.65 1.284l-116.54 85.462h-115.59c-8.284 0-15 6.716-15 15v192.8c0 8.284 6.716 15 15 15h115.59l116.54 85.462c2.622 1.924 5.738 2.904 8.872 2.904 2.313 0 4.637-0.535 6.778-1.62 5.043-2.555 8.221-7.728 8.221-13.38v-369.53c0-5.653-3.178-10.825-8.221-13.38zm-21.78 353.31-96.629-70.861c-2.573-1.887-5.68-2.904-8.871-2.904h-105.5v-162.8h105.5c3.19 0 6.298-1.018 8.871-2.904l96.629-70.862v310.33z"/><path d="m445.91 256 61.693-61.693c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-61.693 61.693-61.693-61.693c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213l61.693 61.693-61.693 61.693c-5.858 5.857-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.393l61.693-61.693 61.693 61.693c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.393c5.858-5.857 5.858-15.355 0-21.213l-61.691-61.693z"/></svg>');

        var mute = $('<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m262.8 57.9c-5-2.6-11.1-2.1-15.6 1.3l-116.5 85.5h-115.7c-8.3 0-15 6.7-15 15v192.8c0 8.3 6.7 15 15 15h115.6l116.5 85.5c2.6 1.9 5.7 2.9 8.9 2.9 2.3 0 4.6-0.5 6.8-1.6 5-2.6 8.2-7.7 8.2-13.4v-369.7c0-5.6-3.2-10.8-8.2-13.3zm-21.8 353.3-96.6-70.9c-2.6-1.9-5.7-2.9-8.9-2.9h-105.5v-162.8h105.5c3.2 0 6.3-1 8.9-2.9l96.6-70.9v310.4z"/></svg>');

        button.append(unmute);

        button.click( function (){
            console.log(video);
            if( video.prop('muted') ) {
                video.prop('muted', false);
                button.find("svg").remove();
                button.append(mute);
            } else {
                video.prop('muted', true);
                button.find("svg").remove();
                button.append(unmute);
            }
        });

        $(this).after(button);


    });



    //https://github.com/protonet/jquery.inview
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});


    //transparent background
    var bgImageHolder = $("<div id='bg-image-holder'></div>");
    var bgImageHolderBlur = $("<div id='bg-image-holder-blur'></div>");

    $("body").append(bgImageHolder);
    $("body").append(bgImageHolderBlur);

    $(".chapter").each(function(){
        $(this).on('inview', function(event, isInView) {
            if (isInView) {
                // element is now visible in the viewport
                //console.log("element is now visible in the viewport");

                var bg = $(this).find(".chapter-image").css('background-image');
                //bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
                //console.log(bg);
                //console.log("----");

                bgImageHolder.css({
                    "background-image": bg,
                });

                bgImageHolderBlur.css({
                    "background-image": bg,
                });

                $(this).find(".chapter-image").css({
                    "opacity":0
                })

            } else {
                // element has gone out of viewport
            }
        });
    });

});
