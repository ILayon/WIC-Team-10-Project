var strength = {
    0: "Bad",
    1: "Weak",
    2: "Meh",
    3: "Good",
    4: "Strong"
};

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-checker');
var feedback = document.getElementById('password-strength-input');
var strengthImage = document.getElementById('strength-image');

password.addEventListener('input', function () {
    var val = password.value;
    var result = zxcvbn(val);

    meter.value = result.score;

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
        strengthImage.style.display = "none";
    }

    var imageSrc = "";
    switch (result.score) {
        case 0:
            imageSrc = "./images/bad.png";  
            break;
        case 1:
            imageSrc = "./images/weak.png";  
            break;
        case 2:
            imageSrc = "./images/meh.png";   
            break;
        case 3:
            imageSrc = "./images/good.png";  
            break;
        case 4:
            imageSrc = "./images/strong.png"; 
            break;
        default:
            imageSrc = "";
    }

    if (val === "") {
        strengthImage.style.display = "none";
    }
    else if (imageSrc) {
        strengthImage.src = imageSrc;
        strengthImage.style.display = "block"; 
    }

});
