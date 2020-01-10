// This code was inspired by the work of both
// Cthulahoop at CodePen.com 
// https://codepen.io/Cthulahoop/pen/umcvo)
// and 
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

import DynamicShape from './dynamic_shape';
import Square from './square';

const sqrTessVis = ctx => {
  const numRows = 3;
  const sqrSideLength = window.innerHeight / 3 / numRows;
  const numCols = Math.ceil(window.innerWidth /sqrSideLength);
  const startHeight = window.innerHeight / 3 * 2;

  let dynShape = new DynamicShape(ctx.canvas);

  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      let x = col * sqrSideLength;
      let y = row * sqrSideLength + startHeight;

      let sqr = new Square(x, y, sqrSideLength, row, col, ctx);

      dynShape.addShape(sqr);
    }
  }

  dynShape.drawSqr();

  const canX = ctx.canvas.offsetLeft;
  const canY = ctx.canvas.offsetTop;

  const mouseOver = e => {
    const x = e.x - canX;
    const y = e.y - canY;
    const hex = dynShap.selectShape(x, y);
    debugger
    dynShap.setSelected(hex);
  }

  const mouseOut = e => {
    const x = e.x - canX;
    const y = e.y - canY;
    const hex = dynShap.selectShape(x, y);
    debugger
    if (hex) dynShap.unselect(hex, ctx);
  }

  ctx.canvas.addEventListener('mouseout', mouseOut);
  ctx.canvas.addEventListener('mouseover', mouseOver);
}

export default sqrTessVis;
