var strength = {
    0: "Bad ☹",
    1: "Weak ☹",
    2: "Meh ☹",
    3: "Good ☺",
    4: "Strong ☻"
};

var password = document.getElementById('password');
var meter = document.getElementById('meter');
var feedback = document.getElementById('password-strength-input');

password.addEventListener('input', function () {
    var val = password.value;
    var result = zxcvbn(val);

    // Update the meter score
    meter.value = result.score;

    // Update feedback text
    if (val !== "") {
        feedback.innerHTML =
            "Strength: <strong>" +
            strength[result.score] +
            "</strong><br><span class='feedback'>" +
            result.feedback.warning +
            " " +
            result.feedback.suggestions +
            "</span>";
    } else {
        feedback.innerHTML = "";
    }
});
