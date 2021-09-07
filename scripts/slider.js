$(document).ready(function() {
    
    $("#header").html("<a href='index.html'>Back</a>");

    $("#next").on("click", nextSlide)
    $("#prev").on("click", prevSlide);

});

function nextSlide(){

    let nextImg = $(".active").next();
    let nextIndicator = $(".current").next();

    $(".active").removeClass("active");
    $(".current").removeClass("current");
    if($(nextImg).hasClass("slide"))
    {
        $(nextImg).addClass("active");
        $(nextIndicator).addClass("current");
    }
    else
    {
        $(".slide:first").addClass("active");
        $(".indicator:first").addClass("current");
    }

}

function prevSlide(){

    let prevImg = $(".active").prev();
    let prevIndicator = $(".current").prev();

    $(".active").removeClass("active");
    $(".current").removeClass("current");
    if($(prevImg).hasClass("slide"))
    {
        $(prevImg).addClass("active");
        $(prevIndicator).addClass("current");
    }
    else
    {
        $(".slide:last").addClass("active");
        $(".indicator:last").addClass("current");
    }

}