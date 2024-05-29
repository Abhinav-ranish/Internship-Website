const users = [
    { email: 'a.kizhakke@QFCRA.com', password: 'admin123' },
    { email: 'kt.rinith@QFCRA.com', password: 'toor' },
    { email: 'karmil@QFCRA.com', password: 'root' }
];

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const myForm = document.querySelector('#my-login-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const msg = document.querySelector('.msg');

    if (myForm) {
        console.log('Form detected');
        myForm.addEventListener('submit', onSubmit);
    } else {
        console.error('Form not detected');
    }

    function onSubmit(e) {
        e.preventDefault();

        const username = emailInput.value;
        const password = passwordInput.value;

        const user = users.find(user => user.email === username && user.password === password);

        if (user) {
            console.log('Login successful');
            msg.textContent = 'Login Successful';
            msg.classList.add('success');
            
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            console.log('Invalid username or password');
            msg.textContent = 'Invalid username or password';
            msg.classList.add('error');
        }
    }
});
