

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (phone.length < 12 || isNaN(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (!gender) {
        alert('Please select your gender.');
        return false;
    }

    if (!validatePassword(password)) {
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (!terms) {
        alert('You must agree to the terms and services.');
        return false;
    }

    console.log('Form Data:', {
        username: username,
        email: email,
        phone: phone,
        gender: gender.value,
        password: password
    });

    alert('Form submitted successfully!');
    return true;
}

function validatePassword(password) {
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        alert('Password must contain at least one uppercase letter.');
        return false;
    }

    if (!/[a-z]/.test(password)) {
        alert('Password must contain at least one lowercase letter.');
        return false;
    }

    if (!/[0-9]/.test(password)) {
        alert('Password must contain at least one number.');
        return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Password must contain at least one symbol.');
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');

    burgerMenu.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

});