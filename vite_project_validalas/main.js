import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function registration() {
  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;
  let email = document.getElementById("email").value;
  let birthdate = new Date(document.getElementById("birthdate").value);
  let isAdult = document.getElementById("isAdult");
  let isAdultValue;

  if (isAdult.checked) {
    isAdultValue = document.getElementById("isAdult").value;
  } else {
    isAdultValue = "";
  }

  document.getElementById("errorMessage").style.color = "salmon";

  if (userNameCheck(userName)) {
    if (passwordCheck(password, password2)) {
      if (emailCheck(email)) {
        if (ageCheck(birthdate, isAdultValue)) {
          document.getElementById("errorMessage").style.color = "olive";
          document.getElementById("errorMessage").innerText =
            "Sikeres Regisztráció!";
        }
      }
    }
  }
}

function init() {
  document
    .getElementById("registration")
    .addEventListener("click", registration);
}

function userNameCheck(userName) {
  const specialCharacters = /^[a-zA-Z0-9_\-+]*$/;

  if (userName == "") {
    document.getElementById("errorMessage").innerText =
      "Név megadása kötelező!";
    return false;
  } else if (userName.length < 5) {
    document.getElementById("errorMessage").innerText =
      "A név minimum 5 karakter hosszú!";
    return false;
  } else if (userName.length > 10) {
    document.getElementById("errorMessage").innerText =
      "A név maximum 10 karakter hosszú!";
    return false;
  } else if (!specialCharacters.test(userName)) {
    document.getElementById("errorMessage").innerText =
      "A név csak _-+ speciális karaktereket tartalmazhat!";
    return false;
  } else {
    return true;
  }
}

function emailCheck(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == "") {
  document.getElementById("errorMessage").innerText =
  "Az email megadása kötelező !";
  return false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("errorMessage").innerText =
      "Az email formátuma szoveg@szoveg.szoveg !";
    return false;
  } else {
    return true;
  }
}

function passwordCheck(password, password2) {
  const capitalRegex = /[A-Z]/;
  const numberRegex = /\d+/;

  if ( password == "" || password2 == "") {
    document.getElementById("errorMessage").innerText =
      "A jelszó megadása kötelező!";
    return false;
  } else if (password.length < 5) {
    document.getElementById("errorMessage").innerText =
      "A jelszó minimum 5 karakter !";
    return false;
  } else if (password.length > 10) {
    document.getElementById("errorMessage").innerText =
      "A jelszó maximum 10 karakter !";
    return false;
  } else if (!capitalRegex.test(password)) {
    document.getElementById("errorMessage").innerText =
      "A jelszónak tartalmaznia kell legalább 1 nagybetűt !";
    return false;
  } else if (!numberRegex.test(password)) {
    document.getElementById("errorMessage").innerText =
      "A jelszónak tartalmaznia kell legalább 1 számot !";
    return false;
  } else if (password != password2) {
    document.getElementById("errorMessage").innerText =
      "A kettő jelszó nem egyezik meg!";
    return false;
  } else {
    return true;
  }
}

function ageCheck(birthdate, isAdultValue) {
  var dateNow = new Date(Date.now());
  var dateNowYears = dateNow.getFullYear();
  var birthDateYears = birthdate.getFullYear();
  let eredmeny = dateNowYears - birthDateYears;

  if (isAdultValue == "Igen") {
    if (eredmeny < 18) {
      document.getElementById("errorMessage").innerText =
        "Csak akkor jelöld be, hogy 18 elmúltál, ha tényleg igaz!";
      return false;
    } else {
      return true;
    }
  } else if (birthdate == "Invalid Date") {
    document.getElementById("errorMessage").innerText =
      "Születési dátum megadása kötelező!";
    return false;
  } else {
    return true;
  }
}

document.addEventListener("DOMContentLoaded", init);
