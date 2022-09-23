const btns = document.querySelectorAll('button')
const targets = document.querySelectorAll('p')
const arrows = document.querySelectorAll('button svg')

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        targets[i].classList.toggle('activeP')
        arrows[i].classList.toggle('downArrow')
    })
}