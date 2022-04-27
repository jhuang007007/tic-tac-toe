const gameBoard = (() => {
  let gameBoardArray = ["","","","","","","","",""];

  return {
    gameBoardArray
  }
})();


const displayController = ((doc) => {
  let turn = 1;

  const resetTurnCount = () => {
    turn = 1;
  }

  const renderGameboard = () => {
    let count = 1;

    gameBoard.gameBoardArray.forEach(element => {      
      doc.querySelector(`.square-${count}`).addEventListener("click", e => {
        if (e.target.textContent == "") {
          if (turn % 2 !== 0) {
            gameBoard.gameBoardArray[e.target.classList[2] - 1] = "X";
            e.target.textContent = "X";
            doc.querySelector("#player-two-display").classList.add("turn")
            doc.querySelector("#player-one-display").classList.remove("turn")
            if (turn >= 5) {
              gameScenerios.isGameOver();
            }
          } else {
            gameBoard.gameBoardArray[e.target.classList[2] - 1] = "O";
            e.target.textContent = "O";
            doc.querySelector("#player-one-display").classList.add("turn")
            doc.querySelector("#player-two-display").classList.remove("turn")
            if (turn >= 5) {
              gameScenerios.isGameOver();
            }
          }
          
          turn++;
        }
      
      })
      doc.querySelector(`.square-${count}`).textContent = element;
      count++;
    });
  };

  return {
    renderGameboard,
    resetTurnCount
  }

})(document);


//start the first game
displayController.renderGameboard()


const player = (name) => {
  const getName = () => name;

  return {
    getName
  }
}


const buttonController = ((doc) => {
  const _resetTurn = () => {
    doc.querySelector("#player-one-display").classList.add("turn");
    doc.querySelector("#player-two-display").classList.remove("turn");
    displayController.resetTurnCount();
  }

  const _resetBoard = () =>  {
    gameBoard.gameBoardArray = ["","","","","","","","",""];
    displayController.renderGameboard();
  }
  
  const _submit = () => {
    _resetTurn();
    const playerOne = player(doc.querySelector("#player-one-name").value);
    const playerTwo = player(doc.querySelector("#player-two-name").value);
    _resetBoard();
    doc.querySelector("#player-one-display").textContent = playerOne.getName() + " (X)";
    doc.querySelector("#player-two-display").textContent = playerTwo.getName() + " (O)";
    doc.querySelector(".overlay").classList.add("hidden")
  }

  doc.querySelector("#new-game-button").addEventListener("click", () => {
    doc.querySelector(".overlay").classList.remove("hidden")
  })

  doc.querySelector("#reset-board-button").addEventListener("click", () => {
    _resetBoard();
    _resetTurn();
  })

  doc.querySelector("form").onsubmit = _submit;

})(document);

//logic that checks for 3-in-a-row and a tie
const gameScenerios = (() => {
  const isGameOver = () => {
    let gameEnd = 0;

    //check tie
    if (!gameBoard.gameBoardArray.includes("")) {
      gameEnd = 3;
    } 
    
    //check diag wins
    if (gameBoard.gameBoardArray[0] === gameBoard.gameBoardArray[4] && 
      gameBoard.gameBoardArray[4] === gameBoard.gameBoardArray[8]) {
        if (gameBoard.gameBoardArray[0] !== "") {
          gameBoard.gameBoardArray[0] == "X" ? gameEnd = 1: gameEnd = 2;
          console.log("1")
        }
    } else if (gameBoard.gameBoardArray[2] === gameBoard.gameBoardArray[4] && 
        gameBoard.gameBoardArray[4] === gameBoard.gameBoardArray[6]) {
          if (gameBoard.gameBoardArray[2] !== "") {
            gameBoard.gameBoardArray[2] == "X" ? gameEnd = 1: gameEnd = 2;
            console.log("2")
          }
    } 
  
    //check vertical wins
    for (let i = 0; i <= 2; i++) {
      if (gameBoard.gameBoardArray[i] === gameBoard.gameBoardArray[i + 3] && 
        gameBoard.gameBoardArray[i + 3] === gameBoard.gameBoardArray[i + 6]) {
          if (gameBoard.gameBoardArray[i] !== "") {
            gameBoard.gameBoardArray[i] == "X" ? gameEnd = 1: gameEnd = 2;
            console.log("3")
          }
      
      } 
    }
  
    //check horizontal wins
    for (let i = 0; i <= 6; i += 3) {
      if (gameBoard.gameBoardArray[i] === gameBoard.gameBoardArray[i + 1] && 
        gameBoard.gameBoardArray[i + 1] === gameBoard.gameBoardArray[i + 2]) {
          if (gameBoard.gameBoardArray[i] !== "") {
            gameBoard.gameBoardArray[i] == "X" ? gameEnd = 1: gameEnd = 2;
            console.log("4")
          }
      }
    }
  
    switch (gameEnd) {
      case 1:
        console.log("X wins");
        break;
      case 2:
        console.log("O wins");
        break;
      case 3:
        console.log("Tie");
        break;
      default:
        break;
    }
  }
  return {
    isGameOver
  }
})();

// /Optional - create an AI so that a player can play against the computer
