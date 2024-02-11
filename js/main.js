"use strict";

// Функция открытия/закрытия бэкдропа

const toggleBackdrop = () => {
    const backdrop = document.querySelector(".backdrop")
    backdrop.classList.toggle("is-open");
}

// Кнопки заказать услуги и закрыть форму

const orderButton = document.querySelector(".button-order");
orderButton.addEventListener("click",toggleBackdrop);

const closeBackdropButton = document.querySelector(".close-btn");

closeBackdropButton.addEventListener("click",toggleBackdrop);

// Функция открытия/закрытия меню

const toggleMenu = () => {
    const menu = document.querySelector(".mobile-menu-backdrop")
    menu.classList.toggle("is-open");
}
// Кнопки открытия/закрытия мобильного меню

const openMobileMenuButton = document.querySelector(".menu-btn");
openMobileMenuButton.addEventListener("click",toggleMenu)

const closeMobileMenuButton = document.querySelector(".close-menu-btn");
closeMobileMenuButton.addEventListener("click",toggleMenu);