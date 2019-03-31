// Fixed Menu

$(document).ready(function (){
    var menuButton = $(".menu-button");
    var menuClick = $("#menu-click");
    var menuClickItem = $(".menu-click-item");
    var closeMenu = $("#close-menu");

    menuButton.click(function (){
        menuClick.css({
            "position": "fixed",
            "top": "0"
        });
        if ( menuClick.css("top", "0") && window.scrollY > 156) {
            menuButton.css("display", "flex");
        }
        menuButton.css("display", "none");
        if ( window.scrollY < 156 ) {
            $(this).css("display", "block");
        }
    });
    closeMenu.click(function (){
        menuClick.css("top", "-110px");
        menuButton.css("display", "block");
    });
    menuClickItem.click(function(){
        menuClick.css("top", "-110px");
        menuButton.css("display", "block");
    });
    $(document).scroll(function(){
        if ( window.scrollY > 156) {
            menuButton.removeClass("menu-button").addClass("menu-scroll");
            $(".header-address-block-address-column").css("margin-top", "215px");
            $(".header-address-block-contact-column").css("margin-top", "115px");
        } else if ( window.scrollY < 156) {
            menuButton.removeClass("menu-scroll").addClass("menu-button");
            $(".header-address-block-address-column").css("margin-top", "90px");
            $(".header-address-block-contact-column").css("margin-top", "50px");
        }
    });
});

// Likes

$(".project-heart-fa").click(function(){
    $(this).toggleClass("fa-heart");
    if ( $(this).hasClass("fa-heart-o") ) {
        $(this).removeClass("fa-heart-o").css("color", "red");
        $(".likes-counter").html("+201");
    } else {
        $(this).removeClass("fa-heart").addClass("fa-heart-o").css("color", "black");
        $(".likes-counter").html("+200");
    }
});



