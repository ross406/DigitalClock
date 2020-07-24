const getTime = () => {
  const date = new Date();

  let hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  document.getElementById('clock').innerHTML = hour + ' : ' + min + ' : ' + sec;
};

function updateTime(k) {
  if (k < 10) {
    return '0' + k;
  } else {
    return k;
  }
}

setInterval(() => {
  getTime();
}, 1000);
