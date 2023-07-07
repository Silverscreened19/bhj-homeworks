const popup = document.getElementById("modal_main");
const success = document.getElementById("modal_success");


setTimeout(() => popup.classList.add("modal_active"), 3000)

function successFunct() {
    const arrayShowSuccess = Array.from(document.getElementsByClassName("show-success"))
    arrayShowSuccess.forEach((i) => {
        if (i.className.includes("show-success")) {
            i.onclick = () => {
                success.classList.add("modal_active")
            }
        }
    })
}

function closePopup() {
    const arrayClose = Array.from(document.getElementsByClassName("modal__close_times"));
    arrayClose.forEach(j =>
        j.onclick = () => {
            popup.style.display = "none";
            success.style.display = "none"
        })
}

successFunct()
closePopup()
