$(document).ready(function(){ 
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            case 65:
            case 37:
            case 72:
                $('.key').css("border", "3px solid green");
                $('.key').text("left");
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            case 83:
            case 40:
            case 75:
                $('.key').css("border", "3px solid blue");
                $('.key').text("down");
                $('img').animate({top: "+=10px"}, 'fast');
                break;
            case 87:
            case 38:
            case 74:
                $('.key').css("border", "3px solid yellow");
                $('.key').text("up");
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            case 68:
            case 39:
            case 76:
                $('.key').css("border", "3px solid orange");
                $('.key').text("right");
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            default:
                $('.key').css("border", "3px solid red");
                $('.key').text("jump!");
                $('img').animate({top: "-=10px"}, 'fast');
                $('img').animate({top: "+=10px"}, 'fast');
                break;
        }
    });
    $('.key').css("border", "3px solid red");
});