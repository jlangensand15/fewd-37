var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  for (var i = 0; i < results["Search"].length; i++) {
  console.log(results["Search"]);

  var ul = document.querySelector("#movies");
  var li = document.createElement("li");
  var movieDiv = document.createElement("div");
  var link = document.createElement("a");
  var movieYear = document.createElement("div");

  li.classList.add("movie");
  movieDiv.classList.add("movie-title");
  movieYear.classList.add("movie-release-date");
  link.setAttribute("href","http://www.imdb.com/title/"+results["Search"][i]["imdbID"]);
  link.textContent = results["Search"][i]["Title"];
  movieYear.textContent = results["Search"][i]["Year"];

  ul.appendChild(li);
  li.appendChild(movieDiv);
  movieDiv.appendChild(link);
  li.appendChild(movieYear);
}
}
