
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });



	define(["jquery","template","cookie"], function($,template) {
		$(function(){
			if(location.pathname != "/dashboard/login"){
				if(!$.cookie("PHPSESSID")){
					location.href="/dashboard/login";
				}
		 	  
			var userinfo = JSON.parse($.cookie("userinfo"));
		   
			var html=template("profile_tpl",userinfo);
			$("#profile").html(html);
		 }
	  })

	  //点击退出事件
	  $("#logout").click(function(){
		  $.ajax({
			  type: "post",
			  url: "/api/logout",
			  success: function (data) {
				 if(data.code==200){
                    location.href="/dashboard/login";
				 }
			  }
		  });
	  });	

	 //点击导航栏收缩事件
	  $(".lesson").click(function(){
		  $(this).children("ul").stop().slideToggle();
	  });

	  //让每个a标签跳转时有高亮效果
	   $(".navs a").each(function(index,e){
           if($(e).attr("href")==location.pathname){
               $(e).addClass("active");
		   }
	   });
	});