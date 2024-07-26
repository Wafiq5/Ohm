//! Navbar
let navbarLinks = document.querySelector(".nav-links");

let expandMenu = () => {
    navbarLinks.classList.toggle("nav-expanded");
};

document.querySelector(".toggle-button").addEventListener("click", expandMenu);

//! Reservation confirm
let sendReservationInfo = () => {
    let reservationName = document.getElementById("reservation-name").value;
    let reservationEmail = document.getElementById("reservation-email").value;
    let reservationPhone = document.getElementById("reservation-phone").value;
    let reservationDate = document.getElementById("reservation-date").value;
    let reservationTime = document.getElementById("reservation-time").value;
    let reservationSubjectRequests = document.getElementById(
        "reservation-subject-requests"
    ).value;
    console.log(reservationDate);
    console.log(reservationTime);
    if (
        reservationName == "" ||
        reservationEmail == "" ||
        reservationPhone == "" ||
        reservationDate == "" ||
        reservationTime == "" ||
        reservationSubjectRequests == ""
    ) {
        alert("Please fill all the fields!");
    } else if (isNaN(reservationPhone)) {
        alert("Please enter a valid phone number");
    } else {
        document.querySelector(".reservation-confirmation").style.display = "flex";
        document.querySelector(".reservation-form").style.display = "none";
        document.querySelector(".reservation-form-head-text").style.display =
            "none";
        document.querySelector(".contact-container").style.display = "none";
    }
};
//! CHECKOUT VALIDATION

let cardOwnerName,
    cardNumberPart1,
    cardNumberPart2,
    cardNumberPart3,
    cardNumberPart4,
    cvvNumber,
    expMonth,
    expYear;
let resetCardInputColors = () => {
    document.querySelector("#cardOwnerName").style.border = "4px solid #5cc74a";
    document.querySelector("#cardNumberPart1").style.border = "4px solid #5cc74a";
    document.querySelector("#cardNumberPart2").style.border = "4px solid #5cc74a";
    document.querySelector("#cardNumberPart3").style.border = "4px solid #5cc74a";
    document.querySelector("#cardNumberPart4").style.border = "4px solid #5cc74a";
    document.querySelector("#cvvNumber").style.border = "4px solid #5cc74a";
    document.querySelector("#expMonth").style.border = "4px solid #5cc74a";
    document.querySelector("#expYear").style.border = "4px solid #5cc74a";
};

