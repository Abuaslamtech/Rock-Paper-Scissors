//declare variable
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const sci = document.getElementById("scissors");
const win = document.getElementById("result");
const username = document.getElementById("username");
//options
const options = ["rock", "paper", "scissors"];
//randomize
let randomNum = Math.floor(Math.random() * 3);
//get  user name
let Uname = prompt("Enter a username please");
if (Uname == false) {
  Uname = "User";
} else if (Uname == null) {
  Uname = "User";
} else {
  Uname = Uname;
}
username.innerHTML = Uname + ":";
username.style.background = "none";
//the output
const uoutput = document.getElementById("user");
const coutput = document.getElementById("comp");
//get users
const user = document.getElementById("userscore");
const comp = document.getElementById("compscore");
const compid = document.getElementById("compp");
const userid = document.getElementById("userp");
//declare score
let userscore = 0;
let compscore = 0;
//the game
const play = (op) => {
  let randomNum = Math.floor(Math.random() * 3);
  if (op.id == options[randomNum]) {
    userscore = userscore + 1;
    user.innerHTML = userscore;
    user.style.background = "green";
    user.style.color = "#fff";
    comp.style.background = "none";
    userid.style.color = "#fff";
    userid.style.background = "green";
    compid.style.color = "#fff";
    compid.style.background = "red";
    uoutput.style.color = "#fff";
    uoutput.style.background = "#a9e14d";
    coutput.style.color = "#fff";
    coutput.style.background = "red";
  } else {
    compscore = compscore + 1;
    comp.innerHTML = compscore;
    user.style.background = "red";
    user.style.color = "#fff";
    comp.style.background = "none";
    userid.style.color = "#fff";
    userid.style.background = "red";
    compid.style.color = "#fff";
    compid.style.background = "green";
    uoutput.style.color = "#fff";
    uoutput.style.background = "red";
    coutput.style.color = "#fff";
    coutput.style.background = "#a9e14d";
  }
};
function winning() {
  if (userscore > compscore) {
    win.innerHTML = Uname;
  } else if (userscore == compscore) {
    win.innerHTML = "Tie";
  } else {
    win.innerHTML = "Computer";
  }
}
function rockOp() {
  play(rock);
  winning();
  uoutput.className = "fas fa-hand-rock";
}
function paperOp() {
  play(paper);
  winning();
  uoutput.className = "fas fa-hand-paper";
}
function sciOp() {
  play(sci);
  winning();
  uoutput.className = "fas fa-hand-scissors";
}
const game = () => {};
rock.addEventListener("click", rockOp);
paper.addEventListener("click", paperOp);
sci.addEventListener("click", sciOp);
