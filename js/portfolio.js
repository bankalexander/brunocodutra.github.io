$(function(){
    $("a.scroll").on("click", function(event) {
        var href = $.attr(this, "href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 500, function(){
            window.location.hash = href;
        });

        return false;
    })
})
