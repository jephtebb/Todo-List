//Selectors
const todoInput  = document.querySelector('.todo-input');
const todoList  = document.querySelector('.todo-list');
const todoButton  = document.querySelector('.todo-button');

//Event Listeners
todoButton.addEventListener('click',addToDo);


//Functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('completedBtn');
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    trashBtn.classList.add('trashBtn');
    todoDiv.appendChild(trashBtn);
    //append to list
    todoList.appendChild(todoDiv);

}