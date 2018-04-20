// Движение
let step = 0;
let step_result_horizontal = 0;
let step_result_vertical = 0;
let move = 0;
$('#mySelect').change(function(event) {
	move = $('#mySelect option:selected').text();
});

$('#move-but').click(function(event) {
	step = parseInt(20*($('#step').val()));

	if (move=='Вниз') {
		step_result_vertical = step+step_result_vertical;
		$('#snake').css({
			top: step_result_vertical,
			transform: 'rotate(0deg)'
		});
	}else if (move=='Вверх') {
		step_result_vertical = step_result_vertical-step;
		$('#snake').css({
			top: step_result_vertical,
			transform: 'rotate(180deg)'
		});
	}else if (move=='Влево') {
		step_result_horizontal = step_result_horizontal-step;
		$('#snake').css({
			left: step_result_horizontal,
			transform: 'rotate(90deg)'

		});
	}else if (move=='Вправо') {
		step_result_horizontal = step+step_result_horizontal;
		$('#snake').css({
			left: step_result_horizontal,
			transform: 'rotate(-90deg)'
		});
	}
});


// Перо (active/deactive)
var check = false;
$(function() {
$( "#pen-check" ).on( "click", function() {
	if($(this).is(":checked")) {
		check = true;
	}else {
		check = false;
	}
})
});


var i = 0;
$('#move-but').click(function(event) {
	if (check){
		var clone, original = $('.clone');
		var snake = document.getElementById('snake');
		var pos_y = snake.offsetTop;
		var pos_x = snake.offsetLeft;
		i = i+1;

		clone = original.clone();
		clone.appendTo('body');
		clone.removeAttr('class');
		clone.addClass('clone-child clone-child-'+i);
		$('.clone-child-'+i).css({
			top: pos_y,
			left: pos_x,
			background: rgb,
			opacity : a
		});

		$('.clone-child').click(function(event) {
			$(this).remove();
		});
	}

});


// Цветовой круг
var r = $('#r').val()
var g = $('#g').val()
var b = $('#b').val()
var a = $('#a').val()
var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

function rgba(){
	r = $('#r').val()
	g = $('#g').val()
	b = $('#b').val()
	a = $('#a').val()
	rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	$('#rgba-data').text("rgba("+r+"; "+ g+"; "+ b+"; "+ a+";"+")");

	$('.color-box').css({
		background: rgb,
		opacity : a
	});
}


//Открыть настройки (для моб.)
var click_check = true;
   $('#open-settings').click(function() {
       if(click_check) {
          $(this).text('Закрыть');
          $('.block-2').css({
          	display: 'block'
          });

          $('.command-panel').css({
          	marginTop: '25vh'
          });
       }
       else {
          $(this).text('Открыть настройки');
          $('.block-2').css({
          	display: 'none'
          });

          $('.command-panel').css({
          	marginTop: '50vh'
          });
       }

       click_check = !click_check;
   });
