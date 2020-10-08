$(document).ready(function () {
  var searchBtn = $("#searchBtn");
  var clearBtn = $("#clearBtn");
  var searchTermInput = $("#searchTerm");
  var numbersOfRecordsInput = $("#numbersOfRecords");
  var startYearInput = $("#startYear");
  var endYearInput = $("#endYear");



// Query and AJAX
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source&api-key=6KyXQqKGpBEsXqi6CJJUF70L9fyQeXlX";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });

  //Event Listeners
  searchBtn.on("click", function (event) {
    event.preventDefault(event);
    console.log("search");
  });

  clearBtn.on("click", function (event) {
    event.preventDefault(event);
    console.log("search");
  });
});
