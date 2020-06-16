const checkTime = i => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
  
const startTime = () => {
    let today = new Date();
    let h = today.getHours() % 12;
    let m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);

    document.querySelector('.fa-clock-o').innerHTML = ` ${h}:${m}`;
    t = setTimeout(function() {
      startTime()
    }, 500);
}

startTime();
