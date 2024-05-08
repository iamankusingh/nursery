// parallas scrolling wibsite
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let leaf = document.getElementById("leaf");

document.addEventListener("scroll", () => {
  let value = scrollY;

  hill1.style.top = value * 1 + "px";
  hill4.style.left = value * -1 + "px";
  hill5.style.left = value * 1 + "px";
  leaf.style.top = value * 1 + "px";
  leaf.style.left = value * 1 + "px";
});
