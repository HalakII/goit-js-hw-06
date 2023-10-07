function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controlRef = document.querySelector("#controls");
const creatBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const inputRef = controlRef.firstElementChild;
const boxRef = document.querySelector("#boxes");

inputRef.addEventListener("input", numberBoxes);
let inputValue = 0;
function numberBoxes(event) {
  inputValue = Number(event.currentTarget.value);
  if (inputValue > 100) {
    inputRef.value = "";
  }
}

creatBtnRef.addEventListener("click", () => {
  createBoxes(inputRef.value);
});
let sizeDiv = 30;
function createBoxes(amount) {
  let divArray = [];
  for (let i = 0; i < amount; i += 1) {
    sizeDiv += 10;
    const itemDiv = document.createElement("div");
    itemDiv.style.width = `${sizeDiv}px`;
    itemDiv.style.height = `${sizeDiv}px`;
    itemDiv.style.backgroundColor = getRandomHexColor();
    divArray.push(itemDiv);
  }
  return boxRef.append(...divArray);
}

destroyBtnRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  inputRef.value = "";
  boxRef.innerHTML = "";
  sizeDiv = 30;
}

// або так але щось із розміром квадрату:
// let sizeDiv = 30;
// function createBoxes(amount) {
//   const divArray = [];
//   for (let i = 0; i < amount; i += 1) {
//     sizeDiv += 10 * i;
//     const itemDiv = `<div class="item" style="display: flex; background-color: ${getRandomHexColor()}; width: ${sizeDiv}px; height: ${sizeDiv}px;"></div>`;
//     divArray.push(itemDiv);
//   }
//   boxRef.insertAdjacentHTML("beforeend", divArray.join(""));
// }
