(function ($) {
    $(function () {

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this).addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });


        //$('.catalog-item__link').each(function (i) {
        //    $(this).on('click', function (e) {
        //        e.preventDefault();
        //        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //    });
        //});

        //$('.catalog-item__back').each(function (i) {
        //    $(this).on('click', function (e) {
        //        e.preventDefault();
        //        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //    });
        //});

        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                });
            });
        };

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');

        //data-modal="consultation"

        $('[data-modal=consultation]').on('click', function () {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function () {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

        $('.button_mini').each(function (i) {
            $(this).on('click', function () {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });



        function valideForms(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Введите своё имя",
                        minlength: jQuery.validator.format("Введите не менее {0}-х символов")
                    },
                    phone: "Введите номер телефона",
                    email: {
                        required: "Введите свой e-mail",
                        email: "Неправильно введён адрес почты"
                    }
                }

            });
        };

        valideForms('#consultation-form');
        valideForms('#consultation form');
        valideForms('#order form');

        $('input[name=phone]').mask("+7 (999) 999-99-99");



        $('form').submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');



                $('form').trigger('reset');
            });
            return false;
        });




    });
})(jQuery);

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoplayTimeout: 3000,
    navPosition: false,
    controlsText: [
        '<img src="icons/left.svg">',
        '<img src="icons/right.svg">'
    ]

});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});





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