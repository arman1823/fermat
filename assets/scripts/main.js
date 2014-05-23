/**
 * Created by arman on 4/16/14.
 */
$(document).ready(function() {
/*    $(".sub-menu .nav li").on("click", function() {
        $(".sub-menu .nav li").removeClass("active");
        $(this).addClass("active");
    });*/
    setNavigation();
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(1).slideDown();

    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(1).slideUp();

    });

    $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
    });


});


function setNavigation() {
    var path = window.location.pathname;
//    path = path.replace('/', "");
//    path = decodeURIComponent(path);
    console.log(path);
    $(".sub-menu .nav li a").each(function () {
        var href = $(this).attr('href');
        console.log(href);
        if(path == href){$(this).closest('li').addClass('active');};
//        if (path.substring(0, href.length) === href) {
//            $(this).closest('li').addClass('active');
//        }
    });
}