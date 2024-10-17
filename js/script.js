var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('active')){
        ul.classList.remove('active');
        document.querySelector('.menu-icon img').src = '/images/menu.png';
    } else {
        ul.classList.add('active');
        document.querySelector('.menu-icon img').src = '/images/close.png';
    }


})