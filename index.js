var angle1 = document.querySelectorAll("#angle-1");
var angle2 = document.querySelectorAll("#angle-2");
var angle3 = document.querySelectorAll("#angle-3");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

function caluculateSumOfAngles() {
  return sum;
}

function isTraingle() {
  var sumOfAngles = caluculateSumOfAngles();
  if (sumOfAngles === 180) {
    console.log("YAY! This angles form a triangle");
  } else {
    console.log("Oh Oh! This angles doesn't form a triangle");
  }
}
button.addEventListener("click", isTraingle);
