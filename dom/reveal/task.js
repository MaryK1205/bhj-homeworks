window.addEventListener('scroll', function () {
    const block = document.querySelectorAll('.reveal')
    for (let i of block) {
        const { top, bottom } = i.getBoundingClientRect()
        if (bottom > 0) {
            i.classList.add('reveal_active')
        }
        if (top < window.innerHeight) {
            i.classList.add('reveal_active')
        }
    }
}
)