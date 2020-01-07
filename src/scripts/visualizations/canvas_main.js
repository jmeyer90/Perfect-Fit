import triTessVis from './tesselations/tri_tess';
import sqrTessVis from './tesselations/sqr_tess';
import hexTessVis from './tesselations/hex_tess';


const canvasMain = (selected) =>{
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillRect(0, 0, canvas.width, (canvas.height / 3));
  // ctx.scale(0.17,0.17);
  ctx.lineWidth = .4;

  debugger
  switch (selected) {
    case "tess":
      debugger
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      triTessVis(ctx);
      // sqrTessVis(ctx);
      // hexTessVis(ctx);
      break;
    case "gold":
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      goldRatioVis(ctx)
      break;
    case "pyth":
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pythagTheoremVis(ctx)
      break;
    default:
      break
  }
}

export default canvasMain;
