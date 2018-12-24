//BY Ihab Khaled

//Combination events
document.addEventListener ("keydown", function (zEvent) {
    //Add
    if (zEvent.shiftKey  &&  zEvent.code == "Equal") {
        var inc = $("#calculateArea").text();
        if(inc.charAt(inc.length-1) !== "+" && $("#calculateArea").text() != "")
        {
            $("#calculateArea").append("+");
        }
    }

    //Multiply and Numbers
    for (i = 48; i <= 57; i++) {
        if (zEvent.shiftKey) {
            //Multiply
            if (zEvent.shiftKey && zEvent.code == "Digit8") {
                var inc = $("#calculateArea").text();
                if (inc.charAt(inc.length - 1) !== "*" && inc.charAt(inc.length - 1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && $("#calculateArea").text() != "") {
                    $("#calculateArea").append("*");
                    zEvent.stopImmediatePropagation();
                }
            }

            //Factorial
            if (zEvent.shiftKey && zEvent.code == "Digit1") {
                var inc = $("#calculateArea").text();
                if ($("#calculateArea").text() != "") {
                    var result = fact(eval($("#calculateArea").text()), 2);
                    $("#calculateArea").text(result);
                }
            }

            //Root
            if (zEvent.shiftKey && zEvent.keyCode == 82) {
                var inc = $("#calculateArea").text();
                if ($("#calculateArea").text() != "") {
                    var result = Math.sqrt(eval($("#calculateArea").text()));
                    $("#calculateArea").text(result);
                }
            }

            //Percentage
            if (zEvent.shiftKey && zEvent.keyCode == 53) {
                var inc = $("#calculateArea").text();
                if ($("#calculateArea").text() != "") {
                    var result = eval(eval($("#calculateArea").text())/100);
                    $("#calculateArea").text(result);
                }
            }

            //Inverse
            if (zEvent.shiftKey && zEvent.keyCode == 73) {
                if ($("#calculateArea").text() !== "") {
                    $("#calculateArea").text(function () {
                        var result = eval(1 / eval($("#calculateArea").text()));
                        $("#calculateArea").text(result);
                    });
                }
            }

            //Brackets
            if (zEvent.shiftKey && zEvent.keyCode == 57) {
                $("#calculateArea").append("(");
            }
            if (zEvent.shiftKey && zEvent.keyCode == 48) {
                $("#calculateArea").append(")");
            }

            //PI
            if (zEvent.shiftKey && zEvent.keyCode == 80) {
                $("#calculateArea").append(eval(22/7));
            }

            //Power
            if (zEvent.shiftKey && zEvent.keyCode == 54) {
                var inc = $("#calculateArea").text();
                if($("#calculateArea").text().includes("^") == false) {
                    if (inc.charAt(inc.length - 1) !== "*" &&
                        inc.charAt(inc.length - 1) !== "/" &&
                        inc.charAt(inc.length - 1) !== "+" &&
                        inc.charAt(inc.length - 1) !== "-" &&
                        inc.charAt(inc.length - 1) !== "^" &&
                        $("#calculateArea").text() != "") {
                        $("#calculateArea").append("^");
                    }
                }
                else
                {
                    var inc = $("#calculateArea").text();
                    var x1 = inc.substr(0, inc.indexOf('^'));
                    var x2 = inc.substr(inc.indexOf('^')+1, inc.length-1);
                    if(x2 == "") {

                    }
                    else {
                        $("#calculateArea").text(power(x1,x2));
                    }
                }
            }
            break;
        }

        //Square Power
        else if(zEvent.keyCode == 80) {
            if ($("#calculateArea").text() !== "") {
                $("#calculateArea").text(Math.pow(eval($("#calculateArea").text()), 2));
                break;
            }
        }

        else if (zEvent.keyCode == i) {
            if ($("#calculateArea").text() === "0") {
                value = $("#calculateArea").text();
                $("#calculateArea").text(value.substr(0, value.length - 1));

                $("#calculateArea").append(String.fromCharCode(zEvent.keyCode));
            }
            else
                $("#calculateArea").append(String.fromCharCode(zEvent.keyCode));

            break;
        }
    }
});

//Standalone events
window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
        //backspace
        if (key == 8 || key == 37) {
            value = $("#calculateArea").text();
            $("#calculateArea").text(value.substr(0, value.length - 1));
        }
        //equal
        else if (key == 187 || key == 13) {
            var inc = $("#calculateArea").text();
            if($("#calculateArea").text().includes("^") == false) {
                $("#calculateArea").text(eval($("#calculateArea").text()));
            }
            else
            {
                var inc = $("#calculateArea").text();
                var x1 = inc.substr(0, inc.indexOf('^'));
                var x2 = inc.substr(inc.indexOf('^')+1, inc.length-1);
                if(x2 == "") {

                }
                else {
                    $("#calculateArea").text(power(x1,x2));
                }
            }
        }
        //minus
        else if (key == 189) {
            var inc = $("#calculateArea").text();
            if (inc.charAt(inc.length - 1) !== "-" && $("#calculateArea").text() != "") {
                $("#calculateArea").append("-");
            }
        }
        //Divide
        else if (key == 191) {
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && inc.charAt(inc.length - 1) !== "*" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append("/");
            }
        }
        //Dot
        else if (key == 190)
        {
            var inc = $("#calculateArea").text();
            if( inc.charAt(inc.length-1) !== "." )
            {
                $("#calculateArea").append(".");
            }
        }
        //Erase
        else if (key == 27)
        {
            $("#calculateArea").text("");
        }
        //Negative
        else if (key == 78)
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(eval(eval($("#calculateArea").text())* -1));
            }
        }
        //Absolute
        else if(key == 65)
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(Math.abs(eval($("#calculateArea").text())));
            }
        }
        //Cube Power
        else if(key == 67) {
            if ($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    $("#calculateArea").text(Math.pow(eval($("#calculateArea").text()), 3));
                });
            }
        }

        //Operations NumPad
        //multiply 106
        else if(key == 106)
        {
            key -= 48;
            var inc = $("#calculateArea").text();
            if (inc.charAt(inc.length - 1) !== "*" && inc.charAt(inc.length - 1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && $("#calculateArea").text() != "") {
                $("#calculateArea").append("*");
            }
        }
        //add	107
        else if(key == 107)
        {
            key -= 48;
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "+" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append("+");
            }
        }
        //subtract	109
        else if(key == 109)
        {
            key -= 48;
            var inc = $("#calculateArea").text();
            if (inc.charAt(inc.length - 1) !== "-" && $("#calculateArea").text() != "") {
                $("#calculateArea").append("-");
            }
        }
        //Dot   110
        else if(key == 110)
        {
            key -= 48;
            var inc = $("#calculateArea").text();
            if( inc.charAt(inc.length-1) !== "." )
            {
                $("#calculateArea").append(".");
            }
        }
         //divide 111
        else if(key == 111)
        {
            key -= 48;
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && inc.charAt(inc.length - 1) !== "*" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append("/");
            }
        }

    //Numbers in NumPad
    if (key >= 96 && key <= 105) {
        key -= 48;
        if ($("#calculateArea").text() === "0") {
            value = $("#calculateArea").text();
            $("#calculateArea").text(value.substr(0, value.length - 1));

            $("#calculateArea").append(String.fromCharCode(key));
        }
        else {
            $("#calculateArea").append(String.fromCharCode(key));
        }
    }
}

