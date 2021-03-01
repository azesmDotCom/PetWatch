var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoplayTimeout: 5000,
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