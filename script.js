var database = [
    {
        username: "chunk",
        password: "lovinit",
    }
];

var newsFeed = [
    {
        username: "Marty",
        timeline: "Biff is a bully!",
    },
    {
        username: "Doc",
        timeline: "I bulit a time machine out of a DeLorean",
    }
];

//var userNamePrompt = prompt("What's your username?");
//var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong info bitch!")
    }
}

signIn(userNamePrompt, passwordPrompt);