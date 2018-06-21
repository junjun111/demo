function loaddingAjax(){
	$.ajax({
          method: "GET",
          url: "http://instlikesdk.gpowers.net/api/iap/items",
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
          	//console.log(dataM.items);
          	for(var i=0;i<dataM.items.length;i++){
          		if(dataM.items[i].itemType == "follow_money"){
          			
          			//服务器获取数据
          			var itemCount = dataM.items[i].itemCount;
          			var costTotal = dataM.items[i].costTotal;
          			
          			//创建节点
          			var div = '<div style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
          			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
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
function Gfollowers(){
	var data = JSON.parse(localStorage.getItem('load_follower'));
	console.log(data);
	for(var i=0;i<data.items.length;i++){
  		if(data.items[i].itemType == "follow_golden_money"){
  			//服务器获取数据
  			var itemCount = data.items[i].itemCount;
  			var costTotal = data.items[i].costTotal;
  			//创建节点
  			var div = '<div style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_76.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
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
  			var div = '<div style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
  			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
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
  			var div = '<div style="width:100%;height:0.6rem;display: flex;justify-content: space-around;align-items: center;"><div><span><img src="img/b_like_75.png" style="width:0.16rem;display: inline;"/> x </span><span>'+
  			itemCount+'</span></div><div>$'+costTotal+'</div></div>';
  			$(".load_follower").append(div);
  		}
  	}
}
