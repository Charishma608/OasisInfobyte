function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = document.createElement("li");
    task.innerText = taskText;

    const editButton = createButton("Edit", () => editTask(task));
    const completeButton = createButton("Complete", () => completeTask(task));
    const deleteButton = createButton("Delete", () => deleteTask(task));

    task.appendChild(editButton);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);

    document.getElementById("pending-tasks").appendChild(task);
    taskInput.value = "";
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.onclick = onClick;
    return button;
}

function completeTask(task) {
    const completedTasks = document.getElementById("completed-tasks");
    task.classList.add("completed");
    completedTasks.appendChild(task);
}

function editTask(task) {
    const newText = prompt("Edit task:", task.innerText);
    if (newText !== null) {
        task.innerText = newText;
    }
}

function deleteTask(task) {
    task.remove();
}
