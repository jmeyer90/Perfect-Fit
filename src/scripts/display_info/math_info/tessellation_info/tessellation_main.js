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
  headerTitle.setAttribute('class', 'disp-title');
  headerTitle.innerHTML = 'Tessellations';
  header.appendChild(headerTitle);
  
  let headerDesc = document.createElement('section');
  headerDesc.setAttribute('class', 'header-desc');
  tessDesc( headerDesc );
  // headerDesc.innerHTML = "Tessellate Description";
  headerTitle.append(headerDesc);
}

const tessFooter = (tessInfo) => {
  let footer = document.createElement('span');
  footer.setAttribute('class', 'disp-footer');
  tessInfo.appendChild(footer);
  
  let footerTitle = document.createElement('h1');
  footerTitle.setAttribute('class', 'disp-title');
  footerTitle.innerHTML = 'Links';
  footer.appendChild(footerTitle);
  
  let footerDesc = document.createElement('p');
  footerDesc.setAttribute('class', 'footer-desc');
  footerDesc.innerHTML = "Here are external sources";
  footerTitle.append(footerDesc);
}

const tessDesc = ( headerDesc) =>{
  const text = "A tessellation is a pattern made by a regular polygon which completely fills the are with no gaps. " +
    "There are only 3 regular polygons which can make a tessellation. "+
    "These polgyons are:";

  const shapes = ["Traingle", "Hexagon", "Square"];
  
  const formulaText = "In order for a polygon to be a regular tessellation, " +
    "the sum of the polygon's interior angles must be divisible by 180 degrees.";

  const formulaProps = "The &#x2211; of all interior &#x2221;'s mod 180 must equal 0.";

  const tessText = document.createElement('p');
  tessText.setAttribute('class', 'header-text')
  tessText.innerHTML = text;

  const shapeUl = document.createElement('ul')
  shapeUl.setAttribute('class', 'shape-ul');
  shapes.forEach(shape => {
    let shapeLi = document.createElement('li')
    shapeLi.setAttribute('class', 'shape-li')
    shapeLi.innerHTML = shape;
    shapeUl.appendChild(shapeLi);
  });

  const formulaTitle = document.createElement('h2');
  formulaTitle.setAttribute('class', 'disp-title');
  formulaTitle.innerHTML = "Formula";
  
  const formulaPropsP = document.createElement('p');
  formulaPropsP.setAttribute('class', 'formula-props');
  formulaPropsP.innerHTML = formulaProps;

  const formulaTextP = document.createElement('p')
  formulaTextP.setAttribute('class', 'formula-text');
  formulaTextP.innerHTML = formulaText

  headerDesc.appendChild(tessText);
  headerDesc.appendChild(shapeUl);
  headerDesc.appendChild(formulaTitle);
  headerDesc.appendChild(formulaTextP);
  headerDesc.appendChild(formulaPropsP);
}

export default TessMain