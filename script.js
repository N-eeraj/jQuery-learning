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

});
