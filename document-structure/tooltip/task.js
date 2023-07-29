const links = Array.from(document.querySelectorAll('.has-tooltip'))
const tip = document.createElement('div')
tip.classList.add('tooltip')
tip.setAttribute('data-position', 'bottom')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        link.insertAdjacentElement('afterend', tip)
        tip.innerText = `${link.title}`
        tip.classList.add('tooltip_active')

        link.style.position = 'relative'
        tip.style.position = 'absolute'

        tip.style.left = `${link.offsetLeft}px`;
    })
})
