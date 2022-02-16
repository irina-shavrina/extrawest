let slidersContainer = document.getElementById("slideshow-container");
let slides = document.getElementsByClassName("my-slides");

let slideIndex = 0;
let timeoutID = null;

let images = [
    "img/spring.jpg",
    "img/summer.jpg",
    "img/autumn.jpg",
    "img/winter.jpg"
];

const addPhotosToPage = () => {
    images.forEach((element, index) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("my-slides")
        
        const numberOfSlide = document.createElement("div");
        numberOfSlide.classList.add("numbertext");
        numberOfSlide.innerHTML = `${index + 1}/${images.length}`;

        const image = document.createElement("img");
        image.classList.add("img-width");
        image.setAttribute("src", element);

        wrapper.appendChild(numberOfSlide);
        wrapper.appendChild(image);

        slidersContainer.appendChild(wrapper);
    });
    slides = document.getElementsByClassName("my-slides");

}
const plusSlides = () =>  {
    slideIndex+=1;
    showSlides(true);
}

const previousSlide = () =>  {
    slideIndex-=1;
    showSlides(true);
}

const showSlides = (isClickedByUser = false) => {
    if(timeoutID != null){
        clearTimeout(timeoutID);
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.visibility = "hidden";
    }

    if(!isClickedByUser){
        slideIndex++;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex <= 0) {
        slideIndex = slides.length;
    }
    slides[slideIndex-1].style.opacity = "1";
    slides[slideIndex-1].style.visibility = "visible";
    
    timeoutID = setTimeout(showSlides, 3000);
  }

addPhotosToPage();

showSlides();