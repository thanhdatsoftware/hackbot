jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
	$('.misha_loadmore').click(function(){
		var shortcode_name = $(this).attr('data-sc-name');
		var shortcode_max_pages = $(this).attr('data-sc-max-pages');

	

		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : misha_loadmore_params.current_page,
			'shortcode_name': shortcode_name,
		};
		if ( misha_loadmore_params.current_page >= shortcode_max_pages ) {
			button.remove(); // if last page, remove the button
			return;
		}
		else{
			$.ajax({ // you can also use $.post here
				url : misha_loadmore_params.ajaxurl, // AJAX handler
				data : data,
				type : 'POST',
				beforeSend : function ( xhr ) {
					button.text('ĐANG TẢI...'); // change the button text, you can also add a preloader image
				},
				success : function( data ){
					if( data ) { 
						button.text( 'XEM TIẾP' ).before(data); // insert new posts
						misha_loadmore_params.current_page++;
	
						if ( misha_loadmore_params.current_page >= shortcode_max_pages ) 
							button.remove(); // if last page, remove the button
	
						// you can also fire the "post-load" event here if you use a plugin that requires it
						// $( document.body ).trigger( 'post-load' );
						jQuery(".show-call-back-menu").on("click",myFun);
						myFun();
						
					} else {
						button.remove(); // if no data, remove the button as well
					}
					
				}
			});
		}
	});


	

});
