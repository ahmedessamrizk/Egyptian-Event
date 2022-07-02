window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let chosenColor;
if(localStorage.getItem("colorC") == null){
    chosenColor = 'rgba(214, 46, 51,0.6)';
    localStorage.setItem("colorC" , 'rgba(214, 46, 51,0.6)');
}
else{
    chosenColor = localStorage.getItem("colorC");
    $("#arrowUp").css('backgroundColor' , chosenColor);
   // $("#open").css('backgroundColor' , chosenColor);
    $(".icon").hover(function(){
        $(this).css('backgroundColor' , chosenColor);
    });
    $(".icon").mouseout(function(){
        $(this).css({
            "background-color" :　"transparent"
            
        });
    });
    $(".change").css("backgroundColor" , chosenColor);
    $(".changec").css("color" , chosenColor);
}
//Move to Link
$("a[href^='#'").click(function(e){
    let navLink = $(e.target).attr('href');
    let space =  $(navLink).offset().top;
    console.log(space);
    $("html,body").animate({"scrollTop" : space} , 700);
})

//Show/Hide the side navbar
$("#open").click(function(){
    // $(window).resize(function(){
        if($("nav").css('left') == `0px`)
        {
            $("nav").animate({'left':  `-=${$(".content").outerWidth(true)}`} , 500);
            if($(window).width() >= '760px');
                $("#header-content").animate({'padding-left': '-280px'} , 600);
        }
        else
        {
            $("nav").animate({'left':  `0px`} , 500);
            if($(window).width() > '760px');
            $("#header-content").animate({'padding-left': '280px'} , 500);
        }
    // })
})
$(".fa-xmark").click(function(){
    if($("nav").css('left') == `0px`)
    {
        $("nav").animate({'left':  `-=${$(".content").outerWidth(true)}`} , 500);
        $("#header-content").animate({'padding-left': '-280px'} , 600);
    }
    else
    {
        $("nav").animate({'left':  `0px`} , 500);
        $("#header-content").animate({'padding-left': '280px'} , 500);
    }
})
//Change Navbarcolor
let details = $("#open").offset().top;
$(window).scroll(function(){
    console.log("hello");
    //console.log($(window).scrollTop());
    if($(window).scrollTop() > details -50)
    {
        $("#open").css('backgroundColor' , chosenColor);
        $("#open").css('padding' , '20px');
        $("#arrowUp").fadeIn(500);
    }
    else
    {
        $("#open").css('backgroundColor' , 'transparent');
        $("#open").css('padding' , '0px');
        $("#arrowUp").fadeOut(500);
    }
});

//Detail Close
$(".card-header").click(function(e){
    let card = $(e.target).next();
    $(card).slideToggle(500);
    $(card).parent().siblings().find(".card-body").slideUp(500);
})
//Message
$("textarea").keyup(function(){
    //console.log();
    if($("textarea").val().length < 100)
        $("#numberOfLetters").text(`${100-$("textarea").val().length}`);
    else
        $("#numberOfLetters").text(`your available character finished`);
});

//ColorBox
//changec --> Change color        change --> Change backgroundColor

let width = $("#colorBox").outerWidth(true);
$("#theme").css('right', `-=${width}`);
$("#theme span").click(function(e){
    chosenColor = $(e.target).css('backgroundColor');
    localStorage.setItem("colorC" , chosenColor);
    $("#arrowUp").css('backgroundColor' , chosenColor);
    // $(document).ready(function(){
    $(".icon").hover(function(){
        $(this).css('backgroundColor' , chosenColor);
    });
    $(".icon").mouseout(function(){
        $(this).css({
            "background-color" :　"transparent"
            
        });
    });
// })
    $(".change").css("backgroundColor" , chosenColor);
    $(".changec").css("color" , chosenColor);
});
$(".fa-cog").click(function(){ 
    if($("#theme").css('right') == '0px')
    {
        $("#theme").animate({'right': `-=${width}`} , 500);
    }
    else
    {
        $("#theme").animate({'right': `0px`} , 500);
    }
})

//Arrow Up
$("#arrowUp").click(function(){
    $("html,body").animate({'scrollTop':'0'} , 500);
})


//Date
function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 5, 28);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    if(h < 10)
        h = "0" + h;
    else
        h = 0 + h;
    if(m < 10)
        m = "0" + m;
    else
        m = 0 + m;
    if(s < 10)
        s = "0" + s;
    else
        s = 0 + s;

    $("#day").html(d + " D");    
$("#hour").html(h + " h");    
$("#minute").html(m + " m");    
$("#second").html(s + " s");  

    setTimeout(countdown, 1000);
}

countdown();

//Loading
$(window).ready(function(){
    $("#loading").fadeOut(1000);
    $("#loading").remove();
    $("body").css('overflow' , 'auto');
});
