const togglePassword = document.querySelector('.ocultar-senha');
const passwordInput = document.getElementById('senha');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});