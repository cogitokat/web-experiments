var timer;
var pastStylesets;
var futureStylesets;
var playing;
var pid;

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
    var decorations =["underline", "underline", "underline", "overline", "overline", "line-through"];
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
        pStyle["text-decoration"] = randListValue(decorations);
    }
    
    pStyle["text-shadow"] = getShadow(); 
    pStyle["text-align"] = randListValue(aligns);

    return pStyle;
    }
    
function applyParagraphStyle(pStyle, item){
    $(item).css("font-family", pStyle["font-family"]);
    $(item).css("font-size", pStyle["font-size"]);
    $(item).css("font-style", pStyle["font-style"]);
    $(item).css("font-weight", pStyle["font-weight"]);
    $(item).css("text-decoration", pStyle["text-decoration"]);
    $(item).css("text-shadow", pStyle["text-shadow"]); 
    $(item).css("text-align", pStyle["text-align"]);
}    

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
                  "-- William Plomer"]];
    
    rand = Math.floor(Math.random() * paras.length);
    divText = paras[rand];
    
    return divText;
}

function applyDivText(divText, pid)
{
    //$("#pa").text(pid + " " + divText[0]);
    $("#pa").text(divText[0]);
    $("#pb").text(divText[1]);
    $("#pc").text(divText[2]);
    $("#pd").text(divText[3]);
    $("#pe").text(divText[4]);
}

function randomizeDivStyle() {

    var divStyle = {};
    var colors = [["#97E85D", "#540A1B"], //"#4F0AB5"],
                  ["#5DC8E8", "#6B1D08"],
                  ["#24CCC0", "#7A1D6D"],
                  ["#1A0754", "#FFF374"],
                  ["#B3FFC6", "#4D2B7A"],
                  ["#FFD574", "#1F3B7A"],
                  ["#748A82", "White"], 
                  ["#F0E3FF", "Black"], 
                  ["Black", "OrangeRed"], 
                  ["PaleGreen", "DarkGreen"],
                  ["MediumOrchid", "Black"],
                  ["DarkBlue", "Seashell"],
                  ["Indigo", "Lavender"],
                  ["Teal", "White"],
                  ["Khaki", "Chocolate"],
                  ["White", "DarkSlateGray"], 
                  ["Goldenrod", "Ivory"], 
                  ["Black", "Yellow"], 
                  ["DarkSlateGray", "Gold"], 
                  ["DeepPink", "White"], 
                  ["Salmon", "Maroon"]];
    
    var colorRand = Math.floor(Math.random() * colors.length);
    var colorSwitch = Math.floor(Math.max(0, (Math.random() * 3 - 1)));
    divStyle["color"] = colors[colorRand][colorSwitch];
    divStyle["background-color"] = colors[colorRand][1-colorSwitch];
    divStyle["border-radius"] = Math.floor(Math.random() * 60) +"px";
    divStyle["border"] = getBorder();
    divStyle["box-shadow"] = getBoxShadow();

    return divStyle;
    
    }
    
function applyDivStyle(divStyle) {
    
    $(".zendiv").css("background-color", divStyle["background-color"]);
    $(".zendiv").css("color", divStyle["color"]);
    $(".zendiv").css("border-radius", divStyle["border-radius"]);
    $(".zendiv").css("border", divStyle["border"]);
    $(".zendiv").css("box-shadow", divStyle["box-shadow"]);
}


function getRandomColor() {
    var color = "#";

    for (var i=0;i<3;i++)
    { 
        var rand = Math.floor(Math.random() * 256);
        if (rand < 16) color += "0";
        color += rand.toString(16);
    }
    return color;
}

function getShadow() {
    var shadow = "none";
    var shadows = ["2px 2px 6px", "3px, 3px, 9px"];
    
    if (Math.random() > .5)
    {
        shadow = randListValue(shadows);
        
        if (Math.random() > .5)
        { 
            shadow += " " + getRandomColor();
        }
    }
    return shadow;
}

