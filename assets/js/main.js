$("#intro").hide();
$("#slide").hide();
//image rewrite
var items = jQuery('img').parent();
var patchs = jQuery('.image');
for (var i = 0; i < items.length; ++i) {
    $(patchs[i]).css('background-image', 'url(' + $(items[i]).find('img').attr('src') + ')');
    $(items[i]).find('img').hide();
};

$("a.button").append('<i class="fa fa-angle-right" aria-hidden="true"></i>');

var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.appendChild(pattern.canvas());
$("canvas").css('position', 'fixed').css('top', '0');

$(".more").click(function () {
    $("#welcome").toggleClass("more");
    $("#intro").show();
    $("#intro").toggleClass("more");
    $("#slide").show();
    $("#slide").toggleClass("more");
});

$(document).ready( function () {$('#welcome>.container>.content')[0].innerHTML = '<header><h1 class="title">抱歉，本站正在維護中</h1></header>';})
