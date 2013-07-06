var timer;
var previousStyles;
var nextStyles;
var playing;
var pid;

/*
    Selects a random quote from a list.
    Returns an array of lines. 
*/
function randomizeDivText()
{
    var paras = [["Think left and think right", 
                  "and think low and think high.",
                  "Oh, the thinks you can think up",
                 "If only you try!",
                 "-- Dr Seuss"], 
                 ["", 
                  "Creativity takes a leap",
                  "then looks to see where it is.",
                  "", 
                  "-- Mason Cooley"],
                 ["Meaning lies as much",
                  "in the mind of the reader",
                  "as in the Haiku.",
                  "",
                  "-- Douglass R. Hofstader"],
                 ["To live a creative life,",
                  "we must lose our fear",
                  "of being wrong.",
                  "", 
                  "-- Joseph Chilton Pearce"],
                 ["",
                  "Creativity is intelligence",
                  "having fun.",
                  "", 
                  "-- Einstein"],
                 ["",
                  "Genius is one percent inspiration",
                  "and ninety-nine percent perspiration.",
                  "", 
                  "-- Thomas Edison"],
                 ["",
                  "No great thing",
                  "is created suddenly.",
                  "", 
                  "-- Epictetus"],
                 ["The imagination",
                  "imitates.",
                  "It is the critical spirit",
                  "that creates.", 
                  "-- Oscar Wilde"],
                 ["Creativity",
                  "is allowing yourself to make mistakes",
                  "Art",
                  "is knowing which ones to keep", 
                  "-- Scott Adams"],
                 ["It is better to create",
                  "than to be learned.",
                  "Creating is the true essence",
                  "of life", 
                  "-- Barthold Georg Niebuhr"],
                 ["Creativity",
                  "is the power to connect",
                  "the seemingly unconnected.",
                  "", 
                  "-- William Plomer"],
                 [ "Simplicity",
                   "is the ultimate", 
                   "sophistication.",
                   "",
                   "-- Leonardo da Vinci"],
                 ["When I am working on a problem I never think about beauty.",
                  "I think only how to solve the problem.",
                  "But when I have finished, if the solution is not beautiful,",
                  "I know it is wrong.",
                  "-- R. Buckminster Fuller"],
                 ["First,", 
                  "solve the problem.",
                  "Then,",
                  "write the code.",
                  "-- John Johnson"],
                 ["Beauty", 
                  "is the ultimate defense",
                  "against complexity.",
                  "",
                  "-- David Gelernter"],
                 ["",
                  "",
                  "while (!succeed = try());",
                  "",
                  ""], 
                 ["Most good programmers do programming", 
                  "not because they expect to get paid",
                  "or get adulation by the public,", 
                  "but beccause it is fun to program.",
                  "-- Linus Torvalds"], 
                 ["It's art if can't be explained.",
                  "It's fashion if no one asks for an explanation.",
                  "It's design if it doesn’t need explanation.",
                  "",
                  "-- Wouter Stokkel"],
                 ["Every child is an artist.",
                  "The challenge is to remain an artist",
                  "after you grow up.",
                  "",
                  "-- Pablo Picasso"],
                 ["In design man becomes what he is.",
                  "Animals have language and perception as well,",
                  "but they do not design",
                  "",
                  "-- Otl Aicher"],
                 ["",
                  "",
                  "Everyone is an artist",
                  "",
                  "- Joseph Beuys"],
                 ["The life of a designer",
                  "is a life of fight:",
                  "fight against the ugliness.",
                  "",
                  "-- Massimo Vignelli"],
                 ["",
                  "Inspiration the seed.",
                  "Design but the flower.",
                  "",
                  "-- Michael Langham"],
                 ["",
                  "Maths is easy;",
                  "design is hard.",
                  "",
                  "-- Jeffrey Veen"]];
    
    rand = Math.floor(Math.random() * paras.length);
    divText = paras[rand];
    
    return divText;
}

/*
    Applies the randomly selected quote to the paragraph elements
*/
function applyDivText(divText)
{
    $("#pa").text(divText[0]);
    $("#pb").text(divText[1]);
    $("#pc").text(divText[2]);
    $("#pd").text(divText[3]);
    $("#pe").text(divText[4]);
}

