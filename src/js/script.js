//<!------------------------------Any Sliders.css-------------------------->

//    <!------------------------------Slick Slider.css-------------------------->

$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 500,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            },
        }]
        //slidesToShow: 4,
        //slidesToScroll: 1,
        //responsive: [{
        //        breakpoint: 1024,
        //        settings: {
        //            slidesToShow: 3,
        //            slidesToScroll: 3,
        //            infinite: false,
        //            dots: true
        //        }
        //    },
        //    {
        //        breakpoint: 992,
        //        settings: {
        //            slidesToShow: 1,
        //            slidesToScroll: 1,
        //            dots: false
        //        }
        //    },
        //    {
        //        breakpoint: 480,
        //        settings: {
        //            slidesToShow: 1,
        //            slidesToScroll: 1
        //        }
        //    }
        //    // You can unslick at a given breakpoint now by adding:
        //    // settings: "unslick"
        //    // instead of a settings object
        //]
    });
});



//<!------------------------------Tiny-Slider.css-------------------------->
//const slider = tns({
//    container: '.carousel__inner',
//    items: 1,
//    slideBy: 'page',
//    axis: "vertical",
//    autoplay: false,
//    controls: false,
//    nav: false
//});
//document.querySelector('.prev').addEventListener('click', function () {
//    slider.goTo('prev');
//});
//document.querySelector('.next').addEventListener('click', function () {
//    slider.goTo('next');
//});
//<!---------------------------End of Tiny-Slider.js-------------------------->


//window.addEventListener('DOMContentLoaded', () => {
//    const menu = document.querySelector('.menu'),
//    menuItem = document.querySelectorAll('.menu_item'),
//    hamburger = document.querySelector('.hamburger');

//    hamburger.addEventListener('click', () => {
//        hamburger.classList.toggle('hamburger_active');
//        menu.classList.toggle('menu_active');
//    });

//    menuItem.forEach(item => {
//        item.addEventListener('click', () => {
//            hamburger.classList.toggle('hamburger_active');
//            menu.classList.toggle('menu_active');
//        })
//    })
//})