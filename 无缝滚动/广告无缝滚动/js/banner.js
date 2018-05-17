$(function () {
	var i = 0;
	var timer = null;
	// 复制第一张图片
	var firstimg = $('.banner li').eq(0).clone();
	// 复制第二张图片
	var secondimg = $('.banner li').eq(1).clone();
	// 复制第三张图片
	var thirdimg = $('.banner li').eq(2).clone();
	console.log('firstimg' + firstimg);
	console.log('secondimg' + secondimg);
	console.log('thirdimg' + thirdimg);
	// 将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
	$('.banner').append(firstimg);
	$('.banner').append(secondimg);
	$('.banner').append(thirdimg).width(($('.banner li').length + 1) * ($('.banner img').width()));
	// 下一个按钮
	$('.next').click(function () {
		i++;
		if (i == $('.banner li').length) {
			i = 1; // 这里不是i=0
			// 保证无缝轮播，设置left值
			$('.banner').css({left: 0});
		};
		$('.banner').stop().animate({left: -i * 422}, 300);
	});
	// 上一个按钮
	$('.prev').click(function () {
		i--;
		if (i == -1) {
			i = $('.banner li').length - 2;
			$('.banner').css({left: -($('.banner li').length - 1) * 422});
		}
		$('.banner').stop().animate({left: -i * 422}, 300);
	});
	// 定时器自动播放
	timer = setInterval(function () {
		i++;
		if (i == $('.banner li').length - 2) {
			i = 1;
			$('.banner').css({left: 0});
		};
		$('.banner').stop().animate({left: -i * 422},300);
	}, 1000);
	// 鼠标移入，暂停自动播放，移出，开始自动播放
	$('.container').hover(function () { 
		clearInterval(timer);
	}, function () {
		timer = setInterval(function () {
			i++;
			if (i == $('.banner li').length - 2) {
				i = 1;
				$('.banner').css({left: 0});
			};
			$('.banner').stop().animate({left: -i * 422}, 300);
		}, 1000);
	});
});