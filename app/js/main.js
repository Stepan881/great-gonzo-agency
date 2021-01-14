const navBtnOpen = document.querySelector(`.header__btn`);
const navBtnclose = document.querySelector(`.nav__btn-close`);
const menu = document.querySelector(`.nav`);

navBtnOpen.addEventListener(`click`, evt => {
  evt.preventDefault()
  menu.classList.add(`nav--open`)
})

navBtnclose.addEventListener(`click`, evt => {
  evt.preventDefault()
  menu.classList.remove(`nav--open`)
})

