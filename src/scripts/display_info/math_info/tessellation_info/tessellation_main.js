import hexInfo from './hex_tess_info';
import sqrInfo from './sqr_tess_info';
import triInfo from './tri_tess_info';

const TessMain = () =>{
  tessHeader();

  triInfo();
  sqrInfo();
  hexInfo();
  
  tessFooter();
}

export default TessMain