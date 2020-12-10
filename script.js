var addButton = document.getElementById("add-button");
var emptyButton = document.getElementById("empty-button");
var clearButton = document.getElementById("clear-completed-button");
var saveButton = document.getElementById("save-button");
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function addToDoItem() {
    alert("Add button clicked! AMANDA WAS HERE REEEEEEE");
}
function clearCompletedToDoItems() {
    alert("According to all laws of aviation... bees should not be able to fly.");
}
function emptyList() {
    alert("You have emptied the list. (pretend it worked)");
}
function saveList() {
    alert("Karen took the kids");
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

clearButton.addEventListener("click", clearCompletedToDoItems);
emptyButton.addEventListener("click", emptyList);
saveButton.addEventListener("click", saveList);
addButton.addEventListener("click", addToDoItem);
