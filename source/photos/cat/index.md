---
layout: single-column
slug: "photos"
noDate: "true"
comments: "false"
---
<link type="text/css" href="/css/ins.css" rel="stylesheet">
<link type="text/css" href="/css/jquery.fancybox.css" rel="stylesheet">
<a href="../"><span class="album-font">返回我的相册</span></a>

<div class="instagram">
    <section class="archives album">
	    <ul class="img-box-ul">
	    </ul>
    </section>
</div>


<script src="https://lib.baomitu.com/jquery/3.3.1/jquery.js"></script>
<script src="/js/jquery.lazyload.js"></script>
<script src="/js/jquery.fancybox.js"></script>
<script src="/js/photos.js"></script>
<script>
	var that = this;
	$.getJSON("tibet.json", function(data) {
		that.photo_render(that.page, data);
	});
	window.onload = function() {
		$("img.lazy").lazyload({
			effect: "fadeIn"
		});
	}
</script>