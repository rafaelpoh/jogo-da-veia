document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", clicado);
  });
});

function clicado(event) {
  let square = event.target;
  let posicao = square.id;
  movimento(posicao);
  updateSquare();
  };
  
function updateSquare() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let posicao = square.id;
    let simbol = board[posicao];
    if (simbol !== '') {
      square.innerHTML = `<div class='${simbol}'></div>`;
      square.classList.add("selected");
    };
  });
}