const progress = document.getElementById('progress');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';


document.forms.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        progress.value = (e.loaded / e.total);
    });

    xhr.open('POST', url);
    const formData = new FormData(document.forms.form);
    xhr.send(formData);
})
