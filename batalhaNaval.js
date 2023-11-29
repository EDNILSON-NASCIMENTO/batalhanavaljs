//const app = require('express');


// Criação dos tabuleiros
const playerBoard = document.getElementById('playerBoard');
const computerBoard = document.getElementById('computerBoard');
const boardSize = 10;
const playerGrid = createGrid(playerBoard);
const computerGrid = createGrid(computerBoard);

// Função para criar os tabuleiros
function createGrid(board) {
  const grid = [];
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.col = j;
      board.appendChild(cell);
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
}

// Lógica para posicionar os navios (pode ser aleatório)
const playerShips = [
  { row: 0, col: 0 },
  { row: 1, col: 0 },
  // Adicione mais navios conforme necessário
];
const computerShips = [
  { row: 3, col: 5 },
  { row: 3, col: 6 },
  // Adicione mais navios conforme necessário
];

// Função para marcar o ataque
function attack(row, col) {
  // Verifica se o ataque acertou algum navio do jogador
  for (const ship of playerShips) {
    if (ship.row === row && ship.col === col) {
      playerGrid[row][col].textContent = 'X';
      alert('Você acertou um navio!');
      return;
    }
  }
  // Se não acertou, marca como "Água"
  playerGrid[row][col].textContent = 'O';
  alert('Você atirou na água.');
}

// Event listener para ataques do jogador (clique no tabuleiro do computador)
computerBoard.addEventListener('click', (event) => {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  attack(row, col);
  // Lógica da jogada da máquina (pode ser aleatória)
  const randomRow = Math.floor(Math.random() * boardSize);
  const randomCol = Math.floor(Math.random() * boardSize);
  // Simula ataque da máquina
  // Aqui você pode implementar lógicas mais complexas para a máquina
  attack(randomRow, randomCol);
});
