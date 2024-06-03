function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let iconMode = document.querySelector('.icon');

    if (menuMobile.classList.contains('open-menu')) {
        menuMobile.classList.remove('open-menu');
        iconMode.src = 'assets/img/icons/menu-burger.png';
    } else {
        menuMobile.classList.add('open-menu');
        iconMode.src = 'assets/img/icons/cross-small.png';
    }
}

function setColorPage() {
    let buttonModeColor = document.querySelector('.color-button');
    let headerBar = document.querySelector('header.light-theme');

    if (buttonModeColor.classList.contains('dark-theme')) {
        buttonModeColor.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
        headerBar.classList.remove('dark-theme');
    } else {
        buttonModeColor.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
        headerBar.classList.add('dark-theme');
    }
}