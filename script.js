const color3 = document.querySelector(".div4colors");
const background = document.querySelector(".wholediv");
const buttons = document.querySelector(".same_buttons");
const result = document.querySelector(".div2");
const reset = document.querySelector(".RESET");
const del = document.querySelector(".del");
const mainButtons = document.querySelector(".div3");
const toloba = document.querySelector(".equal");

console.dir(color3);
color3.children[0].style.opacity = "1";

function theme1() {
  color3.children[0].style.opacity = "1";
  color3.children[1].style.opacity = "0";
  color3.children[2].style.opacity = "0";
  background.style.backgroundColor = "#434A59";
  buttons.style.backgroundColor = "#EAE3DC";
  reset.style.backgroundColor = "#647198";
  del.style.backgroundColor = "#647198";
  mainButtons.style.backgroundColor = "#242D44";
  toloba.style.backgroundColor = "#D03F2F";
  result.style.backgroundColor = "#181F33";
}

function theme2() {
  color3.children[0].style.opacity = "0";
  color3.children[1].style.opacity = "1";
  color3.children[2].style.opacity = "0";
  background.style.backgroundColor = "#D2CDCD";
  buttons.style.backgroundColor = "#E5E4E1";
  reset.style.backgroundColor = "#378187";
  del.style.backgroundColor = "#378187";
  mainButtons.style.backgroundColor = "#979797";
  toloba.style.backgroundColor = "#C85402";
  result.style.backgroundColor = "white";
  result.style.color = "black";
}

function theme3() {
  color3.children[0].style.opacity = "0";
  color3.children[1].style.opacity = "0";
  color3.children[2].style.opacity = "1";
  background.style.backgroundColor = "#1E0936";
  buttons.style.backgroundColor = "#331C4D";
  reset.style.backgroundColor = "#56077C";
  del.style.backgroundColor = "#56077C";
  mainButtons.style.backgroundColor = "#1E0936";
  toloba.style.backgroundColor = "#00DED0";
  result.style.backgroundColor = "#1E0936";
  result.style.color = "#FFE53D";
}
