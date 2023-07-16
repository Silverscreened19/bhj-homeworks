let dd_value = document.querySelector('.dropdown__value')
const dd_list = document.querySelector('.dropdown__list')
const dd_link = Array.from(document.querySelectorAll('.dropdown__link'))

dd_value.addEventListener('click', () => {
    dd_list.classList.add('dropdown__list_active');
});

dd_link.forEach(link => {
    link.addEventListener('click', (item) => {
        item.preventDefault();
        let parent = link.closest('.dropdown__list');
        if (parent.classList.contains('dropdown__list_active')) {
            parent.classList.remove('dropdown__list_active');
            dd_value.textContent = link.textContent;
        };
    });
});
