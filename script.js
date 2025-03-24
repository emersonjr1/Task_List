const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const span = document.querySelector("span");
 


function addTask(){
    if(inputBox.value === ""){
        alert("Escreva sua tarefa!")
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        console.log("task-add")
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    showTask();
}




listContainer.addEventListener("click", function(evento){
    if(evento.target.tagName === "LI"){
        evento.target.classList.toggle("checked");
        saveData();
        showTask();
    }
    else if(evento.target.tagName === "SPAN"){
        evento.target.parentElement.remove();
        saveData();
        showTask();
    } 

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML )
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
