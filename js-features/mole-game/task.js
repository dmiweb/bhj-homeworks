const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`);

for (index = 1; index < 10; index++) {
  const hole = getHole(index);

  hole.onclick = function () {
    const moleСheck = hole.className.includes('hole hole_has-mole');

    gameScore = moleСheck ? dead.textContent++ : lost.textContent++;

    if (Number(dead.textContent) === 10) {
      alert("Вы победили!!!");
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if (Number(lost.textContent) === 5) {
      alert("Вы проиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}

