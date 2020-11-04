console.log("It's Working!!!");

const add = document.getElementById('add-btn');
add.addEventListener('click', addTodo);

function addTodo(event){
    event.preventDefault();
    const Todo = document.getElementById('addTodo');
    const todo = Todo.value;
    console.log(todo);
    const listI = document.createElement("DIV");
    listI.classList.add('list-i');
    const delBtn = document.createElement('button');
    delBtn.setAttribute("id", "delBtn");
    delBtn.innerHTML = "מחק";
    delBtn.onclick = function(){
    this.parentElement.style.display='none';return false;
    };
    listI.appendChild(delBtn);
    const newItem = document.createElement("LI");
    newItem.setAttribute("id", "list-item");
    const todoItem = document.createTextNode(todo);
    newItem.appendChild(todoItem);
    listI.appendChild(newItem);
    document.getElementById('list-items').appendChild(listI);
    console.log(listI);
    if(Todo.value === ''){
    $("#alertMsg").show();
    listI.remove();
    }
}

function DelAll(){
    $("#list-items").empty();
}

$("#alertMsg").hide();




















