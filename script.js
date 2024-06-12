"use strict";
/*
 * HAMBURGER menu slide
 */

let hamburger = document.getElementById("responsive-burger"),
  navUl = document.getElementById("responsive-ul");

let bool = Boolean(true);

hamburger.addEventListener("click", function () {
  if (bool === true) {
    navUl.style.left = "0px";

    bool = Boolean(false);
  } else {
    navUl.style.left = "-100%";
    bool = Boolean(true);
  }
});
/* Vsunie sa po kliknuti na link */

var navLinks = navUl.querySelectorAll("a"),
  i;

for (i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", function () {
    navUl.style.left = "-100%";
    bool = Boolean(true);
  });
}
/* ESC event  */

document.addEventListener("keyup", function (ele) {
  if (ele.keyCode === 27 && bool === false) {
    navUl.style.left = "-100%";
    bool = Boolean(true);
  }
});
