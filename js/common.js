$(document).ready(function() {

	$('.js-account').on('click', function() {
	 $(".create-account").addClass("is-open");
	 return false
	});
	// close create-account
	$('.js-create-account-close').on('click', function() {
	 $(".create-account").removeClass("is-open");
	 return false
	});
	// modal popup
	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").hide();
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").fadeOut(200);
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$("."+popup).parent().fadeIn(200);
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").fadeOut(200);
			$("body").removeClass("has-open-popup")
			return false;
		});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
	} modals();

});


