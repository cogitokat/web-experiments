$(document).ready(function(){ 
    $('#color1').spectrum({
        color: "#ffffff",
        showAlpha:true,
        showInitial:true,
        showInput:true,
        showPalette: true,
        palette: [
            ['red', 'green', 'blue'], 
            ['#ffff00', '#00ffff', '#ff00ff'],
            ['black', '#777777', 'white']
        ],
        change: function(c) {
            var label = $("#colorResult1");
            label.text("Color picked: " + c.toHexString());
            $('.colordiv1').css("border-color", c.toHexString);
            }
    });
    $('#color2').spectrum({
        color: "#000",
        showAlpha:true,
        showInitial:true,
        showInput:true,
        showPalette: true,
        palette: [
            ['red', 'green', 'blue'], 
            ['#ffff00', '#00ffff', '#ff00ff'],
            ['black', '#777777', 'white']
        ],
        change: function(c) {
            var label = $("#colorResult2");
            label.text("Color picked: " + c.toHexString());
            $(".colordiv2").css("border-color", c.toHexString());
            }
    });
});

