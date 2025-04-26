document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");
    const form = document.getElementById("registerForm");
    console.log("form found:", form);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted");

        // Get user input
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;


        // Check if the username already exists
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.username === username)) {
            alert("Username already exists. Please choose another one.");
            return
        }

        // Create a new user object
        const newUser = { username, email, password, firstName, lastName, posts: [] };


        // Save the new user in localStorage
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to login page
        alert("Registration successful. Please log in.");
        window.location.href = "login.html";
    });
});