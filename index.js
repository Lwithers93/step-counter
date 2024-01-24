var stepCount = 0;

var countDisplay = document.querySelector("#stepCount").innerHTML;

document.addEventListener("devicemotion", (event) => {
  stepCount += 1;
  countDisplay = stepCount;
});
