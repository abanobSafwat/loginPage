let welcomeMsg = document.getElementById("username");
let logoutBtn = document.getElementById("logoutBtn");

if (localStorage.getItem("userName") != null) {
  welcomeMsg.innerHTML = `Hello ${localStorage.getItem("userName")}`;
}

function logout() {
  window.location.href = "index.html";
  localStorage.removeItem("userName");
}

logoutBtn.addEventListener("click", function () {
  logout();
});
