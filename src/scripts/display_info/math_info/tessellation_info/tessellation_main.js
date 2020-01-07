import hexInfo from './hex_tess_info';
import sqrInfo from './sqr_tess_info';
import triInfo from './tri_tess_info';

const TessMain = () =>{
  let tessInfo = document.createElement('div');
  tessInfo.setAttribute('class', 'tess-info');
  document.getElementById('info-container').appendChild(tessInfo);

  tessHeader(tessInfo);

  // triInfo(tessInfo);
  // sqrInfo(tessInfo);
  // hexInfo(tessInfo);
  
  tessFooter(tessInfo);
}

const tessHeader = (tessInfo) =>{
  let header = document.createElement('span');
  header.setAttribute('class', 'disp-header');
  tessInfo.appendChild(header);

  let headerTitle = document.createElement('h1');
  headerTitle.setAttribute('class', 'header-title');
  headerTitle.innerHTML = 'Tessellations';
  header.appendChild(headerTitle);

  let headerDesc = document.createElement('p');
  headerDesc.setAttribute('class', 'header-desc');
  headerDesc.innerHTML = "Here is a tessellation description";
  headerTitle.append(headerDesc);
}

const tessFooter = (tessInfo) => {
  let footer = document.createElement('span');
  footer.setAttribute('class', 'disp-footer');
  tessInfo.appendChild(footer);

  let footerTitle = document.createElement('h1');
  footerTitle.setAttribute('class', 'footer-title');
  footerTitle.innerHTML = 'Links';
  footer.appendChild(footerTitle);

  let footerDesc = document.createElement('p');
  footerDesc.setAttribute('class', 'footer-desc');
  footerDesc.innerHTML = "Here are external sources";
  footerTitle.append(footerDesc);
}

export default TessMain