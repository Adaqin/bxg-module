define(["jquery","template","cookie"],function($,template){
	$(function(){
		if(location.pathname!="/dashboard/login"){
			var userInfo = JSON.parse($.cookie("userInfo"));
			var html= template("profile-tpl",userInfo);
			$('#userinfo').html(html);
		}
		
	})
	
})
