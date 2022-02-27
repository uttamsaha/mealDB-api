const loadFoods = () => {
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
    foods.forEach(food => {
        const div = document.createElement('div');
        div.className = 'foods';
        div.innerHTML = `
        <img width="350px" src="${food.strMealThumb}" />
        <h3>${food.strMeal}</h3>
        <p>${food.strInstructions.slice(0,80)}</p>
        `
        divContainer.appendChild(div);
        console.log(food);
    })
}