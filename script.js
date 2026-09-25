// Live clock
function showTime() {
  document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}
showTime();
setInterval(showTime, 1000);

// Countdown to New Year 2027
var target = new Date("January 1, 2027 00:00:00").getTime();

function countdown() {
  var diff = target - new Date().getTime();
  var d = Math.floor(diff / (1000 * 60 * 60 * 24));
  var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = d + " Days | " + h + " Hours | " + m + " Minutes | " + s + " Seconds";
}
countdown();
setInterval(countdown, 1000);

// Button
document.getElementById("btn").onclick = function () {
  document.getElementById("message").innerHTML = "Thanks for visiting my website!";
};
