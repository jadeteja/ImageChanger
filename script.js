let img = document.querySelector("img");

let prevSrc = img.src;
let p = document.querySelector("p");
let prevText = p.innerText;

img.addEventListener("mouseover", () => {
  img.src =
    "https://cdn.pixabay.com/photo/2020/03/14/21/59/lighthouse-4931925_1280.jpg";
  p.innerText = "New York";
  img.style.border = "2px solid blue";
});

img.addEventListener("mouseleave", () => {
  img.src = prevSrc;
  p.innerText = prevText;
  img.style.border = "none";
});
