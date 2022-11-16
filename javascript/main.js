// const imagesList = [
//     "./img/01.jpg",
//     "./img/02.jpg",
//     "./img/03.jpg",
//     "./img/04.jpg",
//     "./img/05.jpg",
// ];

const images = [
    {
        image: './img/01.jpg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.jpg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.jpg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const mainImgContainer = document.querySelector(".main-img-container");
const btnNext = document.getElementById("btn_next");
const btnPrev = document.getElementById("btn_prev");
// mainImgContainer.classList.add(``)

let currentImgIndex = 0;
let currentTitleIndex = 0;
let currentTextIndex = 0;

const imgsElList = [];

for (let i = 0; i < images.length; i++) {
    const currentImg = images[i].image;
    const imgEl = document.createElement("img");
    imgEl.src = currentImg;
    imgEl.classList.add("img-fluid", "da-js");
    const title = images[i].title;
    titleEl = document.createElement(`h5`)
    titleEl.classList.add(`bottom-right-title`, `text-white` , `d-none`)
    const text = images[i].text;
    textEl = document.createElement(`div`)
    textEl.classList.add(`bottom-right-text`, `text-white` , `d-none`)
    if (i === currentImgIndex && i === currentTitleIndex && i === currentTextIndex) {
        imgEl.classList.add("active");
        titleEl.classList.remove(`d-none`);
        textEl.classList.remove(`d-none`);
        
    }
    //  if (i === currentTitleIndex) {

    //     titleEl.classList.add(`active`);
    // }
    imgsElList.push(imgEl);
    titleEl.append(title)
    textEl.append(text)
    mainImgContainer.append(imgEl, titleEl , textEl);
}


btnNext.addEventListener("click", function () {
    
    currentImgIndex++;
    const lastAvailableIndex = images.length - 1;
    if (currentImgIndex > lastAvailableIndex) {
        currentImgIndex = 0;
    }
    const oldActiveEl = mainImgContainer.querySelector(".active");
    oldActiveEl.classList.remove("active");
    const imgElements = mainImgContainer.querySelectorAll("img");
    const newActiveEl = imgElements[currentImgIndex];
    newActiveEl.classList.add("active");
    
    // currentTitleIndex++;
    // const lastAvailableTitleIndex = images.length - 1;
    // if (currentTitleIndex > lastAvailableIndex) {
    //     currentTitleIndex = 0;
    // }
    // const oldActiveTitleEl = mainImgContainer.querySelector(".active");
    // oldActiveEl.classList.remove("active");
    // const imgElements = mainImgContainer.querySelectorAll("img");
    // const newActiveEl = imgElements[currentImgIndex];
    // newActiveEl.classList.add("active");
});
btnPrev.addEventListener("click", function () {
    currentImgIndex--;
    if (currentImgIndex < 0) {
        currentImgIndex = 4;
    }
    const oldActiveEl = mainImgContainer.querySelector(".active");
    oldActiveEl.classList.remove("active");
    const imgElements = mainImgContainer.querySelectorAll("img");
    const newActiveEl = imgElements[currentImgIndex];
    newActiveEl.classList.add("active");
}); 