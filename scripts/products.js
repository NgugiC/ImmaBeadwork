

// Products array

const products = [
    {
        id: 1,
        image: './images/Handbags.jpg',
        title: 'Handbags',
        price: 650,
        description: ''

    },
    {
        id: 2,
        image: './images/Necklaces1.jpg',
        title: 'Necklaces',
        price: 400,
        description: 'A beautiful handcrafted beaded necklace.'
    },
    {
        id: 3,
        image: './images/Keyholders.jpg',
        title: 'Keyholders',
        price: 250,
        description: ''

    },
    {
        id: 4,
        image: './images/Bracelets11.jpg',
        title: 'Anklets',
        price: 550,
        description: 'A delicate anklet with beads.'

    },
    {
        id: 5,
        image: './images/Sterring_covers.jpg',
        title: 'Steering covers',
        price: 450,
        description: ''

    },
    {
        id: 6,
        image: './images/Phone covers.jpg',
        title: 'Phone covers',
        price: 1450,
        description: ''

    },
    {
        id: 7,
        image: './images/Bracelets2.jpg',
        title: 'Rings',
        price: 150,

    },
    {
        id: 9,
        image: './images/Earrings.jpg',
        title: 'Earrings',
        price: 500,
        description: 'Elegant earrings with a beaded design.'

    },
    {
        id: 10,
        image: './images/Bracelets9.jpg',
        title: 'Chockers',
        price: 700,
        description: ''

    },
    {
        id: 11,
        image: './images/Bracelets3.jpg',
        title: 'Serviette holders',
        price: 350,
        description: ''

    },
    {
        id: 12,
        image: './images/Bracelets.jpg',
        title: 'Bracelets',
        price: 450,
        description: 'A charming bracelet made with beads.'

    }
];

// Function to display products
function displayProducts(){
    const productsDiv = document.querySelector('#products1');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.id = `product-${product.id}`;

        productDiv.innerHTML = `
        <img src='${product.image}' alt='${product.title}'>
        <h3> ${product.title}</h3>
        <p>Price: ${formatPrice(product.price)}</p>
        <button onclick='addToCart(${product.id})'>
        <i class='fa fa-cart-shopping'></i>
        Add to Cart</button>`;
        productsDiv.appendChild(productDiv);
    });
}

// Initialize
displayProducts();

// Function to handle search input
function search_input(){
    const searchBar = document.getElementById('searchBar');
    const searchQuery = searchBar.value.toLowerCase();
    const searchResults = document.getElementById('search_results');
    const results = []; // Search result items are stored here for navigation

    searchResults.innerHTML = ''; // Clear previous results

    let hasResults = false;

    //  Filter through the array based on search query
    products.forEach((product, index) => {
        if(product.title.toLowerCase().includes(searchQuery) && searchQuery.trim() !== '') {

            // create a results element
            const resultItem = document.createElement('div');
            resultItem.textContent = product.title;
            resultItem.setAttribute('data-index', index); // Store index for navigation
            resultItem.setAttribute('tabindex', '0'); // Make items focusable

            results.push(resultItem); // Store results for navigation later

            // Add a click event to scroll or display details
            resultItem.onclick = () => {
                // alert(`Selected: ${product.title} \nDecription: ${product.description}`);

                const targetElement = document.getElementById(`product-${product.id}`);
                if(targetElement){
                    targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
                }
                searchBar.value = product.title; // Set search bar value
                searchResults.innerHTML = ''; // Clear results after selection
            }

            searchResults.appendChild(resultItem);
            hasResults = true;
        }
    });

    if(!hasResults && searchQuery.trim() !== '') {
        searchResults.innerHTML = '<div>No results found</div>';
    }

    return results; // Return the results for further processing
}

