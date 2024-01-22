const menuEl = document.querySelector(".menu");
const childEls = document.querySelectorAll(".menu div")



menuEl.addEventListener('click', () => {

    if (menuEl.classList.contains('active')) {
        menuEl.classList.remove('active')
    } else {
        childEls.forEach((ele) => ele.classList.remove('no-animation'))
        menuEl.classList.add('active')
    }
});