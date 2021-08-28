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
        e.preventDefault();
        alert("You clicked on the 3rd button");
    });

});
