const navbarToggler = document.querySelector('.block-menu-toggler');
const blockMenu = document.querySelector('.right-nav');
const active = document.querySelector('.right-nav li');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('fa-x');
    navbarToggler.classList.toggle('fa-bars');

    blockMenu.style.visibility = ('visible');
    blockMenu.classList.toggle('blockMenuVisible');
});

active.addEventListener('click', (event)=>{
    if(event.target.classList.contains('menu-item')){
        document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
        
    }
// active.addEventListener('click', (event)=>{
//     // if(event.target.contains('li')){
//         event.forEach(item => item.classList.remove('active'));
//         event.target.classList.add('active');
        
    // }
    // items.forEach(item => {
    //     item.classList.toggle('active')
    // }); 

        // console.log(event.target);
});

// close side-nav by clicking on any part of the window
document.onclick = (e) =>{
    if (!navbarToggler.contains(e.target) && !blockMenu.contains(e.target)){
        blockMenu.classList.remove('blockMenuVisible');
        navbarToggler.classList.add('fa-bars');
        navbarToggler.classList.remove('fa-x');
    }
}

// Contacts page
// Validate form input fields on submit
const myForm = document.querySelector('.form');
const validateMsg = document.querySelector('.msg');
const nameField = document.getElementById('#name');
const emailField = document.getElementById('#email');
const messageField = document.getElementById('#message');
// const formSubmit = document.querySelector('.formSubmit');

// formSubmit.addEventListener('click', (e) =>{
//     e.preventDefault();
// });

if(myForm){
    myForm.addEventListener('submit', (e) => {

        
            if (nameField.value === '' || emailField.value === '' || messageField.value === '') {
                    e.preventDefault();
                    validateMsg.classList.add('warning');
                    validateMsg.innerHTML = 'All fields are mandatory!';
            }
            else {
                // e.preventDefault();
                
                    validateMsg.classList.add('success');
                    validateMsg.innerHTML = "Your message has been recorded.";
                    nameField === '';
                    emailField === '';
                    messageField === '';
                    myForm.submit();
            }

            setTimeout(() => {
                validateMsg.classList.remove('warning');
                validateMsg.classList.remove('success');
                validateMsg.innerHTML = "";
            }, 5000);
    });
}


// function validate(){
//     if(nameField == '' || emailField == '' || messageField == ''){
        
//         validateMsg.classList.add('warning');
//         validateMsg.innerHTML = "All fields are mandatory!";
//         // validateMsg.setTimeout(() => {
            
//         // }, 15000);
//     }
//     else{
//         validateMsg.classList.add('success');
//         validateMsg.innerHTML = 'Your message has been recorded.';
//     }
// }


// Remove spinner when page loads

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');

    // Remove spinner from the code

    loader.addEventListener('transitionend', () => {
        document.body.removeChild('loader');
    });
});


// Order Page

const product = [
    {
        id: 1,
        image: '/Imma/images/Handbags.jpg',
        title: 'Handbags',
        price: 'Ksh 450',

    },
    {
        id: 2,
        image: '/Imma/images/Necklaces1.jpg',
        title: 'Necklaces',
        price: 'Ksh 450',
    },
    {
        id: 3,
        image: '/Imma/images/Keyholders.jpg',
        title: 'Keyholders',
        price: 'Ksh 450',

    },
    {
        id: 4,
        image: '/Imma/images/Bracelets1.jpg',
        title: 'Anklets',
        price: 'Ksh 450',

    },
    {
        id: 5,
        image: '/Imma/images/Sterring_covers.jpg',
        title: 'Steering covers',
        price: 'Ksh 450',

    },
    {
        id: 6,
        image: '/Imma/images/Keyholders1.jpg',
        title: 'Phone covers',
        price: 'Ksh 450',

    },
    {
        id: 7,
        image: '/Imma/images/Bracelets2.jpg',
        title: 'Rings',
        price: 'Ksh 450',

    },
    {
        id: 8,
        image: '/Imma/images/Earrings.jpg',
        title: 'Earrings',
        price: 'Ksh 450',

    }
]
const categories = [...new Set(product.map((item)=>{
    return item
}))]

let cart  = document.getElementById('root')
cart.innerHTML = categories.map((item)=>{
    var{image, title, price} = item;
    return(
        `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
        </div>`
    )
}).join('')