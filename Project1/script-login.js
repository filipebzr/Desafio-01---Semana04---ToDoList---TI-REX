document.getElementById('linkedin').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com';
});
document.getElementById('instagram').addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com';
});
document.getElementById('facebook').addEventListener('click', function () {
    window.location.href = 'https://www.facebook.com';
});


function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// document.getElementById("login").addEventListener("submit", function(email, password) {
//     check.preventDefault()
//     const errorElement = document.getElementById("message");
//     let email = validEmail(email);
//     let password = validPassword(password);

//     if (!validEmail(email) || !validEmail) {
//         errorElement.innerText = "Invalid Email. Try again";
//         return;
//     }
//     if (!validPassword(password)) {
//         errorElement.innerText = "Invalid Password.";
//         return;
//     }

//     errorElement.innerText = "Invalid name or email";
// });

document.getElementById("login").addEventListener("click", function (check) {
    check.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorElement = document.getElementById("message");

    if (!validEmail(email)) {
        errorElement.innerText = "Invalid Email. Try again";
        return;
    }
    if (!validPassword(password)) {
        errorElement.innerText = "Invalid Password.";
        return;
    }

    errorElement.innerText = "Login Done!";
    errorElement.style.color = "green";
    window.location.href = 'kanban.html';
    const userData = {
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userData));
});
