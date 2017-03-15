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