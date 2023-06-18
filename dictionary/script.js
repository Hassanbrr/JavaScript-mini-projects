dictionary = {
  Hello: "سلام",
  Philosophy: "فلسفه",
  politics: "سیاست",
};
text = document.getElementById("words");
translate = document.getElementById("translate");
btn_01 = document.getElementById("btn-01");
btn_02 = document.getElementById("btn-02");
text.addEventListener("input", () => {
  if ((translate.value != "") & (text.value != "")) {
    translate.value = "";
  }
});
btn_01.addEventListener("click", () => {
  if (text.value != "" && translate.value == "") {
    translate.value = dictionary[text.value];
  }
});
btn_02.addEventListener("click", () => {
  if (text.value != "" && translate.value != "") {
    dictionary[text.value] = translate.value;
    text.value = "";
    translate.value = "";
  }
});
