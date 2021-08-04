// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var names = document.querySelector(".name");
var email = document.querySelector(".email");
var address = document.querySelector(".address");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 9
function validate() {
  passwordValue = password.value;
  phoneValue = phone.value;
  nameValue = names.value;
  emailValue = email.value;
  addressValue = address.value;

  // Checking that the length of the fields are not 0
  if ((passwordValue || phoneValue || nameValue || emailValue || addressValue) == 0) {
    validateMin = "It is not able to put null fields";
  } else (validateMin = '')

  // Validate the fields have minimum length
  if ((passwordValue || phoneValue || nameValue || emailValue || addressValue) < 3) {
    validateLength = "All the fields must have a minimum length of 3";
  } else (validateLength = '')

  // Checking all letters in name and last name
  let letters = /^[A-Za-z]+$/;
  if (!nameValue.match(letters)) {
      validateName = "Name and Surname must have all letters"
  } else (validateName = '')

  // Checking that there are all numbers
  let numbers = /^[0-9]+$/;
  if (!phoneValue.match(numbers)) {
    validatePhone = "The phone number must have all numbers";

    errorPhone.style.display = 'block'
    errorPhone.style.color = 'red'
  } else (validatePhone = '')

    // Validate Password
  let numberLetter = /^[0-9a-zA-Z]+$/;
  if (!(passwordValue.match(numberLetter))) {
      validatePassword = "The password can contain only numbers and letters"
  } else (validatePassword = "")

  // Validate the email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    validateEmail = "The email entered is not valid";

  } else (validateEmail = '')



  if (validateEmail || validateLength || validateName || validatePhone || validatePassword) {
    // I will use the window.alert for providing feedback to the user
    window.alert(`${validateEmail} \n ${validateName} \n ${validateLength} \n ${validatePhone} \n ${validateMin} \n ${validatePassword}`)

  }

}
