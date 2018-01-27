	$(document).ready(function(){
		// Фикмированная шапка при скролле
		$("#navig").removeClass("default");
		$(window).scroll(function(){
			if ($(this).scrollTop() > 40) {
				$("#navig").addClass("default").fadeIn('fast');
				$('.navig').css('margin-top','0');
			} else {
				$("#navig").removeClass("default").fadeIn('fast');
				$('.navig').css('margin-top','6.5rem');
			}
		});





		// для адаптива
		// window.onresize = function(){
		// 	var screenWidth=document.body.clientWidth;
		// 	if (screenWidth> 768){
		// 		$("#lessThan768").removeClass(".col-xs-6").fadeIn('fast');
		// 		$("#lessThan768").addClass(".col-xs-12").fadeIn('fast');
		// 	}
		// }
		

	});