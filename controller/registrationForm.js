"use strict";

/**
 *
 * @param {string|null} contactNo
 * @returns
 */
function validatePhone(contactNo) {
  if (typeof contactNo == "undefined" || contactNo == null) return false;
  const phoneNumberPattern = /^[0-9]{10}$/;
  return phoneNumberPattern.test(contactNo);
}

document
  .querySelector("#counsellingInputPhone")
  ?.addEventListener("input", (e) => {
    let phoneNo = document.querySelector("#counsellingInputPhone")?.value;
    let isValid = validatePhone(phoneNo);
    if (!isValid) {
      document
        .querySelector("#counsellingInputPhone")
        .classList.add("invalid-phone");
      document
        .querySelector("#counsellingInputPhone")
        .classList.remove("valid-phone");
    } else {
      document
        .querySelector("#counsellingInputPhone")
        .classList.add("valid-phone");
      document
        .querySelector("#counsellingInputPhone")
        .classList.remove("invalid-phone");
    }
  });

function getUserDetails() {
  let email = document.querySelector("#counsellingInputEmail")?.value;
  let fullname = document.querySelector("#counsellingInputName")?.value;
  let phoneNo = document.querySelector("#counsellingInputPhone")?.value;
  let userCity = document.querySelector("#counsellingInputCity")?.value;
  let isValid = validatePhone(phoneNo);
  console.log({ email, fullname, phoneNo, isValid, userCity });
}