/*
    Returns an object with a set of randomized css properties
    that can be used to format a div.
    The properties are background-color, color, border-radius, border, and box-shadow
    
*/
function randomizeDivStyle() {

    var divStyle = {};
    // colors arrays contain the back color, font color and whether they can be switched
    var colors = [["#97E85D", "#540A1B", false],
                  ["#5DC8E8", "#6B1D08", false],
                  ["#24CCC0", "#7A1D6D", true],
                  ["#1A0754", "#FFF374", false],
                  ["#B3FFC6", "#4D2B7A", true],
                  ["#FFD574", "#1F3B7A", true],
                  ["#748A82", "White", true], 
                  ["#F0E3FF", "Black", true], 
                  ["Black", "OrangeRed", false], 
                  ["DarkGreen", "PaleGreen", true],
                  ["MediumOrchid", "Black", true],
                  ["DarkBlue", "Seashell", true],
                  ["Indigo", "Lavender", true],
                  ["Teal", "White", true],
                  ["Khaki", "Chocolate", true],
                  ["White", "DarkSlateGray", true], 
                  ["Goldenrod", "Ivory", true], 
                  ["Black", "Yellow", false], 
                  ["DarkSlateGray", "Gold", true], 
                  ["White", "DeepPink", false], 
                  ["Salmon", "Maroon", false]];
    
    var colorRand = Math.floor(Math.random() * colors.length);
    var colorSwitch = 0;
    
    var colorset = colors[colorRand];
    
    // If this set of colors can be switched, 
    // randomize whether to switch them.
    if (colorset[2])
    {
        // switch them 1/3 of the time.
        // 1. Math.random() * 3 will generate a value between 0 and 3.
        // 2. subtract 1 to get a value between -1 and 2.
        // 3. take the floor to get -1 or 0 or 1.
        // 4. Math.max will set the result to 0 or 1, 
        // with 0 being twice as likely as 1.
        colorSwitch = Math.floor(Math.max(0, (Math.random() * 3 - 1)));
    }

    divStyle["background-color"] = colorset[colorSwitch];
    divStyle["color"] = colorset[1 - colorSwitch];
    divStyle["border-radius"] = Math.floor(Math.random() * 60) +"px";
    divStyle["border"] = getBorder();
    divStyle["box-shadow"] = getBoxShadow();

    return divStyle;
}

/*
    Applies a randomized style to the "zendiv" element
*/
function applyDivStyle(divStyle) {
    $(".zendiv").css("background-color", divStyle["background-color"]);
    $(".zendiv").css("color", divStyle["color"]);
    $(".zendiv").css("border-radius", divStyle["border-radius"]);
    $(".zendiv").css("border", divStyle["border"]);
    $(".zendiv").css("box-shadow", divStyle["box-shadow"]);
    
    var height = $(".zendiv").outerHeight();

    if (height < 400)
    {
        $(".zendivSpacer").height(200 - height/2);
    }
}

/*
    Returns an object with a set of randomized css properties
    that can be used to format a paragraph.
    The properties are font-family, font-size, font-style, font-weight,
    text-decoration, text-shadow and text-align.
    The font-family has two specific named fonts and a generic font.
    
*/
function randomizeParagraphStyle(item) {
    var pStyle = {}
    var generics = ["serif", "sans-serif", "cursive", "fantasy", "monospace"];
    var families = ["Georgia", "Palatino Linotype", "Book Antiquia", "Palatino",
        "Arial", "Helvetica", "Arial Black", "Gadget", "Comic Sans MS",
        "Impact", "Charcoal", "Lucida Sans Unicode", "Lucida Grande",
        "Tahoma", "Geneva", "Trebuchet MS", "Verdana", "Courier New",
        "Courier", "Lucida Console", "Times", "Impact", "Arnoldboecklin", 
        "Oldtown", "Blippo", "Brushstroke", "Parkavenue", "Florence", 
        "Coronetscript", "Zapf Chancery", "Fixed", "Lucidatypewriter"];
    var sizes = ["14px", "16px", "16px", "18px", "18px", "18px", "20px", "22px", "24px"];
    var styles = ["regular", "regular", "regular", "regular", "regular", "italic", "italilc",  "oblique"];
    var weights = ["normal", "normal", "normal", "bold", "bolder", "lighter"];
    var decorations =["underline", "underline", "underline", "overline", "overline", 
        "line-through"];
    var aligns = ["left", "right", "center"];
    
    var fontFam = "'" + randListValue(families) + 
                "' '" + randListValue(families) + 
                "' '" + randListValue(generics) + "'";
                
    pStyle["font-family"] = fontFam;
    pStyle["font-size"] = randListValue(sizes);
    pStyle["font-style"] = randListValue(styles);
    pStyle["font-weight"] = randListValue(weights);
    
    pStyle["text-decoration"] = "none";
    if (Math.random() > .7)
    {
        // apply a text-decoration 30% of the time.
        pStyle["text-decoration"] = randListValue(decorations);
    }
    
    pStyle["text-shadow"] = getShadow(); 
    pStyle["text-align"] = randListValue(aligns);

    return pStyle;
    }
    
