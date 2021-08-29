$(document).ready(function() {
    
    $("#header").html("<h1>This heading is added using jQuery</h1>");

    $("#btn1").mouseenter(function () { 
        $(".btn-container:first").css("background-color", "lightgreen");
    });
    $("#btn1").mouseleave(function () { 
        $(".btn-container:first").css("background-color", "unset");
    });
    
    $("#btn2").mousedown(function () { 
        $("#btn2").css("background-color", "black").css("color", "white");
        $("#btn2").text("Stop Pressing Me");
    });
    $("#btn2").mouseup(function () { 
        $("#btn2").css("background-color", "green").css("color", "black");
        $("#btn2").text("Keep Pressing Me");
    });

    $("#btn3").click(function (e) {
        alert("You clicked on the 3rd button");
    });

    let toggle_var = true;
    $("#btn4").click(function (e) {
        if(toggle_var)
            $("#toggle_text").html("Text has been changed. Click again to toggle back.");
        else
            $("#toggle_text").html("Click this button to toggle this text.");

        toggle_var = !toggle_var;
    });

    $("#btn5").on("click", function () {
        $("#hide_show").hide();
    });
    $("#btn6").on("click", function () {
        $("#hide_show").show();
    });

    $("#btn7").hover(function () {
            // over
            $("#btn7").css("background-color", "black").css("color", "white");
        }, function () {
            // out
            $("#btn7").css("background-color", "green").css("color", "black");
        }
    );

    $("#btn8").on("click", function () {
        $("#fade").fadeOut();
    });
    $("#btn9").on("click", function() {
        $("#fade").fadeIn();
    });

    $("#btn10").on("click", function () {
        alert($("#btn10").prev().html());
    });
    $("#btn11").on("click", function () {
        alert($("#btn11").next().html());
    });

    $("#btn12").click(function (e) {
        $("#slide").slideUp();
    });
    $("#btn13").click(function (e) { 
        $("#slide").slideToggle();
    });
    $("#btn14").click(function (e) {
        $("#slide").slideDown();
    });

    $("#btn15").click(function (e) {
        $("#toggle").toggle();
    });

    $("#btn16").click(function (e) {
        $("#animate1").animate({width: "30%"}, 2500);
    });
    $("#btn17").click(function (e) { 
        $("#animate1").animate({width: "100%"}, 2500);
    });
    $("#btn18").click(function (e) { 
        $("#animate1").animate({marginLeft: "100px"}, 500);
    });
    $("#btn19").click(function (e) { 
        $("#animate1").animate({marginLeft: "0px"}, 500);
    });
    $("#btn20").click(function (e) {
        $("#animate1").animate({fontSize: "8pt"}, 1000);
    });
    $("#btn21").click(function (e) {
        $("#animate1").animate({fontSize: "14pt"}, 1000);
    });
    $("#btn22").click(function (e) {
        $("#animate1").animate({fontSize: "22pt"}, 1000);
    });

    $("#btn23").click(function (e) { 
        $("#animate2").animate({marginLeft: "20%", fontSize: "20pt", opacity: "0.5"}, 1500);
        setTimeout(
            () => $("#animate2").animate({marginLeft: "0", fontSize: "14pt", opacity: "1"}, 1500)
            , 5000);
    });

    $("#btn24").on("click", function () {
        $(".btn-container:last").css("border-color", "red");
    });
    $("#btn25").on("click", function () {
        $(".btn-container:last").css("border-color", "green");
    });
    $("#btn26").on("click", function () {
        $(".btn-container:last").css("border-color", "blue");
    });
    $("#btn27").on("click", function () {
        $(".btn-container:last").css("border-style", "solid");
    });
    $("#btn28").on("click", function () {
        $(".btn-container:last").css("border-style", "dashed");
    });
    $("#btn29").on("click", function () {
        $(".btn-container:last").css("border-style", "dotted");
    });
    $("#btn30").on("click", function () {
        $(".btn-container:last").css("border-style", "double");
    });

});
