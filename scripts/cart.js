// Shopping Cart
let cart = [];
// let isCartVisible = false; // Track cart visibility state

// Function to add items to the cart
function addToCart(productId){
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if(existingItem) {
        existingItem.quantity += 1; //Increment quantity if product is already in the cart
    }
    else{
        cart.push({...product, quantity: 1}); //Add the product to cart with quantity 1
    }
    displayCart();
    updateCartCounter();
}


// Function to update the cart counter
function updateCartCounter(){
    const cartCounter = document.querySelector('#cart-counter');
    cartCounter.textContent = cart.length; //Display number of distinct items
}

// Function to display the cart
function displayCart(){
    const cartDiv = document.querySelector('#cart');
    const grandTotalDiv = document.querySelector('#grandTotal');
    const messageDiv = document.querySelector('#cart-message');

    cartDiv.innerHTML = ''; //Clear cart display before updating
    messageDiv.textContent = ''; //Clear messages

    let grandTotal = 0;
    cart.forEach((item, index) => {
        const totalPrice = item.price * item.quantity;
        grandTotal += totalPrice;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
        <img src='${item.image}' alt='${item.title}'>
        <div class='cart-item-details'>
        ${item.title} @ ${formatPrice(item.price)} x <input type='number' min='1' id='item-quantity' value='${item.quantity}' onchange='updateQuantity(${index}, this.value)'> = ${formatPrice(totalPrice)}
        </div>
        <button onclick='removeFromCart(${index})'><i class='fa fa-trash'></i>Remove</button>`;

        cartDiv.appendChild(cartItemDiv);
    });

    // Update the grand total
    grandTotalDiv.textContent = `Grand total: ${formatPrice(grandTotal)}`;
}

// Function to update item quantity
function updateQuantity(index, newQuantity){
    newQuantity = parseInt(newQuantity, 10); //Convert the input to an integer
    if(newQuantity > 0){
        cart[index].quantity = newQuantity; //Update the quantity in the cart
    }
    else{
        cart.splice(index, 1);  //Remove the item if quantity is set to zero or less
    }
    displayCart();
    updateCartCounter();
}

// Function to remove items from the cart
function removeFromCart(index){
    cart.splice(index, 1); //Remove the item completely
    displayCart();
    updateCartCounter();
}

// Function to toggle cart visibility
function toggleCart(showCart){
    const cartSection = document.querySelector('#cartSection');
    const isVisible = showCart !== undefined ? showCart : !cartSection.classList.contains('visible');
    if(isVisible){
        cartSection.classList.add('visible'); //Slide cart in
    }
    else{
        cartSection.classList.remove('visible'); //Slide cart out
    }
}

let cartMsgTimeout;

// Function to handle checkout
function checkout(){
    const messageDiv = document.querySelector('#cart-message');

    if(!messageDiv){
        console.error("Element with ID 'cart-message' not found.");
        return;
    }
    messageDiv.style.padding = '10px';
    messageDiv.style.display = 'block';

    if(cart.length === 0){
        messageDiv.textContent = 'Your cart is empty. Add some items before checking out.';
        messageDiv.style.color = 'red';
    
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000)
        clearTimeout(cartMsgTimeout);
        messageDiv.style.display = 'block';
        return; //Exit if cart is empty
    }
    else{
        cart = []; //Clear the cart after successful checkout
        displayCart();
        updateCartCounter();
        updateCartCounter();
        messageDiv.textContent = 'Order successfully placed. Thank you for shopping with Imma Beadwork.';
        messageDiv.style.color = 'rgb(0,255,0)';

        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000)
    }
}
    if(cartMsgTimeout){
        clearTimeout(cartMsgTimeout);
    }

    // Clear the message after 3 seconds
    cartMsgTimeout = setTimeout(() =>{
        messageDiv.style.display = 'none';
    }, 3000);

    console.log('Setting timeout:', cartMsgTimeout);
