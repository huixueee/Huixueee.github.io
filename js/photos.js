var photo_render = function(page, data) {
    var img = "";
    for (var i = 0; i < data.length; i++) {
        img += '<li><div class="img-box">'
            + '<a class="img-bg " rel="example_group" data-fancybox="images" href="https://raw.githubusercontent.com/huixueee/00/master/photo/'
            + data[i]
            + '"></a>'
            + '<img lazy-src="https://raw.githubusercontent.com/huixueee/00/master/photo/'
            + data[i]
            + '" />' + '</div></li>';
        //img += '<img src="http://yourqiniu.url.com/' + data[i] + '" />';
    }
    $(".img-box-ul").append(img);
    $(".img-box-ul").lazyload();
    $("a[rel=example_group]").fancybox();
}