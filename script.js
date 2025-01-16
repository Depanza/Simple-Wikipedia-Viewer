// Add click event listener to the search button
document.getElementById('searchButton').addEventListener('click', function () {
    // Get and clean up the search input value
    const query = document.getElementById('searchInput').value.trim();
    
    // Validate that search input is not empty
    if (!query) {
      alert('Please enter a search term.');
      return;
    }
  
    // Construct Wikipedia API URL with the search query
    // Using encodeURIComponent to safely encode the search term for URL
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}`;
  
    // Make API request to Wikipedia
    fetch(apiUrl)
      .then(response => response.json())  // Parse JSON response
      .then(data => {
        // Get reference to results container
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results
  
        // Check if search returned any results
        if (data.query.search.length === 0) {
          resultsDiv.innerHTML = '<p>No results found.</p>';
          return;
        }
  
        // Loop through each search result
        data.query.search.forEach(result => {
          // Create Wikipedia article URL
          const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}`;
          
          // Create a new div for each result
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result');
          
          // Populate the result div with title and snippet
          // Title is wrapped in a link that opens in new tab
          resultDiv.innerHTML = `
            <a href="${url}" target="_blank"><h3>${result.title}</h3></a>
            <p>${result.snippet}...</p>
          `;
          
          // Add the result to the results container
          resultsDiv.appendChild(resultDiv);
        });
      })
      // Handle any errors that occur during the API request
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML = '<p>Failed to fetch results. Please try again later.</p>';
      });
  });