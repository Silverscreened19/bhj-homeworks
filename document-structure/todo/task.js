const tasks = document.getElementById('tasks__list');
const input = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');


addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        let task = `
        <div class="task">
            <div class="task__title">
            ${input.value.trim()}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `
        tasks.insertAdjacentHTML('afterend', task);
        input.value = '';
    }
    removeTask();
})


function removeTask() {
    const taskRemove = Array.from(document.querySelectorAll('.task__remove'))
    taskRemove.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            activeTask = item.closest('.task');
            activeTask.remove();
        })
    })
}
