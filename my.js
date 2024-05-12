const choices= document.querySelectorAll(".choice");
const msg=  document.querySelector("#msg");
const msc= document.querySelector("#mysc");
const csc =document.querySelector("#csc");
const mysccol=document.querySelector("#mysccol");
const csccol=document.querySelector("#csccol");
var yscore=0;
var cscore=0;
choices.forEach((child_div) => {
    child_div.addEventListener("click",() =>
    {
      const choiceid= child_div.getAttribute("id");
      console.log("event perform",choiceid);

         mygame(choiceid);
        
    });
}
);
function computer(){
    let a=["paper","rock","scissors"]
    let b=Math.floor(Math.random()*3);
    console.log(a[b]);
    return a[b];
}
function resultdeclare(userwin)
{
    if(userwin)
        {
            console.log("you win");
            msg.innerText="You Win!";
            yscore+=1;
            msc.innerText=yscore;
            msg.style.backgroundColor= "green";
            scorecolorchange(yscore,cscore);
        }
    else
    {
        console.log("you loose - computer win");
        msg.innerText="You Loose";
        cscore+=1;
        csc.innerText=cscore;
        msg.style.backgroundColor= "red";
        scorecolorchange(yscore,cscore);
    }
}
 function mygame(choiceid)
{  
    const compChoice=computer();
    if(choiceid===compChoice)
        {
          console.log("game draw play again");
          msg.innerText="Game Draw";
          msg.style.backgroundColor= "#081b31";
          scorecolorchange(yscore,cscore);
        }
    else{let userwin=true;
        if(choiceid ==="paper")
            {   
                userwin = compChoice === "scissors" ? false : true;
            }
        else if(choiceid==="scissors")
            {
                userwin = compChoice === "rock" ? false : true;
            }
        else
        {
            userwin = compChoice === "paper" ? false : true ;
        }
        resultdeclare(userwin);
    }
}
function scorecolorchange(yscore,cscore){
    console.log(yscore);
    if(yscore>cscore)
        {   console.log(yscore);
            mysccol.style.backgroundColor="green"; 
            csccol.style.backgroundColor="red"; 
        }
    else if (yscore<cscore){
        mysccol.style.backgroundColor="red"; 
        csccol.style.backgroundColor="green"; 
        }
    else{
        mysccol.style.backgroundColor="aqua"; 
        csccol.style.backgroundColor="aqua"; 
    }
}
scorecolorchange(yscore,cscore);


