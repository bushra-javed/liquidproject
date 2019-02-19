

$(document).ready(function () {
    $('ul.parent  li.dropdown').hover(function () {
        $('div.child', this).show();

    }, function () {
        $('div.child', this).hide();

    });

    $('.link-one').hover(function () {
        $('#my-menu1').css('border-top','5px solid red');
    },function(){
            $('#my-menu1').css('border-top' , '5px solid red');
        });



        $('.link-two').hover(function () {
            $('#my-menu2').css('border-top','5px solid green');
        },function(){
                $('#my-menu2').css('border-top' , '5px solid green');
            });




    //    //    function () {


    //$('.toggle-button').on('click', function () {
    //    $('#sidenavContainer').hide();

    //});


    $('#search-web ,.search-web-lg').on('click', function () {
        $('.top-search').css(
            {
                'top': '0',
                'display': 'none',
            }).slideDown('1000');
    });
    $('#close').click(function () {
        $('.top-search').slideUp('1000');
    });
    //$(".option-content").hide();
    $(".up-arrow1").hide();


    $('li:has("ul")').click(function () {
        $(this).children('ul').toggle();
        // $(this).css('border','1px solid red');
        var targetOffset = $(this).offset();//.top - 210;
        $(this).find('.down-arrow1').toggle();
        $(this).find('.up-arrow1').toggle();
        //    $(this).children('.up-arrow1').toggle();

    });

    // $('.toggle-button').on('click', function () {
    //     $('li:has("ul")').children('ul').slideUp('fast');
    //     $('#wrapper1').toggle();
    // });
    // if ((screen.width > 555)) {
    //     // if screen size is 1025px wide or larger
    //     $("#wrapper1").css('display', 'none'); // you can also use $(".yourClass").hide();
    // }
    // else if ((screen.width <= 555)) {
    //     // if screen size width is less than 1024px
    //     $("#wrapper1").css('display', 'block'); // here you can also use show();
    // }





    $('.slide-link').on('click', function () {
        $('li:has("ul")').children('ul').slideUp('fast');
        // $("#sidenavContainer").css('display', 'block'); // you can also use $(".yourClass").hide();
        $('#sidenavContainer').toggleClass('active');
        // $("body").css('overflow', 'hidden'); // you can also use $(".yourClass").hide();
        $("body").toggleClass('hiddenclass'); // you can also use $(".yourClass").hide();
        // $('#toggle-close').toggleClass('toggle-close-hide');
        $('#toggle-close').toggleClass('toggle-close-hide');
        $('#toggle-show').toggleClass('toggle-show');
        
    });

   $('.toggle-button').on('click', function () {
        $('li:has("ul")').children('ul').slideUp('fast');
        // $('#wrapper1').toggle();
        // $('#sidenavContainer').toggle();
        // $("#sidenavContainer").css('display', 'block'); // you can also use $(".yourClass").hide();
        $('#sidenavContainer').toggleClass('active');
        $("body").toggleClass('hiddenclass'); // you can also use $(".yourClass").hide();
        $('#toggle-close').toggleClass('toggle-close-hide');
        $('#toggle-show').toggleClass('toggle-show');
        
        
    });



    
    // if($('#sidenavContainer').is(':hidden'))
    // {
    //    $('body').addClass("fixedPosition");
    //    alert('visible')
    // }
    // else
    // {
    //    $('body').removeClass("fixedPosition");
    //    alert('invisible')
       
    // }
    if ((screen.width > 555)) {
        // if screen size is 1025px wide or larger
        $("#sidenavContainer").css('display', 'block'); // you can also use $(".yourClass").hide();
    }
    else if ((screen.width <= 555)) {
        // if screen size width is less than 1024px
        $("#sidenavContainer").css('display', 'block'); // here you can also use show();
    }


    // hover on image


    $('.feature-four-left').hover(function () {
        $('.img-left').css('transform','scale(1.15)');


    }, function () {
        $('.img-left').css('transform','scale(1)');
        

    });


    $('.feature-four-right-1').hover(function () {
        $('.img-right1').css('transform','scale(1.15)');


    }, function () {
        $('.img-right1').css('transform','scale(1)');
        

    });


    $('.feature-four-right-2').hover(function () {
        $('.img-right2').css('transform','scale(1.15)');


    }, function () {
        $('.img-right2').css('transform','scale(1)');
        

    });

});