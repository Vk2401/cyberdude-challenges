# Object CRUD (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Object CRUD 


```javascript
// simple Object CRUD  statement practice

let cricketTeam = {
    teamName: "India",
    players: ["Virat", "Rohit", "Vasanth", "Dhoni"],
    scores: {
        match1: 150,
        match2: 180,
        match3: 200
    }
};
console.log(cricketTeam)


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

console.log("Final Cricket Team:", cricketTeam)

```

### Live link -> 
[Demo Link](https://vk2401.github.io/Cyberdude-JavaScript-Challenges/03-object-CRUD/index.html)


## References:

[![Object CRUD  code review](https://i.ytimg.com/vi/4SAETZ1ojbQ/maxresdefault.jpg)](http://www.youtube.com/watch?v=4SAETZ1ojbQ "Object CRUD  code review Cyberdude youtube Live")
