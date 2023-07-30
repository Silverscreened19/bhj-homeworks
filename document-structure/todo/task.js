const tasks = document.getElementById('tasks__list');
const input = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');


addButton.addEventListener('click', addTask);

tasks.addEventListener("click", e => {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
    }
});


function addTask(event) {
    event.preventDefault();
    if (input.value.trim() !== '') {
        let task = `
        <div class="task">
            <div class="task__title">
            ${input.value.trim()}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;
        tasks.insertAdjacentHTML('beforeend', task);
        input.value = '';
    }
}
