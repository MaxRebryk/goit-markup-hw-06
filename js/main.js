"use strict";

// Функция открытия/закрытия

const toggle = (toggleItemClass) => {
    const toggleItemName = document.querySelector(toggleItemClass)
    toggleItemName.classList.toggle("is-open");
}

// Функция получения кнопки и добавления слушателя на нее

const getAndAddbutton = (classButton,func) => {
    const nameButton = document.querySelector(classButton);
    nameButton.addEventListener("click",func);
}

// Добавления функции переключателя в константы

const backDroptoggle = () => toggle(".mobile-menu-backdrop");
const mobileMenuToggle = () => toggle(".backdrop");

getAndAddbutton(".menu-btn",backDroptoggle);
getAndAddbutton(".close-menu-btn",backDroptoggle);
getAndAddbutton(".button-order",mobileMenuToggle);
getAndAddbutton(".close-btn",mobileMenuToggle);


