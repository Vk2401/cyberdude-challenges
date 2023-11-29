let cricketTeam = {
    teamName: "India",
    players: ["Virat", "Rohit", "Vasanth", "Dhoni"],
    scores: {
        match1: 150,
        match2: 180,
        match3: 200
    },
    totalPlayer() {
        return this.players.length;
    }
};

console.log(cricketTeam.totalPlayer());



// Adding a new player to the team
cricketTeam.players.push("pakkathu veetu payyan")

console.log("Team Name:", cricketTeam.teamName)
console.log("Players:", cricketTeam.players)
console.log("Scores:", cricketTeam.scores)

// Updating scores for a match
cricketTeam.scores.match2 = 220;

console.log("Updated Cricket Team:", cricketTeam)

// Removing a player from the team
let playerToRemove = "Rohit"
cricketTeam.players = cricketTeam.players.filter(function(player) {
    if(player !== playerToRemove){
        return player
    }
});


// Removing a player from the team
let scoresToRemove = "match1"
delete cricketTeam.scores[scoresToRemove];

console.log("Final Cricket Team:", cricketTeam)