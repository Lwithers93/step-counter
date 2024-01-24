var stepCount = 0;

var countDisplay = document.querySelector("#stepCount").innerHTML;

document.addEventListener("devicemotion", () => {
  stepCount += 1;
  countDisplay = stepCount;
});
