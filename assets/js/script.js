//Selectors
const todoInput  = document.querySelector('.todo-input');
const todoList  = document.querySelector('.todo-list');
const todoButton  = document.querySelector('.todo-button');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click',addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);


//Functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //append to list
    todoList.appendChild(todoDiv);
    //clear to do value
    todoInput.value = '';

}
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }
    if(item.classList[0]==='completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "incomplete":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }