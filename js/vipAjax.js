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
  		noFollowVipData();
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
function likeVip(){
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
