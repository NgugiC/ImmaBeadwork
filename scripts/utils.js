
// Format numbers with thousands separator
function formatPrice(price){
    return new Intl.NumberFormat('en-KE', {style: 'currency', currency: 'KES'}).format(price);
}

// Use Enter key in search bar
function searchWithEnter(inputSelector, searchFunction){
    const searchInput = document.querySelector(inputSelector);
    if (!searchInput) return; //Ensure the input exists

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); //Prevent form submission
            searchFunction();
        }
    });
}

// Search logic
function runSearch() {
    const searchInput = document.getElementById('searchBar');
    const query = searchInput.value.trim();

    if(query){
        console.log(`Searching for: ${query}`); //Replace with your search functionality
        search_input();
    }
    else{
        console.log('Please enter a search query.');
    }
}

// Initialize the Enter key functionality
document.addEventListener('DOMContentLoaded', () => {
    searchWithEnter('#searchBar', runSearch);
});