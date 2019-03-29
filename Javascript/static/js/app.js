// from data.js
var tableData = data;

// reference table body and buttons
var $tbody = document.querySelector("tbody");
var $date = document.querySelector("#datetime");
var $city = document.querySelector("#city");
var $state = document.querySelector("#state");
var $country = document.querySelector("#country");
var $shape = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add event listener to searchbutton, call handleSearchButtonClick when clicked
$dateTime.addEventListener("click", handleSearchButtonClick);
$city.addEventListener("click", handleSearchButtonClick);
$state.addEventListener("click", handleSearchButtonClick);
$cntry.addEventListener("click", handleSearchButtonClick);
$shape.addEventListener("click", handleSearchButtonClick);
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filtered dataset 
var filteredData = dataSet;

// renderTable 
function renderTable() {
  $tbody.innerHTML = "";
  console.log("render")
  for (var i = 0; i < filteredData.length; i++) {

//  current sighting object and its fields
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);

// Create a new row in the tbody
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

// create new cell at address field
      var field = fields[j];
      var $cell = $row.insertCell(j);

      $cell.innerText = sighting[field];

    }

  }

}

function handleSearchButtonClick() {



  // Format the user's search by removing leading and trailing whitespace, lowercase the string

  var filterDate = $dateInput.value.trim();

  var filterState = $stateInput.value.trim().toLowerCase();



  if (filterDate.length != 0){

    filteredData = dataSet.filter(function(sighting) {

      var sightingDate = sighting.datetime;

       return sightingDate === filterDate;

         });

  }

  else {

    filteredData = dataSet

  }

  if (filterState.length != 0){

    filteredData = filteredData.filter(function(sighting) {

      var sightingState = sighting.state;

       return sightingState === filterState;

         });

  }

  else {

    filteredData = filteredData

  }

  renderTable();

}

// Render the table for the first time on page load

renderTable();