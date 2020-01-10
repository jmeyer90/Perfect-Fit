// This code was inspired by the work of both
// Cthulahoop at CodePen.com 
// https://codepen.io/Cthulahoop/pen/umcvo)
// and 
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

import Hexagon from "./hexagon";
import DynamicShape from './dynamic_shape';

const hexTessVis = ctx => {
  const numRows = 6;
  const hexSideLength = window.innerHeight / 3.0 / numRows;
  const diagLength = hexSideLength / Math.sqrt(2);
  const lineHeight = diagLength * 2
  const numCols = Math.ceil(window.innerWidth / hexSideLength);
  const startHeight = window.innerHeight / 3.0;
  const vertShift = 12;

  for (let col = 0; col < numCols; col++) {
    let x = col * (2 * hexSideLength + 2 * diagLength) - 2 * diagLength;
    let y = startHeight - diagLength - vertShift;

    ctx.fillStyle = "#ACC2F1"; // BLUE1
    ctx.strokeStyle = "#000"; // BLUE1
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + diagLength, y + diagLength);
    ctx.lineTo(x + diagLength + hexSideLength, y + diagLength);
    ctx.lineTo(x + 2 * diagLength + hexSideLength, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  let dynShap = new DynamicShape(ctx.canvas);

  for (let row = 0; row < numRows; row++) {

    for (let col = 0; col <= numCols; col++) {
      let x = col * (2 * hexSideLength + 2 * diagLength) - 2 * diagLength;
      let y = row * lineHeight + startHeight + diagLength - vertShift;

      let leftHex = new Hexagon(x, y, hexSideLength, diagLength, ctx); 
      let rightHex = new Hexagon(x, y, hexSideLength, diagLength, ctx);

      dynShap.addShape(leftHex);
      dynShap.addShape(rightHex);
    }
  }

  dynShap.drawHex();

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

export default hexTessVis;