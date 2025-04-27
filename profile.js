document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        alert("Please log in first.");
        window.location.href = "login.html";
        return;

    } else {
        // Set welcome message
        document.getElementById("welcomeMessage").innerText = `Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}!`;

        // Display user details
        document.getElementById("profileUsername").innerText = loggedInUser.username;
        document.getElementById("profileEmail").innerText = loggedInUser.email;
        document.getElementById("profileFirstName").innerText = loggedInUser.firstName || "N/A";
        document.getElementById("profileLastName").innerText = loggedInUser.lastName || "N/A";
        document.getElementById("profileBio").innerText = loggedInUser.bio || "No bio yet!";
        document.getElementById("profileBioTop").innerText = loggedInUser.bio || "No bio yet!";
        document.getElementById("profileJoinDate").innerText = loggedInUser.joinDate || "N/A";

        // Edit profile functionality
        document.getElementById("editProfileBtn").addEventListener("click", function () {
            // Show upload image button and save button
            document.getElementById("uploadImage").style.display = "block";
            document.getElementById("saveProfileBtn").style.display = "block";
            document.getElementById("editProfileBtn").style.display = "none";

            const newBio = prompt("Enter new bio:", loggedInUser.bio || "");
            if (newBio != null) {
                loggedInUser.bio = newBio;
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
                document.getElementById("profileBio").innerText = newBio;
                document.getElementById("profileBioTop").innerText = newBio;
            }
        });

        // Display user posts
        const postsContainer = document.querySelector(".posts-section");
        if (loggedInUser.posts && loggedInUser.posts.length > 0) {
            loggedInUser.posts.forEach((post) => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");

                const postTitle = document.createElement("h4");
                postTitle.innerHTML = post.title;

                const postContent = document.createElement("p");
                postContent.innerHTML = post.content;

                postDiv.appendChild(postTitle);
                postDiv.appendChild(postContent);

                if (post.image) {
                    const postImage = document.createElement("img");
                    postImage.src = post.image;
                    postImage.alt = "Post Image";
                    postImage.classList.add("post-image");
                    postDiv.appendChild(postImage);
                }

                postsContainer.appendChild(postDiv);
            });
        } else {
            postsContainer.innerHTML += "<p>You haven't posted anything yet.</p>";
        }
    }

    // Save profile button functionality
    document.getElementById("saveProfileBtn").addEventListener("click", function () {
        // Save the updated user data in localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        // Hide the upload and save buttons again
        document.getElementById("uploadImage").style.display = "none";
        document.getElementById("saveProfileBtn").style.display = "none";
        document.getElementById("editProfileBtn").style.display = "block";

        alert("Profile Updated!");
    });

    // Load saved profile image
    if (loggedInUser.profileImage) {
        document.getElementById("profileImage").src = loggedInUser.profileImage;
    }

// Image upload handler
    document.getElementById("uploadImage").addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imageData = event.target.result;
                document.getElementById("profileImage").src = imageData;

                // Save the image to localStorage
                loggedInUser.profileImage = imageData;
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                // Also update in users list
                let users = JSON.parse(localStorage.getItem("users")) || [];
                const userIndex = users.findIndex(user => user.username === loggedInUser.username);
                if (userIndex !== -1) {
                    users[userIndex].profileImage = imageData;
                    localStorage.setItem("users", JSON.stringify(users));
                }
            };
            reader.readAsDataURL(file); // Convert image to base64
        }
    });

});

