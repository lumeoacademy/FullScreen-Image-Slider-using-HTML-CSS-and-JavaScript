let sliderImages = document.querySelectorAll('.slide'),
leftArrow = document.querySelector('#left-arrow'),
rightArrow = document.querySelector('#right-arrow')
current = 0;

//Clear All Images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

//Init Slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

//Show Previous Image
function leftSlide() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

//Show Next Image
function rightSlide() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

//Left Arrow Click
leftArrow.addEventListener('click', function() {
    if(current === 0) {
        current = sliderImages.length;
    }
    leftSlide();
});

//Right Arrow Click
rightArrow.addEventListener('click', function() {
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    rightSlide();
});

startSlide();