function power(x,y) {
    var res = 1;
    for(var i=0;i<y;i++)
    {
        res = res * x ;
    }
    return res;
}

function fact(x) {
        if(x == 0) {
            return 1;
        }
        if(x < 0 ) {
            return undefined;
        }
        for(var i = x; --i; ) {
            x *= i;
        }
        return x;
    }

    $("table tr").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var valuee=$(this).find('td:hover').text();

        if (valuee === "⇦")
        {
            value = $("#calculateArea").text();
            $("#calculateArea").text(value.substr(0, value.length - 1));
        }

        else if (valuee === "AC")
        {
            $("#calculateArea").text("");
        }

        else if (valuee === "+")
        {
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "+" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append(function(){
                    return valuee;
                });
            }

        }

        else if (valuee === "-")
        {
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "-" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append(function(){
                    return valuee;
                });
            }
        }

        else if (valuee === "÷")
        {
            var inc = $("#calculateArea").text();
            if(inc.charAt(inc.length-1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && inc.charAt(inc.length - 1) !== "*" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append(function(){
                    return "/";
                });
            }
        }

        else if (valuee === "X")
        {
            var inc = $("#calculateArea").text();
            if (inc.charAt(inc.length - 1) !== "*" && inc.charAt(inc.length - 1) !== "/" && inc.charAt(inc.length - 1) !== "+" && inc.charAt(inc.length - 1) !== "-" && $("#calculateArea").text() != "")
            {
                $("#calculateArea").append(function(){
                    return "*";
                });
            }
        }

        else if (valuee === "√")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return Math.sqrt(eval($("#calculateArea").text()));
                });
            }
        }

        else if (valuee === "x²")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return Math.pow(eval($("#calculateArea").text()), 2);
                });
            }
        }

        else if (valuee === "x3")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return Math.pow(eval($("#calculateArea").text()), 3);
                });
            }
        }

        else if (valuee === "x!")
        {
            $("#calculateArea").text(function(){
                return fact(eval($("#calculateArea").text()), 2);
            });
        }

        else if (valuee === "±")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return eval(eval($("#calculateArea").text()) * -1);
                });
            }
        }

        else if (valuee === "1/x")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return eval(1 / eval($("#calculateArea").text()));
                });
            }
        }

        else if (valuee === "Mod")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return eval(eval($("#calculateArea").text())%2);
                });
            }
        }

        else if (valuee === "^")
        {
            var inc = $("#calculateArea").text();
            if($("#calculateArea").text().includes("^") == false) {
                if (inc.charAt(inc.length - 1) !== "*" &&
                    inc.charAt(inc.length - 1) !== "/" &&
                    inc.charAt(inc.length - 1) !== "+" &&
                    inc.charAt(inc.length - 1) !== "-" &&
                    inc.charAt(inc.length - 1) !== "^" &&
                    $("#calculateArea").text() != "") {
                    $("#calculateArea").append("^");
                }
            }
            else
            {
                var inc = $("#calculateArea").text();
                var x1 = inc.substr(0, inc.indexOf('^'));
                var x2 = inc.substr(inc.indexOf('^')+1, inc.length-1);
                if(x2 == "") {

                }
                else {
                    $("#calculateArea").text(power(x1,x2));
                }
            }
        }

        else if (valuee === ".")
        {
            //var inc = $("#calculateArea").text();
            //if( $("#calculateArea").text().includes(".") == false)

            var inc = $("#calculateArea").text();
            if( inc.charAt(inc.length-1) !== "." )
            {
                $("#calculateArea").append(function(){
                    return valuee;
                });
            }
        }

        else if (valuee === "%")
        {
            if($("#calculateArea").text() !== "") {
                $("#calculateArea").text(function () {
                    return eval(eval($("#calculateArea").text()) / 100);
                });
            }
        }

        else if (valuee === "Abs")
        {
            $("#calculateArea").text(function(){
                if($("#calculateArea").text() !== "") {
                    return Math.abs(eval($("#calculateArea").text()));
                }
            });
        }

        else if (valuee === "π")
        {
            $("#calculateArea").append(function(){
                return eval(22/7);
            });
        }

        else {
            if (valuee !== "=") {
                try {
                    if ($("#calculateArea").text() === "0") {
                        value = $("#calculateArea").text();
                        $("#calculateArea").text(value.substr(0, value.length - 1));

                        $("#calculateArea").append(function() {
                            return valuee;
                        });
                    }
                    else
                    {
                        $("#calculateArea").append(function() {
                            return valuee;
                        });
                    }
                }
                catch(err) {
                    alert(err.message);
                }
            }

            else if (valuee === "=")
            {
                var inc = $("#calculateArea").text();
                if($("#calculateArea").text().includes("^") == false) {
                    $("#calculateArea").text(eval($("#calculateArea").text()));
                }
                else
                {
                    var inc = $("#calculateArea").text();
                    var x1 = inc.substr(0, inc.indexOf('^'));
                    var x2 = inc.substr(inc.indexOf('^')+1, inc.length-1);
                    if(x2 == "") {

                    }
                    else {
                        $("#calculateArea").text(power(x1,x2));
                    }
                }
            }
        }
    });

