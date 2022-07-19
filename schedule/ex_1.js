const dateEl = document.getElementById("date");
const contentEl = document.getElementById("content");
const buttonEl = document.querySelector("table");
const btn = document.querySelector("button");


buttonEl.addEventListener("click", function (e) {
    dateEl.value = e.target.innerText;
})