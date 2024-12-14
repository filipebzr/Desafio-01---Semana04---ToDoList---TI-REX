document.getElementById('linkedin').addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com';
});
document.getElementById('instagram').addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com';
});
document.getElementById('facebook').addEventListener('click', function () {
    window.location.href = 'https://www.facebook.com';
});

document.getElementById("subscribe").addEventListener("click", function() {
    const errorElement = document.getElementById("error");
    errorElement.innerText = "Invalid name or email";
});

function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
    return nameRegex.test(name);
}

document.getElementById("subscribe").addEventListener("click", function (check) {
    check.preventDefault();

    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const errorElement = document.getElementById("error");

    if (!validEmail(email)) {
        errorElement.innerText = "Invalid Email. Try again";
        return;
    }
    if (!validName(name)) {
        errorElement.innerText = "Invalid Name.";
        return;
    }

    errorElement.innerText = "Subscribe Done!";
    errorElement.style.color = "green";
    window.location.href = 'login.html';

    const userData = {
        email: email,
        name: name
    };
    localStorage.setItem("user", JSON.stringify(userData));
});

