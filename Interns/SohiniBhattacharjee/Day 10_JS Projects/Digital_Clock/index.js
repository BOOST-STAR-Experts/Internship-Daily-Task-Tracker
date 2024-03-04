const timeBox = document.getElementById("time-box");

function getTime() {
  const curr_time = new Date();
  let hour = curr_time.getHours();
  let min = curr_time.getMinutes();
  let sec = curr_time.getSeconds();
  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;
  timeBox.textContent = hour + ":" + min + ":" + sec;
}

setInterval(getTime, 1000);
