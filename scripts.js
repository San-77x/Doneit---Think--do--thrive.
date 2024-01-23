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
    inputBox.value = "";
    }
    listing.addEventListener("click", function(e){
        if(e.target.tagName === "li"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "span"){
            e.target.parentElement.remove();
        } 
    },false);



    
// clearbtn.onclick = () => {
//     if(listing.value=== "")
//         alert("You Must Add a task first");
//     else
// }