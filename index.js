const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("seconds");
const amandpm = document.getElementById("ampm");

function updateclock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  amandpm.innerHTML = ampm;

  setTimeout(() => {
    updateclock();
  }, 1000);
}

updateclock();
