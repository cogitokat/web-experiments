$(document).ready(function(){ 
    $("input").focus(function() {
        $(this).addClass("inputfocus");
    });
    
    $("input").blur(function() {
        $(this).removeClass("inputfocus");
    });
    
    $('.add').click(function(){
        var text = $('input').val();
        if (text && 0!=text.length)
        {
            $('input').val("");
            var newItem = $("<p>"
            + "<button class='urgentbutton'>!</button>"
            + "<button class='check'>&#x2713;</button>"
            + "<span class='text'>"+ text + "</span></p>");
            $('.normal').append(newItem);
        }
    });
    
    $('.clear').click(function(){
        $('.normal').empty();
        $('.urgent').empty();
        $('.completed').empty();
    });
    
    // The on method (in JQuery 1.7) lets us add an 
    // event handler to the buttons that were dynamically added.
    $('.normal').on("click", '.urgentbutton', function(){
        $('.content span').removeClass("highlighted");
        // when the urgent button is clicked for an item
        // in the normal list, we want to move it to 
        // the top of the urgent list
        var parent = $(this).parent();
        var textSpan = $(parent).find('.text')[0]
        $(textSpan).before("<span class='urgent1marker'>Urgent!  </span>");
        $('.urgent1').prepend($(parent));
    });
    
    // The on method (in JQuery 1.7) lets us add an 
    // event handler to the buttons that were dynamically added.
    $('.urgent1').on("click", '.urgentbutton', function(){
        $('.content span').removeClass("highlighted");
        // when the urgent button is clicked for an item
        // in the urgent list, we want to move it to 
        // the top of the normal list
        var parent = $(this).parent();
        $(parent).find('.urgent1marker').remove();
        var textSpan = $(parent).find('.text')[0]
        $(textSpan).before("<span class='urgent2marker'>Urgent!!  </span>");
        $('.urgent2').prepend($(parent));
    });
    
    // The on method (in JQuery 1.7) lets us add an 
    // event handler to the buttons that were dynamically added.
    $('.urgent2').on("click", '.urgentbutton', function(){
        $('.content span').removeClass("highlighted");
        // when the urgent button is clicked for an item
        // in the urgent list, we want to move it to 
        // the top of the normal list
        var parent = $(this).parent();
        $(parent).find('.urgent2marker').remove();
        var textSpan = $(parent).find('.text')[0]
        $(textSpan).before("<span class='urgent3marker'>Urgent!!!  </span>");
        $('.urgent3').prepend($(parent));
    });  
    
    // The on method (in JQuery 1.7) lets us add an 
    // event handler to the buttons that were dynamically added.
    $('.urgent3').on("click", '.urgentbutton', function(){
        $('.content span').removeClass("highlighted");
        // when the urgent button is clicked for an item
        // in the urgent list, we want to move it to 
        // the top of the normal list
        var parent = $(this).parent();
        $(parent).find('.urgent3marker').remove();
        $('.normal').prepend($(parent));
    });   
    
    // handle a click on the check buttons
    // in the uncompleted div
    $('.uncompleted').on("click", ".check", function(){
        $('.content span').removeClass("highlighted");
        var parent = $(this).parent();
        $(parent).append("<span id='done'> -- done!</span>");
        // move the item to the completed list
        $('.completed').append($(parent));
        $(parent).find('.urgent1marker').remove();
        $(parent).find('.urgent2marker').remove();
        $(parent).find('.urgent3marker').remove();
        // disable all of its buttons
        var children=$(parent).find('.urgentbutton');
        children.each(function(){
            $(this).prop('disabled', true);
        });
    });
    
    // handle a click on the check buttons
    // in the completed div
    $('.completed').on("click", ".check", function(){
        $('.content span').removeClass("highlighted");
        var parent = $(this).parent();
        $(parent).find("#done").remove();
        // move the item to the completed list
        $('.normal').prepend($(parent));
        // enable its urgent button
        var children=$(parent).find('.urgentbutton');
        children.each(function(){
            $(this).prop('disabled', false);
        });
    });
    
    // a click on a span toggles highlighting
    $('.content').on("click", "span", function(){
        if ($(this).hasClass("highlighted"))
        {   
            $(this).removeClass("highlighted");
        }
        else
        {
             $('.content span').removeClass("highlighted");
            $(this).addClass("highlighted");
        }
    });
});

