
  
  var item, title, author, publisher, bookLink, bookImg;
  var outputList = document.getElementById("list-output");
  var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  var placeHldr = '<img src="https://via.placeholder.com/150">';
  var searchData;

  // Listener for search button
  document.getElementById("search").addEventListener("click", function() {
      outputList.innerHTML = ""; // Empty HTML output
      document.body.style.backgroundImage = "url('')";
      searchData = document.getElementById("search-box").value;
      // Handling empty search input field
      if(searchData === "" || searchData === null) {
          displayError();
      } else {
          fetch(bookUrl + searchData)
          .then(response => response.json())// is used to first extract the JSON content from the response
          .then(data => {
              if (data.totalItems === 0) {
                  alert("No result! Try again.");
              } else {
                  document.getElementById("title").animate({'margin-top': '5px'}, 1000);
                  document.querySelectorAll(".book-list").forEach(function(item) {
                      item.style.visibility = "visible";
                  });
                  displayResults(data);
              }
          })
          .catch(error => {
              console.log(error)
          });
      }
      document.getElementById("search-box").value = ""; // Clear search box
  });

  /*
   * Function to display result in index.html
   * @param response
   */

  function displayResults(response) {
      console.log(response.items)
      for (var i = 0; i < response.items.length; i++) {
          item = response.items[i];
          title1 = item.volumeInfo.title;
          author1 = item.volumeInfo?.authors ?? "No Author Yet";
          publisher1 = item.volumeInfo.publisher;
          bookLink1 = item.volumeInfo.previewLink;
          bookIsbn1 = item.volumeInfo?.industryIdentifiers ? item.volumeInfo?.industryIdentifiers[0]?.identifier : 'CC';
          bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHldr;

          // item2 = response.items[i+1];
          // title2 = item2.volumeInfo.title;
          // author2 = item2.volumeInfo?.authors ?? "No Author Yet";
          // publisher2 = item2.volumeInfo.publisher;
          // bookLink2 = item2.volumeInfo.previewLink;
          // bookIsbn2 = item2.volumeInfo?.industryIdentifiers ? item2.volumeInfo?.industryIdentifiers[0]?.identifier : 'DD';
          // bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr;

          outputList.innerHTML += '<div class="row mt-4">' +
                                  formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn1) +
                                  // formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
                                  '</div>';
      }
  }

  /*
   * Card element formatter using ES6 backticks and templates (individual card)
   * @param bookImg title author publisher bookLink
   * @return htmlCard
   */
  function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
      var viewUrl = 'book.html?isbn=' + bookIsbn;
      var htmlCard = `<div class="col-lg-6">
          <div class="card" style="">
              <div class="row no-gutters">
                  <div class="col-md-4">
                      <img src="${bookImg}" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <p class="card-text">Author: ${author}</p>
                          <p class="card-text">Publisher: ${publisher}</p>
                          <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Read Book</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
      return htmlCard;
  }

  // Handling error for empty search box
  function displayError() {
      alert("Search term cannot be empty!");
  }

