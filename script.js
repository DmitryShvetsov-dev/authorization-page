function acceptButton() {
  let idArray = [
    "emailInput",
    "passwordInput",
    "accept",
    "email",
    "password",
    "welcome",
  ];
  let email = document.getElementById(idArray[0]).value;
  let password = document.getElementById(idArray[1]).value;
  let buttonDOM = document.getElementById(idArray[2]);
  let emailDOM = document.getElementById(idArray[3]);
  let passwordDOM = document.getElementById(idArray[4]);
  let welcomeDOM = document.getElementById(idArray[5]);
  checkEmail(email);
  checkpassword(password);
  let final = finalAccept();
  if (final) {
    emailDOM.style.display = "none";
    passwordDOM.style.display = "none";
    buttonDOM.style.display = "none";
    welcomeDOM.innerHTML = "Thank you <3";
  }
}
function checkEmail(email) {
  let error = document.getElementById("errorEmail");
  let emailArray = email.split("");
  let exceptions =
    "!#$%^&*()-_=+/']\\[;,|`АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let exceptionsArray = exceptions.split("");
  if (emailArray.length < 50 && emailArray.length > 4) {
    error.style.display = "none";
    for (let i of emailArray) {
      for (let j of exceptionsArray) {
        if (i === j) {
          error.style.display = "block";
          break;
        }
      }
    }
  } else {
    error.style.display = "block";
  }
}
function checkpassword(password) {
  let error2 = document.getElementById("errorPassword");
  let passwordArray = password.split("");
  let exceptions =
    "!@#$%^&*()-_=+./']\\[;.,|`АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let exceptionsArray = exceptions.split("");
  if (passwordArray.length > 5 && passwordArray.length < 21) {
    error2.style.display = "none";
    for (let i of passwordArray) {
      for (let j of exceptionsArray) {
        if (i === j) {
          error2.style.display = "block";
          break;
        }
      }
    }
  } else {
    error2.style.display = "block";
  }
}
function finalAccept() {
  let error1 = document.getElementById("errorEmail").style.display;
  let error2 = document.getElementById("errorPassword").style.display;
  if (error1 == "none" && error2 == "none") {
    return true;
  }
}
