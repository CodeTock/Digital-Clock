const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function timeScrolling() {
  let h = String(new Date().getHours()).padStart(2, "0");
  let m = String(new Date().getMinutes()).padStart(2, "0");
  let s = String(new Date().getSeconds()).padStart(2, "0");
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    timeScrolling();
  }, 1000);
}
timeScrolling();
