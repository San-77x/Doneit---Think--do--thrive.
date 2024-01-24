const inputBox = document.getElementById(
  "inputTask"
) as HTMLInputElement | null;
const listing = document.getElementById("todoList") as HTMLInputElement | null;
const button = document.getElementById("addButton");
const clearbtn = document.getElementById("clearAll");

if (button)
  button.onclick = () => {
    if (inputBox && inputBox.value === "") {
      alert("You Must Type a task");
      return;
    }

    const li = document.createElement("li");
    li.textContent = inputBox ? inputBox.value : null;
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    listing && listing.appendChild(li);

    inputBox && (inputBox.value = "");
    saveData();
  };

listing &&
  listing.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).tagName === "LI") {
      (e.target as HTMLElement).classList.toggle("checked");
    } else if ((e.target as HTMLElement).tagName === "SPAN") {
      (e.target as HTMLElement).parentElement?.remove();
      saveData();
    }
  });

function saveData() {
  listing && localStorage.setItem("data", listing.innerHTML);
}

function showTask() {
  if (listing) listing.innerHTML = localStorage.getItem("data") || "";
}
showTask();

function removeEvent(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains("clearAll")) {
    const plm = (e.target as HTMLElement).parentElement;
    if (plm) listing?.removeChild(plm);
    listing?.removeChild(listing);
  }
}
if (clearbtn)
  clearbtn.onclick = () => {
    console.log("Clicked");
    if (listing?.childNodes.length === 0) {
      alert("You Must Add a task first");
      return;
    }
    localStorage.setItem("data", "");
    listing?.childNodes.forEach((e) => {
      e.remove();
    });
  };
