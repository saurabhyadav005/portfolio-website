// Welcome Message
console.log("Welcome to Saurabh Yadav Portfolio Website");

// Contact Form Validation
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields.");
            return;
        }

        alert("Thank you! Your message has been submitted.");

        form.reset();
    });
}