let board = ['', '', '', '', '', '', '', '', ''];
let playerDaVez = '0';
let simbols = ['O', 'X'];

function movimento(posicao) {
  board[posicao] = simbols [playerDaVez];
  updateSquare();
  playerDaVez = playerDaVez === '0' ? '1' : '0';
  
  checkWin();
}

function checkWin() {
    let square = document.querySelectorAll(".square");
    let winningCombinations = [
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
      let [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`Player ${board[a]} wins!`);
        resetGame();
        return;
      }
    }
  
    if (!board.includes('')) {
      alert("Empatou!");
      resetGame();
    }
  }
  function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '0';
    let square = document.querySelectorAll(".square");
    square.forEach((square) => {
      square.innerHTML = '';
      square.classList.remove('selected');
    })
  }