let runagain = true;
let compscore = 0;
let userscore = 0;
do {
const alphabet = 'SWG';
const ans2 = alphabet[Math.floor(Math.random() * 3)];
alert(ans2);
let ans = prompt("Enter either S(Snake) or W(Water) or G(Gun) for oponent 1");
if (ans == "G" && ans2 == "W") {
alert("Water Wins");
compscore++;
}
else if (ans == "W" && ans2 == "G") {
alert("Water Wins");
userscore++;
}
else if (ans == "S" && ans2 == "G") {
alert("Gun Wins");
compscore++;
}
else if (ans == "G" && ans2 == "S") {
alert("Gun Wins");
userscore++;
}
else if (ans == "W" && ans2 == "S") {
alert("Snake Wins");
compscore++;
}
else if (ans == "S" && ans2 == "W") {
alert("Snake Wins");
userscore++;
}
else if (ans == ans2) {
alert("Its a tie")
}
else {
alert("You have entered a wrong letter.")
}
runagain = confirm("Do you want to play again?")
} while (runagain)
alert("Computer score is " + compscore + " and user score is " + userscore);