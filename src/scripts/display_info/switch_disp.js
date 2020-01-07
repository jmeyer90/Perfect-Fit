import Tess from './math_info/tessellation_info/tessellation_main';
import GoldRatio from'./math_info/gold_ratio_info';
import PythagTheorem from './math_info/pythag_theorem_info';

const SwitchDisp=(show)=>{
  let dispInfo = false;
  let selected;
  
  const switchOptions = document.getElementsByClassName("switch-disp-op");

  Array.from(switchOptions).forEach( option => 
    option.addEventListener("click", (e)=>{
      debugger
      switch (e.target.currentValue) {
        case "Tessellations":
          debugger
          setSelect("tess");
          break;
        case "Golden Ratio":
          debugger
          setSelect("gold");
          break;
        case "Pythagorean Theorem":
          debugger
          setSelect("pyth");
          break;
        default:
          debugger
          break;
      }
    })
  );

  let switchContainer = document.getElementById("switch-disp-container")
  if (show){
    switchContainer.style.display = "flex";
    switchContainer.style.zIndex = 2;
  } else if (dispInfo) {
    switchContainer.style.display = "none";
    switchContainer.style.zIndex = "-1";
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
  }
}
        
const setSelect=(val)=>{
  show = false;
  dispInfo = true;
  selected = val;
  debugger
}

export default SwitchDisp;