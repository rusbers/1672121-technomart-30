const mapOpenPopup = document.querySelector('.localization');
const mapPopup = document.querySelector('.modal-map');
const closeButton = document.querySelectorAll('.modal-close');

mapOpenPopup.addEventListener('click', function(evt){
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

closeButton.addEventListener('click', function(evt){
  evt.preventDefault();
  console.log('TEST');
  mapPopup.classList.remove('modal-show');
});
