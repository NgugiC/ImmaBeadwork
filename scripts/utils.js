let resultItems = [];

// Format numbers with thousands separator
function formatPrice(price){
    return new Intl.NumberFormat('en-KE', {style: 'currency', currency: 'KES'}).format(price);
}

// Use Enter key in search bar
function searchWithEnter(inputSelector, searchFunction){
    const searchInput = document.querySelector(inputSelector);
    if (!searchInput) return; //Ensure the input exists

    let selectedIndex = -1; // Track the selected index in the filtered results

    searchInput.addEventListener('keydown', (event) => {
        const searchResults = document.getElementById('search_results');
        // console.log('Search Results HTML: ', searchResults.innerHTML);

        const resultItems = searchResults.querySelectorAll('div'); // Dynamically get the result items
        // console.log('Result items: ',resultItems);

        if(resultItems.length === 0) {
            // console.error('No result items found.');
            return;
        }

        // Prevent the dafault behaviour of  the assow keys in the search bar
        if(event.key === 'ArrowDown' || event.key === 'ArrowUp'){
            event.preventDefault();
        }

        // Handle arrow keys for navigation
        if (event.key === 'ArrowDown') {
            if (selectedIndex < resultItems.length - 1) {
                selectedIndex++;
                updateHighlight(resultItems.selectedIndex);
            }
        }
        else if (event.key === 'ArrowUp') {
            if (selectedIndex > 0) {
                selectedIndex--;
                updateHighlight(resultItems.selectedIndex);
            }
        }
        // Handle Enter key to search results
        if (event.key === 'Enter' && selectedIndex >= 0) {
            const selectedItem = resultItems[selectedIndex];
            selectResult(selectedItem);

            // console.log('Enter key pressed.');
            // event.preventDefault(); //Prevent form submission
            // searchFunction(); // Run the search function
        }
    });

    function updateHighlight(resultItems, index){
        if (!resultItems || resultItems.length === 0) {
            // console.error('No result items too highlight');
            return;
        }

        // Convert NodeList to an array
        const itemsArray = Array.from(resultItems);

        // clear previous highlights
        itemsArray.forEach(item => item.classList.remove('highlighted'));

        // Highlight selected item
        const highlightedItem = itemsArray[index];
        highlightedItem.classList.add('highlighted');
        console.log(highlightedItem);
    }

    function selectResult(selecedItem) {
        const searchBar = document.getElementById('searchBar');
        const productId = selecedItem.getAttribute('data-index'); // Get the product ID

        // Assuming each result has a unique ID linked to a product
        const selectedProduct = products[productId]; // Use the stored product array
        searchBar.value = selectedProduct.title; // Set the search bar to the selected product's title

        // Optionally scroll to the selected product
        const targetElement = document.getElementById(`product-${selectedProduct.id}`);
        if (targetElement){
            targetElement.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }
}

// Search logic to run the search
function runSearch() {
    const searchInput = document.getElementById('searchBar');
    const query = searchInput.value.trim();

    if(query){
        console.log(`Searching for: ${query}`); //Replace with your search functionality
        search_input(); //Trigger the existing search function
    }
    else{
        console.log('Please enter a search query.');
    }
}

// Initialize the Enter key functionality
document.addEventListener('DOMContentLoaded', () => {
    searchWithEnter('#searchBar', runSearch);
});