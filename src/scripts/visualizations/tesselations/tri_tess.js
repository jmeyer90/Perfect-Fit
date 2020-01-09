// This code was inspired by the work of both 
// Cthulahoop at CodePen.com 
// https://codepen.io/Cthulahoop/pen/umcvo)
// and 
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover
import DynamicShape from './dynamic_shape';
import Triangle from './triangle';

const triTessVis = ctx =>{
  const numRows = 3;
  const triSideLength = window.innerHeight / 3.0 / numRows;
  const lineHeight = Math.floor(triSideLength * Math.sqrt(3) / 2);
  const numCols = Math.ceil(window.innerWidth / triSideLength); 

  let dynShap = new DynamicShape(ctx.canvas);

  for(let row = 0; row < numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      let x = col * triSideLength;
      let y = row * lineHeight;

      let upTri = new Triangle(x, y, triSideLength,lineHeight, ctx);
      let downTri = new Triangle(x, y, triSideLength,lineHeight, ctx);

      dynShap.addShape(upTri);
      dynShap.addShape(downTri);
    }
  }

  dynShap.drawTri();
  
  // ctx.fillStyle = "#ACC2F1"; // BLUE1
  // ctx.strokeStyle = "#ACC2F1"; // BLUE1
  // ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.lineTo(x + midpoint, y + lineHeight);
  // ctx.lineTo(x - midpoint, y + lineHeight);
  // ctx.closePath();
  // ctx.stroke();
  // ctx.fill();

  // ctx.fillStyle = "#84A7F2"; //BLUE2
  // ctx.strokeStyle = "#84A7F2"; //BLUE2
  // ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.lineTo(x + triSideLength, y);
  // ctx.lineTo(x + midpoint, y + lineHeight);
  // ctx.closePath();
  // ctx.stroke();
  // ctx.fill();
}

export default triTessVis;