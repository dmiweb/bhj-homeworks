(() => {
  const time = document.getElementById('timer');

  const timerСounter = setInterval(() => {
    if (Number(time.textContent) === 0) {
      alert("«Вы победили в конкурсе»");
      clearInterval(timerСounter);
      return;
    }

    time.textContent = time.textContent - 1;
  }, 1000);
})();

(() => {
  const time = document.getElementById('timer2');
  const arrTime = time.textContent.split(':');
  let hour = arrTime[0];
  let min = arrTime[1];
  let sec = arrTime[2];

  const timerСounter = setInterval(() => {
    if (sec === 0 && min === 0 && hour === 0) {
      clearInterval(timerСounter);
      return;
    }
    
    sec = sec - 1;
    
    if (sec === 0 && min > 0) {
      min = min - 1;
      sec = 59;
    }
    if (sec === 0 && min === 0 && hour > 0) {
      hour = hour - 1;
      min = 59;
      sec = 59;
    }

    time.textContent = String(hour).padStart(2, '0') + ':' + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  }, 1000);
})();
