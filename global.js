document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user && logoutBtn) {
        logoutBtn.style.display = "inline-block";

        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html"; // Redirect to login page
        });
    } else if (logoutBtn) {
        logoutBtn.style.display = "none"; // Hide Logout button if no user logged in
    }
});
