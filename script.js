document.addEventListener("DOMContentLoaded", function () {
    // Rules Section Hover Effect (Already present in your code)
    const rulesSection = document.querySelector(".rules-container");

    if (rulesSection) {
        rulesSection.addEventListener("mouseover", function () {
            rulesSection.style.boxShadow = "0 0 25px #f0f";
        });

        rulesSection.addEventListener("mouseout", function () {
            rulesSection.style.boxShadow = "0 0 15px #0ff";
        });
    }

    // Form Validation and Redirection
    const registrationForm = document.querySelector("form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop default form submission

            if (registrationForm.checkValidity()) {
                window.location.href = "success.html"; // Redirect only if valid
            } else {
                alert("Please fill in all required fields."); // Show error if invalid
            }
        });
    }
});