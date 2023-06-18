function showDiv() {
  document.getElementById("show").style.display = "block";
  }
a = "O";
b = "X";
function tic(tac) {
  t = b;
  b = a;
  a = t;
  tac.innerText = t;
}
const btn = document.getElementById("btn");
const h2 = document.getElementById("h2");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  h2.style.display = "none";

});