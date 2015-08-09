// Search for movie:
// 
// 1. User types in movie title
// 2. User submits title via "submit" button.
// 3. Submit query to OMDB containing movie title.
//    Send request to: http://www.omdbapi.com/?
//    Use parameters: s for movie title
//                    type === movie                   
// 4. Return filtered movies with matching titles. 

var searchForm = document.getElementById("search-form");
var searchText = document.getElementById("s");

var onSubmitSearchForm = function() {
  var omdbApiRequest = new XMLHttpRequest.open('GET', 'http://www.omdbapi.com/?', true);
    omdbApiRequest.send("s=" + searchText.value + "&type=movie");
};

searchForm.addEventListener("submit", onSubmitSearchForm); 

var loadOmdbResponse = // Javascript to parse JSON response goes here.


// Store to favorites:
// 
// 5. User clicks "favorite" button on item in results.
// 6. Send request to /favorites URL to store the favorite.
//    Use parameters: s for movie title
//                    type == movie
// 7. Store information pertaining to movie title.