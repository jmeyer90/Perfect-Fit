// import switchDisp from './switch_disp';
import SwitchDisp from './switch_info';

const TitleButton = () => {
  let show = false;
  
  document.getElementById("title-button")
  .addEventListener("click", ()=>{
    show = !show;
    SwitchDisp(show);
  });
      
};

export default TitleButton;