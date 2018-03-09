// JavaScript Document
$(function() {
	function productHover(){
		$('.productlist').find('li').hover(function(){
			$(this).css({'background':'#f4f4f4'});
			$(this).find('.content a').css({'color':'#132f41'});
			$(this).find('h3').css({'background':'#132f41','color':'#FFF'});
			$(this).find('.icon1').addClass('icon1_ac');
			$(this).find('.icon2').addClass('icon2_ac');
			$(this).find('.icon3').addClass('icon3_ac');
			$(this).find('.icon4').addClass('icon4_ac');
			$(this).find('.icon5').addClass('icon5_ac');
			$(this).find('.icon6').addClass('icon6_ac');
			
		},function(){
			$(this).css({'background':''});	
			$(this).find('h3').css({'background':'#dce0e3','color':'#132f41'});
			$(this).find('.content a').css({'color':'#aaaaaa'});
			$(this).find('.icon1').removeClass('icon1_ac');
			$(this).find('.icon2').removeClass('icon2_ac');
			$(this).find('.icon3').removeClass('icon3_ac');
			$(this).find('.icon4').removeClass('icon4_ac');
			$(this).find('.icon5').removeClass('icon5_ac');
			$(this).find('.icon6').removeClass('icon6_ac');
		});		
	}
	function showli(i) {
		$(".dx_div2_con ul").children().eq(i).click(function() {
			$(".dx_div2_con ul a").removeClass("active");
			$(this).addClass("active");
			$(".tab").hide();
			$(".tab" + i).show();
		})
	}
	function setHeight(){
		var window_H = $(window).height();
		var top_H = $('.pagetop').height()-72;
		var height = window_H - top_H+'px';
		//兼容ie7
		/*var browser=navigator.appName;
		var b_version=navigator.appVersion 
		var version=b_version.split(";"); 
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
		{ 
		height=window_H +'px';
		} */
		//这里结束
		$('.banner').css({height:height});
	};
	$(window).scroll(function(){
		 var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if(oScrollTop > 72){
			$('.pagetop').slideUp(100); 
			$('.gonggao').slideUp(100);
			topnav();
		 }else{
			$('.pagetop').slideDown(100);
			$('.gonggao').slideDown(100);
			notopnav();
		 }
	});
	function topnav(){
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var y =oEvent.clientY;
			if(y<72){
				$('.pagetop').slideDown(100);
			}else{
				if($('.child_nav').is(":visible")){
					//$('.pagetop').slideDown(100);
					if(y>430){
						$('.pagetop').slideUp(100); 
						$('.gonggao').slideUp(100); 
					}
				}else{
					$('.pagetop').slideUp(100); 
					$('.gonggao').slideUp(100); 
				}
			}
		};	
	};
	function notopnav(){
		document.onmousemove=function(ev){
			
		};
	};
	/*客户评价轮播*/
	jQuery(".judgebox").slide({
		titCell:".circle_btns a",
		mainCell: ".judgelist",
		effect: "fade",
		autoPlay: true,
		delayTime: 400
		//effect: "leftLoop"
	});
	window.onresize=function(){setHeight();};
	showli(0);showli(1);showli(2);showli(3);showli(4);showli(5);showli(6);setHeight();
});