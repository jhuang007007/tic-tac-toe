//gameBoard module
const gameBoard = (() => {
  const gameBoardArray = ["x","x","o","o","x","x","o","o","x"];

  return {
    gameBoardArray
  };
})();

//displayController module
const displayController = ((doc) => {
  //render gameBoardArray to webpage
  const renderGameboard = (selector) => {
    doc.querySelector(selector).textContent = gameBoard.gameBoardArray.join(' ');
  }

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
