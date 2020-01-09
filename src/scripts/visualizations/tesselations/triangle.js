class Triangle {
  constructor(x, y, sideLength, lineHeight, ctx){
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.midpoint = sideLength / 2;
    this.lineHeight = lineHeight;
    this.ctx = ctx;
    this.selected = false;
    this.orinetation = "";
  }

  drawUpTri(){
    this.orinetation = "up";
    this.ctx.fillStyle = "#ACC2F1"; // BLUE1
    this.ctx.strokeStyle = "#ACC2F1"; // BLUE1
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.midpoint, this.y + this.lineHeight);
    this.ctx.lineTo(this.x - this.midpoint, this.y + this.lineHeight);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawDownTri(){
    this.orinetation = "down";
    this.ctx.fillStyle = "#84A7F2"; //BLUE2
    this.ctx.strokeStyle = "#84A7F2"; //BLUE2
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.sideLength, this.y);
    this.ctx.lineTo(this.x + this.midpoint, this.y + this.lineHeight);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  hover(x,y){
    //refactor for up triangles and down traingles
    return(
      (x >= this.x ) && ( x <= this.x + this.sideLength) &&
      (y >= this.y ) && ( x <= this.x + this.sideLength)
    )
  }
}

export default Triangle;