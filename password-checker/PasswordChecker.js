var strength = {
    0: "Bad ☹",
    1: "Weak ☹",
    2: "Meh ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-checker');
var text = document.getElementById('password-strength-input');

password.addEventListener('input', function()
{
var val = password.value;
var result = zxcvbn(val);

meter.value = result.score;

if(val !== "") {
    text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
}
else {
    text.innerHTML = "";
}
});