// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueOfNumber = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onLessBtnClick);
incrementBtn.addEventListener("click", onPlusBtnClick);

function onLessBtnClick() {
  counterValue -= 1;
  valueOfNumber.textContent = counterValue;
  console.log("Оne click less");
}
function onPlusBtnClick() {
  counterValue += 1;
  valueOfNumber.textContent = counterValue;
  console.log("One click more");
}
