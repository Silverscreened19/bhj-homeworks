const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

xhr.addEventListener('load', () => {
    const loadedData = xhr.response.data;
    const title = loadedData.title;
    const answers = loadedData.answers;

    pollTitle.textContent = title;
    answers.forEach(answer => {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${answer}</button>`);
    });

    let buttons = Array.from(document.querySelectorAll('.poll__answer'));
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            window.location.reload();
        })
    })
})

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();
