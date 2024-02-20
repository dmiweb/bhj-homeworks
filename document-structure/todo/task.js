(() => {
  const form = document.querySelector('form');
  const taskInput = document.querySelector('.tasks__input');
  const tasksList = document.querySelector('.tasks__list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInput.value.trim()) {
      taskCreation(taskInput);
    }

    taskRemove();
    form.reset();
  });

  const taskCreation = (element) => {
    const newTask = `
      <div class="task">
      <div class="task__title">${element.value.trim()}</div>
      <a href="#" class="task__remove">&times;</a>
      </div>`;

    tasksList.insertAdjacentHTML('beforeEnd', newTask);
  }

  function taskRemove() {
    const taskRemoveBtn = document.querySelectorAll('.task__remove');
    for (let i = 0; i < taskRemoveBtn.length; i++) {
      taskRemoveBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        taskRemoveBtn[i].parentElement.remove();
      });
    }
  }
})();



