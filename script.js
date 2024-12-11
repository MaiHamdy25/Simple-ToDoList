const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');
// Add Task Function
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    // add li
    const task = document.createElement('li');
    task.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 8px 15px; margin-bottom: 10px; border-radius: 25px; background-color: #ddd;";
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    task.appendChild(taskContent);
    // // Done Button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.style.cssText = "margin-left: 5px; padding: 8px 12px; border: none; border-radius: 18px; cursor: pointer; font-size: 0.9em; background-color: #b2d3c2;";
    doneBtn.addEventListener('click', () => {
        if (task.style.backgroundColor === 'rgb(164, 212, 174)') {
            task.style.backgroundColor = '#ddd';
        } else {
            task.style.backgroundColor = '#a4d4ae';
        }
    });
    task.appendChild(doneBtn);
    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.cssText = "margin-left: 5px; padding: 8px 12px; border: none; border-radius: 18px; cursor: pointer; font-size: 0.9em; background-color: #f2b3b1;";
    deleteBtn.addEventListener('click', () => {
        tasksList.removeChild(task);
    });
    task.appendChild(deleteBtn);

    tasksList.appendChild(task);
    taskInput.value = '';
});
// styles
document.body.style.cssText = "font-family: Arial, sans-serif; background-color: #d7d2c8; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;";

const todoContainer = document.querySelector('.todo-container');
todoContainer.style.cssText = "background-color: #f2ede1; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);";

const inputSection = document.querySelector('.input-section');
inputSection.style.cssText = "display: flex; justify-content: space-between; margin-bottom: 15px;";

const inputField = document.getElementById('taskInput');
inputField.style.cssText = "flex: 1; padding: 8px; border: 2px solid #ccc; border-radius: 15px;";

const addButton = document.getElementById('addBtn');
addButton.style.cssText = "margin-left: 10px; padding: 8px 15px; background-color: #f2cbb1; border: none; border-radius: 18px; cursor: pointer; font-weight: bold;";

addButton.addEventListener('mouseover', () => {
    addButton.style.backgroundColor = '#d1b99c';
});
addButton.addEventListener('mouseout', () => {
    addButton.style.backgroundColor = '#f2cbb1';
});

