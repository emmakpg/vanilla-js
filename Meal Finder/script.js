const search = document.getElementById("search");
const submit = document.getElementById("submit");
const randomBtn = document.getElementById("random-btn");
const resultsHd = document.getElementById("results-heading");
const mealsEl = document.getElementById("meals");
const singlemealEl = document.getElementById("single-meal");

//functions
function getDishes(e) {
  e.preventDefault();

  const term = search.value;

  singlemealEl.innerHTML = "";

  if (term.trim()) {
    console.log(term);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        resultsHd.innerHTML = `<h1>Search results for '${term}':</h1>`;

        if (data.meals == null) {
          mealsEl.innerHTML = "";
          resultsHd.innerHTML = `<h3>'${term}' not found:</h3>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) =>
                ` <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="meal-info" data-mealID=${meal.idMeal}>
            <h3>${meal.strMeal}</h3>
            </div></div> 
            `
            )
            .join("");
        }
      });
  } else {
    alert("Search input is empty");
  }
}

//Fetch Single Meal
function getMealByID(mealID) {
  //fetch single meal
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

//add sngle meal to DOM

function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  console.log(ingredients);

  singlemealEl.innerHTML = `<div>
  <h1>${meal.strMeal}</h1>
  <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
  <div class='single-meal-info'>
  ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
  ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
  </div>
  <div class='main'>
  <p>${meal.strInstructions}</p>
  <h2>Ingredients</h2>
  <ul>
  ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
  </ul>
  </div>
  </div>
  `;
}

/* async function searchMeal(e) {
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
      mealsEl.innerHTML = data.meals
        .map(
          (meal) =>
            `
        <div class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info" data=mealID=""${meal.idMeal}>
        <h3>${meal.strMeal}</h3>
        </div></div> 
        `
        )
        .join("");
    }
  } else {
    alert("Search input is empty!");
  }
} */
//Event Listeners
submit.addEventListener("submit", getDishes);
mealsEl.addEventListener("click", (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains("meal-info");
    } else {
      false;
    }
  });

  //console.log(mealInfo);

  if (mealInfo) {
    const mealID = mealInfo.getAttribute("data-mealID");

    getMealByID(mealID);
  } else {
    return false;
  }
});
