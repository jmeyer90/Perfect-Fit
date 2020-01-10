// This code was inspired by the work of
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

import triTessVis from './tri_tess';
import sqrTessVis from './sqr_tess';
import hexTessVis from './hex_tess';

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
    debugger
    shape.orientation === "up" ? shape.drawUpTri() : shape.drawDownTri();
  }

  selectShape(x,y){
    for( let i = 0; i < this.shapes.length; i ++){
      if(this.shapes[i].hover(x,y)) return this.shapes[i];
    }
    return null;
  }

  unselect(shape, ctx){
    shape.unselect();
    this.shapes = [];
    triTessVis(ctx);
    hexTessVis(ctx);
    sqrTessVis(ctx);
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