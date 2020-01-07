const triTessVis = ctx =>{
  const triSideLength = 40;
  const lineHeight = Math.floor(triSideLength * Math.sqrt(3) / 2);
  const midpoint = triSideLength / 2;
  const numRows = Math.ceil( window.innerWidth / triSideLength );
  const numCols = Math.ceil( window.innerHeight / lineHeight ) / 3;

  for( let row = 0; row <  numRows; row++ ){
    for( let col = 0; col < numCols; col++ ){
      let x = row * triSideLength;
      let y = col * lineHeight;

      ctx.fillStyle = "#ACC2F1";
      ctx.strokeStyle = '#ACC2F1';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + midpoint, y + lineHeight);
      ctx.lineTo(x - midpoint, y + lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "#84A7F2";
      ctx.strokeStyle = "#84A7F2";
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+triSideLength, y);
      ctx.lineTo(x+midpoint, y+lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

    }
  }
}

export default triTessVis;