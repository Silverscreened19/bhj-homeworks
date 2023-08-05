const form = document.forms.signin__form;
const welcome = document.querySelector('.welcome');
const userId = document.getElementById('user_id');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const signinContent = document.getElementById('signin');
const logoutBtn = document.getElementById('logout_btn');


function sayWelcome(id) {
    userId.textContent = id;
    signinContent.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}


if(localStorage.id) {
    sayWelcome(localStorage.id);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    const formData = new FormData(form);

    xhr.open('POST', url);
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        if(xhr.response.success) {
            localStorage.setItem('id', xhr.response.user_id);
            sayWelcome(localStorage.id)
        } else {
            alert('Wrong credentials');
            form.reset();
        }
    })
})


logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('id');
    welcome.classList.remove('welcome_active');
    signinContent.classList.add('signin_active');
    form.reset();
})
