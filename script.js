const recipeContainer = document.querySelector("#recipe-container");
const cookingTimeImages = document.querySelectorAll(".cooking-time-image")

const appKey = "55aba1e8a782e8fc409adb387c9c82ae";
const appId = "1f3b28dd";

const fakeAPIData =
{
    "q": "cheese",
    "from": 0,
    "to": 3,
    "more": true,
    "count": 7000,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0310cc9c2e3f7ed951fef8f176c56a02",
                "label": "Cheese and Bacon Soufflé Recipe",
                "image": "https://www.edamam.com/web-img/ff1/ff1eff77fcdb6d9d1cc34da29437897a.jpg",
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2012/02/cheese-and-bacon-souffle-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/cheese-and-bacon-souffl%C3%A9-recipe-0310cc9c2e3f7ed951fef8f176c56a02/cheese/alcohol-free/591-722-cal",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/2 pound bacon",
                    "2 tablespoons butter, divided",
                    "1 small onion, finely chopped",
                    "1 tablespoon all-purpose flour",
                    "1 1/3 cups milk",
                    "8 ounces (2 cups) grated sharp cheddar cheese",
                    "Dash Worcestershire sauce",
                    "1 teaspoon Dijon mustard",
                    "Kosher salt and cracked black pepper",
                    "1 tablespoon grated Parmesan cheese",
                    "4 egg yolk",
                    "6 egg whites"
                ],
                "ingredients": [
                    {
                        "text": "1/2 pound bacon",
                        "weight": 226.796185,
                        "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
                    },
                    {
                        "text": "2 tablespoons butter, divided",
                        "weight": 28.4,
                        "image": null
                    },
                    {
                        "text": "1 small onion, finely chopped",
                        "weight": 70.0,
                        "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                    },
                    {
                        "text": "1 tablespoon all-purpose flour",
                        "weight": 7.81249999986791,
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1 1/3 cups milk",
                        "weight": 325.3333333333333,
                        "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                    },
                    {
                        "text": "8 ounces (2 cups) grated sharp cheddar cheese",
                        "weight": 226.796185,
                        "image": null
                    },
                    {
                        "text": "Dash Worcestershire sauce",
                        "weight": 0.7161458330790678,
                        "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
                    },
                    {
                        "text": "1 teaspoon Dijon mustard",
                        "weight": 5.0,
                        "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
                    },
                    {
                        "text": "Kosher salt and cracked black pepper",
                        "weight": 6.674490938746738,
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Kosher salt and cracked black pepper",
                        "weight": 3.337245469373369,
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 tablespoon grated Parmesan cheese",
                        "weight": 9.29414062484287,
                        "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                    },
                    {
                        "text": "4 egg yolk",
                        "weight": 53.86666666666667,
                        "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                    },
                    {
                        "text": "6 egg whites",
                        "weight": 158.39999999999998,
                        "image": null
                    }
                ],
                "calories": 2629.238213676832,
                "totalWeight": 1115.7524019271632,
                "totalTime": 80.0,
            },
            "bookmarked": false,
            "bought": false
        }
    ]
}

// const getRecipe = (ingredient) => {
//   fetch(
//     `https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       printToHTML(data);
//     });
// };

const printToHTML = (data) => {
    recipeContainer.innerHTML = "";
    //   for (let i = 0; i < 3; i++) {
    recipeContainer.innerHTML += `
  <section class="recipe-card">
  <img class="recipe-image" src="${data.hits[0].recipe.image}"/>
  <h2>Recipe: ${data.hits[0].recipe.label}</h2>
  <img id="cooking-time-image" class="cooking-time-image" src="./assets/60.png">
  <p>Source: <a href="${data.hits[0].recipe.url}">${data.hits[0].recipe.source}</a></p>
  </section>
  `;
    // for (let image of cookingTimeImages) {
    //     if (data.hits[0].recipe.totalTime <= 15) {
    //         image.src = "./assets/15.png"
    //     } else if (data.hits[0].recipe.totalTime <= 30) {
    //         image.src = "./assets/30.png"
    //     } else if (data.hits[0].recipe.totalTime <= 45) {
    //         image.src = "./assets/45.png"
    //     } else if (data.hits[0].recipe.totalTime <= 60) {
    //         image.src = "./assets/60.png"
    //     } else {
    //         image.src = "./assets/60.png"
    //     }
    // }
};

// getRecipe("cheese")
printToHTML(fakeAPIData)