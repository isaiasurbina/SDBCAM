!function(){function t(t,i,e,n,o,r,s){try{var a=t[r](s),l=a.value}catch(d){return void e(d)}a.done?i(l):Promise.resolve(l).then(n,o)}function i(i){return function(){var e=this,n=arguments;return new Promise(function(o,r){var s=i.apply(e,n);function a(i){t(s,o,r,a,l,"next",i)}function l(i){t(s,o,r,a,l,"throw",i)}a(void 0)})}}function e(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function o(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,i,e){return i&&o(t.prototype,i),e&&o(t,e),t}(self.webpackChunkSDB_CAM=self.webpackChunkSDB_CAM||[]).push([[7438],{7438:function(t,o,s){"use strict";s.r(o),s.d(o,{ion_item_option:function(){return m},ion_item_options:function(){return c},ion_item_sliding:function(){return g}});var a=s(2322),l=s(7505),d=s(4843),p=s(1843),m=function(){function t(i){n(this,t),(0,a.r)(this,i),this.disabled=!1,this.expandable=!1,this.type="button",this.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()}}return r(t,[{key:"render",value:function(){var t,i=this.disabled,n=this.expandable,o=void 0===this.href?"button":"a",r=(0,l.b)(this),s="button"===o?{type:this.type}:{download:this.download,href:this.href,target:this.target};return(0,a.h)(a.H,{onClick:this.onClick,class:(0,d.c)(this.color,(t={},e(t,r,!0),e(t,"item-option-disabled",i),e(t,"item-option-expandable",n),e(t,"ion-activatable",!0),t))},(0,a.h)(o,Object.assign({},s,{class:"button-native",part:"native",disabled:i}),(0,a.h)("span",{class:"button-inner"},(0,a.h)("slot",{name:"top"}),(0,a.h)("div",{class:"horizontal-wrapper"},(0,a.h)("slot",{name:"start"}),(0,a.h)("slot",{name:"icon-only"}),(0,a.h)("slot",null),(0,a.h)("slot",{name:"end"})),(0,a.h)("slot",{name:"bottom"})),"md"===r&&(0,a.h)("ion-ripple-effect",null)))}},{key:"el",get:function(){return(0,a.i)(this)}}]),t}();m.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};var h,c=function(){function t(i){n(this,t),(0,a.r)(this,i),this.ionSwipe=(0,a.e)(this,"ionSwipe",7),this.side="end"}var o;return r(t,[{key:"fireSwipeEvent",value:(o=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.ionSwipe.emit({side:this.side});case 1:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var t,i=(0,l.b)(this),n=(0,p.m)(this.side);return(0,a.h)(a.H,{class:(t={},e(t,i,!0),e(t,"item-options-".concat(i),!0),e(t,"item-options-start",!n),e(t,"item-options-end",n),t)})}},{key:"el",get:function(){return(0,a.i)(this)}}]),t}();c.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};var g=function(){function t(i){n(this,t),(0,a.r)(this,i),this.ionDrag=(0,a.e)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}var o,d,m,c,g;return r(t,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(g=i(regeneratorRuntime.mark(function t(){var i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.item=this.el.querySelector("ion-item"),t.next=3,this.updateOptions();case 3:return t.next=5,Promise.resolve().then(s.bind(s,8520));case 5:this.gesture=t.sent.createGesture({el:this.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(t){return i.canStart(t)},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.disabledChanged();case 7:case"end":return t.stop()}},t,this)})),function(){return g.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,h===this.el&&(h=void 0)}},{key:"getOpenAmount",value:function(){return Promise.resolve(this.openAmount)}},{key:"getSlidingRatio",value:function(){return Promise.resolve(this.getSlidingRatioSync())}},{key:"open",value:(c=i(regeneratorRuntime.mark(function t(i){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.item){t.next=2;break}return t.abrupt("return");case 2:(e=this.getOptions(i))&&(void 0===i&&(i=e===this.leftOptions?"start":"end"),i=(0,p.m)(i)?"end":"start",this.openAmount<0&&e===this.leftOptions||this.openAmount>0&&e===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame(function(){n.calculateOptsWidth(),h=n.el,n.setOpenAmount("end"===i?n.optsWidthRightSide:-n.optsWidthLeftSide,!1),n.state="end"===i?8:16})));case 4:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)})},{key:"close",value:(m=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setOpenAmount(0,!0);case 1:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)})},{key:"closeOpened",value:(d=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",void 0!==h&&(h.close(),h=void 0,!0));case 1:case"end":return t.stop()}},t)})),function(){return d.apply(this,arguments)})},{key:"getOptions",value:function(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}},{key:"updateOptions",value:(o=i(regeneratorRuntime.mark(function t(){var i,e,n,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=this.el.querySelectorAll("ion-item-options"),e=0,this.leftOptions=this.rightOptions=void 0,n=0;case 4:if(!(n<i.length)){t.next=18;break}if(void 0===(o=i.item(n)).componentOnReady){t.next=12;break}return t.next=9,o.componentOnReady();case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=o;case 13:r=t.t0,"start"==((0,p.m)(r.side)?"end":"start")?(this.leftOptions=r,e|=1):(this.rightOptions=r,e|=2);case 15:n++,t.next=4;break;case 18:this.optsDirty=!0,this.sides=e;case 19:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"canStart",value:function(t){return!(("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)||(h&&h!==this.el?(this.closeOpened(),1):!this.rightOptions&&!this.leftOptions))}},{key:"onStart",value:function(){h=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}},{key:"onMove",value:function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)}},{key:"onEnd",value:function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide,n=this.openAmount>0==!(i<0),o=Math.abs(i)>.3,r=Math.abs(this.openAmount)<Math.abs(e/2);u(n,o,r)&&(e=0);var s=this.state;this.setOpenAmount(e,!0),0!=(32&s)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&s)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}},{key:"calculateOptsWidth",value:function(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}},{key:"setOpenAmount",value:function(t,i){var e=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout(function(){e.state=2,e.tmr=void 0},600),h=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d(".concat(-t,"px,0,0)"),this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}}},{key:"getSlidingRatioSync",value:function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}},{key:"render",value:function(){var t,i=(0,l.b)(this);return(0,a.h)(a.H,{class:(t={},e(t,i,!0),e(t,"item-sliding-active-slide",2!==this.state),e(t,"item-sliding-active-options-end",0!=(8&this.state)),e(t,"item-sliding-active-options-start",0!=(16&this.state)),e(t,"item-sliding-active-swipe-end",0!=(32&this.state)),e(t,"item-sliding-active-swipe-start",0!=(64&this.state)),t)})}},{key:"el",get:function(){return(0,a.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),t}(),u=function(t,i,e){return!i&&e||t&&i};g.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"}}])}();