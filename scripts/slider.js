$(document).ready(function() {
    
    $("#header").html("<a href='index.html'>Back</a>");

    $("#next").on("click", nextSlide);
    $("#prev").on("click", prevSlide);

});

function nextSlide(){

    let nextImg = $(".active").next();
    $(".active").removeClass("active");
    if($(nextImg).hasClass("slide"))
        $(nextImg).addClass("active");
    else
        $(".slide:first").addClass("active");

}

function prevSlide(){

    let prevImg = $(".active").prev();
    $(".active").removeClass("active");
    if($(prevImg).hasClass("slide"))
        $(prevImg).addClass("active");
    else
    $(".slide:last").addClass("active");

}