function getName() {
  const guestName = document.getElementById("inputName").value;
  if (guestName.length == 0) {
    var errorName = document.getElementById("errorName");
    errorName.innerHTML = `
    <p>Please enter your name</p>
    `;
    return false;
  } else {
    var errorName = document.getElementById("errorName");
    errorName.innerHTML = ``;
    return true;
  }
}

function getPhone() {
  const inputPhone = document.getElementById("inputPhone");
  let guestPhone = inputPhone.value.trim(); // Trim whitespace from the input

  // Listen for input events and validate phone number format
  inputPhone.addEventListener("input", function (event) {
    // Remove non-numeric characters from the input
    guestPhone = this.value.replace(/\D/g, "");

    // Limit input to a maximum of 11 characters
    if (guestPhone.length > 11) {
      guestPhone = guestPhone.slice(0, 11); // Truncate input to 11 characters
    }

    // Update the input value with the formatted phone number
    this.value = guestPhone;
  });

  // Check if the input is empty or contains only non-numeric characters
  if (guestPhone.length === 0 || isNaN(Number(guestPhone))) {
    var errorPhone = document.getElementById("errorPhone");
    errorPhone.innerHTML = `<p>Please enter a valid Philippine phone number</p>`;
    return false;
  } else if (!isValidPhoneNumber(guestPhone)) {
    var errorPhone = document.getElementById("errorPhone");
    errorPhone.innerHTML = `<p>Please enter a valid Philippine phone number in the format 09xxxxxxxxx</p>`;
    return false;
  } else {
    var errorPhone = document.getElementById("errorPhone");
    errorPhone.innerHTML = ``; // Clear any previous error message
    return true;
  }
}

// Function to validate the phone number format
function isValidPhoneNumber(phoneNumber) {
  return /^09\d{9}$/.test(phoneNumber);
}

function dateCheck() {
  const startDate = document.getElementById("from").value;
  const endDate = document.getElementById("to").value;
  const startTimeCheck = new Date(startDate) - new Date();
  const endTimeCheck = new Date(endDate) - new Date(startDate);
  if (startTimeCheck < 0 || endTimeCheck <= 0) {
    var errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = `
    <p>Please choose the valid dates</p>
    `;
    return false;
  } else if (startDate.length == 0 || endDate.length == 0) {
    var errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = `
    <p>Please choose the dates</p>
    `;
    return false;
  } else {
    var errorDate = document.getElementById("errorDate");
    errorDate.innerHTML = ``;
    return true;
  }
}

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        minDate: 1,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        minDate: 1,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }
    const startDate = document.getElementById("from").value;
    const endDate = document.getElementById("to").value;
    const currentYear = new Date().getFullYear().toString();
    const startTimestamp = Math.ceil(
      (new Date(startDate) - new Date(currentYear)) / 86400000
    );
    const endTimestamp = Math.ceil(
      (new Date(endDate) - new Date(currentYear)) / 86400000
    );
    let hasDays = endTimestamp - startTimestamp;
    let days = isNaN(hasDays) || hasDays < 0 ? 0 : hasDays;
    const roomPrice = document.getElementById("setRoomPrice").value;
    const totalPrice = roomPrice * days;

    // Format total price with commas and bold the thousands separator
    var formattedTotalPrice = totalPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
    });
    formattedTotalPrice = formattedTotalPrice.replace(
      /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
      "<b>$1,</b>"
    );

    var priceCount = document.getElementById("priceCount");
    priceCount.innerHTML = `
    <div id="totalPrice" class="h5">₱${roomPrice} PHP x ${days} night(s) =
    <div style="margin-top: 10px; margin-bottom: 0; padding-bottom: 0;"><b>${formattedTotalPrice}</b></div>
  </div>
    `;
    return date;
  }
});
