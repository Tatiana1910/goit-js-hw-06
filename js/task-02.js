const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const list = document.querySelector('#ingredients');
// const ingridientsList = [];

// ingredients.forEach(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.className = 'item';
//   liEl.textContent = ingredient;
//   ingridientsList.push(liEl);
// });

// list.append(...ingridientsList);

// console.log(list);

// 2 вариант
const list = document.querySelector('#ingredients');

const ingridientsList = ingredients.map(el => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = el;

  return item;
});

list.append(...ingridientsList);
console.log(list);
