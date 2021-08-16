document.getElementById('login-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email and password
    if (userEmail == 'asad@gmail.com' && userPassword == 'sontan') {
        window.location.href = 'banking.html';
    }
});
