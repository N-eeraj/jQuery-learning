$(document).ready(function () {
    

    $("#header").html("<a href='index.html'>Back</a>");

    $("#up").on("click", goUp);
    $("#right").on("click", goRight);
    $("#down").on("click", goDown);
    $("#left").on("click", goLeft);
    $("#change").on("click", changeColor);

});

function goUp(){
    if(y < 9)
    {
        $("#character").animate({marginTop: "-=10%"}, 300);
        y++;
    }
}

function goRight(){
    if(x < 9)
    {
        $("#character").animate({marginLeft: "+=10%"}, 300);
        x++;
    }
}

function goDown(){
    if(y > 0)
    {
        $("#character").animate({marginTop: "+=10%"}, 300);
        y--;
    }
}

function goLeft(){
    if(x > 0)
    {
        $("#character").animate({marginLeft: "-=10%"}, 300);
        x--;
    }
}

function changeColor(){
    let crntClr = $("#character").css("backgroundColor");
    if(crntClr == "rgb(255, 0, 0)")
        $("#character").css("backgroundColor", "green");
    else if(crntClr == "rgb(0, 128, 0)")
        $("#character").css("backgroundColor", "blue");
    else
        $("#character").css("backgroundColor", "red");
}

var x = 0;
var y = 0;
var clr = "red";