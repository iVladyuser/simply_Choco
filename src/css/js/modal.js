window.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  const modalWindow = document.querySelector('.backdrop');

  function setDuration() {
    setTimeout(function () {
      modalWindow.style.transitionDuration = '250ms';
    }, 500);
  }

  setDuration();
});