/*
    Applies a randomized paragraph style object to a paragraph
*/
function applyParagraphStyle(pStyle, paragraph){
    $(paragraph).css("font-family", pStyle["font-family"]);
    $(paragraph).css("font-size", pStyle["font-size"]);
    $(paragraph).css("font-style", pStyle["font-style"]);
    $(paragraph).css("font-weight", pStyle["font-weight"]);
    $(paragraph).css("text-decoration", pStyle["text-decoration"]);
    $(paragraph).css("text-shadow", pStyle["text-shadow"]); 
    $(paragraph).css("text-align", pStyle["text-align"]);
}

/*
    Apply a randomized paragraph style to a button.
    This will look like a thumbnail of the div.
    Only the colors and the border are used.
*/
function applyButtonStyle(button, style) {
    if (null == style) return;
    divStyle = style["div"];
    $(button).css("background-color", divStyle["background-color"]);
    $(button).css("color", divStyle["color"]);
    $(button).css("border", divStyle["border"]);
    // there is no room for a big border.
    // If it's greater than 3, set it back to 3.
    if (parseInt($(button).css("border-left-width")) > 3)
    {
        $(button).css("border-width", "3px");
    }
} 

/*
    Gets a random item from a list
*/
function randListValue(list)
{
    return list[Math.floor(Math.random() * list.length)];
}

/*
    Generates a randomized shadow for the div
*/
function getBoxShadow() {
    var shadow = "none";
    
    if (Math.random() > .5)
    {
        // the x and y will be random values between -5 and 9
        // the blur will be a random value between 1 and 9
        // the spread will be a random value between 1 and 9
        // the color will be static to look good on the site background.
        shadow = Math.floor(Math.random() * 15 - 5) + "px " +
            Math.floor(Math.random() * 15 - 5) + "px " + 
            Math.floor(Math.random() * 10 + 1) + "px " +
            Math.floor(Math.random() * 10 + 1) + "px #7c7f73";
    }
    return shadow;
}

/*
    Generates a random color in #ffffff format
    (used for the div border)
*/
function getRandomColor() {
    // add a # to the result string
    var color = "#";

    // for red, green and blue
    for (var i=0;i<3;i++)
    { 
        // generate an integer between 0 and 255
        var rand = Math.floor(Math.random() * 256);
        // if the value is less than 16, 
        // add a zero to the string
        if (rand < 16) color += "0";
        // convert to a hex string and add to the result
        color += rand.toString(16);
    }
    return color;
}

/*
    Generates a randomized border for the div
    the border has a width, style and color
*/
function getBorder(foreColor) {
    
    var borderStyles = ["solid", "solid", "solid", "solid", "solid", 
        "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"];
        
        // the width will be between 1 and ~30, but the distribution
        // should be skewed toward smaller sizes.
        // Math.random() ^ 2 will give values 
        var width = Math.ceil(Math.pow(Math.random(), 3.0) * 32);
        
        // pick the style from the list
        bstyle = randListValue(borderStyles);
        
        // use black as a default color
        color = "#000000";
        r = Math.random();
        // use white 1/4 of the time
        if (r < .25) color = "#ffffff";
        // use the text color 1/4 of the time
        else if (r < .5) color = foreColor;
        // use a random color 1/4 of the time.
        else if (r < .75) color = getRandomColor();
        
        // put everything together into the border style
        border = width + "px " + bstyle + " " + color;
        
        return border;
}

