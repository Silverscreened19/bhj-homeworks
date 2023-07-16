const tabs = Array.from(document.querySelectorAll('.tab'));
const tabs_content = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        let activeIndex = tabs.findIndex(value => value.classList.contains('tab_active'));
        tabs[activeIndex].classList.remove('tab_active');
        tab.classList.add('tab_active');
        let newIndexTab = tabs.findIndex(item => item.classList.contains('tab_active'));
        let contentIndex = tabs_content.findIndex(content => content.classList.contains('tab__content_active'));
        tabs_content[contentIndex].classList.remove('tab__content_active');
        tabs_content[newIndexTab].classList.add('tab__content_active');
    })
})
