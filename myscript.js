//elements
let winner=document.getElementById("winner");
let user_option=document.getElementById("userPicked");
let computer_option=document.getElementById("computerPicked");
const options=["Rock","Paper","Scissors"];
//points
let user_points=0;
let computer_points=0;

//points display
let user_points_display=document.getElementById("userpoints");
let computer_points_display=document.getElementById("computerpoints");
//computer options
user_points_display.innerText=user_points;
computer_points_display.innerText=computer_points;
let computerOptions=document.getElementById("computerPicked");

const Rockclick=()=> {
    let rnd_options_rock=options[Math.floor(Math.random()*options.length)];
    if(rnd_options_rock=="Rock"){
        console.log("Game Tie");
        winner.innerText="Game Tie";
    }
    else if(rnd_options_rock=="Paper"){
        console.log("computer Wins");
        winner.innerText="opponent wins";
        computer_points++;
         computer_points_display.innerText=`computer_points:${computer_points}`;
    }
    else if(rnd_options_rock=="Scissors"){
        console.log("You Win");
        winner.innerText="You Win";
        user_points++;
        user_points_display.innerText=`Your points:${user_points}`;
    }
    computerOptions.innerText=`computerPicked:${rnd_options_rock}`;
};

const Paperclick=()=> {
    let rnd_options_Paper=options[Math.floor(Math.random()*options.length)];
    if(rnd_options_Paper=="Rock"){
        console.log("You Win");
        winner.innerText="You Win";
        user_points++;
        user_points_display.innerText=`Your points:${user_points}`;
    }
    else if(rnd_options_Paper=="Paper"){
        console.log("Game Tie");
        winner.innerText="Game Tie";
    }
    elseif(rnd_options_Paper=="Scissors"){
        console.log("You Lose");
        winner.innerText="opponent Wins";
        computer_points++;
        computer_points_display.innerText=`computer points:${computer_points}`;
    }
    computerOptions.innerText=`computerPicked:${rnd_options_Paper}`;
};

const Scissorsclick=()=> {
    let rnd_options_Scissors=options[Math.floor(Math.random()*options.length)];
    if(rnd_options_Scissors=="Rock"){
        console.log("opponent Wins");
        winner.innerText="opponent Wins";
        computer_points++;
        computer_points_display.innerText=`computer points:${computer_points}`;
    }
    else if(rnd_options_Scissors=="Paper"){
        console.log("Game Tie");
        winner.innerText="You Win";
        user_points++;
        user_points_display.innerText=`Your points:${user_points}`;
    }
    else if(rnd_options_Scissors=="Scissors"){
        console.log("You Lose");
        winner.innerText="Game Tie";
    }
    computerOptions.innerText=`computerPicked:${rnd_options_Scissors}`;
};










