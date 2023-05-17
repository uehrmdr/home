(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGJDTNT');

//ここからecommerce
	var productObj = [{
		name :'おかかおにぎり',
		id : 'onigiri_01',
		brand : 'private',
		category : '食べ物',
		category2 : 'おにぎり',
		category3 : 'ピクニック',
		variant : '茶',
		list_name : 'picnic',
		list_id : '001',
		index : 1,
		quantity : 1,
		price : 108
	}]
	//今日の日付データを変数hidukeに格納
	var hiduke=new Date(); 
	var date = new Date().getTime();
	var timest = new Date(date).toString();
	//年・月・日・曜日を取得する
	var year = hiduke.getFullYear();
	var month = hiduke.getMonth()+1;
	var day = hiduke.getDate();
	var time = timest.split(' ')[4]
	var kyou = year+"_"+month+"_"+day;
	var transaction_id = "id_" + kyou
	var affiliation = 'おにぎり商店'
	var value = 0
		for(i=0; i < productObj.length; i++){
			value += productObj[i].price 
		}
	value = value
	var shipping = 500
	var coupon = 'sales001'
	var tax = Math.floor(value/1.1)
//ここまで

//ここから会員情報
var cookies = document.cookie; //全てのcookieを取り出して
var cookiesArray = cookies.split(';'); // ;で分割し配列に

for(var c of cookiesArray){ //一つ一つ取り出して
    var cArray = c.split('='); //さらに=で分割して配列に
    if( cArray[0] == 'memberId'){ // 取り出したいkeyと合致したら
        console.log(cArray);  // [key,value] 
    }else{
	var random = Math.random();
	random = String(random).replace('0\.','ARI')
	document.cookie = "memberId=" + random +"; max-age=60*60*24*365";
	}
}
//ここまで

function select_item(){
	dataLayer.push({ ecommerce: null });
	dataLayer.push({
	  event: "select_item",
	  ecommerce: {
		items: [{
			item_name: productObj.name,
			item_id: productObj.id,
			item_brand: productObj.brand,
			item_category: productObj.category,
			item_category2: productObj.category_2,
			item_category3: productObj.category_3,
			item_variant: productObj.variant,
			item_list_name: productObj.list_name,
			item_list_id: productObj.list_id,
			index: productObj.index,
			quantity: productObj.quantity,
			price: productObj.price
		  }]
	  }
	});
}
function view_item(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  event: "view_item",
  ecommerce: {
    items: [{
		item_name: productObj.name,
		item_id: productObj.id,
		item_brand: productObj.brand,
		item_category: productObj.category,
		item_category2: productObj.category_2,
		item_category3: productObj.category_3,
		item_variant: productObj.variant,
		item_list_name: productObj.list_name,
		item_list_id: productObj.list_id,
		index: productObj.index,
		quantity: productObj.quantity,
		price: productObj.price
    }]
  }
});
}
function add_to_cart(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
	  event: "add_to_cart",
	  ecommerce: {
		items: [{
			item_name: productObj.name,
			item_id: productObj.id,
			item_brand: productObj.brand,
			item_category: productObj.category,
			item_category2: productObj.category_2,
			item_category3: productObj.category_3,
			item_variant: productObj.variant,
			item_list_name: productObj.list_name,
			item_list_id: productObj.list_id,
			index: productObj.index,
			quantity: productObj.quantity,
			price: productObj.price
		}]
	  }
	});
}
function remove_from_cart(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  event: "remove_from_cart",
  ecommerce: {
	items: [{
		item_name: productObj.name,
		item_id: productObj.id,
		item_brand: productObj.brand,
		item_category: productObj.category,
		item_category2: productObj.category_2,
		item_category3: productObj.category_3,
		item_variant: productObj.variant,
		item_list_name: productObj.list_name,
		item_list_id: productObj.list_id,
		index: productObj.index,
		quantity: productObj.quantity,
		price: productObj.price
	}]
  }
});
}
function view_cart(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  event: "view_cart",
  ecommerce: {
	items: [{
		item_name: productObj.name,
		item_id: productObj.id,
		item_brand: productObj.brand,
		item_category: productObj.category,
		item_category2: productObj.category_2,
		item_category3: productObj.category_3,
		item_variant: productObj.variant,
		item_list_name: productObj.list_name,
		item_list_id: productObj.list_id,
		index: productObj.index,
		quantity: productObj.quantity,
		price: productObj.price
	}]
  }
});
}
function begin_checkout(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
	items: [{
		item_name: productObj.name,
		item_id: productObj.id,
		item_brand: productObj.brand,
		item_category: productObj.category,
		item_category2: productObj.category_2,
		item_category3: productObj.category_3,
		item_variant: productObj.variant,
		item_list_name: productObj.list_name,
		item_list_id: productObj.list_id,
		index: productObj.index,
		quantity: productObj.quantity,
		price: productObj.price
	}]
  }
});
}
function purchase(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  event: "purchase",
  ecommerce: {
	transaction_id: transaction_id,
	affiliation: affiliation,
	value: value,
	tax: tax,
	shipping: shipping,
	currency: "JPY",
	coupon: coupon,
	items: [{
		item_name: productObj.name,
		item_id: productObj.id,
		item_brand: productObj.brand,
		item_category: productObj.category,
		item_category2: productObj.category_2,
		item_category3: productObj.category_3,
		item_variant: productObj.variant,
		item_list_name: productObj.list_name,
		item_list_id: productObj.list_id,
		index: productObj.index,
		quantity: productObj.quantity,
		price: productObj.price
	}]
  }
});
}
function refund(){
	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	dataLayer.push({
  	event: "refund",
  	ecommerce: {
		transaction_id: transaction_id
	}
	})
}
function sign_up(){
	dataLayer.push({
  	event: "sign_up",
  	member_id: random
	})
}
function login(){
	if(!random){
		alert('まずは会員登録ボタンを押してね')
	}else{
	dataLayer.push({
  	event: "login",
  	member_id: random
	})
}
}
function submit(){
	var inner = document.querySelector('#sec01 > div > label > input[type=text]').value;
	dataLayer.push({
		inner
	});
}


$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});