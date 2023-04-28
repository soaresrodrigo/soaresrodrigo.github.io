// Menu mobile

const btnMobile = document.querySelector('.btn-menu');

function toggleMenu() {
    const menuList = document.getElementById('menuList');
    menuList.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
