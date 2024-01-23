const inputBox = document.getElementById("inputTask");
const listing = document.getElementById("listing")

const button = document.getElementById("addButton");
button.onclick = () => {
    if(inputBox === ''){
        alert("You Must Type a task");
    }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listing.appendChild(li);

        }
    }