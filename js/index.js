$(function(){
	     
		function loop(){
            if(bagin_index > thump){
                bagin_index=0;
            }   
            $(".icon li:eq(" + bagin_index + ")").addClass("on").siblings().removeClass("on");  
            $(".thump li:eq(" + bagin_index + ")").addClass("on").siblings().removeClass("on");
            bagin_index++;            
//          time=setTimeout("loop()",speed);
        }
	var speed=2000,//轮播快慢时间
		time,//时间存储器
		i,
    	nextIndex = 1,
		activeItem = $(".hover_li"),
    	activeIndex = activeItem.data("index"),
    	max = 5,
    	nextItem = null
	function loop(){
        if(nextIndex > max){
			nextIndex = 1;
		}
		
		console.log(nextIndex)
        activeItem.removeClass("step_active");
		nextItem = $(".hover_li[data-index="+ nextIndex +"]").addClass("step_active");
		$(".step_tab_cons").hide();
		$(".step_tab_cons").eq(nextIndex-1).show();
		$(".step_tab_con li p").each(function(){
			var he = $(this).height();
			$(this).css("margin-top",-he/2);
		})
		nextIndex++;
        time=setTimeout(loop,speed);
	}
    
    $(".hover_li").mouseover(function(){
       	clearTimeout( time );
        activeItem.removeClass("step_active");
		$(this).addClass("step_active");
		i = $(this).index();
		$(".step_tab_cons").hide();
		$(".step_tab_cons").eq(i/2).show();
		$(".step_tab_con li p").each(function(){
			var he = $(this).height();
			$(this).css("margin-top",-he/2);
		})
    }).mouseout(function(){
        activeItem.removeClass("step_active");
    	nextIndex = ($(this).data("index"))+1
        time=setTimeout(loop,speed);
    });
	
	var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
	        nextEl: '.swiper-button-next',
	    },
	    on: {
		    slideChangeTransitionEnd: function(){
		      time=setTimeout(loop,speed);//切换结束时，告诉我现在是第几个slide
		    },
		  },
    });
	
	$(".close").on("click",function(){
		$(".popup").hide();
	})
	
	$(".popup input").bind("focus",function(){
		$(this).css("border-color","#3771ef")
	})
	$(".popup input").bind("blur",function(){
		$(this).css("border-color","#cccccc")
	})
	
	$(".person-center").on("click",function(){
		$(".popup").show()
	})
	
	$(".ob_account_login").on("click",function(){
		$(".popup_con").hide()
		$(".account_login").show()
	})
	$(".ob_jur").on("click",function(){
		$(".popup_con").hide()
		$(".jurisdiction").show()
	})
	$(".ob_quick_login").on("click",function(){
		$(".popup_con").hide()
		$(".quick_login").show()
	})
})
