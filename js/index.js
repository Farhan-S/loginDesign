
$(".register-link").click(()=>{
    $(".wraper").addClass("active");
});

$(".login-link").click(()=>{
    $(".wraper").removeClass("active");
});
$(".popup-btn").click(()=>{
    $(".wraper").addClass("active-popup");
});

$(".icon-close").click(()=>{
    $(".wraper").removeClass("active-popup");
});
$(".menu-btn").click(()=>{

    $(".menu").removeClass("vis-menu");
    $(".menu").addClass("hide-menu");
    $(".menu").addClass("transi");
    

});
$(".popup-menu-login").click(()=>{
    // $(".menu").removeClass("hide-menu");
    $(".menu").addClass("vis-menu");
});
$(".cls-btn").click(()=>{
    $(".menu").addClass("vis-menu");
});