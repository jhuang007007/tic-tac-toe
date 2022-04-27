const gameBoard = (() => {
  const gameBoardArray = ["","","","","","","","",""];

  return {
    gameBoardArray
  }
})();

const displayController = ((doc) => {

  const renderGameboard = () => {
    let count = 1;
    let turn = 1;

    gameBoard.gameBoardArray.forEach(element => {

      doc.querySelector(`.square-${count}`).textContent = element;
      doc.querySelector(`.square-${count}`).addEventListener("click", e => {
        if (turn % 2 !== 0) {
          console.log("oof")
        } else {
          console.log(e.target)
        }

        turn++;
      })

      count++;
    });

  };

  return {
    renderGameboard
  }

})(document);

// player factory
const player = (name) => {
  const getName = () => name;
  return {
    getName
  }
}

//Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken

//logic that checks for 3-in-a-row and a tie
// function isGameOver {}

// /Optional - create an AI so that a player can play against the computer
