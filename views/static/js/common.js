
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
		
	});