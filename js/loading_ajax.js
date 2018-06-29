function loaddingAjax(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	if(data){
		Mfollowers();
	}else{
		$.ajax({
	          method: "GET",
	          url: "https://instlikesdk.gpowers.net/api/iap/items",
	          data:{
	          	isClearCache:true,
	          	productId:'com.fastboom.commenter.android',
	          	lang:'en',
	            session:'MTg3OTgwNzc7dmljdG9yYWZyYTsxNTI5MDQ1MjQ0NDMwOzA',
	          	gsid:'a6889e5e4323659b335ad12612475e0c2ec8f032'
	          },
	          dataType: "json",
	          beforeSend: function(xhr) {
	          	//跨域访问是否携带cookie，后台必须设置指定域
	                //xhr.withCredentials = true;
	           },
	          //cache: false,
	          success: function(data) {
	          	var dataM = data;
	          	var dataStr = JSON.stringify(dataM);
	          	localStorage.setItem('load_follower', dataStr);
	          	console.log("" + data);
	          	for(var i=0;i<dataM.items.length;i++){
	          		if(dataM.items[i].itemType == "follow_money"){
	          			
	          			//服务器获取数据
	          			var itemCount = dataM.items[i].itemCount;
	          			var costTotal = dataM.items[i].costTotal;
	          			
	          			//创建节点
	          			var div = '<a index='+i+' class="load_data"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
	          			itemCount+'</span></div><div class="upCost">$'+costTotal+'</div></a>';
	          			$(".load_follower").append(div);
	          			//console.log(dataM.items[i].itemCount);
	          		}
	          	}
	    		//console.log(dataM);
	          },
	          error: function(err) {
	          	console.log(err);
	          },
	          complete: function(XMLHttpRequest, status) { 
	          	//请求完成后最终执行参数　
	          }
	      })
	}
}
//function upData(obj){
//	var upCost = $(obj).find("upCost").html();
//	console.log(upCost);
//}
function insData(){
	var txt = document.getElementById('txt').value;
	var BASE_URL = 'https://www.instagram.com/';
	var LOGIN_URL = BASE_URL + txt + '/';
	$.ajax({
	          method: "GET",
	          url: LOGIN_URL,
	          dataType: "html",
	          //async:false,
	          beforeSend: function(xhr) {
	          	//出现加载动画
	          	$(".load_img").css("display","block");
	           },
	          //cache: false,
	          success: function(data) {
	          	//蒙层消失
	          	mui('#popover').popover('toggle');
	          	
	          	//数据处理
	          	var dataStr = JSON.stringify(data);
				var datarep = dataStr.replace(/(\r\n)|(\n)/g,"");
				var n = datarep.match(/(window._sharedData\s?)(=\s?)(.*?);<\/script>/)[3];
				n = n.replace(/\\/g,"");
				var jsonStr = JSON.parse(n);
				var img_url = jsonStr.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
				localStorage.setItem('data', n);
				
				//打开新页面
	          	mui.openWindow({
	          		url:'accountConfirm.html',
	          		id:'accountConfirm',
                    styles:{
                        top:'0px',
                        bottom:'0px'
                    },
					extras:{}
	          	})
	          },
	          error: function(err) {
	          	$(".load_img").css("display","none");
	          	$('.warn').css('display','block');
	          },
	          complete: function(XMLHttpRequest, status) {
	          	//请求完成后最终执行参数 	　
	       }
  })
}
function Gfollowers(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	console.log(data);
	for(var i=0;i<data.items.length;i++){
  		if(data.items[i].itemType == "follow_golden_money"){
  			//服务器获取数据
  			var itemCount = data.items[i].itemCount;
  			var costTotal = data.items[i].costTotal;
  			//创建节点
  			var div = '<div class="load_data" style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_76.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
  			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
  			$(".load_follower").append(div);
  		}
  	}
}
function Mfollowers(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	console.log(data);
	for(var i=0;i<data.items.length;i++){
  		if(data.items[i].itemType == "follow_money"){
  			//服务器获取数据
  			var itemCount = data.items[i].itemCount;
  			var costTotal = data.items[i].costTotal;
  			//创建节点
  			var div = '<a index='+i+' class="load_data"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
	          		itemCount+'</span></div><div class="upCost">$'+costTotal+'</div></a>';
  			$(".load_follower").append(div);
  		}
  	}
}
//function Glikes(){
//	var data = JSON.parse(localStorage.getItem('load_follower'));
//	console.log(data);
//	for(var i=0;i<data.items.length;i++){
//		if(data.items[i].itemType == "follow_golden_money"){
//			//服务器获取数据
//			var itemCount = data.items[i].itemCount;
//			var costTotal = data.items[i].costTotal;
//			//创建节点
//			var div = '<div style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_76.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
//			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
//			$(".load_follower").append(div);
//		}
//	}
//}
function Mlikes(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	console.log(data);
	for(var i=0;i<data.items.length;i++){
  		if(data.items[i].itemType == "like_money"){
  			//服务器获取数据
  			var itemCount = data.items[i].itemCount;
  			var costTotal = data.items[i].costTotal;
  			//创建节点
  			var div = '<div class="load_data" style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
  			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
  			$(".load_follower").append(div);
  		}
  	}
}
function noFollowVip(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	console.log(data);
	var arr = [];
	for(var i=0;i<data.items.length;i++){
  		if(data.items[i].itemType == "follow_vip_weekly"){
  			//服务器获取数据
  			arr.push(data.items[i]);
  		}
  	}
	return arr;
}
