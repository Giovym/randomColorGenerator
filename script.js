"use strict";

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btn = document.querySelector(".btn");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

btn.addEventListener("click", function () {
  body.style.backgroundColor = randomColor();
  h1.style.color = randomColor();
});