/*
    Generates a randomized shadow for a paragraph.
*/
function getShadow() {
    
    var shadow = "none";
    // the basic values are x, y and blur
    var shadows = ["2px 2px 6px", "3px, 3px, 9px"];
    
    // Only generate a shadow half the time
    if (Math.random() > .5)
    {
        // start with the x, y and blur
        shadow = randListValue(shadows);
        
        // use a color 1/4 the time
        if (Math.random() > .5)
        { 
            shadow += " " + getRandomColor();
        }
    }
    return shadow;
}

/*
    Generates an object with the text, div style and 5 paragraph styles.
*/
function generateSet()
{
        var set = {};
        set["pid"] = pid;
        set["text"] = randomizeDivText();
        set["div"] = randomizeDivStyle();
        set["pa"] = randomizeParagraphStyle($("#pa"));
        set["pb"] = randomizeParagraphStyle($("#pb"));
        set["pc"] = randomizeParagraphStyle($("#pc"));
        set["pd"] = randomizeParagraphStyle($("#pd"));
        set["pe"] = randomizeParagraphStyle($("#pe"));
        pid += 1;
        return set;
}

/*
    Updates the footer text with all string versions
    of the paragraph and div styles.
*/ 
function updateFooter() {

    var stylea = "#pa {" + getParaCssString($('#pa')) + "}";
    var styleb = "#pb {" + getParaCssString($('#pb')) + "}";
    var stylec = "#pc {" + getParaCssString($('#pc')) + "}";
    var styled = "#pd {" + getParaCssString($('#pd')) + "}";
    var stylee = "#pe {" + getParaCssString($('#pe')) + "}";
    var styleDiv =  ".zendiv {" + getDivCssString($()) + "}";

    $(".footer").html("<p>Style definitions:</p>" + 
                      "<p>" + stylea + 
                      "</p><p>" + styleb + 
                      "</p><p>" + stylec + 
                      "</p><p>" + styled + 
                      "</p><p>" + stylee + 
                      "</p><p>" + styleDiv + "</p>");
 
}

/*
    Get the style elements from a given paragraph and converts it 
    to a string.  
    Note that the style comes from the actual paragraph rather than
    the randomized object
*/
function getParaCssString(item) {
       return style = " font-family : " + $(item).css("font-family") + 
                      "; font-size : " +  $(item).css("font-size") +
                      "; font-style : " + $(item).css("font-style") +
                      "; font-weight : " + $(item).css("font-weight") +
                      "; text-decoration : " + $(item).css("text-decoration") +
                      "; text-shadow : " + $(item).css("text-shadow") +
                      "; text-align : " + $(item).css("text-align") +
                      ";";
}

/*
    Get the style elements from the .zendiv and covert them to a string.
*/
function getDivCssString() {
       return style = " background-color : " + $(".zendiv").css("background-color") + 
                      "; color : " +  $(".zendiv").css("color") +
                      "; border : " + $(".zendiv").css("border") +
                      "; border-radius : " + $(".zendiv").css("border-radius") +
                      "; box-shadow " +  $(".zendiv").css("box-shadow") +
                      ";";
    }
    
/*
    The buttons act as thumbnails of the previous, current and next styles.
    Update them with the saved styles.
*/
function updateButtons() {
    applyButtonStyle($("#pauseplay"), previousStyles[previousStyles.length - 1]);
    applyButtonStyle($("#back1"), previousStyles[previousStyles.length - 2]);
    applyButtonStyle($("#back2"), previousStyles[previousStyles.length - 3]);
    applyButtonStyle($("#back3"), previousStyles[previousStyles.length - 4]);
    applyButtonStyle($("#forward1"), nextStyles[nextStyles.length - 1]);
    applyButtonStyle($("#forward2"), nextStyles[nextStyles.length - 2]);
    applyButtonStyle($("#forward3"), nextStyles[nextStyles.length - 3]);
}

