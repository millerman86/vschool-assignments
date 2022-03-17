import { mainBg, mainHeading, mainPara } from "./mainContent.js";
/* Add event listener to slider btn*/
const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", prev);
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", next);
const burgerBtn = document.getElementById("burger-btn");
burgerBtn.addEventListener("click", showMenu);
const closeBtn = document.getElementById("quit");
closeBtn.addEventListener("click", closeMenu);
/*Select fields*/
let mBg = document.getElementById("myBg");
let heading = document.getElementById("myH");
let paragraph = document.getElementById("myP");
let menu = document.getElementById("mobile-nav");
menu.style.display = "none";

/* Open and close menu*/

function showMenu() {
  menu.style.display = "flex";
}
function closeMenu() {
  menu.style.display = "none";
}

/*Funtion previous and next*/
let initial;
if (initial == undefined) {
  initial = 0;
  change(initial);
}
function prev() {
  if (initial == 0) {
    initial = 2;
    change(initial);
  } else {
    initial = initial - 1;
    change(initial);
  }
}

function next() {
  if (initial == 2) {
    initial = 0;
    change(initial);
  } else {
    initial = initial + 1;
    change(initial);
  }
}

function change(num) {
  mBg.style.backgroundImage = `url(/images/${mainBg[num]}.jpg)`;
  heading.innerHTML = mainHeading[num];
  paragraph.innerHTML = mainPara[num];
}
