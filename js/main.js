let tasks    = [];
let form     = document.forms[0];
let todo     = form.elements.todo;
let button   = document.querySelector("button");
let todoArea = document.getElementsByClassName("listTasks")[0];
let index    = 1;



button.addEventListener("click",addTask);




function addTask(){
    if(!!todo.value && !tasks.includes(todo.value))  {
        const item = todo.value;
        tasks.push(item);
        displayTodos(item);
    }
}


function displayTodos(valueTobeAdded){
    
    const li     = document.createElement("li");
    const span   = document.createElement("span");
    const close  = document.createElement("span");

    close.innerHTML = "x";
    close.setAttribute("id","close");
    close.setAttribute("onclick","close()");

    span.innerHTML = valueTobeAdded;
    li.append(close);
    customParagraph(li);
    li.append(span);
    todoArea.append(li);    

}


function close() {
    console.log("clicked")
}


function clearElements(){
    const paragraphs = document.querySelectorAll(".listTasks > p ");   
    paragraphs.forEach((paragraph)=> todoArea.removeChild(paragraph))
    console.log(paragraphs)
}


function generateIndex() {
    return index = index + 1 ;
}


function customParagraph(p) {
    const checkbox = document.createElement("input");
    checkbox.type  = "checkbox";
    checkbox.name  = "checkbox"+ index;
    checkbox.value = "value";
    checkbox.id    = index;

    checkbox.setAttribute("onclick","close()")
    p.append(checkbox);
}