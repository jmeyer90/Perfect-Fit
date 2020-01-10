// This code was inspired by the work of both
// Cthulahoop at CodePen.com 
// https://codepen.io/Cthulahoop/pen/umcvo)
// and 
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

const sqrTessVis = ctx => {
  const numRows = 3;
  const sqrSideLength = window.innerHeight / 3 / numRows;
  const numCols = Math.ceil(window.innerWidth /sqrSideLength);
  const startHeight = window.innerHeight / 3 * 2;

  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      let x = col * sqrSideLength;
      let y = row * sqrSideLength + startHeight;

      if (row % 2 === 0) x = x - sqrSideLength;
      let color = col % 2 === 0 ? "#ACC2F1" : "#84A7F2"; // BLUE1 : BLUE2;

      ctx.fillStyle = color;
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + sqrSideLength);
      ctx.lineTo(x + sqrSideLength, y + sqrSideLength);
      ctx.lineTo(x + sqrSideLength, y)
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
}

export default sqrTessVis;
