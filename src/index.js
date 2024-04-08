// barre de navigation responsive

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const nav = document.querySelector(".nav-responsive");
hamburger.addEventListener('click', () => {
    menu.classList.remove('mt-[-100%]', 'hidden');
    menu.classList.add('mt-0', 'flex');
    nav.classList.remove('hidden');
    console.log('out!!!')
})

cross.addEventListener('click', () => {
    menu.classList.add('mt-[-100%]', 'hidden');
    menu.classList.remove('mt-0', 'flex');
    nav.classList.add('hidden');
})


const options = document.querySelectorAll('.option');
options.forEach(function (option) {
    option.addEventListener('click', () => {
        nav.classList.add('hidden');
    })
});


