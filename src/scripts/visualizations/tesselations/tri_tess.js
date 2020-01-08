const triTessVis = ctx =>{
  const triSideLength = 40;
  const lineHeight = Math.floor(triSideLength * Math.sqrt(3) / 2);
  const midpoint = triSideLength / 2;
  const numRows = Math.ceil(window.innerHeight / lineHeight) / 3;
  const numCols = Math.ceil(window.innerWidth / triSideLength); 
  let row = 0;
  let col = 0;

  // const rowInterval = setInterval(()=>{"#EFF1F5"
  // fillRow function, have set interval set in promise
  // for(let row = 0; row <= numRows; row++){
  const rowInterval = setInterval(()=>{
    return new Promise((resolve, reject)=>{
      fillRow(row, col, ctx, triSideLength, lineHeight, 
        midpoint, numCols).then(row == numRows ? clearInterval(rowInterval) : row++ )
    })
  }, 200)
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
    }, 200)
  })
}

export default triTessVis;