$(document).ready(function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var h2 = document.documentElement.scrollHeight;
    $('#frameOfMenu').height($(document).height());
    $('#frameOfMenu').width($(document).width());
    document.getElementById("frameOfMenu").style.display = "none";
    $(".btn").width(w*5.5/100+"px");
    var width = $(".btn").width();

    if(h < 800 && h > 400)
    {
        var x = (h * 6/100);
        $("#marginAboveContent").css('padding-bottom',x+"px");
        //$(".sidenav").css('top',x*2.2+"px");
        $(".sidenav").css('top',0+"px");
        //h2=h2 - x*2.2;
        $(".sidenav").css('height',h2+"px");
    }

    else if(h < 400)
    {
        var x = (h * 15/100);
        $("#marginAboveContent").css('padding-bottom',x+"px");
        $(".sidenav").css('top',0+"px");
        //h2=h2 - x*2.8;
        $(".sidenav").css('height',h2+"px");
        $(".navbar").css('height',"51px");
    }

});

window.onresize = function(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var h2 = document.documentElement.scrollHeight;
    var n = $(".navbar").css('height');
    $(".btn").width(w*5.5/100+"px");

     if(h < 400)
    {
        var x = (h * 15/100);
        $("#marginAboveContent").css('padding-bottom',x+"px");
        $(".sidenav").css('top',0+"px");
        //h2=h2 - x*2.8;
        h2 = h2 - 51;
        $(".sidenav").css('height',h2+"px");
        $(".navbar").css('height',"51px");
    }

    else if(h < 800 && h > 400)
    {
        var x = (h * 6/100);
        $("#marginAboveContent").css('padding-bottom',x+"px");
        $(".sidenav").css('top',0+"px");
        //h2=h2 - x*2.2;
        h2 = h2 - 51;
        $(".sidenav").css('height',h2+"px");
    }
};