let sendCardInfo = () => {
    resetCardInputColors();

    cardOwnerName = document.querySelector("#cardOwnerName").value;
    cardNumberPart1 = document.querySelector("#cardNumberPart1").value;
    cardNumberPart2 = document.querySelector("#cardNumberPart2").value;
    cardNumberPart3 = document.querySelector("#cardNumberPart3").value;
    cardNumberPart4 = document.querySelector("#cardNumberPart4").value;
    cvvNumber = document.querySelector("#cvvNumber").value;
    expMonth = document.querySelector("#expMonth").value;
    expYear = document.querySelector("#expYear").value;

    function hasNumbers(input) {
        var regex = /\d/;
        return regex.test(input);
    }

    //! GENERAL TESTING!!!
    if (
        !cardOwnerName ||
        !cardNumberPart1 ||
        !cardNumberPart2 ||
        !cardNumberPart3 ||
        !cardNumberPart4 ||
        !cvvNumber ||
        !expMonth ||
        !expYear
    ) {
        if (!cardOwnerName) {
            document.getElementById("cardOwnerName").style.border = "4px solid red";
        } else {
            document.getElementById("cardOwnerName").style.border =
                "4px solid #5cc74a";
        }

        if (!cardNumberPart1) {
            document.getElementById("cardNumberPart1").style.border = "4px solid red";
        } else {
            document.getElementById("cardNumberPart1").style.border =
                "4px solid #5cc74a";
        }

        if (!cardNumberPart2) {
            document.getElementById("cardNumberPart2").style.border = "4px solid red";
        } else {
            document.getElementById("cardNumberPart2").style.border =
                "4px solid #5cc74a";
        }

        if (!cardNumberPart3) {
            document.getElementById("cardNumberPart3").style.border = "4px solid red";
        } else {
            document.getElementById("cardNumberPart3").style.border =
                "4px solid #5cc74a";
        }

        if (!cardNumberPart3) {
            document.getElementById("cardNumberPart3").style.border = "4px solid red";
        } else {
            document.getElementById("cardNumberPart3").style.border =
                "4px solid #5cc74a";
        }

        if (!cardNumberPart4) {
            document.getElementById("cardNumberPart4").style.border = "4px solid red";
        } else {
            document.getElementById("cardNumberPart4").style.border =
                "4px solid #5cc74a";
        }

        if (!cvvNumber) {
            document.getElementById("cvvNumber").style.border = "4px solid red";
        } else {
            document.getElementById("cvvNumber").style.border = "4px solid #5cc74a";
        }

        if (!expMonth) {
            document.getElementById("expMonth").style.border = "4px solid red";
        } else {
            document.getElementById("expMonth").style.border = "4px solid #5cc74a";
        }

        if (!expYear) {
            document.getElementById("expYear").style.border = "4px solid red";
        } else {
            document.getElementById("expYear").style.border = "4px solid #5cc74a";
        }
    } else {
        document.querySelector(".card-input").style.border = "4px solid #5cc74a";
    }

    //! ALL INDIVIDUAL TESTING BEGINS HERE!!!

    //Counts how many valid inputs are there
    let validInput_count = 0;

    //* Card owner name validation
    if (hasNumbers(cardOwnerName) || /[!@#$%^&*]/.test(cardOwnerName)) {
        document.getElementById("cardOwnerHeaderText").innerHTML = "Invalid name";
        document.getElementById("cardOwnerHeaderText").style.color = "red";
        document.getElementById("cardOwnerName").style.border = "4px solid red";
    } else if (!cardOwnerName) {
        document.getElementById("cardOwnerHeaderText").innerHTML =
            "Enter your name";
        document.getElementById("cardOwnerName").style.border = "4px solid red";
        document.getElementById("cardOwnerHeaderText").style.color = "red";
    } else {
        //; VALID INPUT
        document.getElementById("cardOwnerHeaderText").innerHTML = "Card Owner";
        document.getElementById("cardOwnerHeaderText").style.color = "#343434";

        validInput_count += 1;
    }

    //* Card number validation
    // String validation
    cardNumber =
        cardNumberPart1 + cardNumberPart2 + cardNumberPart3 + cardNumberPart4;
    if (
        cardNumber.length !== 16 ||
        !hasNumbers(cardNumber) ||
        isNaN(cardNumber)
    ) {
        document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
        document.getElementById("cardNumberHeaderText").style.color = "red";
        document.querySelectorAll(".numb-input").forEach(function (element) {
            element.style.border = "4px solid red";
        });
    } else {
        //; VALID INPUT
        document.getElementById("cardNumberHeaderText").innerHTML = "Card Number";
        document.getElementById("cardNumberHeaderText").style.color = "#343434";
        document.querySelectorAll(".numb-input").forEach(function (element) {
            element.style.border = "4px solid #5cc74a";
        });

        validInput_count += 1;
    }
    // Actual card validation
    let cardNumber_sum_odd = 0;
    let cardNumber_sum_even = 0;
    let cardNumber_sum_total = 0;

    let cardNumber_validator = cardNumber;

    // Reverse string function
    function reverseString(str) {
        if (str === "") return "";
        else return reverseString(str.substr(1)) + str.charAt(0);
    }
    // Addition of odd digit function (for cardNumber_sum_odd)
    function sumOddPlace(number) {
        const numberStr = number.toString();
        let sum = 0;

        for (let i = 0; i < numberStr.length; i += 2) {
            sum += parseInt(numberStr[i]);
        }

        return sum;
    }
    // Addition and multiplication of even digit (for cardNumber_sum_even)
    function sumDoubleEvenPlace(number) {
        const numberStr = number.toString();
        let sum = 0;

        for (let i = 1; i < numberStr.length; i += 2) {
            let digit = parseInt(numberStr[i]) * 2;
            if (digit > 9) {
                digit = digit - 9;
            }
            sum += digit;
        }

        return sum;
    }

    cardNumber_validator = reverseString(cardNumber_validator);
    cardNumber_sum_odd = sumOddPlace(cardNumber_validator);
    cardNumber_sum_even = sumDoubleEvenPlace(cardNumber_validator);
    cardNumber_sum_total = cardNumber_sum_odd + cardNumber_sum_even;
    if (cardNumber_sum_total == 0) {
        document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
        document.getElementById("cardNumberHeaderText").style.color = "red";
        document.querySelectorAll(".numb-input").forEach(function (element) {
            element.style.border = "4px solid red";
        });
    } else if (cardNumber_sum_total % 10 == 0) {
        //; VALID INPUT
        document.getElementById("cardNumberHeaderText").innerHTML = "Card Number";
        document.getElementById("cardNumberHeaderText").style.color = "#343434";
        document.querySelectorAll(".numb-input").forEach(function (element) {
            element.style.border = "4px solid #5cc74a";
        });

        validInput_count += 1;
    } else {
        document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
        document.getElementById("cardNumberHeaderText").style.color = "red";
        document.querySelectorAll(".numb-input").forEach(function (element) {
            element.style.border = "4px solid red";
        });
    }
    //* CVV validation
    let cvvNumberInput = document.querySelector("#cvvNumber");
    let cvvNumberHeaderText = document.querySelector("#cvvNumberHeaderText");
    let expDateHeaderText = document.querySelector("#expDateHeaderText");

    if (!cvvNumberInput.value || cvvNumberInput.value.length < 3) {
        cvvNumberHeaderText.innerHTML = "Invalid CVV";
        cvvNumberHeaderText.style.color = "red";
        cvvNumberInput.style.border = "4px solid red";
    } else {
        //; VALID INPUT
        cvvNumberHeaderText.innerHTML = "CVV";
        cvvNumberHeaderText.style.color = "#343434";

        validInput_count += 1;
    }

    //* Expiration date validation
    let expMonthInput = document.querySelector("#expMonth");
    let expYearInput = document.querySelector("#expYear");

    if (
        !expMonth ||
        expMonth >= 13 ||
        expMonth <= 0 ||
        !expYear ||
        expYear < 24
    ) {
        expDateHeaderText.innerHTML = "Invalid date";
        expMonthInput.style.border = "4px solid red";
        expYearInput.style.border = "4px solid red";
        expDateHeaderText.style.color = "red";
    } else {
        //; VALID INPUT
        expDateHeaderText.innerHTML = "Expiration Date";
        expMonthInput.style.border = "4px solid #5cc74a";
        expYearInput.style.border = "4px solid #5cc74a";
        expDateHeaderText.style.color = "#343434";

        validInput_count += 1;
    }
    if (validInput_count == 5) {
        successScreen();
    }
    console.log(validInput_count);
};

let successScreen = () => {
    // Show loading screen
    document.querySelector(".loading-screen").style.display = "block";

    // Hides card details and header texts
    document.querySelector("#cardDetailsHeaderText").style.display = "none";
    document.querySelector("#cardOwnerName").style.display = "none";
    document.querySelector("#cardNumberPart1").style.display = "none";
    document.querySelector("#cardNumberPart2").style.display = "none";
    document.querySelector("#cardNumberPart3").style.display = "none";
    document.querySelector("#cardNumberPart4").style.display = "none";
    document.querySelector("#cvvNumber").style.display = "none";
    document.querySelector("#expMonth").style.display = "none";
    document.querySelector("#expYear").style.display = "none";
    document.querySelector("#cardOwnerHeaderText").style.display = "none";
    document.querySelector("#cardNumberHeaderText").style.display = "none";
    document.querySelector("#cvvNumberHeaderText").style.display = "none";
    document.querySelector("#expDateHeaderText").style.display = "none";
    document.querySelector("#sendCardInfoBtn").style.display = "none";
    document.querySelector(".checkout-inputs-container").style.display = "none";

    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
        document.querySelector(".confirmation-screen-container").style.display =
            "block";
    }, 5000);
};

