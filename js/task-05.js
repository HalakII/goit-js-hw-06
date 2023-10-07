// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
// console.log(inputRef);
const titleSpanRef = document.querySelector("#name-output");
// console.log(titleSpanRef);

inputRef.addEventListener("input", (event) => {
  inputRef.value === ""
    ? (titleSpanRef.textContent = "Anonymous")
    : (titleSpanRef.textContent = event.currentTarget.value);
});
