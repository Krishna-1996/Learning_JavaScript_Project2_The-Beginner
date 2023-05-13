const button = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const color = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "orange",
  "white",
];

body.style.backgroundColor = "white";
h1.style.color = "black";
h2.style.color = "black";

// button.addEventListener('click', changeB)

// function changeB() {
//     const colorIndex = parseInt(Math.random()*color.length)
//     body.style.backgroundColor = color[colorIndex]
// }
const changeB = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
};
const changeA = () => {
  const colorIndex = parseInt(Math.random() * color.length);
  h1.style.backgroundColor = color[colorIndex];
};
const changeC = () => {
    const colorIndex = parseInt(Math.random() * color.length);
    h2.style.backgroundColor = color[colorIndex];
  };
button.addEventListener("click", changeB);
button.addEventListener("click", changeA);
button.addEventListener("click", changeC);
