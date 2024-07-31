let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector(".newgame");
let winner1 = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let winSounud = document.querySelector("#win-sounud")
let lossgame = document.querySelector("#gameover")
let turnO = true; // playerX , playerO



const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restGame = () => {
   
    turnO =true;
    enablebox();
    newgame.classList.add("hide");
    winner1.classList.add("hide");
   

}
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
         if(turnO){
            turnO = false ;
            box.innerText = "O";
            
         }else{
            turnO = true;
            box.innerText = "X";
     
        } 
         box.disabled = true;  
         userwinner() 
    });
});

const disablebox = ()=>{
    for(let box of boxes){
     box.disabled = true;
    }
};

const enablebox = ()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText =`Congralations , Winner is ${winner}`;
     newgame.classList.remove("hide");
     winner1.classList.remove("hide");
     winSounud.play();
     msg.classList.add("celebrate")
    disablebox();
    };


function noWinner(){
    msg.innerText = "Tie match";
    newgame.classList.remove("hide");
    winner1.classList.remove("hide");
    disablebox();
     gameover.play();
}
function userwinner (){
for( let user of win){
    let pos1val = boxes[user[0]].innerText;
    let pos2val = boxes[user[1]].innerText;
    let pos3val = boxes[user[2]].innerText;

    if(pos1val !="" && pos2val != "" && pos3val != ""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("winner" , pos1val);
          showWinner(pos1val);
          return ;
        }
    }
  }
  const allboxsFilled = Array.from(boxes).every(box=> box.innerText !== "");
    if(allboxsFilled){
       noWinner();
    }
   
    
};

newgame.addEventListener("click" , restGame);
reset.addEventListener("click" , restGame );


