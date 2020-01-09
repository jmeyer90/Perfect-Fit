import triTessVis from './tesselations/tri_tess';
import sqrTessVis from './tesselations/sqr_tess';
import hexTessVis from './tesselations/hex_tess';


const canvasMain = (selected) =>{
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.lineWidth = .4;
  let disp = false

  switch (selected) {
    case "tess":
      if (disp) wipeCanvas(ctx);
      triTessVis(ctx)
      hexTessVis(ctx)
      sqrTessVis(ctx)
      disp = true;
      break;

    case "gold":
      if (disp) wipeCanvas(ctx);
      goldRatioVis(ctx)
      disp = true;
      break;

    case "pyth":
      if (disp) wipeCanvas(ctx);
      pythagTheoremVis(ctx)
      disp = true;
      break;

    default:
      break
  }
}

const wipeCanvas = ctx => {
  let x = 0;
  let height = window.innerHeight;
  return new Promise ((response, request) =>{
    const clearInt = setInterval(()=>{
      ctx.clearRect(x, 0, 1, height);
      x++;
      if (x === window.innerWidth) clearInterval(clearInt)
    }, 1)
  })


}

export default canvasMain;
