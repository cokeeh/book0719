		/*팝업 창*/
		$(function(){
			$("#popup_box > span").click(function(){
				$("#popup").stop().hide();
			});
		});

		/*햄버거 메뉴*/
		$(function(){
       $("#hamburger").mouseenter(function(){  //햄버거에 마우스를 올리면
         $("#hamburger").children("#menu").stop().fadeIn("fast"); //햄버거의 메뉴가 보임
       }).mouseleave(function(){  //햄버거에서 마우스가 벗어나면
         $("#menu").stop().fadeOut("fast"); //햄버거의 메뉴가 사라짐
       });
     });