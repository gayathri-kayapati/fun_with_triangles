var form = document.querySelector("#form");
var firstSide = document.querySelector("#first-side");
var secondSide = document.querySelector("#second-side");
var thirdSide = document.querySelector("#third-side");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

function calculateArea() {
  // length of 3 sides of the triangle is represented as a,b,c.
  var a = Number(firstSide.value);
  var b = Number(secondSide.value);
  var c = Number(thirdSide.value);
  console.log(a + b + c);
  // semi-perimeter is represented as "s"
  var s = (a + b + c) / 2;
  var a = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  output.innerText =
    "Area of a triangle using heron's formula is " + a + " units";
}

button.addEventListener("click", calculateArea);
