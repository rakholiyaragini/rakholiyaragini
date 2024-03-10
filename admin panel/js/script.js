$(document).ready(function(){

    $('.dropdown').click(function(){

        $(this).children(".dropdown-content").slideToggle("fast");
        $(this).siblings("li").children(".dropdown-content").slideUp("fast");
    });

    $(".menu").click(function(){
        $(".sidebar").toggleClass("collaps");
        $(".menu-bar").toggleClass("collaps");
    })
})