function randomizeItem(item) {
    var generics = ["serif", "sans-serif", "cursive", "fantasy", "monospace"];
    var families = ["Georgia", "Palatino Linotype", "Book Antiquia", "Palatino",
        "Arial", "Helvetica", "Arial Black", "Gadget", "Comic Sans MS",
        "Impact", "Charcoal", "Lucida Sans Unicode", "Lucida Grande",
        "Tahoma", "Geneva", "Trebuchet MS", "Verdana", "Courier New",
        "Courier", "Lucida Console", "Times", "Impact", "Arnoldboecklin", 
        "Oldtown", "Blippo", "Brushstroke", "Parkavenue", "Florence", 
        "Coronetscript", "Zapf Chancery", "Fixed", "Lucidatypewriter"];
    var sizes = ["12px", "14px", "14px", "16px", "16px", "18px", "18px", "20px", "22px"];
    var styles = ["regular", "regular", "regular", "regular", "regular", "italic", "italilc",  "oblique"];
    var weights = ["normal", "normal", "normal", "bold", "bolder", "lighter"];
    var decorations =[ "none", "none", "none", "none", "none", "none",
        "underline", "overline", "line-through"];
    var shadows = ["none", "none", "none", "none", "2px 2px 6px", "3px, 3px, 9px"];
    var aligns = ["left", "right", "center"];
        
    
    var genIndex = Math.floor(Math.random() * generics.length);
    var famIndex = Math.floor(Math.random() * families.length);
    var famIndex2 = Math.floor(Math.random() * families.length);
    var fontFam = "'" + families[famIndex] +
        "' '" + families[famIndex2] + 
        "' '" + generics[genIndex] + "'";
        
    $(item).css("font-family", fontFam);
    $(item).css("font-size", sizes[Math.floor(Math.random() * sizes.length)]);
    $(item).css("font-style", styles[Math.floor(Math.random() * styles.length)]);
    $(item).css("font-weight", weights[Math.floor(Math.random() * weights.length)]);
    $(item).css("text-decoration", decorations[Math.floor(Math.random() * decorations.length)]);
    
    $(item).css("text-shadow", shadows[Math.floor(Math.random() * shadows.length)]); 
    $(item).css("text-align", aligns[Math.floor(Math.random() * aligns.length)]);
    
    updateFooter();
    }
    
function randomizeDiv() {
    var pa =["Think left and think right", 
             "",
             "Meaning lies as much",
             "To live a creative life,", 
             "", 
             ""];
    var pb =["and think low and think high.", 
             "Creativity takes a leap,", 
             "in the mind of the reader", 
             "we must lose our fear", 
             "Creativity is intelligence", 
             "Genius is one percent inspiration"];
    var pc =["Oh, the thinks you can think up", 
             "then looks to see where it is.", 
             "as in the Haiku.",
             "of being wrong.", 
             "having fun.", 
             "and ninety-nine percent perspiration."];
    var pd =["If only you try!",
             "",
             "",
             "",
             "",
             ""] 
    var pe =["-- Dr Seuss",
             "-- Mason Cooley", 
             "-- Douglass R. Hofstader",
             "-- Joseph Chilton Pearce", 
             "-- Einstein", 
             "-- Thomas Edison"];
             
    var back = ["#97E85D", "#5DC8E8", "#24CCC0", "#E8DC43", "#B3FFC6", "#B5FFC3",
    "#FFD574", "#748A82"];
    var fore = ["#4F0AB5", "#6B1D08", "#7A1D6D", "#1B434F", "#4D2B7A", "#524866",
    "#1F3B7A", "#ffffff"];
    
    var rand = Math.floor(Math.random() * back.length);
    $(".colordiv").css("background-color", back[rand]);
    $(".colordiv").css("color", fore[rand]);
    
    rand = Math.floor(Math.random() * pa.length);
    $("#pa").text(pa[rand]);
    $("#pb").text(pb[rand]);
    $("#pc").text(pc[rand]);
    $("#pd").text(pd[rand]);
    $("#pe").text(pe[rand]);
    }


function updateFooter() {

    var stylea = "Paragraph a css = " + getParaCssString($('#pa'));
    var styleb = "Paragraph b css = " + getParaCssString($('#pa'));
    var stylec = "Paragraph c css = " + getParaCssString($('#pa'));
    var styled = "Paragraph d css = " + getParaCssString($('#pa'));
    var stylee = "Paragraph e css = " + getParaCssString($('#pa'));

    $(".footer").html("<p>" + stylea + 
                      "</p><p>" + styleb + 
                      "</p><p>" + stylec + 
                      "</p><p>" + styled + 
                      "</p><p>" + stylee + "</p>");
 
    }

function getParaCssString(item) {
       var style = " font-family : " + $(item).css("font-family") + 
                    " font-size : " +  $(item).css("font-size") +
                    " font-style : " + $(item).css("font-style");
    }

$(document).ready(function() {
    randomizeItem($("#pa"));
    randomizeItem($("#pb"));
    randomizeItem($("#pc"));
    randomizeItem($("#pd"));
    randomizeItem($("#pe"));
    randomizeDiv();

    $(".item").mouseenter(function() {
        randomizeItem($(this));
    });
    
    $(".colordiv").mouseenter(function() {
        randomizeDiv();
    });
});