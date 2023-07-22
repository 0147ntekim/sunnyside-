const closeNav = document.querySelector('.close-nav')
const hamburger = document.querySelector('.hamburger')
const navMenu=document.querySelector('.nav-menu')


hamburger.addEventListener('click', openNav)
closeNav.addEventListener('click', closeNavBar)

function openNav(){
    closeNav.classList.add('open-nav')
    hamburger.classList.add('close-hamburger')
    navMenu.classList.add('open-mobile-nav')
}

function closeNavBar(){
    hamburger.classList.remove('close-hamburger')
    closeNav.classList.remove('open-nav')
    navMenu.classList.remove('open-mobile-nav')
}