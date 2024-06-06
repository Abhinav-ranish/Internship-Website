const users = [
    { email: 'habibi@redacted.com', password: 'admin123' },
    { email: 'toor@redacted.com', password: 'toor' },
    { email: 'root@redacted.com', password: 'root' }
];

document.addEventListener('contextmenu', event => event.preventDefault());

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
