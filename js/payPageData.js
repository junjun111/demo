function payPageLoad(){
	//获取ins,session本地存储数据
	var data = JSON.parse(localStorage.getItem('data'));
	var vipData = JSON.parse(localStorage.getItem('vipData'));
	var load_follower = JSON.parse(localStorage.getItem('load_follower'));
	var index = localStorage.getItem('index');
	
	//页面赋值 
	var img_url = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
	var payUserInfo = load_follower.items[index];
	var payItemName = payUserInfo.itemName;
	var payCostTotal = "$" +Number(payUserInfo.costTotal);
//	$(".payUserImg").attr("src",img_url);
//	$(".payItemName").text(payItemName);
//	$(".payPrice").text(payCostTotal);
	var payUserInfo = '<div class="payUserInfo"><div class="payUserInfoL"><div><img class="payUserImg" src="'+img_url
	+'"/></div><p class="payItemName middleTxt">'+payItemName
	+'</p></div><p class="payPrice middleTxt">'+payCostTotal+'</p></div>';
	$(".payUserInfoBox").append(payUserInfo);
}

