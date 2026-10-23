const popup = document.getElementById('popup');
const openBtn = document.querySelector('.open-btn');
const closeBtn = popup.querySelector('.popup__close');

function openPopup() {
  popup.classList.add('is-open');
}

function closePopup() {
  popup.classList.remove('is-open');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);