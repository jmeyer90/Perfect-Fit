// This code was inspired by the work of
// Siamand and StackOverflox.com
// https://stackoverflow.com/questions/43788062/html-canvas-javascript-scale-object-on-hover

import triTessVis from './tri_tess';
import sqrTessVis from './sqr_tess';
import hexTessVis from './hex_tess';
import Triangle from './triangle';
import Hexagon from './hexagon';
import Square from './square';

class DynamicShape {
  constructor(canvas){
    this.canvs = canvas;
    this.shapes = [];
  }

  addShape(shape){
    this.shapes.push(shape);
  }

  setSelected(shape){
    shape.selected = true;
    if( shape instanceof Triangle){
      shape.orientation === "up" ? shape.drawUpTri() : shape.drawDownTri();
    } else if (shape instanceof Hexagon){
      shape.orinetation === "right" ? shape.drawRightHex() : shape.drawLeftHex();
    } else if (shape instanceof Square){
      shape.drawSqr();
    }
  }

  selectShape(x,y){
    // for Squares: 
    //    check if x === sqrSideLength * num
    //    and if y === window.innerHeight - sqrSideLength - ( 0..numRows )
    // for Triangles: 
    //    check if x is on left or right line formed by triangle sides using formula for linear line
    //      mx + b === 0;
    //      all right triangle lines have same slope, left triangle lines have same slope
    //    and if y === window.innerHeight - sqrSideLength - ( 0..numRows )
    // for Hexagons
    //    check if x is on left or right, upper or lower diagnoals formed by hexagon sides using formula for linear line
    //      mx + b ===0;
    //      slope is 45 degrees (upper right, lower left) or 135 degrees (upper left, lower right)
    //    and if y === window.innerHeight - sqrSideLength - ( 0..numRows )
    for( let i = 0; i < this.shapes.length; i ++){
      if(this.shapes[i].hover(x,y)) return this.shapes[i];
    }
    return null;
  }

  unselect(shape, ctx){
    shape.unselect();
    debugger
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

  drawHex(){
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].drawLeftHex();
      i++;
      if (i < this.shapes.length) this.shapes[i].drawRightHex();
    }
  }

  drawSqr(){
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].drawSqr();
    }
  }
}

export default DynamicShape;