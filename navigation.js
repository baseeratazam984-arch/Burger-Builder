document.getElementById('burger-builder-log-in-page').onclick = function () {
    window.location.href = 'index.html';
};
document.getElementById('log-in').onclick = function () {
    window.location.href = 'login.html';
};

let submit = document.getElementById('submit')
let signIn = document.getElementById('sign-in')

signIn.addEventListener('click', function () {
    signIn.textContent = 'REGISTERED';

    submit.addEventListener('click', function () {
        if (signIn.textContent === 'REGISTERED') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        }
    })
})