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
})
