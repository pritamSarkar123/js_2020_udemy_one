const addForm = document.querySelector(".add"); //add class of form
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); //add input field name inside form
  if (todo.length) {
    //not empty
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete"));
  e.target.parentElement.remove();
});

const filterTodos = (term) => {
  /*Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term)) //do not matching
    .forEach((todo) => todo.classList.add("filtered")); //hide them
  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term)) //matching
    .forEach((todo) => todo.classList.remove("filtered")); //show them*/
  Array.from(list.children).forEach((todo) => {
    if (!todo.textContent.includes(term)) {
      todo.classList.add("filtered");
    } else {
      todo.classList.remove("filtered");
    }
  });
};
//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});
