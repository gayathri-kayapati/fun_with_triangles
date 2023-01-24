var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

function caluculateSumOfAngles() {
  var sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  return sum;
}

function isTraingle() {
  var sumOfAngles = caluculateSumOfAngles();
  if (sumOfAngles === 180) {
    output.innerText = "YAY! This angles form a triangle ▲ ";
  } else {
    output.innerText = "Oh Oh! This angles doesn't form a triangle ╱__╲";
  }
}
button.addEventListener("click", isTraingle);
