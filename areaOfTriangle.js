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
  // Heron's formula for area of the triangle is (A)=√s×(s-a)×(s-b)×(s-c)
  // semi-perimeter is represented as "s"
  if (a + b > c && b + c > a && c + a > b) {
    var s = (a + b + c) / 2;
    var a = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
    output.innerText =
      "Area of a triangle using heron's formula is " + a + " units";
  } else {
    output.innerText =
      "Enter valid side lengths such that the sum of the any two sides lengths must be greater than the length of the other side this is the basic property of triangle.";
  }
}

button.addEventListener("click", calculateArea);
