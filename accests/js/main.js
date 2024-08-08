document.addEventListener("DOMContentLoaded", () => {
  // steps
  $("#demo").steps({
    onFinish: function () {
      // alert('Wizard Completed');
    },
  });
  // steps
  // skintype and texture radios validation
  const radioButtonsTexture = document.querySelectorAll(
    '#skinTexture input[type="radio"]'
  );
  const radioButtonsSkinType = document.querySelectorAll(
    '#skinType input[type="radio"]'
  );
  const startAssessmentButton = document.getElementById("strt-assessment");

  let textureSelected = false;
  let skinTypeSelected = false;

  function checkSelection() {
    textureSelected = Array.from(radioButtonsTexture).some(
      (radio) => radio.checked
    );
    skinTypeSelected = Array.from(radioButtonsSkinType).some(
      (radio) => radio.checked
    );

    if (textureSelected && skinTypeSelected) {
      startAssessmentButton.removeAttribute("disabled");
      startAssessmentButton.classList.add("btn_active");
    } else {
      startAssessmentButton.setAttribute("disabled", "true");
      startAssessmentButton.classList.remove("btn_active");
    }
  }

  radioButtonsTexture.forEach((radioButton) => {
    radioButton.addEventListener("change", checkSelection);
  });

  radioButtonsSkinType.forEach((radioButton) => {
    radioButton.addEventListener("change", checkSelection);
  });
  // skintype and texture radios validation

  document
    .getElementById("phonenumber")
    .addEventListener("input", toggleButtonState);
  document
    .getElementById("emailadd")
    .addEventListener("input", toggleButtonState);

  function toggleButtonState() {
    const phoneNumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("emailadd").value;
    const viewReportBtn = document.getElementById("view-report-btn");

    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");

    // Check if phone number and email are not empty
    if (phoneNumber.trim() !== "") {
      phoneError.style.display = "none";
    } else {
      phoneError.style.display = "block";
    }

    if (email.trim() !== "") {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }

    // Enable/disable the button based on input values
    if (phoneNumber.trim() !== "" && email.trim() !== "") {
      viewReportBtn.removeAttribute("disabled");
      viewReportBtn.classList.add("btn_active");
    } else {
      viewReportBtn.setAttribute("disabled", "true");
      viewReportBtn.classList.remove("btn_active");
    }
  }

  // step1 validation
  // accordians

  // Customers Slider
  var Customer = $(".customers_slider");
  if (Customer.length) {
    Customer.slick({
      dots: false,
      infinite: true,
      initialSlide: 1,
      speed: 1000,
      autoplay: true,
      loop: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><svg fill="none" height="1.5rem" width="1.5rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"><svg fill="none" height="1.5rem" width="1.5rem" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle;"><polyline points="9 18 15 12 9 6"></polyline></svg></button>',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrow: false,
          },
        },
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }
  // Customers Slider
});

document.addEventListener("DOMContentLoaded", function () {
  const storagespace = document.querySelectorAll(
    "#storagespace input[type='radio']"
  );
  const storagespace_btn = document.getElementById("storagespace_btn");

  function checkStorageSpace() {
    let isChecked = false;
    storagespace.forEach(function (radioButton) {
      if (radioButton.checked) {
        isChecked = true;
      }
    });

    if (isChecked) {
      storagespace_btn.disabled = false;
      storagespace_btn.classList.remove("disabled");
      storagespace_btn.removeAttribute("data-bs-toggle");
      storagespace_btn.removeAttribute("data-bs-placement");
      storagespace_btn.removeAttribute("title");
      storagespace_btn.setAttribute("data-step-action", "next");
    } else {
      storagespace_btn.disabled = true;
      storagespace_btn.classList.add("disabled");
      storagespace_btn.setAttribute("data-bs-toggle", "tooltip");
      storagespace_btn.setAttribute("data-bs-placement", "top");
      storagespace_btn.setAttribute(
        "title",
        "Please select a storage space option"
      );
      storagespace_btn.removeAttribute("data-step-action");
    }
  }

  storagespace.forEach(function (radioButton) {
    radioButton.addEventListener("change", checkStorageSpace);
  });

  // Initialize tooltip for the button
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
