const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const allMenuLinks = document.querySelectorAll('nav ul li a');


if (burger) {
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
    })
}


if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
            }
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg class="catalog-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 0.5L6 5.5L11 0.5" stroke-width="1.25"/></svg></button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('header nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function (e) {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}
