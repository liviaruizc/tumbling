document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user && logoutBtn) {
        logoutBtn.style.display = "inline";

        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html";

        });
    }
});