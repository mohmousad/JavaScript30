const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

// Setting Defaults
context.strokeStyle = "#000000";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 1;
let isDrawing = false;
let lastX;
let lastY;
let hue = 0;
let colorInputValue;

// Drawing Functions
function draw(e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  if (reainbow.checked) {
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue++;
  } else {
    context.strokeStyle = colorInputValue;
  }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Options
const colorInput = document.querySelector("#colorInput");
colorInputValue = colorInput.value;
colorInput.addEventListener("input", function (e) {
  colorInputValue = e.target.value;
  context.strokeStyle = colorInputValue;
});

const widthInput = document.querySelector("#widthInput");
widthInput.addEventListener("input", function (e) {
  context.lineWidth = e.target.value;
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const reainbow = document.querySelector("#reainbow");
reainbow.addEventListener("click", function (e) {
  if (e.target.checked) {
    hue = 0;
  }
});
