document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("userEmail", email);
    localStorage.setItem("UsernameID", username);
    if (username === "Admin" && email ==="admin@gmail.com") {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'user.html';
    }
});
