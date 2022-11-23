const popupElement = document.querySelector('.popup');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');
const popupCloseButtonElement = popupElement.querySelector('.popup__btn-close');

const profileElement = document.querySelector('.profile');
const profileWrapElement = profileElement.querySelector('.profile__info-wrapper');
const profileInfoElement = profileWrapElement.querySelector('.profile__info');
const profileName = profileInfoElement.querySelector('.profile__title');
const profileJob = profileInfoElement.querySelector('.profile__text');
const profileOpenButtonElement = profileInfoElement.querySelector('.profile__edit-btn');


const openPopup = function(event) {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup();
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
}



profileOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

formElement.addEventListener('submit', formSubmitHandler);
