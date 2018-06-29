function session(){
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
		    var productId = "com.famedgram.h5";
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
		      async:false,
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