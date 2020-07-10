const search = document.getElementById("search");
const submit = document.getElementById("submit");
const randomBtn = document.getElementById("random-btn");
const resultsHd = document.getElementById("results-heading");
const mealsEl = document.getElementById("meals");
const singlemealEl = document.getElementById("single-meal");

//functions
async function getDishes(e) {
  /* fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    }); */
  e.preventDefault();
}

async function searchMeal(e) {
  e.preventDefault();

  //Clear single meal
  singlemealEl.innerHTML = "";

  //get search term
  const term = search.value;
  console.log(term);

  if (term.trim()) {
    //fetch request
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    const data = await res.json();
    console.log(data);
    resultsHd.innerHTML = `<h1>Search results for '${term}':</h1>`;

    if (data.meals == null) {
      mealsEl.innerHTML = "";
      resultsHd.innerHTML = `<p>'${term}' not found</p>`;
    } else {
      mealsEl.innerHTML = data.meals.map(
        (meal) => `
        <div class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info" data=mealID=""${meal.idMeal}>
        <h3>${meal.strMeal}</h3>
        </div></div> 
        `
      );
    }
  } else {
    alert("Search input is empty!");
  }
}
//Event Listeners
submit.addEventListener("submit", searchMeal);
