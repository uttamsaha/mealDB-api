//toggle spinner
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
//
const toggleSearchResult = displayStyle => {
    document.getElementById('result').style.display = displayStyle;
}

const loadFoods = () => {
    toggleSpinner('block');
    toggleSearchResult('none');
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFoods(data.meals))
    inputField.value = '';
}

const displayFoods = foods => {
    // console.log(foods);
    const divContainer = document.getElementById('search-result');
    divContainer.textContent = '';
    foods.forEach(food => {
        const div = document.createElement('div');
        div.className = 'foods';
        div.innerHTML = `
        <div onclick="loadFoodDetails('${food.idMeal}')">
        <img width="350px" src="${food.strMealThumb}" />
        <h5>${food.strMeal}</h5>
        <p>${food.strInstructions.slice(0,80)}</p>        
        </div>

        `
        divContainer.appendChild(div);
        console.log(food);
    })
    toggleSpinner('none');
    toggleSearchResult('block');
}

//lookup meal detials by ID
const loadFoodDetails = foodId => {
    // console.log(foods);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFoodDetails(data.meals[0]))

}

const displayFoodDetails = food => {
    const divContainer = document.getElementById('food-details');
    divContainer.innerHTML = `
    <div class="food-details">
    <img width="350px" src="${food.strMealThumb}" />
        <h5>${food.strMeal}</h5>
        <p>${food.strInstructions.slice(0,80)}</p>
    </div>
         
    `
    console.log(food);
}