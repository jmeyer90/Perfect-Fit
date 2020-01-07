import Tess from './math_info/tessellation_info/tessellation_main';
import GoldRatio from'./math_info/gold_ratio_info';
import PythagTheorem from './math_info/pythag_theorem_info';

const SwitchDisp=show =>{
  let dispInfo = false;
  let selected;
  
  setMathDisp(show, dispInfo, selected);
  
  const switchOptions = document.getElementsByClassName("switch-disp-op");

  Array.from(switchOptions).some( option => 
    option.addEventListener("click", (e)=>{
      switch (e.currentTarget.value) {
        case "tess":
          debugger
          show, dispInfo, selected = setSelect("tess", show, dispInfo, selected);
          break;
        case "gold":
          // debugger
          show, dispInfo, selected = setSelect("gold", show, dispInfo, selected);
          break;
        case "pyth":
          // debugger
          show, dispInfo, selected = setSelect("pyth", show, dispInfo, selected);
          break;
        default:
          // debugger
          break;
      }
    })
  );
}

const setSelect=(val, show, dispInfo, selected)=>{
  show = !show;
  dispInfo = !dispInfo;
  selected = val;
  setMathDisp(show, dispInfo, selected);
  return show, dispInfo, selected;
}

const setMathDisp = (show, dispInfo, selected) =>{
  // debugger
  let switchContainer = document.getElementById("switch-disp-container");
  let infoContainer = document.getElementById('info-container');
  true;
  if (show){
    debugger
    switchContainer.style.display = "flex";
    switchContainer.style.zIndex = 2;
    infoContainer.style.display = "none";
    infoContainer.style.zIndex = -1;
    infoContainer.innerHTML = ""
  } else if (dispInfo) {
    debugger
    switchContainer.style.display = "none";
    switchContainer.style.zIndex = "-1";
    infoContainer.style.display = "flex";
    infoContainer.style.zIndex = 2;
    
    switch (selected) {
      case "tess":
        Tess()
        break;
      case "gold":
        GoldRatio()
        break;
      case "pyth":
        PythagTheorem()
        break;
        
      default:
        break;
    }
  } else {
    debugger
    switchContainer.style.display = "none";
    switchContainer.style.zIndex = "-1";
    infoContainer.style.display = "none";
    infoContainer.style.zIndex = -1;
  }
}

export default SwitchDisp;