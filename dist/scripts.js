"use strict";
const inputBox = document.getElementById("inputTask");
const listing = document.getElementById("todoList");
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
        var _a;
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
        else if (e.target.tagName === "SPAN") {
            (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            saveData();
        }
    });
function saveData() {
    listing && localStorage.setItem("data", listing.innerHTML);
}
function showTask() {
    if (listing)
        listing.innerHTML = localStorage.getItem("data") || "";
}
showTask();
function removeEvent(e) {
    if (e.target.classList.contains("clearAll")) {
        const plm = e.target.parentElement;
        if (plm)
            listing === null || listing === void 0 ? void 0 : listing.removeChild(plm);
        listing === null || listing === void 0 ? void 0 : listing.removeChild(listing);
    }
}
if (clearbtn)
    clearbtn.onclick = () => {
        console.log("Clicked");
        if ((listing === null || listing === void 0 ? void 0 : listing.childNodes.length) === 0) {
            alert("You Must Add a task first");
            return;
        }
        localStorage.setItem("data", "");
        listing === null || listing === void 0 ? void 0 : listing.childNodes.forEach((e) => {
            e.remove();
        });
    };
//# sourceMappingURL=scripts.js.map