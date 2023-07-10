const links = document.querySelectorAll('.menu__link');
let menus = document.querySelectorAll('.menu');

links.forEach(link => {
    link.addEventListener('click', e => {
        const menu_item = link.closest('.menu__item')
        const subMenu = menu_item.querySelector('.menu_sub')
        if (subMenu) {
            if (subMenu.classList.contains('menu_active')) {
                subMenu.classList.remove('menu_active');
            } else {
                menus.forEach(menu => {
                    menu.classList.remove('menu_active');
                });
                subMenu.classList.add('menu_active')
            }
            e.preventDefault();
        }
    });
});
