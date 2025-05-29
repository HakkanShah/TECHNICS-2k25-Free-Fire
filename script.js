document.addEventListener("DOMContentLoaded", function () {
    
    const rulesSection = document.querySelector(".rules-container");
    if (rulesSection) {
        rulesSection.addEventListener("mouseover", function () {
            rulesSection.style.boxShadow = "0 0 25px #f0f";
        });
     rulesSection.addEventListener("mouseout", function () {
            rulesSection.style.boxShadow = "0 0 15px #0ff";
        });
    }
 
    const registrationForm = document.querySelector("form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            if (registrationForm.checkValidity()) {
                window.location.href = "success.html"; 
            } else {
                alert("Please fill in all required fields."); 
            }
        });
    }
    
});