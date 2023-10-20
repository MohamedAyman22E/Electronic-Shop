// login
let login = document.querySelector(".login");
let firstLogin = document.querySelector(".firstLogin");
let faXmark = document.querySelector(".fa-xmark");

firstLogin.onclick = function () {
  login.classList.add("active");
  faXmark.onclick = function () {
    login.classList.remove("active");
  };
};
