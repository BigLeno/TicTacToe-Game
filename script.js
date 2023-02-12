const cells = document.querySelectorAll("td");
const restartButton = document.querySelector("#restart-button");
const crossWins = document.querySelector("#cross-wins");
const circleWins = document.querySelector("#circle-wins");
const returnContent = document.querySelector("#return");
const returnDisplay = document.getElementById("return");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    returnContent.textContent = '';
    if (event.target.textContent === "") {
      event.target.classList.add(currentPlayer);
      event.target.textContent = currentPlayer;

      if (checkForWin()) {
        winner = "Congrats " + currentPlayer + ", you win!"
        returnContent.textContent = winner;
        if (currentPlayer === "X") {
            crossWins.textContent = parseInt(crossWins.textContent) + 1;
            for (let i = 0; i < cells.length; i++) {
                cells[i].classList.remove("X", "O");
                cells[i].textContent = "";
            }
            
        } else {
            circleWins.textContent = parseInt(circleWins.textContent) + 1;
            for (let i = 0; i < cells.length; i++) {
                cells[i].classList.remove("X", "O");
                cells[i].textContent = "";
            }
        }
        return;
      } 

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

restartButton.addEventListener("click", function () {
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.remove("X", "O");
      cells[i].textContent = "";
    }
  
    currentPlayer = "X";
});


