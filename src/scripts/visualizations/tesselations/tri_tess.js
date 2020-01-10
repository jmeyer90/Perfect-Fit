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

  const canX = ctx.canvas.offsetLeft;
  const canY = ctx.canvas.offsetTop;
  
  const mouseMove = e => {
    const x = e.x - canX;
    const y = e.y - canY;
    const tri = dynShap.selectShape(x,y);
  
    dynShap.setSelectd(tri);
  }

  ctx.canvas.addEventListener('mousemove', mouseMove);
}

export default triTessVis;