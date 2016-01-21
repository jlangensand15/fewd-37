// This is what the data returning from IMDB will look like:
var instagramToken = "&client_id=144a084754754ee393eafd7814c787d6";

var access_token = "2205178294.324cf62.a569c4db3a394908bfa806cfafae2397";
       access_parameters = {
           access_token: access_token
       }

//sample query URL https://api.instagram.com/v1/tags/fail/media/recent?count=5&client_id=144a084754754ee393eafd7814c787d6


// Attach an event listener to the form submit (using jQuery)
$("#tag-search-form").submit(formSubmitted);

// Handle the form submission: go to Instagram and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "https://api.instagram.com/v1/tags/travel" +$("#query").val() + "/media/recent?count=5&access_token=2205178294.324cf62.a569c4db3a394908bfa806cfafae2397";
  $.get(url, resultsReceived);
  console.log(url);
}

function resultsReceived(results) {
// foreach.reslts(getimages)

  console.log(results);
  var imagesrc = results["data"][0]["images"]["thumbnail"]["url"];
  console.log(imagesrc);

  var caption = results["data"][0]["caption"]["text"];
  console.log(caption);
  debugger;

  for (var i = 0; i < results["data"].length; i++) {
  console.log(results["data"]);

  var imageList = document.querySelector("#image");
  var li = document.createElement("li");
  var imageDiv = document.createElement("div");
  var link = document.createElement("a");
  var description = document.createElement("div");

  var image=document.createElement("img");
  image.setAttribute("src", imagesrc);
  imageList.appendChild(image);
}
}