//!checkout Redirection
window.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get("plan");

    const subscriptionNameElement = document.getElementById("subscription-name");
    const subscriptionPriceElement = document.querySelector(
        ".subscription-price"
    );
    const totalTaxElement = document.querySelector(".total-tax");
    const totalPriceElement = document.querySelector(".total-price");

    let subscriptionName, subscriptionPrice, totalTax, totalPrice;

    if (plan === "basic") {
        subscriptionName = "Basic";
        subscriptionPrice = "$69.99";
        totalTax = "$10.00";
        totalPrice = "$79.99";
    } else if (plan === "pro") {
        subscriptionName = "Pro";
        subscriptionPrice = "$169.99";
        totalTax = "$20.00";
        totalPrice = "$189.99";
    } else if (plan === "business") {
        subscriptionName = "Business";
        subscriptionPrice = "$420.69";
        totalTax = "$50.00";
        totalPrice = "$470.69";
    } else {
        subscriptionName = "Invalid";
        subscriptionPrice = "N/A";
        totalTax = "N/A";
        totalPrice = "N/A";
        document.querySelector(".checkout-form-container").style.display = "none";
    }

    subscriptionNameElement.innerHTML = `<span class="text-gradient">Ohm's</span> ${subscriptionName} subscription`;
    subscriptionPriceElement.textContent = subscriptionPrice;
    totalTaxElement.textContent = totalTax;
    totalPriceElement.textContent = totalPrice;
});

