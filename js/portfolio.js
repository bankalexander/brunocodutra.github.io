$(function(){
    $("#headers > li").on("activate.bs.scrollspy", function(){
        $(this)
            .parentsUntil("nav")
            .find(".navbar-header > .navbar-brand")
            .addClass("hidden");
    })

    $("#sections > li").on("activate.bs.scrollspy", function(){
        $(this)
            .parentsUntil("nav")
            .find(".navbar-header > .navbar-brand")
            .removeClass("hidden");
    })

    $("#headers > li, #sections > li").on("activate.bs.scrollspy", function(){
        $(this)
            .closest("nav")
            .removeClass("navbar-default")
            .removeClass("navbar-inverse")
            .addClass($(this).attr("data-navbar"))
    })

    $("a.scroll").on("click", function(event) {
        var href = $.attr(this, "href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 300, function(){
            window.location.hash = href;
        });

        return false;
    })
})
