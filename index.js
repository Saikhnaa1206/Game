const score = document.getElementById("score");
const board = document.getElementById("board");
const picmonty = document.createElement("div");
picmonty.style.backgroundImage = "url(monty-mole.png)";
picmonty.style.width = "100px";
picmonty.style.height = "100px";
picmonty.style.backgroundSize = "cover";
picmonty.style.backgroundPosition = "center";
const picpiranha = document.createElement("div");
picpiranha.style.backgroundImage = "url(piranha-plant.png)";
picpiranha.style.width = "100px";
picpiranha.style.height = "100px";
picpiranha.style.backgroundSize = "cover";
picpiranha.style.backgroundPosition = "center";
for (let i = 0; i < 9; i++) {
  const pipe = document.createElement("div");
  pipe.id = i.toString();
  pipe.style.backgroundImage = "url(pipe.png)";
  pipe.style.backgroundSize = "cover";
  pipe.style.backgroundPosition = "center";
  pipe.style.width = "180px";
  pipe.style.height = "180px";
  pipe.style.display = "flex";
  pipe.style.justifyContent = "center";
  board.appendChild(pipe);
}

function randomNumber() {
  let num = Math.floor(Math.random() * 9);
  let number = num.toString();
  return number;
}
let positionOfNomin = 0;
function pic() {
  const moleNum = randomNumber();
  positionOfNomin = moleNum;
  const pick = document.getElementById(moleNum);
  pick.appendChild(picmonty);
}
const interval = setInterval(pic, 1000);

function pic2() {
  let numb = randomNumber();
  if (numb == positionOfNomin) {
    if (numb + 1 == 9) {
      numb = numb - 1;
      const pick = document.getElementById(numb);
      pick.appendChild(picpiranha);
    } else {
      numb++;
      const pick = document.getElementById(numb);
      pick.appendChild(picpiranha);
    }
  } else {
    const pick = document.getElementById(numb);
    pick.appendChild(picpiranha);
  }
}
const interval2 = setInterval(pic2, 1000);

function scoree() {
  score.innerHTML = Number(score.innerHTML) + Number(10);
}

picmonty.onclick = scoree;

function end() {
  picpiranha.onclick = 1;
  picmonty.onclick = 0;
  score.innerHTML += " Game over";
  clearInterval(interval);
  clearInterval(interval2);
}
picpiranha.onclick = end;
setTimeout(end, 20000);
