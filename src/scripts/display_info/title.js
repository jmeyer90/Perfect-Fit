// import switchDisp from './switch_disp';
import SwitchDisp from './switch_disp';

const TitleButton = () => {
  let show = false;
  
  document.getElementById("title-button")
  .addEventListener("click", ()=>{
    show = !show;
    debugger
    SwitchDisp(show);
  });
      
};

export default TitleButton;