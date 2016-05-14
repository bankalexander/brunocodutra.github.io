$(function(){
    $("#sections > li:first-child").on("activate.bs.scrollspy", function(){
        $(this).closest("nav").addClass("expanded")
    })

    $("#sections > li:not(:first-child)").on("activate.bs.scrollspy", function(){
        $(this).closest("nav").removeClass("expanded")
    })

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
