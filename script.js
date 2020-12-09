var todoEntryBox = document.getElementById("todo-entry-box");
var addTodoButton = document.getElementById("add-button");
var clearCompletedButton = document.getElementById("clear-completed-button");
var emptyButton = document.getElementById("empty-button");
var saveButton = document.getElementById("save-button");
var todoList = document.getElementById("todo-list");


function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function addToList(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    todoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
function add() {
    var itemText = todoEntryBox.value;
    addToList(itemText, false);
}
function clearCompleted() {
    alert("clearCompleted");
}
function saveList() {
    alert("saveList");
}
function emptyList() {
    alert("emptyList");
}

addTodoButton.addEventListener("click", add);
clearCompletedButton.addEventListener("click", clearCompleted);
emptyButton.addEventListener("click", emptyList);
saveButton.addEventListener("click", saveList);
