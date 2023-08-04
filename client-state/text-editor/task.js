const textarea = document.querySelector('textarea');
const clear = document.querySelector('button');
const storedContent = localStorage.getItem('content');


textarea.addEventListener('input', () => {
    const text = textarea.value;
    localStorage.setItem('content', text);
})

textarea.value = storedContent;

clear.addEventListener('click', () => {
    localStorage.removeItem('content');
    textarea.value = '';
})
