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
    const newTask = `
      <div class="task">
      <div class="task__title">${element.value.trim()}</div>
      <a href="#" class="task__remove">&times;</a>
      </div>`;

    tasksList.insertAdjacentHTML('beforeEnd', newTask);

    document.addEventListener('click', (e) => {
      const button = e.target.closest('.task__remove');
      if (button) {
        button.parentElement.remove();
      }
    });
  }
})();