var base = document.querySelector("#base-value");
var height = document.querySelector("#height-value");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

function calculateHypotenuse() {
  var baseValue = base.value;
  var heightValue = height.value;
  var hypotenuseValue = Math.sqrt(
    Math.pow(baseValue, 2) + Math.pow(heightValue, 2)
  );
  output.innerText = "The length of hypotenuse is " + hypotenuseValue;
}
button.addEventListener("click", calculateHypotenuse);
