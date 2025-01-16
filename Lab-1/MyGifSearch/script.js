// Replace 'YOUR_API_KEY' with your actual Giphy API key
const API_KEY = 'rU5u8OUUt5xkVgMPoZjYI4Tf68Osag16';
const searchButton = document.getElementById('searchButton');
const clearButton = document.createElement('button');
clearButton.id = 'clearButton';
clearButton.textContent = 'Clear';
document.body.insertBefore(clearButton, document.getElementById('gifContainer'));

searchButton.addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query !== '') {
        fetchGifs(query);
    }
});

clearButton.addEventListener('click', () => {
    document.getElementById('gifContainer').innerHTML = '';
    document.getElementById('searchInput').value = '';
});

// Function to fetch GIFs from Giphy API
function fetchGifs(query) {
    const limit = 10; // Number of GIFs to fetch
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${limit}&offset=0&rating=G&lang=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGifs(data.data);
        })
        .catch(error => {
            console.error('Error fetching data from Giphy:', error);
        });
}

// Function to display GIFs on the webpage
function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = ''; // Clear previous GIFs

    gifs.forEach(gif => {
        const gifDiv = document.createElement('div');
        gifDiv.classList.add('gif-item');

        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;

        gifDiv.appendChild(img);
        gifContainer.appendChild(gifDiv);
    });
}

// Optional: Allow searching by pressing 'Enter' key
document.getElementById('searchInput').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});