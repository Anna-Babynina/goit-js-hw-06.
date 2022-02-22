// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector(`#ingredients`);
const ingredientsList = 
ingredients.map(ingredient =>{
  const ingredientRef = document.createElement(`li`);
  ingredientRef.classList.add(`item`);
  ingredientRef.textContent = ingredient;
  return ingredientRef;
});
ingredientsRef.append(...ingredientsList);