//! Newsletter

const newsletterInput = document.querySelector(".newsletter-input");

let sendNewsletterInfo = () => {
    const email = newsletterInput.value;

    if (email.length > 0) {
        newsletterInput.style.border = "4px solid #5cc74a";
        newsletterInput.style.color = "#343434";
        alert("Thank you for subscribing to our newsletter!");
    } else {
        newsletterInput.style.border = "4px solid red";
        newsletterInput.style.color = "red";
    }
};

//! ACCOUNTS
//- Reset signup input colors
let resetSignupInputColors = () => {
    document.querySelector("#full-name-input").style.border = "1px solid #ccc";
    document.querySelector("#email-input").style.border = "1px solid #ccc";
    document.querySelector("#set-password-input").style.border = "1px solid #ccc";
    document.querySelector("#confirm-password-input").style.border =
        "1px solid #ccc";
};

let resetSignupHeaderTexts = () => {
    fullNameHeaderText.style.color = "#343434";
    emailHeaderText.style.color = "#343434";
    passwordHeaderText.style.color = "#343434";
    confirmPasswordHeaderText.style.color = "#343434";

    fullNameHeaderText.innerHTML = "Enter full name";
    emailHeaderText.innerHTML = "Enter email";
    passwordHeaderText.innerHTML = "Create Password";
    confirmPasswordHeaderText.innerHTML = "Confirm Password";
};

