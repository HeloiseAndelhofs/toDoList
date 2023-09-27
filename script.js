let task = document.getElementById("task");
let addTask = document.getElementById("add-task");
let taskList = document.getElementById("task-list");
const input = document.querySelector("input");


function addTasks(){
    let taskValue = task.value;
    if (input.value.length !== 0) {
        taskList.innerHTML += `<li>
        <p>${taskValue}</p>
        <div>
            <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>
    </li>`
    task.value = "";
    } else {
        alert("Veuillez renseigner une tâche.");
    }
};


function deleteOrCompleteTask(event){
    const btnClickedClass = event.target.classList;
    console.log(btnClickedClass);
    if (btnClickedClass[0] === "done") {
        btnClickedClass.remove("done");
        btnClickedClass.add("undo");
        event.target.textContent = "Undo";
        event.target.parentElement.previousElementSibling.classList.add("completed");
    }
    else if (btnClickedClass[0] === "undo") {
        btnClickedClass.remove("undo");
        btnClickedClass.add("done");
        event.target.textContent = "Done";
        event.target.parentElement.previousElementSibling.classList.remove("completed");
    }
    else if (btnClickedClass[0] === "delete") { 
        if (confirm("Voulez vous supprimer cette tâche ?") === true) {
            const deleteTasks = event.target.closest("li");
            deleteTasks.remove();
        } else {
           
        }
    }
}
    addTask.addEventListener("click", addTasks);
    taskList.addEventListener("click", deleteOrCompleteTask);