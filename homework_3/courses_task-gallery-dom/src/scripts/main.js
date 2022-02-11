'use strict';

let largeImg = document.getElementById('largeImg');
const imgArray = document.querySelectorAll('#thumbs a');
imgArray.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        largeImg.src = element.getAttribute('href');
    })
})