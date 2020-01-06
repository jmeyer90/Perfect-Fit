import switchDisp from './switch_disp';

class TitleButton {
  constructor(){
    let show = false;
    
    document.getElementById("title-button").addEventListener("click", ()=>switchDisp(!show));
  }
    
  render(){
    return(
      <button className="title-button" id="title-button">
        Perfect Fit
      </button>
    )
  }
}


export default TitleButton;