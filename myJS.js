const
    // Arrays of characters
    onlyLowerCase = "abcdefghijklmnopqrstuvwxyz",
    onlyUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    onlyNumbers = "0123456789",
    onlySpecialCharacters = "~`!@#$%^&*()_-+={[}]|\:;\"'<,>.?/",

    // Checkboxes
    upperCaseCheckbox = document.getElementById("upperCaseCheckbox"),
    lowerCaseCheckbox = document.getElementById("lowerCaseCheckbox"),
    numbersCheckbox = document.getElementById("numberCheckbox"),
    specialCharactersCheckbox = document.getElementById("specialCharactersCheckbox"),


    // Elements of the page
    generateBtn = document.getElementById("btn-generate"),
    slider = document.getElementById("length"),
    copyBtn = document.getElementById("copyBtn"),
    checkboxes = document.querySelectorAll('.checkboxes');

// Generate password function
const generatePassword = (e) => {
    e.preventDefault();

    var numberOfCharacters = document.getElementById("numberOfCharacters").value, // Password length 
        generatedPassword = "", // Empty string for the generated password
        arrayOfCharacters = "",// Array of characters to use
        securityIndex = 0, // Security index
        securityIndicator = document.getElementById("securityIndicator"), //Security indicator field
        dummy=0; 
     

    //Adding arrays depending on checked heckboxes and assigning value to securityIndex
    upperCaseCheckbox.checked == true ?
    (arrayOfCharacters += onlyUpperCase) & (securityIndex++)
        : false;
    
    lowerCaseCheckbox.checked == true ?
        (arrayOfCharacters += onlyLowerCase) & (securityIndex++) 
        : false;

   numbersCheckbox.checked == true ?
        (arrayOfCharacters += onlyNumbers) & (securityIndex++)
        : false;

    specialCharactersCheckbox.checked == true ?
        (arrayOfCharacters += onlySpecialCharacters) & (securityIndex++)
        : false;
  

    // Adjust securityIndex depending on password  length
    if (numberOfCharacters <= 8) { // + 1 Security Index if password is more then 24 characters
        securityIndex = (securityIndex -2);
    } else if (numberOfCharacters <= 12) {
        securityIndex = (securityIndex -1);
    } else if (numberOfCharacters <= 24) {
        securityIndex++;
    }


    // Function to check password security
    if (securityIndex >= 4) {
        securityIndicator.innerHTML = "Password is strong";
    } else if (securityIndex == 3) {
        securityIndicator.innerHTML = "Password is medium";
    } else {
        securityIndicator.innerHTML = "Password is weak";
    }

    console.log(securityIndex);



        // Generating the password
        for (let i = 0; i < numberOfCharacters; i++) {
            let randomNumber = Math.floor(Math.random() * arrayOfCharacters.length);
            generatedPassword += arrayOfCharacters.substring(randomNumber, randomNumber + 1);
        }
    
        let passwordField = document.getElementById("passwordField").value = generatedPassword; // Input to the new password
}
generateBtn.addEventListener('click', generatePassword); // Generate button triggers Password Generation
slider.addEventListener('change', generatePassword); // slider triggers Password Generation

document.querySelectorAll('.checkboxes').forEach(item => { // Checkbox change triggers Password Generation
    item.addEventListener('change', generatePassword);
  }) 


// Copy to clipboard function
copyPassword = (e) => {
    e.preventDefault;
    let passwordField = document.getElementById("passwordField").value;

    if (passwordField !== "") { // If password field is not empty
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
    } else { // If password field is empty
        window.alert('Please generate a password before you copy!')
    }
}
copyBtn.addEventListener("click", copyPassword); // Adding event listener to Copy button

