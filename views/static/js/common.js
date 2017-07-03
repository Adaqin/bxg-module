define(["jquery","template","nprogress","cookie"],function($,template,NProgress){
	NProgress.start();
	NProgress.done();
	$(document).ajaxStart(function(){
		NProgress.start();
	})
	$(document).ajaxStop(function(){
		NProgress.done();
	})
	$(function(){
		if(location.pathname!="/dashboard/login"){
			//完善登录功能, 用户未登录时, 跳转到登录页面
			if(!$.cookie("PHPSESSID")){
				location.href="/dashboard/login";
			}else{
				var userInfo = JSON.parse($.cookie("userInfo"));
				var html= template("profile-tpl",userInfo);
				$('#userinfo').html(html);
			}
			
		}
		//点击退出,退出登录
		$("#loginout").click(function(){
			$.ajax({
				url: "api/logout",
				type: "post",
				success: function(data){
					if(data.code==200){
						location.href="/dashboard/login";
					}
				}
			})
		})
		
	})
	
})
