$(function (){
    $("#btn1").click(function (){
        $("#cube").hide();
    });

    $("#btn2").click(function (){
        $("#cube").show();
    });

    $("#cube").hover(function (){
        $(this).css("background-color","blue");
        $(this).html("<p>Test</p>");
    });

    $("#cube").mouseout(function (){
        $(this).css("background-color","blue");
        $(this).html("<p>Test</p>");
    });

})