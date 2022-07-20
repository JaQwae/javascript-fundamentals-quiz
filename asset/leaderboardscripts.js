//Displaying Leaderboard
let scoreTotal = JSON.parse(localStorage.getItem('userScore'));
console.log('log: scoreTotal ', scoreTotal);
document.getElementById('submit-initials').addEventListener('click', function(event){
    
    let initialsInput = document.querySelector("#fname");
    event.preventDefault();
    console.log('clicked')
    var playerInfo = {
        playerIntials: initialsInput.value.trim(),
        playerScore: scoreTotal,
    };
    console.log(playerInfo);
    localStorage.setItem("userName", JSON.stringify(playerInfo))
    renderMessage();
});



function renderMessage() {
    var initials = JSON.parse(localStorage.getItem("userName"));
    console.log('log: initials ', initials);
    if (initials){
        var span = document.createElement("span");
        document.querySelector('.scoreboard').appendChild(span).innerHTML = `${initials.playerScore}  ${initials.playerIntials}`;
        
    }
}



//Resets the Leaderboard
var clearStorage = document.getElementById("reset-btn").addEventListener("click", localStorage.clear());
