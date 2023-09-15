let task = document.getElementById("task");
let addTask = document.getElementById("add-task");
let taskList = document.getElementById("task-list");



function addTasks(){
    let taskValue = task.value;
    taskList.innerHTML += `<li>
    <p>${taskValue}</p>
    <div>
        <button>Done</button>
        <button>Delete</button>
    </div>
</li>`
task.value = "";
};
addTask.addEventListener("click", addTasks);

function deleteTask(event){
    const deleteTasks = event.target.closest("li");
    deleteTasks.remove();
}
taskList.addEventListener("click", deleteTask);