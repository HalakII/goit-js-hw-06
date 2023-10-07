const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const emptylistOfIngredients = document.querySelector("#ingredients");

const listOfIngredients = ingredients.map((ingredient) => {
  const elementLi = document.createElement("li");
  elementLi.classList.add("item");
  elementLi.textContent = ingredient;
  return elementLi;
});

emptylistOfIngredients.append(...listOfIngredients);
console.log(emptylistOfIngredients);
