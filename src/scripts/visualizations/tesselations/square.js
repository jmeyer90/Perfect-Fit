class Square {
  constructor(x, y, sideLength, row, col, ctx) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.row = row;
    this.col = col;
    this.ctx = ctx;
    this.selected = false;
    this.delta = 15;
  }

  selectedGrowth() {
    if (this.selected) {
      this.x = this.x - this.delta;
      this.y = this.y - this.delta;
      this.sideLength = this.sideLength + 2 * this.delta;
    }
  }

  unselect() {
    if (this.selected) {
      this.selected = false;
      this.x = this.x + this.delta;
      this.y = this.y + this.delta;
      this.sideLength = this.sideLength - 2 * this.delta;
    }
  }

  drawSqr() {
    if (this.row % 2 === 0) this.x = this.x - this.sideLength;
    this.ctx.fillStyle = this.col % 2 === 0 ? "#ACC2F1" : "#84A7F2"; // BLUE_1 : BLUE_2
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x, this.y + this.sideLength);
    this.ctx.lineTo(this.x + this.sideLength, this.y + this.sideLength);
    this.ctx.lineTo(this.x + this.sideLength, this.y)
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  hover(x, y) {
    return (
      (x >= this.x) && (x <= this.x + this.sideLength) &&
      (y >= this.y) && (y <= this.y + this.sideLength)
    )
  }
}

export default Square;