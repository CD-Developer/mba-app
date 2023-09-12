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
        ?.classList.add("invalid-phone");
      document
        .querySelector("#counsellingInputPhone")
        ?.classList.remove("valid-phone");
    } else {
      document
        .querySelector("#counsellingInputPhone")
        ?.classList.add("valid-phone");
      document
        .querySelector("#counsellingInputPhone")
        ?.classList.remove("invalid-phone");
    }
  });

// document
//   .querySelector(".btn-close:hover")
//   ?.setAttribute("data-bs-theme", "dark");

document.querySelector(".close-btn")?.addEventListener("onmouseover", (e) => {
  document.querySelector(".close-btn")?.setAttribute("data-bs-theme", "dark");
});

function campaignHighlighter() {
  const form2Element = document.querySelector("#formTwo");
  form2Element?.classList.add("form-div-focus");
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    form2Element?.scrollIntoView({ behavior:"smooth" });
  }

  setTimeout(() => {
    form2Element?.classList.remove("form-div-focus");
  }, 1000);
}

function getUserDetails() {
  let email = document.querySelector("#counsellingInputEmail")?.value;
  let fullname = document.querySelector("#counsellingInputName")?.value;
  let phoneNo = document.querySelector("#counsellingInputPhone")?.value;
  let userCity = document.querySelector("#counsellingInputCity")?.value;
  let isValid = validatePhone(phoneNo);
  console.log({ email, fullname, phoneNo, isValid, userCity });
}

function getCampaignFormDetails() {
  let course = document.querySelector("#registrationInputCourse")?.value;
  let budgetRangeStart = document.querySelector("#minFees")?.value;
  let budgetRangeEnd = document.querySelector("#maxFees")?.value;
  let preferredCity = document.querySelector("#registrationInputCity")?.value;
  let selectedCourses = Array.from(
    document.getElementsByName("specializedCourse"),
    (el) => (el.checked ? el.value : null)
  ).filter((value) => value !== null);

  console.log({
    course,
    budgetRangeStart,
    budgetRangeEnd,
    preferredCity,
    selectedCourses,
  });
}
