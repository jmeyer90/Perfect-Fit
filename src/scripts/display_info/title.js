import switchDisp from './switch_disp';

const TitleButton = () => {
  let show = false;

  document.getElementById("title-button").addEventListener("click", ()=>switchDisp(!show));

  return(
    <button className="title-button" id="title-button">
      Perfect Fit
    </button>
  )
}


export default TitleButton;