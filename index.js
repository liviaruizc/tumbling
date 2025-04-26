document.addEventListener("DOMContentLoaded", function () {
    // Check if a user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Show the Logout button if user is logged in
    if (loggedInUser) {
        document.getElementById("logoutBtn").style.display = "inline-block"; // Show Logout button
    } else {

        // Logout functionality
        document.getElementById("logoutBtn")?.addEventListener("click", function () {
            // Clear the logged-in user from localStorage
            localStorage.removeItem("loggedInUser");

            // Redirect the user to the home page after logging out
            window.location.href = "index.html";
        });
    }
});
