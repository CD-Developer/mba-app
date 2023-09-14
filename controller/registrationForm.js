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

/**
 *
 * @param {HTMLElement} element Element on which Alert will be shown
 * @param {string} type Denotes type of alert to be displayed - Success, Warning, Error, CRITICAL etc
 * @param {string} message Message to be displayed on Alert
 */
function displayAlert(element, type, message) {
  element.classList.add("pt-4");
  element.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `  <div>${message}</div>`,
    '  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");
}

document
  .querySelector("#counsellingInputPhone")
  ?.addEventListener("input", (e) => {
    let phoneNo = document.querySelector("#counsellingInputPhone")?.value;
    if (!validatePhone(phoneNo)) {
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
      // Remove the warning/error alert in modal; if present
      const registrationError = document.querySelector("#registrationError");
      if (registrationError && registrationError && validatePhone(phoneNo)) {
        registrationError.innerHTML = "";
        registrationError.classList.remove("pt-4");
      }
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
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    form2Element?.scrollIntoView({ behavior: "smooth" });
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
  const registrationError = document.querySelector("#registrationError");
  if (isValid) {
    // Close Modal and show an 'alert(success)' to user
    const alertElement = document.querySelector("#registerAlert");
    const bootstrapModal = bootstrap.Modal.getInstance(
      document.querySelector("#registerModal")
    );
    // Clear the form inside Modal after successful validation.
    document?.querySelector("#counsellingForm").reset();
    bootstrapModal.hide();
    // Remove the CSS class for styling validated input at Phone No. input box
    document
      ?.querySelector("#counsellingInputPhone")
      .classList.remove("valid-phone");
    displayAlert(alertElement, "success", "Successfully registered!");
  } else {
    // Modal border(red) and an 'alert(error)' in modal to user
    document.querySelector("#registerContent")?.classList.add("error");
    displayAlert(
      registrationError,
      "warning",
      "Incorrect mobile number entered!"
    );
  }
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
