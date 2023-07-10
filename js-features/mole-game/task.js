const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function setDefault() {
    dead.textContent = 0
    lost.textContent = 0
}

function moleGame() {
    for (let i = 0; i < 9; i++) {
        const hole = document.getElementById(`hole${i+1}`)
        hole.onclick = () => {
            if (hole.classList.contains('hole_has-mole') == true) {
                dead.textContent = Number(dead.textContent) + 1
            } else {
                lost.textContent = Number(lost.textContent) + 1
            }
            if (dead.textContent >= 10) {
                alert('You win!')
                setDefault()
                return
            }
            if (lost.textContent >= 5) {
                alert('You lost!')
                setDefault()
                return
            }
        }
    }
}

moleGame()
