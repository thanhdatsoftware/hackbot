!function(e){"use strict";({init:function(t){this.container=void 0===t?e("body"):t,this.menu=e(".jeg_subscribe"),this.menuButton=this.menu.find("button.dl-btn"),this.menuForm=this.menu.find(".jeg_subscribe_form"),this.checkboxField=this.menu.find('input[type="checkbox"]'),this.setEvent()},setEvent:function(){var t=this;0!==t.menuButton.length&&t.menuButton.on("click",(function(n){t.toggleForm(e(this).data("subscribe-id"))})),0!==t.menuForm.length&&(t.menuForm.find("button.close").focus((function(){e(this).blur()})),t.menuForm.find("form").submit((function(n){n.preventDefault(),t.ajaxSubscribe(e(this))}))),0!==t.checkboxField.length&&t.checkboxField.on("change",(function(){var t=e(this).parents().find(".jeg_subscribe_form"),n=t.find('input[type="checkbox"]').length,i=t.find('input[type="checkbox"]:checked').length;t.find('button[type="submit"]').attr("disabled",i!==n)}))},toggleForm:function(t){var n=this;n.menuForm.each((function(){e(this).data("subscribe-id")===t&&e(this).addClass("show")})),n.menuForm.find("button.close").on("click",(function(e){e.preventDefault(),n.menuForm.hasClass("show")&&n.menuForm.removeClass("show")})),e(n.menuForm).on("click",(function(t){n.menuForm.hasClass("show")&&(e(t.target).parents().hasClass("modal-dialog")||n.menuForm.removeClass("show"))}))},ajaxSubscribe:function(e){var t=e.find('input[name="action"]'),n=e.find('input[type="email"]'),i=e.find('input[name="file_id"]'),s=e.find('input[name="after_submit"]'),a=e.parents().find(".jeg_subscribe_form").data("subscribe-id"),o=e.find('input[name="jnews-subscribe-nonce"]'),r={action:t.val(),nonce:o.val(),email:n.val(),after_submit:s.val(),form_id:a,file_id:i.val()};this.do_ajax(r,e)},do_ajax:function(t,n){var i=this,s=n.find(".form-message");if(s.html(""),""===t.email)s.html("<p class='alert alert-error'> Email Required </p>");else{var a=n.find('button[type="submit"]').html();n.find('button[type="submit"]').html('<i class="jnews-spinner fa fa-spinner fa-pulse active"></i>'),e.ajax({url:jnews_ajax_url,type:"post",dataType:"json",data:t,success:function(e){var t=!0,o="";for(var r in e)0==e[r].response&&(t=!1),t?o="<p class='alert alert-success'>"+e[r].string+"</p>":0==e[r].response&&('<i class="fa fa-times" aria-hidden="true"></i>'==e[r].string&&(e[r].string+=" "+jnews_subscribe.action_failed),o="<p class='alert alert-warning'>"+e[r].string+"</p>");s.html(o),n.find('button[type="submit"]').html(a),n.trigger("reset"),i.checkboxField.trigger("change")}})}}}).init()}(jQuery);