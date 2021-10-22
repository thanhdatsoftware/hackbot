!function(e){"use strict";var t=function(t,a){this.element=e(t),this.options=a,this.xhr=null,this.xhr_cache=[],this.lock_action=!1,this.unique=this.element.data("unique"),this.data={filter:0,filter_type:"all",current_page:1,attribute:window[this.unique]||{}},this.ajax_mode=this.data.attribute.pagination_mode,this.header=this.element.find(".jeg_block_heading"),this.container=this.element.find(".jeg_block_container"),this.nav_block=this.element.find(".jeg_block_navigation"),this.ad_code=this.element.find(".jeg_ad_code").val(),this.nav_next=null,this.nav_prev=null,this.module_overlay=e(t).find(".module-overlay"),this.load_more_block=e(t).find(".jeg_block_loadmore"),"nextprev"===this.ajax_mode&&(this.nav_next=this.nav_block.find(".next"),this.nav_prev=this.nav_block.find(".prev"),this.nav_next.on("click",e.proxy(this.click_next,this)),this.nav_prev.on("click",e.proxy(this.click_prev,this))),"loadmore"!==this.ajax_mode&&"scrollload"!==this.ajax_mode||(this.nav_next=this.nav_block.find(".jeg_block_loadmore > a"),this.nav_next.on("click",e.proxy(this.load_more,this))),"scrollload"===this.ajax_mode&&(this.load_limit=this.data.attribute.pagination_scroll_limit,this.load_scroll()),this.masonry_init(),this.init(),this.element.trigger("jnews_module_init",[this])};t.DEFAULTS={},t.prototype.init=function(){this.element.find(".jeg_subcat").okayNav({swipe_enabled:!1,threshold:80}),this.assign_header()},t.prototype.load_scroll=function(){var e=this;e.nav_next.hasClass("disabled")||(e.load_limit>e.data.current_page||0==e.load_limit)&&e.nav_next.waypoint((function(){e.data.current_page=e.data.current_page+1,e.request_ajax("scroll"),this.destroy()}),{offset:"100%",context:window})},t.prototype.click_next=function(t){var a=this.nav_next;t.preventDefault(),e(a).hasClass("disabled")||this.lock_action||(this.data.current_page=this.data.current_page+1,this.request_ajax("next"))},t.prototype.click_prev=function(t){var a=this.nav_prev;t.preventDefault(),e(a).hasClass("disabled")||this.lock_action||(this.data.current_page=this.data.current_page-1,this.request_ajax("prev"))},t.prototype.load_more=function(t){var a=this.nav_next;t.preventDefault(),e(a).hasClass("disabled")||this.lock_action||(this.data.current_page=this.data.current_page+1,this.request_ajax("more"))},t.prototype.assign_header=function(){e(this.header).on("click",".subclass-filter",e.proxy(this.subclass_click,this))},t.prototype.subclass_click=function(t){var a=t.target;t.preventDefault(),this.lock_action||(this.header.find(".subclass-filter").removeClass("current"),e(a).addClass("current"),this.data.filter=e(a).data("id"),this.data.filter_type=e(a).data("type"),this.data.current_page=1,this.request_ajax("subclass"))},t.prototype.request_ajax=function(t){var a=this;a.lock_action=!0;var o={action:jnewsoption.module_prefix+a.data.attribute.class,module:!0,data:a.data},s=a.cache_get(o);s?(a.before_ajax_request(t,!1),setTimeout((function(){a.load_ajax(t,o,s),a.element.trigger("jnews_module_ajax")}),100)):(a.before_ajax_request(t,!0),a.xhr=e.ajax({url:jnews_ajax_url,type:"post",dataType:"json",data:o,success:function(e){a.load_ajax(t,o,e),a.cache_save(o,e),a.element.trigger("jnews_module_ajax")}}))},t.prototype.cache_get=function(e){for(var t=JSON.stringify(e),a=0;a<this.xhr_cache.length;a++)if(this.xhr_cache[a].param==t)return this.cache_prepare(this.xhr_cache[a].result);return!1},t.prototype.cache_prepare=function(t){t.content="<div>"+t.content+"</div>";var a=e(t.content);return a.find("img").each((function(){var t=e(this).data("src");e(this).attr("src",t).removeClass("lazyload").addClass("lazyloaded")})),t.content=a.html(),t},t.prototype.cache_save=function(e,t){var a=JSON.stringify(e);this.xhr_cache.push({param:a,result:t})},t.prototype.load_ajax=function(e,t,a){switch(this.lock_action=!1,this.ajax_mode){case"loadmore":this.load_ajax_load_more(a,e);break;case"scrollload":this.load_scroll_more(a,e);break;case"nextprev":default:this.load_ajax_next_prev(a,e)}jnews.like&&jnews.like.init(),jnews.share&&jnews.share.init()},t.prototype.before_ajax_request=function(e,t){this.element.removeClass("loaded next prev more scroll subclass").addClass("loading"),"next"!==e&&"prev"!==e&&"subclass"!==e||!t||this.module_overlay.show(),"more"!==e&&"scroll"!==e||this.load_more_block.find("a").text(this.load_more_block.find("a").data("loading")).addClass("active")},t.prototype.after_ajax_request=function(e){this.element.removeClass("loading").addClass("loaded").addClass(e),"next"!==e&&"prev"!==e&&"subclass"!==e||this.module_overlay.hide(),"more"!==e&&"scroll"!==e||(this.load_more_block.find("a").text(this.load_more_block.find("a").data("load")).removeClass("active"),void 0!==this.load_more_block.find("a").data("icon")&&this.load_more_block.find("a").html(this.load_more_block.find("a").html()+' <i class="fa '+this.load_more_block.find("a").data("icon")+'"></i>'))},t.prototype.replace_content=function(t){this.container.children().each((function(){e(this).hasClass("module-overlay")||e(this).remove()})),this.container.prepend(t)},t.prototype.load_ajax_next_prev=function(t,a){this.replace_content(t.content),null!==this.nav_next&&(t.next?this.nav_next.removeClass("disabled"):this.nav_next.addClass("disabled")),null!==this.nav_prev&&(t.prev?this.nav_prev.removeClass("disabled"):this.nav_prev.addClass("disabled")),t.next||t.prev?null!==this.nav_prev&&this.nav_next.parent().removeClass("inactive"):null!==this.nav_next&&this.nav_next.parent().addClass("inactive"),this.after_ajax_request(a),this.masonry_init(),e(window).trigger("resize")},t.prototype.load_ajax_load_more=function(t,a){var o=this,s=e(t.content),n=0;s.each((function(){(e(this).hasClass("jeg_ad_module")&&o.ad_code&&e(this).find(".ads-wrapper").html(o.ad_code),e(this).hasClass("jeg_post"))?e(this).addClass("jeg_ajax_loaded anim_"+n):e(this).find(".jeg_post").each((function(){e(this).addClass("jeg_ajax_loaded anim_"+n),n++}));n++})),o.container.find(".jeg_post").removeClass("jeg_ajax_loaded"),o.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"),1==o.data.current_page?o.replace_content(s):o.element.find(".jeg_load_more_flag").append(s),t.next?o.nav_next.removeClass("disabled"):o.nav_next.addClass("disabled"),o.after_ajax_request(a),o.masonry_load_more(s),e(window).trigger("resize")},t.prototype.load_scroll_more=function(t,a){var o=this,s=e(t.content),n=0;s.each((function(){e(this).hasClass("jeg_post")?e(this).addClass("jeg_ajax_loaded anim_"+n):e(this).find(".jeg_post").each((function(){e(this).addClass("jeg_ajax_loaded anim_"+n),n++}));n++})),o.container.find(".jeg_post").removeClass("jeg_ajax_loaded"),o.container.find(".jeg_ad_module").removeClass("jeg_ajax_loaded"),1==o.data.current_page?o.container.html("").html(s):o.element.find(".jeg_load_more_flag").append(s),t.next?o.nav_next.removeClass("disabled"):o.nav_next.addClass("disabled"),o.after_ajax_request(a),o.masonry_load_more(s),e(window).trigger("resize"),setTimeout((function(){o.load_scroll()}),500)},t.prototype.masonry_load_more=function(e){var t=this;t.container.find(".jeg_posts_masonry").length&&setTimeout((function(){t.masonry.isotope("appended",e)}),150)},t.prototype.masonry_init=function(){var t=this;t.container.find(".jeg_posts_masonry").length&&(setTimeout((function(){t.masonry=t.container.find(".jeg_posts_masonry .jeg_posts").isotope({itemSelector:".jeg_post",layoutMode:"masonry"}),t.masonry.imagesLoaded().progress((function(){t.masonry.isotope("layout")}))}),150),e(window).on("resize",(function(){setTimeout((function(){t.masonry.isotope("layout")}),1e3)})))};var a=e.fn.jmodule;e.fn.jmodule=function(a){return e(this).each((function(){var o=e(this),s=e.extend({},t.DEFAULTS,o.data(),"object"==typeof a&&a),n=o.data("jeg.module");n||o.data("jeg.module",n=new t(this,s))}))},e.fn.jmodule.Constructor=t,e.fn.jmodule.noConflict=function(){return e.fn.jmodule=a,this},e(".jeg_module_hook").jmodule()}(jQuery);