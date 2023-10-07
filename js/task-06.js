// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onBlurInput);

function onBlurInput(event) {
  const inputDataLength = Number(inputRef.getAttribute("data-length"));
  console.log(inputDataLength);

  const inputNumber = inputRef.value.length;

  console.log(typeof inputNumber, inputNumber);
  inputNumber === inputDataLength;
  if (inputNumber === inputDataLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
