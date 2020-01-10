// const canX = ctx.canvas.offsetLeft;
// const canY = ctx.canvas.offsetTop;

export const mouseOver = (e, ctx, dynShap) => {
  const x = e.x - ctx.canvas.offsetLeft;
  const y = e.y - canY;
  const hex = dynShap.selectShape(x, y);
  dynShap.setSelected(hex);
}

export const mouseOut = (e, ctx, dynShap )=> {
  const x = e.x - ctx.canvas.offsetLeft;
  const y = e.y - ctx.canvas.offsetTop;
  const hex = dynShap.selectShape(x, y);
  if (hex) dynShap.unselect(hex, ctx);
}