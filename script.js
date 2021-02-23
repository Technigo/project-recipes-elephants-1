const recipeContainer = document.querySelector("#recipe-container");

const appKey = "55aba1e8a782e8fc409adb387c9c82ae";
const appId = "1f3b28dd";

const inputForm = document.getElementById("input-form")
const ingredientInput = document.getElementById("ingredient-input")
const checkboxInput = document.querySelectorAll(".checkbox-input")
const filterButton = document.getElementById("filter-button")
const filterContent = document.getElementById("filter-content")
const maxIngredientsFilter = document.querySelector("#max-ingredients-filter")
const timeFilter = document.querySelector("#filter")

let maxCookingTime = ""
let maxIngredients = ""
let excludeIngredients = ""

const getRecipe = (ingredient, range, maxIngredients, excludeIngredients) => {
    fetch(
        `https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}&from=0&to=6&calories=591-722&health=alcohol-free${range}${maxIngredients}${excludeIngredients}`
    )
        .then((res) => res.json())
        .then((data) => {
            printToHTML(data);
        });
};

const printToHTML = (data) => {
    recipeContainer.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        recipeContainer.innerHTML += `
    <section class="recipe-card">
        <img class="recipe-image" src="${data.hits[i].recipe.image}"/>
        <div class="card-middle">
            <h2>${data.hits[i].recipe.label}</h2>
            <p>Get the full recipe at <a href="${data.hits[i].recipe.url}">${data.hits[i].recipe.source}</a></p>
        </div>
        <div class="card-bottom">
            <span>${data.hits[i].recipe.totalTime} min · </span>
            <span>${Math.round(data.hits[i].recipe.calories)} kcal</span>
        </div>
    </section>
    `;
    }
};

const filterTime = (userInput) => {
    if (userInput === "30") {
        maxCookingTime = "&time=0-30"
    }
    else if (userInput === "60") {
        maxCookingTime = "&time=0-60"
    } else if (userInput === "120") {
        maxCookingTime = "&time=0-120"
    } else {
        maxCookingTime = "&time=1%2B"
    }
}

const handleInputForm = () => {
    event.preventDefault()
    const input = ingredientInput.value
    ingredientInput.value = ""
    getRecipe(input, maxCookingTime, maxIngredients, excludeIngredients)
}

for (let checkbox of checkboxInput) {
    checkbox.addEventListener('change', function () {
        excludeIngredients += `&excluded=${checkbox.value}`
    });
}

inputForm.addEventListener("submit", handleInputForm)

timeFilter.addEventListener("change", () => {
    let userInput = timeFilter.value
    filterTime(userInput)
})

filterButton.addEventListener("click", () => {
    event.preventDefault()
    filterContent.classList.toggle("accordion-selected")
})

maxIngredientsFilter.addEventListener("change", () => {
    maxIngredients = `&ingr=${maxIngredientsFilter.value}`
})

getRecipe("cheese", maxCookingTime, maxIngredients, excludeIngredients)