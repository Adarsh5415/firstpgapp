// Fetch data from the API
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var photos = JSON.parse(xhr.responseText);

    // Display the fetched data in the UI
    var photosContainer = document.getElementById("photos-container");
    photos.forEach(function(photo) {
      var col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      var card = document.createElement("div");
      card.className = "card";

      var image = document.createElement("img");
      image.className = "card-img-top";
      image.src = photo.url;
      image.alt = photo.title;

      var cardBody = document.createElement("div");
      cardBody.className = "card-body";

      var cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = photo.title;

      cardBody.appendChild(cardTitle);
      card.appendChild(image);
      card.appendChild(cardBody);
      col.appendChild(card);
      photosContainer.appendChild(col);
    });
  }
};
xhr.send();
