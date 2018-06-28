function vipAjax(){
	    var data = JSON.parse(localStorage.getItem('data'));
	    console.log(data);
	    
	    //获取数据
	    if(data){
	    	var BASE_URL = 'https://instlikesdk.gpowers.net/api/sessions';
	        var TOKEN = '3d8766fbea67ce310c33a3c70dadd642a928245c';
	    	//获取参数 判断是否为会员
	    	var img_url = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
	    	console.log(img_url);
		    var name = data.entry_data.ProfilePage[0].graphql.user.username;
		    var followerCount = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
		    var followingCount = data.entry_data.ProfilePage[0].graphql.user.edge_follow.count;
		    var instUserId = data.entry_data.ProfilePage[0].graphql.user.id;
		    var instaFullName = data.entry_data.ProfilePage[0].graphql.user.full_name;
		    var isPrivate = data.entry_data.ProfilePage[0].graphql.user.is_private;
		    console.log(isPrivate);
		    //三目运算符
		    isPrivate = "false" ? isPrivate = "0" : isPrivate = "1";
		    console.log(isPrivate);
		    var productId = "com.fastboom.commenter.android";
		    var userType = "0";
		    var clientType = "3";
		    var version = "1.0";
		    var signature = "";
		    var str = TOKEN + instUserId + name + version + clientType + userType + productId;
		    console.log(str);
		    var gsid = hex_sha1(str);
		    console.log(gsid);
			//页面赋值，加载用户信息
			//$(".userName").html(userName);
			var obj = {
				"clientType":clientType,
				"followerCount":followerCount,
				"followingCount":followingCount,
				"gsid":gsid,
				"instUserId":instUserId,
				"instaFullName":instaFullName,
				"isPrivate":isPrivate,
			    "name":name,
			    "productId":productId,
			    "signature":signature,
			    "userType":userType,
			    "version":version
			   };
			var str = JSON.stringify(obj);
			console.log(str);
			 //var sha = hex_sha1('3d8766fbea67ce310c33a3c70dadd642a928245c7201895616victorafra551.030com.fastboom.commenter.android') 
			 $.ajax({
			  contentType: 'application/json;charset=UTF-8',
		      type: "POST",
		      url: "https://instlikesdk.gpowers.net/api/sessions?gsid=e7c5e1301696426840b67935102ec42c7fdf33dc",
		      data: str,
		      dataType: "json",
		      beforeSend: function(xhr) {
		      	//跨域访问是否携带cookie，后台必须设置指定域
		            //xhr.withCredentials = true;
		       },
		      //cache: false,
		      success: function(data) {
		      	var dataStr = JSON.stringify(data);
		      	console.log(data);
		      	localStorage.setItem('vipData', dataStr);
		      	//setCookie("user","zhangjun");
//		      	if(data.followVipInfo){
//		      		//控制vip页面显示或隐藏
//		      		$(".noVip").css("display","none");
//		      		$(".haveVip").css("display","flex");
//		      		
//		      		//计算时间,剩余天数
//		      		var endTime = data.followVipInfo.vipEndTime;
//		      		var nowTime = Date.parse(new Date());
//		      		var overTime = endTime - nowTime;
//		      		var days = Math.floor(overTime / (1000 * 60 * 60 * 24));
//		      		
//		      		//创建节点
//        			var div = '<div class="followInfo"><div style="width:100%;height:0.4rem;display: flex;justify-content: flex-start;align-items: center;margin:0.15rem 0;padding-left:0.16rem"><div><img src="'+
//        			img_url+'" style="width:0.4rem;height:0.4rem;border-radius: 50%;margin-right:0.1rem"/></div><div><p class="white mb0">'+
//        			name+'</p><p class="white mb0 follower_count">'+followerCount+'</p></div></div><div style="width:100%;height:0.4rem;display: flex;justify-content: space-around;align-items: center;"><div><span class="white smallTxt">剩余天数 : </span><span class="white s26 overTime">'+
//        			days+'</span></div><div class="re-money smallTxt">立即续费</div></div></div><div style="width:100%;height:1.2rem;margin-top:0.3rem;background: url(img/like_bu_36.png) no-repeat;background-size: 100% 100%;"></div>';
//        			$(".followVip").append(div);
//		      		//赋值
////		      		$('#user_imgUrl').attr("src",img_url);
////		      		$('.username').html(name);
////		      		$('follower_count').html(followerCount);
////		      		$("overTime").html(days);
//		      	}else{
//		      		$(".noVip").css("display","block");
//		      		$(".haveVip").css("display","none");
//		      	}
		      },
		      error: function(err) {
		      	console.log(err);
		      },
		      complete: function(XMLHttpRequest, status) { 
		      	//请求完成后最终执行参数　
		      }
  })
 }
//	    else{
// 	$(".noVip").css("display","block");
//  $(".haveVip").css("display","none");
// }
}
function followVip(){
	var data = JSON.parse(localStorage.getItem('data'));
	if(data){
		var vipData = JSON.parse(localStorage.getItem('vipData'));
		console.log(vipData);
		var img_url = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
		var name = data.entry_data.ProfilePage[0].graphql.user.username;
	    var followerCount = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
		console.log(vipData);
	if(vipData.followVipInfo){
  		//控制vip页面显示或隐藏
  		$(".noVip").css("display","none");
  		$(".haveVip").css("display","flex");
  		
  		//计算时间,剩余天数
  		var endTime = vipData.followVipInfo.vipEndTime;
  		var nowTime = Date.parse(new Date());
  		var overTime = endTime - nowTime;
  		var days = Math.floor(overTime / (1000 * 60 * 60 * 24));
  		
  		//创建节点
		var div = '<div class="followInfo"><div style="width:100%;height:0.4rem;display: flex;justify-content: flex-start;align-items: center;margin:0.15rem 0;padding-left:0.16rem"><div><img src="'+
		img_url+'" style="width:0.4rem;height:0.4rem;border-radius: 50%;margin-right:0.1rem"/></div><div><p class="white mb0">'+
		name+'</p><p class="white mb0 follower_count">'+followerCount+'</p></div></div><div style="width:100%;height:0.4rem;display: flex;justify-content: space-around;align-items: center;"><div><span class="white smallTxt">剩余天数 : </span><span class="white s26 overTime">'+
		days+'</span></div><div class="re-money smallTxt">立即续费</div></div></div><div style="width:100%;height:1.2rem;margin-top:0.3rem;background: url(img/like_bu_36.png) no-repeat;background-size: 100% 100%;"></div>';
		$(".followVip").append(div);
  	}else{
  		$(".noVip").css("display","block");
  		$(".haveVip").css("display","none");
  		noVipData();
  	}
  }else{
  	//控制vip页面显示或隐藏
  	 $(".noVip").css("display","block");
     $(".haveVip").css("display","none");
     noFollowVipData();
  }
}
function noFollowVipData(){
	//金额vip变动  先复制
	 var arr = noFollowVip();
	 //轮播插件
	 for(var i=0;i<arr.length;i++){
		var itemName = arr[i].itemName;
		var itemCount = arr[i].itemCount;
		var costTotal = arr[i].costTotal;
		//创建节点
		var slide = '<div class="swiper-slide"><div class="vip"><p class="white nomal_txt">'+
		itemName+'</p><div style="text-align: center;"><span>'+
		itemCount+'</span><p class="white nomal_txt">个追踪者 / 天</p></div><p class="white">7天订阅</p></div></div>';
		$(".swiper-wrapper").append(slide);
	   }
		var mySwiper = new Swiper('.swiper-container', {
		      slidesPerView: 'auto',
		      centeredSlides: true,
		      spaceBetween: 10,
		      onSlideChangeStart: function(swiper){
		      	//获取当前活动板块索引值
		      	var index = swiper.activeIndex;
		      	console.log(index);
		      	//根据索引值加载金额
		      	var price ="$" + arr[index].costTotal;
	
		      	//放大当前活动板块
		      	$('.swiper-slide').not(':eq(index)').find(".vip").removeClass('addW');
		      	$('.swiper-slide').eq(index).find(".vip").addClass('addW');
		      	
		      	//加载金额 	
		      	$('.price').html(price);
		      }		     
		});
	
		
	
		//第一个图片放大
		$('.swiper-slide').eq(0).find(".vip").addClass('addW');
		
		//加载第一张金额
		var firstPrice = "$" + arr[0].costTotal;
		$('.price').html(firstPrice);
}
function followVip(){
	var data = JSON.parse(localStorage.getItem('data'));
	if(data){
		var vipData = JSON.parse(localStorage.getItem('vipData'));
		var img_url = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
		var name = data.entry_data.ProfilePage[0].graphql.user.username;
	    var followerCount = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
		console.log(vipData);
	if(vipData.followVipInfo){
  		//控制vip页面显示或隐藏
  		$(".noVip").css("display","none");
  		$(".haveVip").css("display","flex");
  		
  		//计算时间,剩余天数
  		var endTime = vipData.followVipInfo.vipEndTime;
  		var nowTime = Date.parse(new Date());
  		var overTime = endTime - nowTime;
  		var days = Math.floor(overTime / (1000 * 60 * 60 * 24));
  		
  		//创建节点
		var div = '<div class="followInfo"><div style="width:100%;height:0.4rem;display: flex;justify-content: flex-start;align-items: center;margin:0.15rem 0;padding-left:0.16rem"><div><img src="'+
		img_url+'" style="width:0.4rem;height:0.4rem;border-radius: 50%;margin-right:0.1rem"/></div><div><p class="white mb0">'+
		name+'</p><p class="white mb0 follower_count">'+followerCount+'</p></div></div><div style="width:100%;height:0.4rem;display: flex;justify-content: space-around;align-items: center;"><div><span class="white smallTxt">剩余天数 : </span><span class="white s26 overTime">'+
		days+'</span></div><div class="re-money smallTxt">立即续费</div></div></div><div style="width:100%;height:1.2rem;margin-top:0.3rem;background: url(img/like_bu_36.png) no-repeat;background-size: 100% 100%;"></div>';
		$(".followVip").append(div);
  	}else{
  		$(".noVip").css("display","block");
  		$(".haveVip").css("display","none");
  		noFollowVipData();
  	}
  }else{
  	//控制vip页面显示或隐藏
  	 $(".noVip").css("display","block");
     $(".haveVip").css("display","none");
     noFollowVipData();
  }
}
