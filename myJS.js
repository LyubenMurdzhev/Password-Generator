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
    repeatingCharactersCheckbox = document.getElementById("repeatingCharactersCheckbox"),


    // Elements of the page  (const)
    generateBtn = document.getElementById("btn-generate"),
    slider = document.getElementById("length"),
    copyBtn = document.getElementById("copyBtn"),
    checkboxes = document.querySelectorAll('.checkboxes');


// Generate password function
const generatePassword = (e) => {
    e.preventDefault();

    var numberOfCharacters = document.getElementById("numberOfCharacters").value, // Password length 
        generatedPassword = "", // Empty string for the generated password
        stringOfCharacters = "",// Array of characters to use
        securityIndex = 0, // Security index
        securityIndicator = document.getElementById("securityIndicator"); //Security indicator field
       

    //Adding arrays depending on checked checkboxes and assigning value to securityIndex
    upperCaseCheckbox.checked == true ?
    (stringOfCharacters += onlyUpperCase) & (securityIndex++)
        : false;
    
    lowerCaseCheckbox.checked == true ?
        (stringOfCharacters += onlyLowerCase) & (securityIndex++) 
        : false;

   numbersCheckbox.checked == true ?
        (stringOfCharacters += onlyNumbers) & (securityIndex++)
        : false;

    specialCharactersCheckbox.checked == true ?
        (stringOfCharacters += onlySpecialCharacters) & (securityIndex++)
        : false;
    
    repeatingCharactersCheckbox.checked == true ?
        (securityIndex--)
        :false;

    // Adjust securityIndex depending on password length
    if (numberOfCharacters <= 8) { 
        securityIndex = (securityIndex -2);
    } else if (numberOfCharacters <= 12) {
        securityIndex = (securityIndex -1);
    } else if (numberOfCharacters >= 13) {
        securityIndex = securityIndex + 2;
    }

    // Function to check password security and add the respective class
    if (securityIndex >= 5) {
        securityIndicator.innerHTML = "strong";
        securityIndicator.classList.add("strong");
        securityIndicator.classList.remove("medium","weak");
    } else if (securityIndex >= 3) {
        securityIndicator.innerHTML = "medium";
        securityIndicator.classList.add("medium");
        securityIndicator.classList.remove("strong","weak");
    } else {
        securityIndicator.innerHTML = "weak";
        securityIndicator.classList.add("weak");
        securityIndicator.classList.remove("medium","strong");
    }

    console.log(securityIndex);

        // Generating the password without Permutation
    generator = () => {
            if (repeatingCharactersCheckbox.checked == true) { // checkbox 'Exclude repeating characters' is checked TRUE
                var arrayOfGeneratedCharacters =[]; // Array to push generated characters
           
                do {
                    var randomNumber = Math.floor(Math.random() * stringOfCharacters.length);
                    // generatedPassword += stringOfCharacters.substring(randomNumber, randomNumber + 1);
                    var generatedCharacter = stringOfCharacters.substring(randomNumber, randomNumber + 1);
                    if (!arrayOfGeneratedCharacters.includes(generatedCharacter)){ // Check if the generated character is already in the Array
                        arrayOfGeneratedCharacters.push(generatedCharacter);
                    }
                } while (arrayOfGeneratedCharacters.length < numberOfCharacters); // End conditional check
                let generatedPassword = arrayOfGeneratedCharacters.join("");
                let passwordField = document.getElementById("passwordField").value = generatedPassword; // Displays in password field
            
            } 
            else { // checkbox 'Exclude repeating characters' is checked FALSE
                for (let i = 0; i < numberOfCharacters; i++) {
                    let randomNumber = Math.floor(Math.random() * stringOfCharacters.length);
                    generatedPassword += stringOfCharacters.substring(randomNumber, randomNumber + 1); 
                    let passwordField = document.getElementById("passwordField").value = generatedPassword; // Displays in password field
                }  
            }
        } 
    generator();
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





