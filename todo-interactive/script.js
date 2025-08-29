// Select all list items
const listItems = document.querySelectorAll("#todo-list li");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    // Toggle 'completed' class
    item.classList.toggle("completed");
  });
});

let result = true && false || true;
console.log(result)