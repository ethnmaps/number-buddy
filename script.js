const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const clearButton = document.getElementById("clear");

ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle = "white";

let drawing = false;

function clearBoard() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

window.addEventListener("pointerup", () => {
  drawing = false;
});

clearButton.addEventListener("click", clearBoard);

clearBoard();