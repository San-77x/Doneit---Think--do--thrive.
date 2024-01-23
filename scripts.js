const inputBox = document.getElementById("inputTask");
const listing = document.getElementById("todoList");
const button = document.getElementById("addButton");
const clearbtn = document.getElementById("clearAll");


button.onclick = () => {
    if(inputBox.value=== "")
        alert("You Must Type a task");
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listing.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        return inputBox.value = ""
    }
// clearbtn.onclick = () => {
//     if(listing.value=== "")
//         alert("You Must Add a task first");
//     else
// }