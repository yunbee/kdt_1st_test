const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");

button.addEventListener("click", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(todoInput.value === "") {
        return;
    }
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = "";
}