//screen
$("#screen").hide();
$(function () {
	var login = $("a.button.login");
	login[0].removeAttribute("href");
	var iframe = document.createElement('iframe');
	iframe.src = "/auth/";
	var loginPage = $("#login")
	loginPage[0].appendChild(iframe);
});
jQuery("a.button.login").click(function () {
	$("#screen").show(500);
});
$(function () {
	var screenClose = $("#screen").before();
	screenClose.click(function () {
		$("#screen").hide(300);
	});
});
//button
var buttonIcon = '<icon class="fa fa-angle-right" aria-hidden="true"></icon>';
var button = jQuery('a.button');
button.append(buttonIcon);
//a tage rewrite
var aContent = jQuery("a");
for (var i = 0; i < aContent.length; ++i) {
	if (aContent[i].getAttribute("href") == '#' | aContent[i].getAttribute("href") == '') {
		aContent[i].removeAttribute("href");
	}
}
//[nav] content
var navContent = '<div id="nav"> <span class="toggle"><h1>Anneの手工烘焙屋</h1><icon class="fa fa-bars" aria-hidden="true"></icon></span><ul><li><a href="/"><icon class="fa fa-home"></icon></a></li><li><a href="#intro" class="scrolly">簡介</a></li><li><a href="#feature" class="scrolly">特色</a></li><li><a href="#" class="">產品</a><ul class="product"><li><a href="#breakfast" class="scrolly"><img src="/assets/css/images/bar/breakfast.svg" alt=""><span>早餐</span></a></li><li><a href="#snake" class="scrolly"><img src="/assets/css/images/bar/snake.svg" alt=""><span>點心</span></a></li><li><a href="#season" class="scrolly"><img src="/assets/css/images/bar/season.svg" alt=""><span>季節限定</span></a></li><li><a href="#gift" class="scrolly"><img src="/assets/css/images/bar/gift.svg" alt=""><span>送禮</span></a></li><li><a href="#office" class="scrolly"><img src="/assets/css/images/bar/office.svg" alt=""><span>公司團購</span></a></li></ul></li><li><a href="#" class="scrolly">人氣夯品</a></li><li><a href="https://facebook.com/AnneKitchen0955162436/">FB 粉絲專頁</a></li></ul></div>'
$("#bar").innerHTML = navContent;
//[nav]
$(document).ready(function () {
	$(".toggle").click(function () {
		$(this).toggleClass("active");
		$(".nav").slideToggle();
		$("#nav").toggleClass("active");
	});
});
//[nav] subbar a tage rwewrite
$(function () {
	var subBar = jQuery("#bar>#nav>ul>li>ul");
	var subBarTitle = [];
	for (var i = 0; i < subBar.length; ++i) {
		subBarTitle[i] = subBar[i].className;
		var subBarChileATages = jQuery("#bar>#nav>ul>li>ul." + subBarTitle[i] + ">li>a");
		var subBarChileATageLink = [];
		for (var j = 0; j < subBarChileATages.length; ++j) {
			subBarChileATageLink[j] = subBarChileATages[j].getAttribute("href");
			subBarChileATages[j].removeAttribute("href");
			subBarChileATages[j].setAttribute("href", "/" + subBarTitle[i] + subBarChileATageLink[j]);
		}
	}
});
//scrolly
$(function () {
	//scroll down
	$(".scrolly").bind('click', function (event) {
		event.preventDefault(); //先取消超連結原本預設動作
		var $anchor = $(this);
		$('body').animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutQuint');
	});
});