//; SIGN UP FORM VALIDATION
//@Inputs
let fullNameInput = document.getElementById("full-name-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("set-password-input");
let confirmPasswordInput = document.getElementById("confirm-password-input");

//@Input header texts
let fullNameHeaderText = document.querySelector("#fullNameHeaderText");
let emailHeaderText = document.querySelector("#emailHeaderText");
let passwordHeaderText = document.querySelector("#createPasswordHeaderText");
let confirmPasswordHeaderText = document.querySelector(
    "#confirmPasswordHeaderText"
);

let fullName = "";

function validateSignUpForm() {
    resetSignupInputColors();
    resetSignupHeaderTexts();

    fullName = fullNameInput.value.trim();
    let isValid = true;

    console.log("full name", fullName);

    if (!fullName) {
        fullNameInput.style.border = "4px solid red";
        fullNameHeaderText.style.color = "red";
        isValid = false;
    } else {
        fullNameInput.style.border = "4px solid #5cc74a";
        fullNameHeaderText.style.color = "#343434";
    }

    if (!emailInput.value.trim()) {
        emailInput.style.border = "4px solid red";
        emailHeaderText.style.color = "red";
        isValid = false;
    } else {
        emailInput.style.border = "4px solid #5cc74a";
        emailHeaderText.style.color = "#343434";
    }

    if (!passwordInput.value) {
        passwordInput.style.border = "4px solid red";
        passwordHeaderText.style.color = "red";
        isValid = false;
    } else {
        passwordInput.style.border = "4px solid #5cc74a";
        passwordHeaderText.style.color = "#343434";
    }

    if (!confirmPasswordInput.value) {
        confirmPasswordInput.style.border = "4px solid red";
        confirmPasswordHeaderText.style.color = "red";
        isValid = false;
    } else {
        confirmPasswordInput.style.border = "4px solid #5cc74a";
        confirmPasswordHeaderText.style.color = "#343434";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.style.border = "4px solid red";
        confirmPasswordInput.style.border = "4px solid red";
        passwordHeaderText.style.color = "red";
        passwordHeaderText.innerHTML = "Passwords do not match";
        confirmPasswordHeaderText.style.color = "red";
        confirmPasswordHeaderText.innerHTML = "Passwords do not match";
        isValid = false;
    }

    if (passwordInput.value.length < 8 || passwordInput.value.length > 20) {
        passwordInput.style.border = "4px solid red";
        passwordHeaderText.style.color = "red";
        passwordHeaderText.innerHTML =
            "Password must be between 8 and 20 characters";
        confirmPasswordHeaderText.style.color = "red";
        confirmPasswordInput.style.border = "4px solid red";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("signup-loading-screen").style.display = "flex";
        document.querySelector(".signup-form-inputs").style.display = "none";
        document.querySelector(".form-head-text").style.display = "none";

        setTimeout(() => {
            document.getElementById("signup-loading-screen").style.display = "none";
            document.getElementById("signup-confirmation-screen-container").style.display = "flex";
            // Set login information within the session
            sessionStorage.setItem("loginStoredEmail", emailInput.value.trim());
            sessionStorage.setItem("loginStoredPassword", passwordInput.value.trim());
            sessionStorage.setItem("loginStoredFullName", fullName);
        }, 5000);
    }
}

function login_account() {
    const loginEmailInput = document.getElementById("login-email-input");
    const loginPasswordInput = document.getElementById("login-password-input");
    const loginEmailHeaderText = document.querySelector("#loginEmailHeaderText");
    const loginPasswordHeaderText = document.querySelector("#loginPasswordHeaderText");
    // Retrieve stored email and password for login from the session
    const loginStoredEmail = sessionStorage.getItem("loginStoredEmail");
    const loginStoredPassword = sessionStorage.getItem("loginStoredPassword");
    const loginStoredFullName = sessionStorage.getItem("loginStoredFullName");
    console.log(loginStoredFullName);
    // Retrieve email and password entered by the user
    const loginEnteredEmail = loginEmailInput.value.trim();
    const loginEnteredPassword = loginPasswordInput.value.trim();

    let emailIsValid = true;
    let passwordIsValid = false; // Initialize passwordIsValid to false

    // Validation for email
    if (loginEnteredEmail !== loginStoredEmail) {
        loginEmailInput.style.border = "4px solid red";
        loginEmailHeaderText.style.color = "red";
        emailIsValid = false;
    } else {
        loginEmailInput.style.border = "4px solid #5cc74a";
        loginEmailHeaderText.style.color = "#343434";
    }

    // Validation for password
    if (loginEnteredPassword === loginStoredPassword) {
        loginPasswordInput.style.border = "4px solid #5cc74a";
        loginPasswordHeaderText.style.color = "#343434";
        passwordIsValid = true;
    } else {
        loginPasswordInput.style.border = "4px solid red";
        loginPasswordHeaderText.innerHTML = "Invalid password!";
        loginPasswordHeaderText.style.color = "red";
    }

    // If email and password are valid, proceed with login
    if (emailIsValid && passwordIsValid) {
        console.log("Login successful!");

        // Display the first name in the navbar
        const accountName = document.getElementById("accountName");
        if (accountName) {
            accountName.innerHTML = loginStoredFullName;
        }

        document.querySelector(".login-form-inputs").style.display = "none";
        document.querySelector(".login-confirmation-screen-container").style.display = "flex";
    }
}

// Function to set accountName on login
function setAccountNameOnLogin(fullName) {
    // Set accountName in local storage
    localStorage.setItem("accountName", fullName);

    // Display accountName in the navbar
    const accountNameElement = document.getElementById("accountName");
    if (accountNameElement) {
        accountNameElement.textContent = fullName;
    }
}

// Function to display accountName on page load
function displayAccountNameOnPageLoad() {
    const accountName = localStorage.getItem("accountName");
    const accountNameElement = document.getElementById("accountName");
    if (accountName && accountNameElement) {
        accountNameElement.textContent = accountName;
    }
}

// Call the function to display accountName on page load
displayAccountNameOnPageLoad();
