const inputBox = document.getElementById("inputTask");
const listing = document.getElementById("todoList");
const button = document.getElementById("addButton");


button.onclick = () => {
    if(inputBox.value=== "")
        alert("You Must Type a task");
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listing.appendChild(li);
        }
        return inputBox.value = ""
    }