class Triangle {
  constructor(x, y, sideLength, lineHeight, ctx){
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.lineHeight = lineHeight;
    this.ctx = ctx;
    this.selected = false;
    this.orinetation = "";
    this.delta = 15;
  }

  selectedGrowth(){
    if(this.selected){
      this.x = this.x - this.delta;
      this.y = this.y - this.delta;
      this.lineHeight = this.lineHeight + 2 * this.delta;
      this.sideLength = this.sideLength + 2 * this.delta;
    }
  }

  unselect(){
    if (this.selected){
      this.selected = false;
      this.x = this.x + this.delta;
      this.y = this.y + this.delta;
      this.lineHeight = this.lineHeight - 2 * this.delta;
      this.sideLength = this.sideLength - 2 * this.delta;
    }
  }

  drawUpTri(){
    this.selectedGrowth();
    this.orinetation = "up";
    this.ctx.fillStyle = "#ACC2F1"; // BLUE1
    this.ctx.strokeStyle = "#000"; // BLUE1
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + (this.sideLength / 2), this.y + this.lineHeight);
    this.ctx.lineTo(this.x - (this.sideLength / 2), this.y + this.lineHeight);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawDownTri(){
    this.selectedGrowth();
    this.orinetation = "down";
    this.ctx.fillStyle = "#84A7F2"; //BLUE2
    this.ctx.strokeStyle = "#000"; //BLUE2
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.sideLength, this.y);
    this.ctx.lineTo(this.x + (this.sideLength / 2), this.y + this.lineHeight);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  hover(x,y){
    //refactor for up triangles and down traingles
    return(
      (x >= this.x ) && ( x <= this.x + this.sideLength) &&
      (y >= this.y ) && ( y <= this.y + this.sideLength)
    )
  }
}

export default Triangle;