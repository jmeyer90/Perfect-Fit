// This code was inspired by the work of
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

class DynamicShape {
  constructor(canvas){
    this.canvs = canvas;
    this.shapes = [];
  }

  addShape(shape){
    this.shapes.push(shape);
  }

  setSelected(shape){
    for(let i = 0; i < this.shapes.length; i++){
      this.shapes[i].selected = this.shapes[i] === shape;
    }
    this.draw();
  }

  selectShape(x,y){
    for( let i = 0; i < this.shapes.length; i ++){
      if(this.shapes[i].hover(x,y)) return this.shapes[i];
    }
    return null;
  }

  drawTri(){
    for(let i = 0; i < this.shapes.length; i++){
      this.shapes[i].drawUpTri();
      i++;
      if( i <  this.shapes.length ) this.shapes[i].drawDownTri();
    }
  }
}

export default DynamicShape;