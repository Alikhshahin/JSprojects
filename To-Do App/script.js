const userName = prompt("Please enter your name:");
const title = document.querySelector("h1");
title.textContent = `${userName}'s To-Do List`;

const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function createTask(taskText) {
  const listItem = document.createElement("li");

  const taskContent = document.createTextNode(taskText);

  const checkButton = document.createElement("button");
  checkButton.textContent = "Check";
  checkButton.className = "check";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove";

  listItem.appendChild(taskContent);
  listItem.appendChild(checkButton);
  listItem.appendChild(removeButton);

  checkButton.addEventListener("click", () => {
    const isSure = confirm("Are you sure you've completed this task?");
    if (isSure) {
      listItem.classList.toggle("completed");
    }
  });

  // Add event listener for removing the task
  removeButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });

  checkButton.addEventListener("mouseover", () => {
    moveButton(checkButton);
  });

  taskList.appendChild(listItem);
}

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

function moveButton(button) {
  const parent = button.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  const maxLeft = parentRect.width - buttonRect.width;
  const maxTop = parentRect.height - buttonRect.height;

  const randomLeft = Math.random() * maxLeft;
  const randomTop = Math.random() * maxTop;

  button.style.position = "absolute";
  button.style.left = `${randomLeft}px`;
  button.style.top = `${randomTop}px`;
}

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  window.location.href = "mailto:alikhshahin@gmail.com";
});
