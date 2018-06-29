// 获取session数据
var vipData = JSON.parse(localStorage.getItem('vipData'));
var userId = vipData.userId;

//获取load_follower,index数据
var load_follower = JSON.parse(localStorage.getItem('load_follower'));
var index = localStorage.getItem('index');
var payUserInfo = load_follower.items[index];
console.log(payUserInfo);
var payProductName = payUserInfo.iapId;
var payItemType = payUserInfo.itemType;

//这则匹配 验证type类型
var reg = /follow/;
var isDirectFollowOrder = reg.test(payItemType);
console.log(reg.test(payItemType));

var access_token,payOrderData;
//从session取值
var userId = vipData.userId;
var obj = {
		//"directFollowOrder":true,
		"environment":"product",
		"isDirectFollowOrder":isDirectFollowOrder,
		"isPromotionOrder":false,
		"productName":payProductName,
		//"promotionOrder":false,
		"type":5,
		"userId":userId,
		//"viewType":-1
}
var str = JSON.stringify(obj);
var session = vipData.session;
var TOKEN = '3d8766fbea67ce310c33a3c70dadd642a928245c';
var BASE_URL = 'https://instlikesdk.gpowers.net/';
var API = "/api/trade/order";
var sha1 =TOKEN + API + "?session=" + session;
//console.log(sha1);
var gsid = hex_sha1(sha1);
//console.log(gsid);
var requestUrl = BASE_URL + "api/trade/order?session=" + session + "&gsid=" + gsid;
function payOrder(){
	$.ajax({
	  contentType: 'application/json;charset=UTF-8',
      type: "POST",
      url: requestUrl,
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
      	payOrderData = data;
      	console.log(payOrderData);
      },
      error: function(err) {
      	console.log(err);
      },
      complete: function(XMLHttpRequest, status) { 
      	//请求完成后最终执行参数　
      }
   })
	  return payOrderData;
}

//获取订单返回值 
var payOrder = payOrder();

function pay(){
	//接口数据
	var payUserId = "" + payOrder.userId;
    var external_id = payOrder.number;
    console.log(payUserId,external_id);
    //本地数据
    var payItemName = payUserInfo.itemName;
    var payCostTotal = Number(payUserInfo.costTotal);
    
    var requestMethod = "POST";
	var requestUrl = "https://api.xsolla.com/merchant/merchants/39735/token";
	var paySha1 = TOKEN + requestMethod + " " + requestUrl;
	console.log(paySha1);
	var gsid = hex_sha1(paySha1);
	console.log(gsid);
	var payObject = {
			"requestHeaders": {
			"Authorization": [
			"Basic Mzk3MzU6cGs2clFxMVdkMTVtdUdSbQ=="
			],
			"Accept": [
			"application/json"
			],
			"Content-Type": [
			"application/json"
			]
			},
			"requestBody": {
			"purchase": {
			"checkout": {
			"amount": payCostTotal,
			"currency": "USD"
			},
			"description": {
			"value": payItemName
			}
			},
			"settings": {
			"external_id": external_id,
			"language": "en",
			"mode": "sandbox",
			"project_id": 28069
			},
			"user": {
			"email": {
			"value": ""
			},
			"id": {
			"hidden": true,
			"value": payUserId,
			},
			"name": {
			"value": payUserId
			}
			}
			},
			"requestUrl": requestUrl,
			"requestMethod": requestMethod,
			"gsid":gsid
   }
	var payStr = JSON.stringify(payObject);
	console.log(payStr);
	$.ajax({
	  //content-Type: 'application/json;charset=UTF-8',
      type: "POST",
      url: "https://instlikesdk.gpowers.net/api/trade/transfer",
      data: JSON.stringify(payObject),
      async:false,
      //dataType: "json",
      beforeSend: function(xhr) {
      	//跨域访问是否携带cookie，后台必须设置指定域
            xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");
       },
      //cache: false,
      success: function(data) {
      	var dataStr = JSON.stringify(data);
      	access_token = JSON.parse(data).token;
      	console.log(data);
      },
      error: function(err) {
      	console.log(err);
      },
      complete: function(XMLHttpRequest, status) { 
      	//请求完成后最终执行参数　
      }
  })
	return access_token;
}

//获取access_token值
//var ACCESS_TOKEN = pay();
//console.log(ACCESS_TOKEN);

