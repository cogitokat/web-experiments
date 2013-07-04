$(document).ready(function() {
    $("#details").fadeTo("fast", 0);
    $("#boxeslink").hover(function() {
        var html = $("#boxesdetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
        
    $("#animatelink").mouseenter(function() {
        var html = $("#animatedetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
    
    $("#slidelink").mouseenter(function() {
        var html = $("#slidedetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
    
    $("#todolink").mouseenter(function() {
        var html = $("#tododetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
        
    $("#cssexlink").mouseenter(function() {
        var html = $("#cssexdetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
    
    $("#colorpickerslink").mouseenter(function() {
        var html = $("#colorpickersdetails").html();
        $("#details").html(html);
        $("#details").fadeTo("fast", 1);
    });
    
    $("a").mouseleave(function() {
        $("#details").fadeTo("fast", 0);
    });
    
});