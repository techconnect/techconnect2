
/**
 * Created by Ishan Joshi on 14/08/14.
 */
var min = 16;
var max = 28;


if(localStorage.accessible == true){
    console.log("true");
}
else{
    localStorage.accessible = false;
}
count = 0;
function increaseFontSize()
{
    count++;
    if(count >= 3) {
        $("#small").removeClass("disabled");
    }
    var p = document.getElementsByTagName("body");
    for(i=0; i< p.length; i++)
    {
        if(p[i].style.fontSize)
        {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else
        {
            var s = 15;
        }
        if(s!=max)
        {
            s++;
        }
        p[i].style.fontSize = s+"px";

    }
}

function decreaseFontSize()
{
    var p = document.getElementsByTagName("body");
    for(i=0; i< p.length; i++)
    {
        if(p[i].style.fontSize)
        {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else
        {
            var s = 12;
        }
        if(s!=min)
        {
            s--;
        }
        p[i].style.fontSize = s+"px";

    }
}

function clickShow(clicked, showed, toggleTime)
{
    $(clicked).click(function ()
    {
        $(showed).toggle(toggleTime);

    });
}

$(".cds").hover(function (){
    $(".description").toggle(300);
});

/*clickShow("#email", "#emailUsFormContainer", 300);
 clickShow("#close", "#emailUsFormContainer", 300);*/

$("#ea").click(function(){
    localStorage.accessible = true;
    console.log("ee");
    $('*').addClass("shdow");
});


//google analytics
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54520328-1', 'auto');
ga('send', 'pageview');*/

