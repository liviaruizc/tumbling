document.getElementById("createPostForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Get current logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        alert("You must be logged in to create a post.");
        window.location.href = "login.html";
        return;
    }

    // Get post data from form
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const date = new Date().toLocaleDateString();
    const imageFile = document.getElementById("postImage").files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageData = event.target.result;

            const newPost = { title, content, date, image: imageData };

            loggedInUser.posts = loggedInUser.posts || [];
            loggedInUser.posts.push(newPost);

            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            alert("Post created successfully.");
            window.location.href = "profile.html";
        };
        reader.readAsDataURL(imageFile);
    } else {

        // Create a new post object
        const newPost = {title, content, date, image: null};

        // Add the post to the user's post array
        loggedInUser.posts = loggedInUser.posts || [];
        loggedInUser.posts.push(newPost);

        // Update the logged-in user data in localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        // Redirect to profile page to view new post
        alert("Post created successfully.");
        window.location.href = "profile.html";
    }
});