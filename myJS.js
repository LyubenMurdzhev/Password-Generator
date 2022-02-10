const
    // Arrays of characters
    onlyLowerCase = "abcdefghijklmnopqrstuvwxyz",
    onlyUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    onlyNumbers = "0123456789",
    onlySpecialCharacters = "~`! @#$%^&*()_-+={[}]|\:;\"'<,>.?/",

    // Checkboxes
    upperCaseCheckbox = document.getElementById("upperCaseCheckbox"),
    lowerCaseCheckbox = document.getElementById("lowerCaseCheckbox"),
    numbersCheckbox = document.getElementById("numberCheckbox"),
    specialCharactersCheckbox = document.getElementById("specialCharactersCheckbox"),


    // Elements of the page
    generateBtn = document.getElementById("btn-generate"),
    slider = document.getElementById("length"),
    copyBtn = document.getElementById("copyBtn");



// Generate password function
const generatePassword = (e) => {
    e.preventDefault();

    var numberOfCharacters = document.getElementById("numberOfCharacters").value, // Password length 
        generatedPassword = "", // Empty string for the generated password
        arrayOfCharacters = ""; // Array of characters to use

    //Adding arrays depending on checked heckboxes
    if (upperCaseCheckbox.checked == true) {
        arrayOfCharacters += onlyUpperCase;
    } if (lowerCaseCheckbox.checked == true) {
        arrayOfCharacters += onlyLowerCase;
    } if (numbersCheckbox.checked == true) {
        arrayOfCharacters += onlyNumbers;
    } if (specialCharactersCheckbox.checked == true) {
        arrayOfCharacters += onlySpecialCharacters;
    }

    // Generating the password
    for (var i = 0; i < numberOfCharacters; i++) {
        var randomNumber = Math.floor(Math.random() * arrayOfCharacters.length);
        generatedPassword += arrayOfCharacters.substring(randomNumber, randomNumber + 1);
    }

    let passwordField = document.getElementById("passwordField").value = generatedPassword; // Input to the new password
}
generateBtn.addEventListener('click', generatePassword);
slider.addEventListener('change', generatePassword); // slider also generates password


// Copy to clipboard function
copyPassword = (e) => {
    e.preventDefault;
    let passwordField = document.getElementById("passwordField").value;

    navigator.clipboard.writeText(passwordField).then(
        function () {
            /* clipboard successfully set */
            window.alert('Success! The text was copied to your clipboard')
        },
        function () {
            /* clipboard write failed */
            window.alert('Opps! Your browser does not support the Clipboard API')
        }
    )
}
copyBtn.addEventListener("click", copyPassword);