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
})
