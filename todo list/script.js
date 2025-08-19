function addtask() {
    const input = document.getElementById("task-input");
    const tasktext = input.value.trim();

    if (tasktext === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = tasktext;

    li.addEventListener("click", () => {
        li.classList.toggle("Completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "hello";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("task-list").appendChild(li);
    input.value = "";
}

