const navbarToggler = document.querySelector('.block-menu-toggler');
const blockMenu = document.querySelector('.right-nav');
const active = document.querySelector('.right-nav li');
const menuItems= document.querySelectorAll('.menu-item a');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('fa-x');
    navbarToggler.classList.toggle('fa-bars');

    blockMenu.classList.toggle('blockMenuVisible');
});


// Highlight active menu item

window.addEventListener('scroll DOMContentLoaded', () => {
    let fromTop = window.scrollY;

    menuItems.forEach(link => {
        let section = document.querySelector('link.hash');

        if(section.offsetTop <= fromTop
            &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
});

// Hide menu when a menu link is clicked
menuItems.forEach(link => {
    link.addEventListener('click', (event) => {
        blockMenu.classList.remove('blockMenuVisible');
        navbarToggler.classList.remove('fa-x');
        navbarToggler.classList.add('fa-bars');

        // Remove active class from all links
        menuItems.forEach(link => {
            link.parentElement.classList.remove('active');
            link.style.fontWeight = 'normal';
        });
        // Add active class to the clicked link
        event.target.parentElement.classList.add('active');
        event.target.style.fontWeight = 'bold';
    });
});

// Persist active link on page load
const currentURL = window.location.href;
menuItems.forEach(link => {
    if(link.href === currentURL) {
        link.classList.add('active');
    }
});

// close side-nav by clicking on any part of the window
document.onclick = (e) =>{
    if (!navbarToggler.contains(e.target) && !blockMenu.contains(e.target)){
        blockMenu.classList.remove('blockMenuVisible');
        navbarToggler.classList.add('fa-bars');
        navbarToggler.classList.remove('fa-x');
    }
    
    // close cart by clicking on any part of the window
    const cartBtn = document.querySelector('.cart');
    if (!cartSection.contains(e.target) && !cartBtn.contains(e.target)){
        cartSection.classList.remove('visible');
    };
}

// Remove spinner when page loads

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');

    // Remove spinner from the code

    loader.addEventListener('transitionend DOMContentLoaded', () => {
        const loader = document.querySelector('.loader');
        if(loader){
            document.body.removeChild(loader);
        }
        else{
            console.error('Loader element not found!');
        }
    });
});



let scrollTimeout;
window.onscroll = function(){
    const backToTop = document.querySelector('#top');
    // show button if user scrolls down 100px from the top
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        backToTop.style.display = 'block';

        // clear any previous timeout
        clearTimeout(scrollTimeout);

        // set a timeout to hide the button after 1 second
        scrollTimeout = setTimeout(() =>{
            backToTop.style.display = 'none';
        }, 1000);
    }
    else{
        // Hide button when at the top of the page
        backToTop.style.display ='none';
    }
};

// function to scroll to the top smoothly
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    });
}
document.addEventListener('scroll', ()=>{
    const backToTop = document.querySelector('#top');
    backToTop.style.opacity = .8;
    backToTop.addEventListener('click', ()=>{
        backToTop.style.opacity = 0;
    });
});

// function to set the favicon based on the current theme
function updateFavicon(){
    const favicon = document.getElementById('favicon');
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
    favicon.href = isDarkMode ? 'images/Logo.svg' : 'images/Logo_white_bg.svg';
}
// Initial favicon set on page load
updateFavicon();
// Listen for changes in theme preferences
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', updateFavicon);