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
  var url = "https://api.instagram.com/v1/tags/travel" +$("#query").val() + "/media/recent?count=6&access_token=2205178294.324cf62.a569c4db3a394908bfa806cfafae2397";
  $.get(url, resultsReceived);
  console.log(url);
}

function resultsReceived(results) {
  console.log(results);
  console.log(results["data"].length);./

  // results.forEach(loadimage);
  for (var i = 0; i < results["data"].length; i++){
    console.log(i);
    var imagesrc = results["data"][i]["images"]["thumbnail"]["url"];
    var caption = results["data"][i]["caption"]["text"];
    var link = results["data"][i]["link"];

  // funciton loadimage(results["data"]) {
    var imageList = document.querySelector("#image");
    var imageDiv = document.createElement("div");
    var hyperlink = document.createElement("a");
    var description = document.createElement("div");
    var image=document.createElement("img");

  hyperlink.setAttribute("href", link);
  hyperlink.setAttribute("target", "_blank");
  image.setAttribute("src", imagesrc);
  image.setAttribute("title", caption);
  hyperlink.appendChild(image);
  imageList.appendChild(hyperlink);
};
};
