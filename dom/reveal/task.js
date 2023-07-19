(() =>{
    const reveal = Array.from(document.querySelectorAll('.reveal'))

    document.addEventListener('scroll', () => {
        reveal.forEach(el => {
            const { top, bottom } = el.getBoundingClientRect();

            if ((bottom > 0) && (top < window.innerHeight)) {
                el.classList.add("reveal_active");
            } else {
                el.classList.remove("reveal_active");
            }
        });
    });
})();
