var photo_render = function(page, data) {
    var img = "";
    for (var i = 0; i < data.length; i++) {
        img += '<li><div class="img-box">' 
        + '<a class="img-bg " rel="example_group" data-fancybox="images" href="http://pnxkcdttf.bkt.clouddn.com/' 
        + data[i] 
        + '"></a>' 
        + '<img lazy-src="http://pnxkcdttf.bkt.clouddn.com/' 
        + data[i] 
        + '" />' + '</div></li>';
        //img += '<img src="http://yourqiniu.url.com/' + data[i] + '" />';
    }
    $(".img-box-ul").append(img);
    $(".img-box-ul").lazyload();
    $("a[rel=example_group]").fancybox();
}