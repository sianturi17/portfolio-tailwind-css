// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = () =>{
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;        //nilainya adalah 0 apabila tidak ada scroll

    if(window.pageYOffset > navFixed){          //check apabila ada scroll
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}