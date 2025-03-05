// Variables
let listItems = document.querySelectorAll("li");
let boxLeft = document.querySelector(".jsBoxLeft");
let boxRight = document.querySelector(".jsBoxRight");

// Drag and drop list items over each box
listItems.forEach((listItem) => {
  listItem.addEventListener("dragstart", (e) => {
    let selected = e.target;

    boxRight.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    boxRight.addEventListener("drop", (e) => {
      boxRight.appendChild(selected);
      selected = null;
    });

    boxLeft.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    boxLeft.addEventListener("drop", (e) => {
      boxLeft.appendChild(selected);
      selected = null;
    });
  });
});
