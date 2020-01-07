// import switchDisp from './switch_disp';
import SwitchDisp from './switch_disp';

const TitleButton = () => {
  let show = false;
  // debugger
  document.getElementById("title-button")
  .addEventListener("click", ()=>{
    show = !show;
    new SwitchDisp(show);
  });
      
};

export default TitleButton;