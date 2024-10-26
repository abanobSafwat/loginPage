let signUpName = document.getElementById("name");
let signUpEmail = document.getElementById("email");
let signUpPass = document.getElementById("pass");
let signUpBtn = document.getElementById("signUp");
let users = []; // declaring an array to store all users data

//check if user exist or not
if (localStorage.getItem("user") == null) {
  // first time user
  users = [];
} else {
  // retrive data from local storage in array
  users = JSON.parse(localStorage.getItem("user"));
}

signUpBtn.addEventListener("click", function () {
  signUp();
});

function signUp() {
  let objUser = {
    name: signUpName.value,
    email: signUpEmail.value,
    pass: signUpPass.value,
  };

  // check if empty imnputs
  if (checkEmptyInputs()) {
    getAlertMsg("all inputs are required", "red");
  } else {
    //* here it means not empty inputs

    // check if is this user exist ?
    if (isExist()) {
      getAlertMsg("This account is already exist", "red");
    } else {
      // here it means new user
      if (userInputValidation()) {
        users.push(objUser);
        localStorage.setItem("user", JSON.stringify(users)); // save data in localstorage as a string
        clearForm();
        getAlertMsg("Success", "green");
      }
    }
  }
}

function getAlertMsg(text, color) {
  let alertMsg = document.getElementById("alertMsg");
  alertMsg.innerHTML = text;
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.style.color = color;
}

function checkEmptyInputs() {
  if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPass.value == ""
  ) {
    return true;
  } else {
    false;
  }
}

function clearForm() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPass.value = "";
}

// check if the userdata exist or not
function isExist() {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].name.toLowerCase() == signUpName.value.toLowerCase() ||
      users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()
    ) {
      return true;
    }
  }
}

// validation with regex name, email and pass:
function userNameValidation() {
  let userNameAlert = document.getElementById("nameAlert");
  let regex = /^[a-z]{3,10}(\s?)[a-z]{3,10}?$/;
  if (regex.test(signUpName.value) && signUpName.value != "") {
    // Validation Done
    signUpName.classList.add("is-valid"); // green input border
    signUpName.classList.remove("is-invalid"); //
    userNameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    // Validation false
    signUpName.classList.add("is-invalid");
    signUpName.classList.remove("is-valid");
    userNameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userEmailValidation() {
  let userEmailAlert = document.getElementById("emailAlert");
  let regex = /@[a-z]{3,12}(\.com)$/;
  if (regex.test(signUpEmail.value) && signUpEmail.value != "") {
    // Validation Done
    signUpEmail.classList.add("is-valid");
    signUpEmail.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    // Validation false
    signUpEmail.classList.add("is-invalid");
    signUpEmail.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userPassValidation() {
  let userPassAlert = document.getElementById("passAlert");
  let regex = /^.{8,12}$/; // start with anything, from 8 to 12 chars
  if (regex.test(signUpPass.value) && signUpPass.value != "") {
    // Validation Done
    signUpPass.classList.add("is-valid");
    signUpPass.classList.remove("is-invalid");
    userPassAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    // Validation false
    signUpPass.classList.add("is-invalid");
    signUpPass.classList.remove("is-valid");
    userPassAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userInputValidation() {
  userNameValidation();
  userEmailValidation();
  userPassValidation();

  if (userNameValidation() && userEmailValidation() && userPassValidation()) {
    return true;
  } else {
    return false;
  }
}