function getBoxShadow() {
    var shadow = "none";
    
    if (Math.random() > .5)
    {
        shadow = Math.floor(Math.random() * 15 - 5) + "px " +
            Math.floor(Math.random() * 15 - 5) + "px " + 
            Math.floor(Math.random() * 10 + 1) + "px " +
            Math.floor(Math.random() * 10 + 1) + "px #7c7f73";
    }
    return shadow;
}

function getBorder(foreColor) {
    
    var borderStyles = ["solid", "solid", "solid", "solid", "solid", 
        "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"];
        
        bstyle = randListValue(borderStyles);
        
        var distr = Math.abs(Math.random() + Math.random() + 
                             Math.random() + Math.random() - 2);
        var width = Math.floor(distr * 30);
        
        color = "#000000";
        r = Math.random();
        if (r < .25) color = "#ffffff";
        else if (r < .5) color = foreColor;
        else if (r < .75) color = getRandomColor();
        
        border = width + "px " + bstyle + " " + color;
        
        return border;
}

function randListValue(list)
{
    return list[Math.floor(Math.random() * list.length)];
}

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

function getDivCssString() {
       return style = " background-color : " + $(".zendiv").css("background-color") + 
                      "; color : " +  $(".zendiv").css("color") +
                      "; border : " + $(".zendiv").css("border") +
                      "; border-radius : " + $(".zendiv").css("border-radius") +
                      "; box-shadow " +  $(".zendiv").css("box-shadow") +
                      ";";
    }
    
function fadeIt() { 
    $(".zendiv").fadeTo(2000, .01, function() { updateAll(); } );
    }
    
function updateAll() {
    
    while (futureStylesets.length <  5) {
        var set = {};
        set["pid"] = pid;
        pid += 1;
        set["text"] = randomizeDivText();
        set["div"] = randomizeDivStyle();
        set["pa"] = randomizeParagraphStyle($("#pa"));
        set["pb"] = randomizeParagraphStyle($("#pb"));
        set["pc"] = randomizeParagraphStyle($("#pc"));
        set["pd"] = randomizeParagraphStyle($("#pd"));
        set["pe"] = randomizeParagraphStyle($("#pe"));
        
        futureStylesets.splice(0, 0, set);
    }

   var currentStyleset = futureStylesets.pop();
    
    applyDivText(currentStyleset["text"], currentStyleset["pid"]);
    applyDivStyle(currentStyleset["div"]);
    applyParagraphStyle(currentStyleset["pa"], $("#pa"));
    applyParagraphStyle(currentStyleset["pb"], $("#pb"))
    applyParagraphStyle(currentStyleset["pc"], $("#pc"));
    applyParagraphStyle(currentStyleset["pd"], $("#pd"));
    applyParagraphStyle(currentStyleset["pe"], $("#pe"));
    
    if (pastStylesets.length > 50) pastStylesets.shift();
    pastStylesets.push(currentStyleset);
    
    updateFooter();
    
    
    if (playing) {
        $(".zendiv").fadeTo(2000, 1, function() { wait(); });
        }
    else {
        $(".zendiv").fadeTo(200, 1);
        }
    }
    
function wait() {
        timer = setTimeout(function(){fadeIt()},6000);
    }

$(document).ready(function() {

    pastStylesets = [];
    futureStylesets = [];
    playing = true;
    pid = 0;
    
    updateAll();
    
    $("#pauseplay").click(function() { 
        if (playing)
        {
            clearTimeout(timer);
            $(".zendiv").stop();
            $(".zendiv").fadeTo("fast", 1);
            $("#pauseplay").text(">");
            playing = false;
        }
        else
        {
            playing = true;
            $("#pauseplay").text("||");
            updateAll();
        }
    });
    
    $("#forward").click(function() {
        clearTimeout(timer);
        $(".zendiv").stop();
        updateAll();
    });
    
    $("#back").click(function() {
        clearTimeout(timer);
        $(".zendiv").stop();
        
        if (pastStylesets.length > 1)
        {
            futureStylesets.push(pastStylesets.pop());
            futureStylesets.push(pastStylesets.pop());
            updateAll();
        }
        
    });});