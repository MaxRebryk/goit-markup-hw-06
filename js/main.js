"use strict";

const orderButton = document.querySelector(".button-order");


const toggleBackdrop = () => {
    const backdrop = document.querySelector(".backdrop")
    backdrop.classList.toggle("is-open");
}

orderButton.addEventListener("click",toggleBackdrop);

const closeBackdropButton = document.querySelector(".close-btn");

closeBackdropButton.addEventListener("click",toggleBackdrop);

