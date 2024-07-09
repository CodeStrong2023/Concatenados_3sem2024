
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];


function authenticate(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const usernameInput = document.querySelector('input[type="text"]');
        const passwordInput = document.querySelector('input[type="password"]');

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (authenticate(username, password)) {
            alert('Login successful');
            
        } else {
            alert('Invalid username or password');
        }
    });
});
