const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    // array 형태로 저장되도록 함. 
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo (event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo (newToDoObj){

    //html 안에 하드코딩 하지 않고, js로 html 태그 생성.
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDoObj.text; 
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 입력한 todo -> paintToDo 전달
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    todos.push(newToDoObj);
    paintToDo (newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // string -> array로 보여줌. 
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

