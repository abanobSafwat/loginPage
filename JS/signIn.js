let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let users = [];

if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}

loginBtn.addEventListener("click", function () {
  logIn();
});

function logIn() {
  if (checkEmptyInputs()) {
    getAlertMsg("all fields are required", "red");
  } else {
    if (checkEmailAndPass()) {
      // Navigate to home Page
      window.location.href = "welcome.html";
    } else {
      // Alert Message
      getAlertMsg("email or password not correct", "red");
    }
  }
}

function getAlertMsg(text, color) {
  let alertMsg = document.getElementById("alertMsg");
  alertMsg.innerHTML = text;
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.style.color = color;
}

function checkEmailAndPass() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == userEmail.value && users[i].pass == userPass.value) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
}

function checkEmptyInputs() {
  if (userEmail.value == "" || userPass.value == "") {
    return true;
  } else {
    false;
  }
}
