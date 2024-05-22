function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Define mapping between search terms and URLs
    const actions = {
        'support': 'support.html',
        'location': 'location.html',
        'about us': 'aboutus.html',
        'home': 'index.html'
        // Add more mappings as needed
    };

    // Check if the search term corresponds to a URL
    if (searchInput in actions) {
        // Navigate to the corresponding URL
        window.location.href = actions[searchInput];
    } else {
        // Handle non-matching terms or show error message
        alert('URL not found for the entered term.');
    }
}