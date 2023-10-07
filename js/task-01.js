// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const elementUlRef = document.querySelector("#categories");

const collectOfItem = elementUlRef.children;

console.log(`Number of categories: ${collectOfItem.length}`);

const elementLiRef = document.querySelectorAll(".item");

elementLiRef.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`
  );
});

//  Миколі!!!
// Для вас від мене! Я зрозуміла, що в першій домашці не можна взагалі використовувати querySelector, тому написала ще такий код.Всі не вірили що я витягну колекцію і казали що це дурниці, але консоль показує потрібний нам результат.Назвемо це "спортивний інтерес".

// const body = document.body;

// const findUlcildrenLi = body.firstElementChild.nextElementSibling.children;

// console.log(`Number of categories:${findUlcildrenLi.length}`);

// const arrayOfLi = [...findUlcildrenLi];

// arrayOfLi.forEach((element) => {
//   console.log(
//     `Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`
//   );
// });
