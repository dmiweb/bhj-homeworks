(() => {
  const cookie = document.getElementById("cookie");
  const clickerCounter = document.getElementById("clicker__counter");
  const clickerSpeed = document.getElementById("clicker__speed");
  let currentDate = new Date();

  cookie.onclick = function () {
    const clickDate = new Date();

    if (cookie.width === 200) {
      cookie.width = 230;
    } else {
      cookie.width = 200;
    }

    clickerCounter.textContent++;
    clickerSpeed.textContent = (1 / ((clickDate - currentDate) / 1000)).toFixed(2);
    currentDate = new Date();
  }
})();