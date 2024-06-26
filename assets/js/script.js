'use strict';

const menuMobile = document.querySelector('.menu-mobile');
const iconMode = document.querySelector('.icon');
const headerBar = document.querySelector('header.light-theme');
const btnIcon = document.querySelector('#btnIcon');
const header = document.querySelector('header');

btnIcon.addEventListener('click', (evt) => {
    if (menuMobile.classList.contains('open-menu')) {
        if (headerBar.classList.contains('dark-theme')) {
            menuMobile.classList.remove('open-menu');
            iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        } else {
            menuMobile.classList.remove('open-menu');
            iconMode.src = 'assets/img/icons-menu/menu-burger.png';
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    } else {
        if (headerBar.classList.contains('dark-theme')) {
            menuMobile.classList.add('open-menu');
            iconMode.src = 'assets/img/icons-menu/cross-dark-mode.png';
            header.style.backgroundColor = 'var(--bgColor)';
            header.style.boxShadow = '0 3px 10px var(--shadowBar)';
        } else {
            menuMobile.classList.add('open-menu');
            iconMode.src = 'assets/img/icons-menu/cross.png';
            header.style.backgroundColor = 'var(--bgColor)';
            header.style.boxShadow = '0 3px 10px var(--shadowBar)';
        }
    }
})

const btnColorMode = document.querySelector('#btnColorMode');

btnColorMode.addEventListener('click', (evt) => {
    const logoMode = document.querySelector('.logo-img');
    const iconModeTheme = document.querySelector('.mode-theme');
    const imageHome = document.querySelector('.home-light');

    if (btnColorMode.classList.contains('dark-theme')) {
        btnColorMode.classList.remove('dark-theme');
        document.body.classList.remove('dark-theme');
        headerBar.classList.remove('dark-theme');
        logoMode.src = 'assets/img/logos/logo-light-mode.png';
        iconModeTheme.src = 'assets/img/light-dark-theme/moon.png';
        imageHome.classList.remove('home-dark');

        if (menuMobile.classList.contains('open-menu')) {
            iconMode.src = 'assets/img/icons-menu/cross.png';
        } else {
            iconMode.src = 'assets/img/icons-menu/menu-burger.png';
        }
    } else {
        btnColorMode.classList.add('dark-theme');
        document.body.classList.add('dark-theme');
        headerBar.classList.add('dark-theme');
        logoMode.src = 'assets/img/logos/logo-dark-mode.png';
        iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        iconModeTheme.src = 'assets/img/light-dark-theme/brightness.png';
        imageHome.classList.add('home-dark');

        if (menuMobile.classList.contains('open-menu')) {
            iconMode.src = 'assets/img/icons-menu/cross-dark-mode.png';
        } else {
            iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
        }
    }
})

const touchMenuMobile = [...document.querySelectorAll('.nav-link-mobile')];

touchMenuMobile.map((el) => {
    el.addEventListener('click', (evt) => {
        if (menuMobile.classList.contains('open-menu')) {
            menuMobile.classList.remove('open-menu');

            if (el.textContent.toLocaleUpperCase() == touchMenuMobile[0].textContent.toLocaleUpperCase()) {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            }
    
            if (headerBar.classList.contains('dark-theme')) {
                iconMode.src = 'assets/img/icons-menu/menu-burger-dark-mode.png';
            } else {
                iconMode.src = 'assets/img/icons-menu/menu-burger.png';
            }
        }
    })
})

function activeScroll() {
    if (scrollY > 50 || menuMobile.classList.contains('open-menu')) {
        header.style.backgroundColor = 'var(--bgColor)';
        header.style.boxShadow = '0 3px 10px var(--shadowBar)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', activeScroll);