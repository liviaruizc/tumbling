document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded (login)");

    // Check if the user is already logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Logged in user:", loggedInUser);

    // If the user is logged in, redirect them to the profile page
    if (loggedInUser) {
        console.log("User already logged in.", loggedInUser);
        window.location.href = "profile.html"; // Redirect to profile page
        return;

    }

        const form = document.getElementById("loginForm");
        if (!form) {
            console.error("Login form not found!");
            return;
        }

        // Continue with user log in if not logged in already
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                window.location.href = "profile.html";
            } else {
                alert("Incorrect username or password.");
            }
        });
});
