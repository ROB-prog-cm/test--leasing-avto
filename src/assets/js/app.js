scrollbar = document.body.clientWidth - window.innerWidth + 'px';

document.querySelectorAll('[href="#openModal"]').forEach((el) => {
    el.addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    })
});
document.querySelectorAll('[href="#close"]').forEach((el) => {
    el.addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    })
});
