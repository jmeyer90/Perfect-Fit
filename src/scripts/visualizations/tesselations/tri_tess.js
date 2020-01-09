const triTessVis = ctx =>{
  const numRows = 3;
  const triSideLength = window.innerHeight / 3.0 / numRows;
  const lineHeight = Math.floor(triSideLength * Math.sqrt(3) / 2);
  const midpoint = triSideLength / 2;
  const numCols = Math.ceil(window.innerWidth / triSideLength); 

  for(let row = 0; row < numRows; row++) {
    for (let col = 0; col <= numCols; col++) {
      let x = col * triSideLength;
      let y = row * lineHeight;

      ctx.fillStyle = "#ACC2F1"; // BLUE1
      ctx.strokeStyle = "#ACC2F1"; // BLUE1
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + midpoint, y + lineHeight);
      ctx.lineTo(x - midpoint, y + lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "#84A7F2"; //BLUE2
      ctx.strokeStyle = "#84A7F2"; //BLUE2
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + triSideLength, y);
      ctx.lineTo(x + midpoint, y + lineHeight);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }

  // const rowInterval = setInterval(()=>{
  //   return new Promise((resolve, reject)=>{
  //     fillRow(row, col, ctx, triSideLength, lineHeight, 
  //       midpoint, numCols).then(row++);
  //     if (row === numRows) clearInterval(rowInterval);
  //   })
  // }, 200)
}

const fillRow = (row, col, ctx, triSideLength, lineHeight,
  midpoint, numCols) => {
  return new Promise((resolve, reject) =>{
    const colInterval = setInterval(()=>{
      let x = col * triSideLength;
      let y = row * lineHeight;
  
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
      
      col++;
      if(col === numCols) clearInterval(colInterval);
    }, 150)
    ctx.requestAnimationFrame(fillRow);
  })
}

export default triTessVis;