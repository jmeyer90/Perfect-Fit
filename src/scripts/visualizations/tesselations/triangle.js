class Triangle {
  constructor(x, y, sideLength, midpoint, lineHeight){
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.midpoint = midpoint;
    this.lineHeight = lineHeight;
    this.selected = false;
  }

  drawUpTri(){
    ctx.fillStyle = "#ACC2F1"; // BLUE1
    ctx.strokeStyle = "#ACC2F1"; // BLUE1
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + midpoint, y + lineHeight);
    ctx.lineTo(x - midpoint, y + lineHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  drawDownTri(){
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

  hover(x,y){
    return(
      (x >= this.x ) && ( x <= this.x + this.sideLength) &&
      (y >= this.y ) && ( x <= this.x + this.sideLength)
    )
  }
}