// Селекторы
function fun3(){
    var step=0;
    var select = document.getElementById('mySelect').selectedIndex;

    	$('#move-but').click(function(event) {
            if (select==1) {
                for (var i=0; i < $('#step').val()*1; i++) {
                  step = (step)+1;
                }
                console.log(step);
                $('#snake').css({
                    top: step*10+'px',
                    transition : '1.5s'
                });


            };

            if (select==2) {
                for (var i=0; i < $('#step').val()*1; i++) {
                  step = (step)+(-1);
                }
                console.log(step);
                $('#snake').css({
                    top: step*10+'px',
                    transition : '1.5s'
                });  

            };

            if (select==3) {
                for (var i=0; i < $('#step').val()*1; i++) {
                  step = (step)+(-1);
                }
                console.log(step);
                $('#snake').css({
                    left: step*10+'px',
                    transition : '1.5s'
                });  

            };

            if (select==4) {
                for (var i=0; i < $('#step').val()*1; i++) {
                  step = (step)+1;
                }
                console.log(step);
                $('#snake').css({
                    left: step*10+'px',
                    transition : '1.5s'
                });  

            };
    		
    	});		
    }









// Селекторы
// function fun3(){
//     var step=0;
//     var select = document.getElementById('mySelect').selectedIndex;
//     if (select==1) {

//         $('#move-but').click(function(event) {
//             for (var i=0; i < $('#step').val()*1; i++) {
//               step = (step)+(-1);
//             }
//             console.log(step);
//             $('#snake').css({
//                 top: step*10+'px',
//                 transition : '1.5s'
//             });
//         });     
//     }

//     if (select==2) {
//         $('#move-but').click(function(event) {
//             for (var i=0; i < $('#step').val()*1; i++) {
//               step = (step)+(-1);
//             }
//             console.log(step);
//             $('#snake').css({
//                 top: step*10+'px',
//                 transition : '1.5s'
//             });
//         });     
//     } 

//     if (select==3) {
//         alert('Выбрана опция Влево');
//     } 

//     if (select==4) {
//         alert('Выбрана опция Вправо');
//     } 
// }