/*
    Fades out the current style and then calls updateStyles
*/
function fadeIt() { 
    $(".zendiv").fadeTo(2000, .01, function() { updateStyles(); } );
}
    
/*
     Updates the styles, footers and buttons, then shows div with fadeIn
     The wait method is called after the fadeIn completes, unless the user
     has clicked pause.
*/
function updateStyles() {
    
    // make sure there are at least 5 items in the nextStyles array
    while (nextStyles.length <  5) {
        nextStyles.splice(0, 0, generateSet());
    }

   var currentStyle = nextStyles.pop();
    
    applyDivText(currentStyle["text"]);
    applyParagraphStyle(currentStyle["pa"], $("#pa"));
    applyParagraphStyle(currentStyle["pb"], $("#pb"))
    applyParagraphStyle(currentStyle["pc"], $("#pc"));
    applyParagraphStyle(currentStyle["pd"], $("#pd"));
    applyParagraphStyle(currentStyle["pe"], $("#pe"));
    applyDivStyle(currentStyle["div"]);
    
    if (previousStyles.length > 50) previousStyles.shift();
    previousStyles.push(currentStyle);
    
    updateFooter();
    updateButtons();
    
    if (playing) {
        $(".zendiv").fadeTo(2000, 1, function() { wait(); });
        }
    else {
        $(".zendiv").fadeTo(200, 1);
        }
    }

/*
    Waits 6 seconds and then calls fadeIt 
*/
function wait() {
        timer = setTimeout(function(){fadeIt()},6000);
}

/*
    Handles a click on a back button.
    Moves to one of the previous styles, indicated 
    by the steps parameter.
*/
function reverse(steps)
{
    clearTimeout(timer);
    $(".zendiv").stop();
    
    // make sure there are at least 6 items
    // in the previousStyles array
    for (var i = previousStyles.length; i < 7; i++)
    {
        previousStyles.splice(0,0,generateSet());
    }
    
    for (var i = 0; i <= steps; i++)
    {
        nextStyles.push(previousStyles.pop());
    }
    updateStyles();
}

/*
    Handles a click on a forward button.
    Moves to one of the next styles, indicated
    by the steps parameter.
*/
function forward(steps)
{
    clearTimeout(timer);
    $(".zendiv").stop();
    
    for (var i = nextStyles.length; i < 8; i++)
    {
        nextStyles.splice(0,0,generateSet());
    }
    
    for (var i = 1; i < steps; i++)
    {
        previousStyles.push(nextStyles.pop());
    }
    updateStyles();
}

/*
    Ready event
*/
$(document).ready(function() {

    // initialize the previous and next styles arrays
    previousStyles = [];
    nextStyles = [];
    playing = true;
    pid = 0;
    
    // push some styles into the arrays
    for (var i = 0; i <  5; i++) {
        previousStyles.push(generateSet());
    }
    
    for (var i = 0; i <  5; i++) {
        nextStyles.push(generateSet());
    }
    
    // update the styles
    updateStyles();
    
    // for a click on the pause/play button
    $("#pauseplay").click(function() { 
        if (playing)
        {   
            // pause by stopping all timers 
            // and animations
            clearTimeout(timer);
            $(".zendiv").stop();
            $(".zendiv").fadeTo("fast", 1);
            $("#pauseplay").text(">");
            playing = false;
        }
        else
        {
            // play by going to the next style
            playing = true;
            $("#pauseplay").text("||");
            updateStyles();
        }
    });
    
    // handle a click on the forward 1 button
    $("#forward1").click(function() {
        clearTimeout(timer);
        $(".zendiv").stop();
        updateStyles();
    });
    
    // handle a click on the forward 2 button
    $("#forward2").click(function() {
        forward(2);
    });
    
    // handle a click on the forward 3 button
    $("#forward3").click(function() {
        forward(3);
    });
    
    // handle a click on the back 1 button
    $("#back1").click(function() {
        reverse(1);
    });
    
    // handle a click on the back 2 button
    $("#back2").click(function() {
        reverse(2);
    });
    
    // handle a click on the back 3 button
    $("#back3").click(function() {
        reverse(3);
    });
});