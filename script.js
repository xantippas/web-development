var database = [
	{
		username: "Caia",
		password: "hellohellohello"
	}
];

var newsFeed = [
	{
		username: "Gil",
		timeline: "This is awesome"
	},
	{
		username: "Robert",
		timeline: "I am eating a donut"
	}

];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password)
	{
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}
