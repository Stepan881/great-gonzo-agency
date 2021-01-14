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

const programItems = document.querySelectorAll(`.program__item`);

programItems.forEach((el, i) => {
  let title = el.querySelector(`.program__title`);
  let text = el.querySelector(`.program__text`);
  
  if (i === 1) {
    title.innerHTML = title.innerHTML.trim().replace(/(.{2})/, `<span class="yellow">$1</span>`);
    text.innerHTML = text.innerHTML.trim().replace(/(.{3})/, `<span class="white">$1</span>`);
  } else if (i === 2) {
    title.innerHTML = title.innerHTML.trim().replace(/(.{6})/, `<span class="yellow">$1</span>`);
    text.innerHTML = text.innerHTML.trim().replace(/(.{4})/, `<span class="white">$1</span>`);
  }
})

