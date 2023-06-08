// Get all the draggable items
const itemList = ["Item1", "Item2", "Item3", "Item4"];
const firstContainer = document.getElementById("first-container");
const dropCon = document.getElementById("drop-container");

function setItemInHTMLDIV() {
  itemList.map((item) => {
    firstContainer.innerHTML += ` <div class="item" draggable="true">${item}</div>`;
  });
}

setItemInHTMLDIV();

const add = () => {
  let input = window.prompt("Please enter item name!");
  itemList.push(input);
  firstContainer.innerHTML += ` <div class="item" draggable="true">${input}</div>`;
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);

    item.addEventListener("dragend", dragEnd);
  });
};

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);

  item.addEventListener("dragend", dragEnd);
});

// Keep track of the currently dragged item
let draggedItem = null;

// Drag start event handler
function dragStart() {
  draggedItem = this;
  dropCon.classList.add("draggingInContainer");

  setTimeout(() => {
    this.classList.add("dragging");
  }, 0);
}

// Drag end event handler
function dragEnd() {
  this.classList.remove("dragging");
  dropCon.classList.remove("draggingInContainer");
  draggedItem = null;
}

// Drop container event listeners
const dropContainer = document.getElementById("drop-container");
dropContainer.addEventListener("dragover", dragOver);
dropContainer.addEventListener("dragenter", dragEnter);
dropContainer.addEventListener("dragleave", dragLeave);
dropContainer.addEventListener("drop", drop);

// Drag over event handler
function dragOver(e) {
  e.preventDefault();
}

// Drag enter event handler
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("highlight");
}

// Drag leave event handler
function dragLeave() {
  this.classList.remove("highlight");
}

// Drop event handler
function drop() {
  this.classList.remove("highlight");
  this.appendChild(draggedItem);
  draggedItem = null;

  // Display success message
  alert("Item dropped successfully!");
}

// Reset button event handler
function reset() {
  // Clear the second container
  dropContainer.innerHTML = "Drop items here";

  // Reset the first container to its original state
  const firstContainer = document.getElementById("first-container");
  firstContainer.innerHTML = "";
  setItemInHTMLDIV();
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);

    item.addEventListener("dragend", dragEnd);
  });
}
