(() => {
  const form = document.querySelector('form');
  const taskInput = document.querySelector('.tasks__input');
  const tasksList = document.querySelector('.tasks__list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (taskInput.value.trim()) {
      taskCreation(taskInput);
    }

    form.reset();
  });

  const taskCreation = (element) => {
    const taskWrap = document.createElement('div');
    taskWrap.classList.add('task');
    
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = element.value.trim();
    
    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.classList.add('task__remove');
    taskRemove.innerHTML = '&times;';

    tasksList.appendChild(taskWrap);
    taskWrap.appendChild(taskTitle);
    taskWrap.appendChild(taskRemove);

    taskRemove.onclick = function () {
      this.parentElement.remove();
    }
  }
})();



