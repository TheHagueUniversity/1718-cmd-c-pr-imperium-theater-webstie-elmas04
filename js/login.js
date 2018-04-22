var attempt = 3; // Variable to count number of attempts.
// REVIEW: waarom comments in het engels, heb je deze js wel zelf geschreven?
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "elmas" && password == "bayrak"){
alert ('Welkom, ' + username + '!');
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("U heeft nog "+attempt+" kansen;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
//else {	window.location = "https://www.google.nl/"; 	return false;}//
}
