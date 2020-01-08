import triTessVis from './tesselations/tri_tess';
import sqrTessVis from './tesselations/sqr_tess';
import hexTessVis from './tesselations/hex_tess';


const canvasMain = (selected) =>{
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillRect(0, 0, canvas.width, (canvas.height / 3));
  ctx.lineWidth = .4;

  debugger
  switch (selected) {
    case "tess":
      debugger
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // wipeCanvas(ctx);
      triTessVis(ctx);
      hexTessVis(ctx);
      sqrTessVis(ctx);
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

const wipeCanvas = ctx => {
  let x = 0;
  let height = window.innerHeight;

  setInterval(()=>{
    ctx.strokeStyle = "#EFF1F5";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    x++;
  }, 5)
}

export default canvasMain;
