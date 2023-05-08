function getComputerChoice () {
    var dec  = Math.random(); 
    if (dec >= .66) {
         return "rock"; 
    } else if ( dec >= .33){
         return "scissors"; 

    }else if (dec >= 0){
         return "paper"; 
    }
}