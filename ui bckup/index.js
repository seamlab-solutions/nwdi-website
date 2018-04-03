$( document ).ready(function() {
    $(".content").load('home.html');
    
    $("nav > ul > li > a" ).on("click", function(e) {
        $("nav > ul > li > a" ).removeClass('active');
        $(e.target).toggleClass('active');
        $(".content").load($(e.target).attr('href'));
        return false;
    });
});