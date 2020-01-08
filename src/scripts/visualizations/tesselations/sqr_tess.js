// import { BLUE1, BLUE2 } from '../../../styles/color_utils';

const sqrTessVis = ctx => {
  const sqrSideLength = 82;
  const numRows = Math.ceil(window.innerWidth / sqrSideLength);
  const numCols = Math.ceil(window.innerHeight / sqrSideLength) / 3;
  const startHeight = window.innerHeight / 3 * 2;

  for (let row = 0; row <= numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      let x = row * sqrSideLength;
      let y = col * sqrSideLength + startHeight;

      if (col % 2 === 0) x = x - sqrSideLength;
      let color = row % 2 === 0 ? "#ACC2F1" : "#84A7F2"; // BLUE1 : BLUE2;

      ctx.fillStyle = color;
      ctx.strokeStyle = color;
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
  debugger
}

export default sqrTessVis;
