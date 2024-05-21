// Sign-in and Sign-up Button Event Listeners
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Password Toggle Functionality
const togglePasswordShow = document.getElementById('toggle-sign-in-password-hide');
const togglePasswordHide = document.getElementById('toggle-sign-in-password-show');
const toggleCPasswordShow = document.getElementById('toggle-sign-up-cpassword-hide');
const toggleCPasswordHide = document.getElementById('toggle-sign-up-cpassword-show');
const passwordField = document.getElementById('sign-in-password');
const confirmPasswordField = document.getElementById('sign-up-cpassword');
const signUpPasswordField = document.getElementById('sign-up-password');
const toggleSignUpPasswordShow = document.getElementById('toggle-sign-up-password-hide');
const toggleSignUpPasswordHide = document.getElementById('toggle-sign-up-password-show');

// Password Toggle Functionality
togglePasswordShow.addEventListener('mousedown', () => {
  passwordField.type = 'text';
});

togglePasswordShow.addEventListener('mouseup', () => {
  passwordField.type = 'password';
});

togglePasswordShow.addEventListener('mouseleave', () => {
  passwordField.type = 'password';
});

togglePasswordHide.addEventListener('mousedown', () => {
  passwordField.type = 'password';
});

togglePasswordHide.addEventListener('mouseup', () => {
  passwordField.type = 'text';
});

togglePasswordHide.addEventListener('mouseleave', () => {
  passwordField.type = 'text';
});


toggleCPasswordShow.addEventListener('click', () => {
  confirmPasswordField.type = 'text';
  toggleCPasswordShow.style.display = 'none';
  toggleCPasswordHide.style.display = 'block';
});

toggleCPasswordHide.addEventListener('click', () => {
  confirmPasswordField.type = 'password';
  toggleCPasswordHide.style.display = 'none';
  toggleCPasswordShow.style.display = 'block';
});

toggleSignUpPasswordShow.addEventListener('click', () => {
  signUpPasswordField.type = 'text';
  toggleSignUpPasswordShow.style.display = 'none';
  toggleSignUpPasswordHide.style.display = 'block';
});

toggleSignUpPasswordHide.addEventListener('click', () => {
  signUpPasswordField.type = 'password';
  toggleSignUpPasswordHide.style.display = 'none';
  toggleSignUpPasswordShow.style.display = 'block';
});

// Sign-in Form Validation
const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  const username = document.querySelector('.sign-in-form input[type="text"]').value.trim();
  const password = document.querySelector('.sign-in-form input[type="password"]').value.trim();

  if (!username) {
    document.getElementById('username-error').style.display = 'block';
    valid = false;
  } else if (username !== 'lido-admin' && username !== 'lidocustomer') {
    document.getElementById('username-error-invalid').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('username-error-invalid').style.display = 'none';
  }

  if (!password) {
    document.getElementById('password-error-blank').style.display = 'block';
    valid = false;
  } else if (
    (username === 'lido-admin' && password !== 'lidoshoresresort2024*') ||
    (username === 'lidocustomer' && password !== 'lidocustomer2024*')
  ) {
    document.getElementById('password-error-invalid').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('password-error-blank').style.display = 'none';
    document.getElementById('password-error-invalid').style.display = 'none';
  }

  if (valid) {
    if (username === 'lido-admin') {
      window.location.href = adminUrl; // Ensure adminUrl is defined
    } else if (username === 'lidocustomer') {
      window.location.href = homeUrl; // Access homeUrl variable defined in the HTML template
    }
  }
});


// Sign-up Form Validation
const signUpForm = document.getElementById('sign-up-form');
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const contactField = document.getElementById('contact');
const termsField = document.getElementById('terms');

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  let valid = true;

  // Validate Username
  if (usernameField.value.trim() === "") {
    document.getElementById('username-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('username-error').style.display = 'none';
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailField.value)) {
    document.getElementById('email-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('email-error').style.display = 'none';
  }

  // Validate Contact Number
  const contactPattern = /^[0-9]{10,15}$/; // Example pattern for contact number
  if (!contactPattern.test(contactField.value)) {
    document.getElementById('contact-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('contact-error').style.display = 'none';
  }

  // Validate Password
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(signUpPasswordField.value)) {
    document.getElementById('password-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('password-error').style.display = 'none';
  }

  // Validate Confirm Password
  if (signUpPasswordField.value !== confirmPasswordField.value) {
    document.getElementById('cpassword-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('cpassword-error').style.display = 'none';
  }

  // Validate Terms and Conditions
  if (!termsField.checked) {
    document.getElementById('terms-error').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('terms-error').style.display = 'none';
  }

  // If the form is valid, you can submit it or handle it further here
  if (valid) {
    signUpForm.submit();
  }
});

// Remove blue background on input focus
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', (event) => {
    event.target.style.boxShadow = 'none';
    event.target.style.outline = 'none';
  });
});
