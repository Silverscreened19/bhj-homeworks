let timer = document.getElementById("timer")
let clear = (Number(timer.textContent) + 1) * 1000


let timerId = setInterval(() => {
    timer.textContent = Number(timer.textContent) -1
}, 1000)
setTimeout(() => {clearInterval(timerId); alert("Вы победили в конкурсе!"); }, clear)
