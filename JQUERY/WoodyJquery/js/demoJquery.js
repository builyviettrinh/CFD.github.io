// children() : duyệt 1 cấp
// find(): duyệt cấp cuối
$(document).ready(function(){
    console.log("test");
    $('header').css('background-color','blue');

    // hide and show language
    $(".lang__current").click(function(){
        $(".dropdown-content").show();
    });
    $(".dropdown-content a").click(function(e){
        e.preventDefault();
        let nameLang = $(this).text();
        $(".lang__current span").text(nameLang);
        $(".dropdown-content").hide();
            // dropdown-content.hide();
    });
    $("body").click(function(e){
        // e.stopPropagation();
        dropdown-content.hide();
    });

    // fade
    

});






