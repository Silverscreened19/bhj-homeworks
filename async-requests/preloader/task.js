const items = document.querySelector('.item');
const loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';


xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
        const loadedData = xhr.response.response.Valute;

        for (let i in loadedData) {
            const charCode = loadedData[i].CharCode;
            const value = loadedData[i].Value;

            items.insertAdjacentHTML('beforebegin',
                `<div class="item">
                    <div class="item__code">${charCode}</div>
                    <div class="item__value">${value}</div>
                    <div class="item__currency">руб.</div>
                </div>`
            );
        }
        loader.classList.remove('loader_active');
    }
})

xhr.open('GET', url);
xhr.responseType = 'json';
xhr.send();
