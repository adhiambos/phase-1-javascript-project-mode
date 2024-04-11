// Select search buttons and favorite books button
const titleButton = document.getElementById('titleButton');
const authorButton = document.getElementById('authorButton');
const favBooksButton = document.getElementById('favBooks');

// Select search input fields and favorite books input field
const titleInput = document.getElementById('search-title');
const authorInput = document.getElementById('search-author');
const favBooksInput = document.getElementById('favorite-books');

// Select results container
const resultsContainer = document.getElementById('results-container');

// Function to display search results 
function displayResults(message) {
  resultsContainer.innerHTML = message;
}


// Add event listener for title search button click
titleButton.addEventListener('click', () => {
  const title = titleInput.value;
  const message = `Searching books by title: "${title}"`;
  displayResults(message);
  // Implement your logic to search books by title here using an API
});

// Add event listener for author search button click
authorButton.addEventListener('click', () => {
  const author = authorInput.value;
  const message = `Searching books by author: "${author}"`;
  displayResults(message);
  // Implement your logic to search books by author here using an API
});

// Array of favorite books
let favoriteBooks = [];

// Add event listener for favorite books button click
favBooksButton.addEventListener('click', () => {
  const favBook = favBooksInput.value;
  favoriteBooks.push(favBook);
  const message = `"${favBook}" added to favorite books list`;
  displayResults(message);
  // Implement your logic to store favorite books here
});

// Display favorite books
function displayFavoriteBooks() {
  const message = `Favorite Books: ${favoriteBooks.join(', ')}`;
  displayResults(message);
}

// Add event listener for displaying favorite books
favBooksButton.addEventListener('click', displayFavoriteBooks);

// Event Listener 3: Mouseover event
const bookQuote = document.querySelector(".book-quote");
bookQuote.addEventListener("mouseover", showQuoteInfo);

function showQuoteInfo() {
  console.log('Mouseover');
}