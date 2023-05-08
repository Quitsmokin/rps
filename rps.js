function getComputerChoice () {
    var dec  = Math.random(); 
    if (dec >= .66) {
         return "rock"; 
    } else if ( dec >= .33){
         return "scissor"; 

    }else if (dec >= 0){
         return "paper"; 
    }
}
let score = 0;
let count = 0;  

function playRound(selection){
     var s = selection.explicitOriginalTarget.className; 
     if(!s) {
          console.log("Please click on a button");
     } 
     else {
          
          let para = document.createElement('div'); 
          var comp = getComputerChoice(); 
          switch(s) {
        
            
               case "scissor":
                    count++;                 
                    if(comp === "rock"){
                         para.textContent = `computer wins` ; 
                         score -=1;
                         break;
                         
                      } else if(comp ==="paper") {
                         para.textContent = `you win`; 
                         score +=1;
                         break;
                     } else if(comp==="scissor"){
                         para.textContent = `Redo~!`; 
                         break;
                     }
                     break;   
               case "paper":
                    count++; 
                    if(comp === "scissor"){
                         para.textContent = `computer wins` ; 
                         score -=1;
                         break;
                         
                      } else if(comp ==="rock") {
                         para.textContent = `you win`; 
                         score +=1;
                         break;
                     } else if(comp==="paper"){
                         para.textContent = `Redo~!`; 
                         break;
                     }
                     break;
               case "rock": 
                    count++;
                       if(comp === "paper"){
                           para.textContent = `computer wins` ; 
                           score -=1;
                           break;
                           
                        } else if(comp ==="scissor") {
                           para.textContent = `you win`; 
                           score +=1;
                           break;
                       } else if(comp==="rock"){
                           para.textContent = `Redo~!`; 
                           break;
                       }
                       break;
     }
     if(count == 5){
          if(score > 0) {
               para.textContent += " - You are the final winner"
               count =0;
          } else {
               para.textContent += " - The computer is the final winner"
               count = 0;
          }
     }
     para.textContent += ` Computer chose ${comp}, You chose ${s}, the current score is ${score} Current Score (negative if computer is winning)`;

     document.body.appendChild(para);
}
}