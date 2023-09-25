let task = document.getElementById("task");
let addTask = document.getElementById("add-task");
let taskList = document.getElementById("task-list");


function addTasks(){
    let taskValue = task.value;
    taskList.innerHTML += `<li>
    <p>${taskValue}</p>
    <div>
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    </div>
</li>`
task.value = "";
};


function deleteOrCompleteTask(event){
    const btnClickedClass = event.target.classList;
    if (btnClickedClass[0] === "done") {
        btnClickedClass.remove("done");
        btnClickedClass.add("undo");
        }
    else if (btnClickedClass[0] === "undo") {
        btnClickedClass.remove("undo");
        btnClickedClass.add("done");
    
    }
    else { 
        const deleteTasks = event.target.closest("li");
        deleteTasks.remove();
    }
}
    addTask.addEventListener("click", addTasks);
    taskList.addEventListener("click", deleteOrCompleteTask);