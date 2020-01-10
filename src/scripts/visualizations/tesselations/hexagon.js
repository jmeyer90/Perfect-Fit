class Hexagon {
  constructor(x, y, sideLength, diagLength, ctx) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.diagLength = diagLength;
    this.ctx = ctx;
    this.selected = false;
    this.orinetation = "";
    this.delta = 15;
  }

  selectedGrowth() {
    if (this.selected) {
      this.x = this.x - this.delta;
      this.y = this.y - this.delta;
      this.sideLength = this.sideLength + (2 * this.delta);
      this.diagLength = this.sideLength / Math.sqrt(2);
    }
  }

  unselect() {
    if (this.selected) {
      this.selected = false;
      this.x = this.x + this.delta;
      this.y = this.y + this.delta;
      this.sideLength = this.sideLength - (2 * this.delta);
      this.diagLength = this.sideLength / Math.sqrt(2);
    }
  }

  drawLeftHex() {
    this.selectedGrowth();
    this.orinetation = "right";
    this.ctx.fillStyle = "#ACC2F1"; // BLUE1
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.diagLength, this.y + this.diagLength);
    this.ctx.lineTo(this.x + this.diagLength + this.sideLength, this.y + this.diagLength);
    this.ctx.lineTo(this.x + 2 * this.diagLength + this.sideLength, this.y);
    this.ctx.lineTo(this.x + this.diagLength + this.sideLength, this.y - this.diagLength);
    this.ctx.lineTo(this.x + this.diagLength, this.y - this.diagLength);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawRightHex() {
    this.selectedGrowth();
    this.orinetation = "left";
    this.ctx.fillStyle = "#84A7F2"; //BLUE2
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + this.diagLength + this.sideLength, this.y - this.diagLength);
    this.ctx.lineTo(this.x + 2 * this.diagLength + this.sideLength, this.y);
    this.ctx.lineTo(this.x + 2 * this.diagLength + 2 * this.sideLength, this.y);
    this.ctx.lineTo(this.x + 3 * this.diagLength + 2 * this.sideLength, this.y - this.diagLength);
    this.ctx.lineTo(this.x + 2 * this.diagLength + 2 * this.sideLength, this.y - 2 * this.diagLength);
    this.ctx.lineTo(this.x + 2 * this.diagLength + this.sideLength, this.y - 2 * this.diagLength);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  hover(x, y) {
    //refactor for Hexagon
    return (
      (x >= this.x) && (x <= this.x + this.sideLength + (2 * this.diagLength)) &&
      (y >= this.y) && (y <= this.y + (2 * this.diagLength))
    )
  }
}

export default Hexagon;