const inputs = document.querySelectorAll(".form-group input");
const textarea = document.querySelector("textarea");
const btn = document.querySelector(".submit-btn");

inputs.forEach((input) => {
  addListener(input);
});
addListener(textarea);

function addListener(element) {
  element.addEventListener("focus", () => {
    element.parentElement.classList.add("actived");
  });

  element.addEventListener("blur", () => {
    element.parentElement.classList.remove("actived");
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    console.log(input);
  });
});
