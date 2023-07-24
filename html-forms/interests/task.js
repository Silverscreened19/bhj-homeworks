const checkbox = Array.from(document.querySelectorAll('input'))

for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('change', () => {
        checkbox[i].closest('.interest').querySelectorAll('input').forEach(element => {
            if (checkbox[i].checked) {
                element.checked = true;
            } else {
                element.checked = false;
            }
        })
    })
}
