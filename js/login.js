// step:1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //    step:2 get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step:3 get password
    // set the id on the html element
    // get the element
    // gete the value from element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);

    // DANGER: do not verify email password on the client side 
    // step:4 verify email and password  and check whether valid user or not
    if (email === 'sagor@gmail.com' && password === '123456') {
        window.location.href='Bank-dashBord.html';
    }
    else {
        // console.log('unvalid user');
        alert('Password invalid');
    }
})