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