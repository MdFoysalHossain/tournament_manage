$(function(){
//   $().();


//=======================================  USER LOGIN PAGE  =======================================

$("#login_account").click(function (e) { 
    $(".reg_user").addClass("d-none");
    $(".login_user").removeClass("d-none");
    
});

$("#reg_account").click(function (e) { 
    $(".login_user").addClass("d-none");
    $(".reg_user").removeClass("d-none");
    
});




});