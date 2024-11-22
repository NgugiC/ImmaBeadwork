function showValidationModal(isSuccess,message){
    const modal = document.querySelector('#modal');
    const modalMsg = document.querySelector('#modalMsg');

    // Set the message
    modalMsg.textContent = message;

    // Remove existing classes
    modal.classList.remove('error', 'success');

    // Apply the correct style
    if(isSuccess){
        modal.classList.add('success');
    }
    else{
        modal.classList.add('error');
    }

    // Show the modal
    modal.classList.add('show');

    // Hide modal after 3 seconds
    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}

document.querySelector('.contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form from submitting if validation fails
    let errorMessages = [];

    // Grab all input values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Check if all fields are blank
    

    if(!name && !email && !message){
        showValidationModal(false, 'All fields are mandatory!');
        return;
    }


    // Name validation
    if(!name) {
        showValidationModal(false, 'Name is required!');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    if(!email){
        showValidationModal(false, 'Email is required!');
        return;
    }
    else if(!emailPattern.test(email)) {
        showValidationModal(false, 'Please enter a valid email address!');
        return;
    }

    // Message validation
    if(!message){
        showValidationModal(false, 'Message field is required.');
        return;
    }
    else if(message.length < 10){
        showValidationModal(false, 'Message must be at least 10 characters long.');
        return;
    }

    // All inputs are valid
    showValidationModal(true, 'Message submitted successfully!');

    // Clear all inputs
    const name1 = document.querySelector('#name').value = '';
    const email1 = document.querySelector('#email').value = '';
    const message1 = document.querySelector('#message').value = '';

    
});

// // Close modal on click
// document.querySelector('#modal').addEventListener('click', () => {
//     document.querySelector('#modal').style.display = 'none';
// });