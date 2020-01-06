import Tess from './math_info/tessellation_info';
import GoldRatio from'./math_info/gold_ratio_info';
import PythagTheorem from './math_info/pythag_theorem_info';

class SwitchDisp{
  constructor(show){
    this.show = show;
    this.dispInfo = false;
    this.selected;

    document.getElementsByClassName("switch-disp-op").addEventListener("click", (e)=>{
      switch (e.target.currentValue) {
        case "Tessellations":
          this.setSelect("tess");
          break;
        case "Golden Ratio":
          this.setSelect("gold");
          break;
        case "Pythagorean Theorem":
          this.setSelect("pyth");
          break;
        default:
          break;
      }
    })

  }
  
  setSelect = val =>{
    show = false;
    dispInfo = true;
    selected = val;
  }

  render(){
    if (this.show){
      return (
        <section className="switch-disp-container">
          <button className="switch-disp-op">Tessellations</button>
          <button className="switch-disp-op">Golden Ratio</button>
          <button className="switch-disp-op">Pythagorean Theorem</button>
        </section>
      );
    } else if (this.dispInfo){
      switch (this.selected) {
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
      return <div></div>
    }
  }
}

export default SwitchDisp;