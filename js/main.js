$(document).ready(function () {
    $(".rwdMenu").click(function(){
        $(".topMenu").toggleClass("block").slideToggle();    
    });
    $(".topMenu li").click(function(){
        if ($(".rwdMenu").is(":visible")) {
            $(".topMenu").slideToggle();    
        }
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
     
     
    