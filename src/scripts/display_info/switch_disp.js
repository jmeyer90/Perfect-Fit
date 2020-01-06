import 'Tess' from './math_info/tessellation_info';
import 'GoldRatio' from './math_info/gold_ratio_info';
import 'PythagTheorem' from './math_info/pythag_theorem_info';

const SwitchDisp = show => {

  let dispInfo = false;
  let selected;

  document.getElementsByClassName("switch-disp-op").addEventListener("click", (e)=>{
    switch (e.target.currentValue) {
      case "Tessellations":
        setSelect("tess");
        break;
      case "Golden Ratio":
        setSelect("gold");
        break;
      case "Pythagorean Theorem":
        setSelect("pyth");
        break;
      default:
        break;
    }
  })

  const setSelect = val =>{
    show = false;
    dispInfo = true;
    selected = val;
  }

  if (show){
    return (
      <section className="switch-disp-container">
        <button className="switch-disp-op">Tessellations</button>
        <button className="switch-disp-op">Golden Ratio</button>
        <button className="switch-disp-op">Pythagorean Theorem</button>
      </section>
    );
  } else if (dispInfo){
    switch (selected) {
      case "tess":
        Tess()
        break;
      case "gold":
        GoldRation()
        break;
      case "pyth":
        PythagTheorem()
        break;
    
      default:
        break;
    }
  } else {
    return <div></div>
  }
}