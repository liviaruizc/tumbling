# 📝 Tumbling

# Tumbling

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/liviaruizc/tumbling/badge)](https://securityscorecards.dev/viewer/?uri=github.com/liviaruizc/tumbling)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/12545/badge)](https://www.bestpractices.dev/projects/12545)

Tumbling is a simple blog-style web application that allows users to register, log in, create and view personal posts, and manage their profiles — including uploading profile pictures and updating bios.
## 🌐 Live Demo
[Click here to view the live site] (https://liviaruizc.github.io/tumbling/login.html)

--- update

## 🚀 Features

- ✅ User Registration & Login
- ✅ Persistent Login using `localStorage`
- ✅ Profile Management (Edit Bio, Upload Profile Picture)
- ✅ Create & Display Posts
- ✅ Upload Images for Posts
- ✅ Posts Displayed on User's Profile Page
- ✅ Responsive Design
- ✅ Logout Button visible only when logged in

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- `localStorage` for simple user and post data management

---

## 🧪 Vulnerabilities (for learning purposes)

This site intentionally includes some common vulnerabilities for educational testing:
1. 🔓 No input sanitization (Cross-Site Scripting - XSS risk)
2. 🧠 Client-side authentication only (no server validation)
3. 🔐 No password hashing
4. 📂 Data stored in `localStorage` (not secure)
5. 🧾 Lack of CSRF protection
6. 📜 Publicly exposed script files
7. 🧩 No input validation (e.g., image uploads or empty posts)

---


## 📁 Folder Structure
tumbling/ ├── index.html ├── login.html ├── register.html ├── profile.html ├── createPost.html ├── comments.html ├── style.css ├── login.js ├── register.js ├── profile.js ├── createPost.js └── README.md


---

## 📌 Usage

1. Clone the repository:
```bash
git clone https://github.com/your-username/tumbling.git

2. Open index.html in your browser, or use GitHub Pages to host it live.

## 🧠 Future Improvements
Connect to a real backend with user authentication

Implement form validation & input sanitization

Store user data securely in a database

Add post categories & tags

Enable comments on posts

📄 License
This project is for educational purposes only. No license applied.



