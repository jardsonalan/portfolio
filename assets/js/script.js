function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.contains('open-menu')) {
        menuMobile.classList.remove('open-menu');
        
    } else {
        menuMobile.classList.add('open-menu');
    }
}