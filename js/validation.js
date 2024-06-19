console.log("validation.js loaded...");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("name-error").innerText = "Name is required";
        return false;
    }

    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("email-error").innerText = "Email is required";
        return false;
    if (!email.match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/"))
        document.getElementById("email-error").innerText = "Invalid email";
    return false;
    }
});