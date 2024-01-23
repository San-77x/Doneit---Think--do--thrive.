const inputBox = document.getElementById("inputTask");
const listing = document.getElementById("todoList");
const button = document.getElementById("addButton");
const clearbtn = document.getElementById("clearAll");

button.onclick = () => {
  if (inputBox.value === "") {
    alert("You Must Type a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputBox.value;
  const span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);
  listing.appendChild(li);

  inputBox.value = "";
  saveData();
};

listing.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listing.innerHTML);
}
function showTask() {
  listing.innerHTML = localStorage.getItem("data");
}
showTask();

function removeEvent(e) {
  if (e.target.classList.contains("clearAll")) {
    list.removeChild(e.target.parentElement);
    list.removeChild(todoList);
  }
}

clearbtn.onclick = () => {
  console.log("Clicked");
  if (listing.childNodes.length === 0) {
    alert("You Must Add a task first");
    return;
  }
  localStorage.setItem("data", "");
  listing.childNodes.forEach((e) => {
    e.remove();
  });
};
