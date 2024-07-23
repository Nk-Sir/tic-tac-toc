let mode =document.querySelector(".mode");
let body = document.querySelector("body");
let mode2 = "light";

const backgroundColorst = "#f43f3f";
const gradientColorst = "#b60000";
const gradientColorend = " #1658a0";

const backgroundColor = "#00DBDE";
const gradientColor1 = "#00DBDE";
const gradientColor2 = "#FC00FF";

const backgroundColor1 = "#FF3CAC";
const gradientColor3 = "#FF3CAC";
const gradientColor4 = "#784BA0";
const gradientColor5 = "#2B86C5";

const backgroundColor3 = "#FAD961";
const gradientColor6 = "#FAD961";
const gradientColor7 = "#F76B1C";

const backgroundColor4 = "#FAD961";
const gradientColor8 = "#FAD961";
const gradientColor10 = "#F76B1C";
const gradientColor11 = "rgb(0, 0, 0)";

mode.addEventListener("click", () => {
 switch(mode2){
    
    case "light":
        body.style.backgroundColor = backgroundColor;
        body.style.backgroundImage = `linear-gradient(90deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`;
    mode2 = "Ocean Blue";
    break;
    case "Ocean Blue":
      body.style.background = backgroundColor1;
      body.style.backgroundImage = `linear-gradient(270deg, ${gradientColor2} 45%, ${gradientColor11} 89%)`;
    mode2 = "Light Gray";
    break;
    case "Light Gray":
        body.style.background = backgroundColor3;
        body.style.backgroundImage = `linear-gradient(90deg, ${gradientColor6} 0%, ${gradientColor7} 100%)`;
    mode2 = "Forest Green";
    break;
    case "Forest Green":
        body.style.background = backgroundColor4;
        body.style.backgroundImage = `linear-gradient(90deg, ${gradientColor11} 0%, ${gradientColor1} 100%)`;
        mode2 = "black";
        break
    case "black":
        body.style.background = backgroundColor4;
        body.style.backgroundImage = `linear-gradient(90deg, ${gradientColor11} 0%, ${gradientColor10} 100%)`;
        mode2="dark";
         break
         case "dark":
        body.style.background = backgroundColorst;
        body.style.backgroundImage = ` linear-gradient(90deg, ${gradientColorst} 0%, ${gradientColorend} 100%)`;
         mode2 = "light";
         break    
    }
 


});
