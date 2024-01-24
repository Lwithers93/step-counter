var stepCount = 0;

var countDisplay = document.querySelector("#stepCount");

// document.addEventListener("devicemotion", () => {
//   stepCount += 1;
//   countDisplay = stepCount;
// });

var oldX = 0;
var oldY = 0;
var oldZ = 0;

function handleMotionEvent(event) {
  var newX = event.accelerationIncludingGravity.x;
  var newY = event.accelerationIncludingGravity.y;
  var newZ = event.accelerationIncludingGravity.z;

  if ((newX !== oldX) | (newY !== oldY) | (newZ !== oldZ)) {
    stepCount += 1;
    countDisplay = stepCount;
  }
    console.log(newX, newY, newZ);
  oldX = newX;
  oldY = newY;
  oldZ = newZ;
}

window.addEventListener("devicemotion", handleMotionEvent, true);

// setInterval(() => {
//   stepCount += 1;
//   countDisplay.innerHTML = stepCount;
// }, 1000);
