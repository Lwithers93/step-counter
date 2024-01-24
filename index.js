var stepCount = 0;

var countDisplay = document.querySelector("#stepCount");

// document.addEventListener("devicemotion", () => {
//   stepCount += 1;
//   countDisplay = stepCount;
// });

var x;
var y;
var z;

function handleMotionEvent(event) {
  var newX = event.accelerationIncludingGravity.x;
  var newY = event.accelerationIncludingGravity.y;
  var newZ = event.accelerationIncludingGravity.z;

  if ((newX !== x) | (newY !== y) | (newZ !== z)) {
    stepCount += 1;
    countDisplay = stepCount;
  }
  console.log(x, y, z);
}

window.addEventListener("devicemotion", handleMotionEvent, true);

// setInterval(() => {
//   stepCount += 1;
//   countDisplay.innerHTML = stepCount;
// }, 1000);
