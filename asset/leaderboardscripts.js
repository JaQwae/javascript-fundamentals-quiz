//Displaying Leaderboard

let scoreTotal = localStorage.getItem('userScore');

document.getElementById('submit-initials').addEventListener('click', function(event){
    
    let initialsInput = document.querySelector("#fname");
    event.preventDefault();
    console.log('clicked')
    var playerInfo = {
        playerIntials: initialsInput.value.trim(),
        playerScore: scoreTotal,
    };
    console.log(playerInfo);
});



function renderMessage() {
    var initials = JSON.parse(localStorage.getItem("userName"));
    if (initials !== null){
        document.querySelector('.scoreboard').appendChild('span').textcontent = playerInfo
    }
}



//Resets the Leaderboard
var clearStorage = document.getElementById("home-btn").addEventListener("click", localStorage.clear());