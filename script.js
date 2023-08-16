let menuIndex = 0;
function slideMenu(event, id) {
    const menuContainer = document.getElementById(id);
    const displayMenu = window.innerWidth - 380;
    // Update the carousel display to show the specified image

    if (menuIndex === Math.ceil(3900 / displayMenu) - 1) {
        if (event.target.id == "prev" || event.target.id == "prev2") {
            menuIndex--;
        } else menuIndex = 0;
    } else {
        if (event.target.id == "prev" || event.target.id == "prev2") {
            if (menuIndex != 0) {
                menuIndex--;
            } else return;
        } else menuIndex++;
    }
    menuContainer.style.transform = `translate(-${menuIndex * displayMenu}px)`;
}

function toggleNavbar() {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.classList.toggle("show");
}

function togglePopup() {
    const popupContainer = document.getElementById("popup-container");
    popupContainer.classList.toggle("show");
}

// sliding logic function
let sliderIndex = 1;
let sliderId = "";

// A function that updates the carousel display to show the specified image
function updateSlider(id) {
    const slideContainer = document.getElementById(id);
    const totalCards = slideContainer.children;
    const displayImage = Math.floor(window.innerWidth / 375);
    if (sliderIndex === Math.ceil(totalCards.length / displayImage)) {
        sliderIndex = 0;
    } else if (sliderIndex < 0) {
        sliderIndex = Math.ceil(totalCards.length / displayImage) - 1;
    }
    // Update the carousel display to show the specified image
    slideContainer.style.transform = `translate(-${
        sliderIndex * displayImage * 375
    }px)`;
}

function leftSlide(id) {
    if (sliderId !== id) {
        sliderId = id;
        sliderIndex = -1;
    } else {
        sliderIndex -= 1;
    }
    updateSlider(id);
}

function rightSlide(id) {
    if (sliderId !== id) {
        sliderId = id;
        sliderIndex = 1;
    } else {
        sliderIndex += 1;
    }
    updateSlider(id);
}

function linkTo(pathname) {
    window.location.assign(pathname);
}
