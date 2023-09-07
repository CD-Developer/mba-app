"use strict";

function validatePhone() {
  let contactNo = document.querySelector("#signInWithMobile")?.value;

  if (typeof contactNo == "undefined" || contactNo == null) return false;
  const phoneNumberPattern = /^[0-9]{10}$/;
  let isValid = phoneNumberPattern.test(contactNo);

  console.log({ contactNo, isValid });
}

document.querySelector("#registrationForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#registrationInputEmail").value;
  let password = document.querySelector("#registrationInputPassword").value;

  console.log({ email, password });
});
