'use strict';

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let iconMode = document.querySelector('.icon');
    let headerBar = document.querySelector('header.light-theme');

    if (menuMobile.classList.contains('open-menu') == true) {
        if (headerBar.classList.contains('dark-theme') == true) {
            menuMobile.classList.remove('open-menu');
            iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        } else {
            menuMobile.classList.remove('open-menu');
            iconMode.src = 'assets/img/icons-menu/menu-burger.png';
        }
    } else {
        if (headerBar.classList.contains('dark-theme') == true) {
            menuMobile.classList.add('open-menu');
            iconMode.src = 'assets/img/icons-menu/cross-dark-mode.png';
        } else {
            menuMobile.classList.add('open-menu');
            iconMode.src = 'assets/img/icons-menu/cross.png';
        }
    }
}

function setColorPage() {
    let buttonModeColor = document.querySelector('.color-button');
    let headerBar = document.querySelector('header.light-theme');
    let logoMode = document.querySelector('.logo-img');
    let iconModeColor = document.querySelector('.icon');
    let iconModeTheme = document.querySelector('.mode-theme');
    let menuMobile = document.querySelector('.menu-mobile');
    let imageHome = document.querySelector('.home-light');

    if (buttonModeColor.classList.contains('dark-theme') == true) {
        buttonModeColor.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
        headerBar.classList.remove('dark-theme');
        logoMode.src = 'assets/img/logos/logo-light-mode.png';
        iconModeTheme.src = 'assets/img/light-dark-theme/moon.png';
        imageHome.classList.remove('home-dark');

        if (menuMobile.classList.contains('open-menu') == true) {
            iconModeColor.src = 'assets/img/icons-menu/cross.png';
        } else {
            iconModeColor.src = 'assets/img/icons-menu/menu-burger.png';
        }
    } else {
        buttonModeColor.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
        headerBar.classList.add('dark-theme');
        logoMode.src = 'assets/img/logos/logo-dark-mode.png';
        iconModeColor.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        iconModeTheme.src = 'assets/img/light-dark-theme/brightness.png';
        imageHome.classList.add('home-dark');

        if (menuMobile.classList.contains('open-menu') == true) {
            iconModeColor.src = 'assets/img/icons-menu/cross-dark-mode.png';
        } else {
            iconModeColor.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        }
    }
}

const touchMenu = () => {
    let menuMobile = document.querySelector('.menu-mobile');
    let iconMode = document.querySelector('.icon');
    let headerBar = document.querySelector('header.light-theme');

    if (menuMobile.classList.contains('open-menu') == true) {
        menuMobile.classList.remove('open-menu');

        if (headerBar.classList.contains('dark-theme') == true) {
            iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        } else {
            iconMode.src = 'assets/img/icons-menu/menu-burger.png';
        }
    }
}