const resultArea = document.getElementById("resultArea");

function add(value, el) {
  if (el.classList.contains("darkButton")) {
    resultArea.innerHTML += `<span>${value}</span>`;
  } else {
    resultArea.innerHTML += `${value}`;
  }
}

function ac() {
  resultArea.innerText = "";
}

function equal() {
  let result;
  result = resultArea.innerHTML
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("<span>", "")
    .replaceAll("</span>", "");
  console.log(result);
  resultArea.innerHTML = `${eval(result)}`;
  //console.log(eval(resultArea));
}
