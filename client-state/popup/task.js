const popup = document.getElementById('subscribe-modal');
const closePopup = document.querySelector('.modal__close_times');
const modal_status = getCookie('modal_status');


if (!modal_status) {
    popup.classList.add('modal_active');
}


closePopup.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie += 'modal_status=' + encodeURIComponent('closed');
})


function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie;
}
