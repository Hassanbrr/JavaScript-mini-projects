t = document.querySelector("input[type=text]");
b = document.querySelector("input[type=button]");

flag = false;

function c(el) {
  if (flag && el.value != "+") {
    t.value = "";
  }
  if (flag) {
    flag = false;
  }
  t.value += el.value;
}

b.addEventListener("click", () => {
  t.value = eval(t.value);
  flag = true;
});
function clear() {
  c = document.querySelector("input[type=text]");
  c.innerText = 0;
}
