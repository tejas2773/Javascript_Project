document.addEventListener("DOMContentLoaded", function () {
// Retrieve user data from localStorage . 
    const userData = JSON.parse(localStorage.getItem('formData'));

    // Check if userData exists and is an array
    if (Array.isArray(userData) && userData.length > 0) {
        // Get the recently added user's data ( by getting array index no)
        const user =userData[userData.length - 1];

        // Display user data on the form.html page
        document.getElementById('fullname').innerText = user.name;
        document.getElementById('email').innerText = user.email;
        document.getElementById('contactNo').innerText = user.phone;
        document.getElementById('branch').innerText = user.password;
        document.getElementById('registrationDate').innerText = user.cpass;
    } else {
        // If no user data found, display a message or handle accordingly
        console.log('No user data found in localStorage');
    }
});
