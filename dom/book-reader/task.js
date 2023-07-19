const book = document.getElementById('book');
const font_size = Array.from(document.querySelectorAll('.font-size'))
const font_color = Array.from(document.querySelector('.book__control_color').children)
const background_color = Array.from(document.querySelector('.book__control_background').children)


font_size.forEach(font => {
    font.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        font.classList.add('font-size_active');

        const size = font.getAttribute('data-size');

        book.classList.remove('book_fs-big', 'book_fs-small');
        book.classList.add(`book_fs-${size}`);
    });
})


font_color.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        item.classList.add('color_active');

        const color = item.getAttribute('data-text-color');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${color}`);
    });
})


background_color.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');

        const bg_color = element.getAttribute('data-bg-color');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${bg_color}`)
    });
})
