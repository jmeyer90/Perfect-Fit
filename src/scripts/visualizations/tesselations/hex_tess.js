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

  for (let row = 0; row < numRows; row++) {

    for (let col = 0; col <= numCols; col++) {
      let x = col * (2 * hexSideLength + 2 * diagLength) - 2 * diagLength;
      let y = row * lineHeight + startHeight + diagLength - vertShift;

      ctx.fillStyle = "#ACC2F1"; // BLUE1
      ctx.strokeStyle = "#000"; // BLUE1
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + diagLength, y + diagLength);
      ctx.lineTo(x + diagLength + hexSideLength, y + diagLength);
      ctx.lineTo(x + 2*diagLength + hexSideLength, y);
      ctx.lineTo(x + diagLength + hexSideLength, y - diagLength);
      ctx.lineTo(x + diagLength, y-diagLength);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      
      ctx.fillStyle = "#84A7F2"; //BLUE2
      ctx.strokeStyle = "#000"; //BLUE2
      ctx.beginPath();
      ctx.moveTo(x + diagLength + hexSideLength, y - diagLength);
      ctx.lineTo(x + 2 * diagLength + hexSideLength, y);
      ctx.lineTo(x + 2 * diagLength + 2 * hexSideLength, y);
      ctx.lineTo(x + 3 * diagLength + 2 * hexSideLength, y - diagLength);
      ctx.lineTo(x + 2 * diagLength + 2* hexSideLength, y - 2 * diagLength);
      ctx.lineTo(x + 2 * diagLength + hexSideLength, y - 2* diagLength);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }
  debugger
}

export default hexTessVis;