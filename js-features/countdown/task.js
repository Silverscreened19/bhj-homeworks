let timer = document.getElementById("timer")

let timerId = setInterval(() => {
    if (Number(timer.textContent) == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerId);
    } else timer.textContent = Number(timer.textContent) - 1
}, 1000)
