const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const randomBtn = document.getElementById("random-btn");

//functions
function getDishes() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  console.log("working");
}

//Event Listeners
searchBtn.addEventListener("click", getDishes);
