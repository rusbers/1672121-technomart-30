// MAP POPUP

const mapOpenPopup = document.querySelector('.localization');
const mapPopup = document.querySelector('.modal-map');
const MapCloseButton = document.querySelector('.modal-close--map');

mapOpenPopup.addEventListener('click', function(evt){
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

MapCloseButton.addEventListener('click', function(evt){
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

// FEEDBACK FORM POPUP

const feedbackOpenPopup = document.querySelector('.location-btn');
const feedbackPopup = document.querySelector('.modal-feedback');
const FeedbackCloseButton = document.querySelector('.modal-close--feedback');
const username = document.querySelector('.username');
const userEmail = document.querySelector('.user-email');
const feedbackForm = document.querySelector('.feedback-form');
const nameStorage = localStorage.getItem('userName');

feedbackOpenPopup.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');
  if(nameStorage){
    username.value = nameStorage;
    userEmail.focus();
  } else{
    username.focus();
  };
});
FeedbackCloseButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-show');
  feedbackPopup.classList.remove('modal-error');
});
feedbackForm.addEventListener('submit', function(evt){
  if(!username.value || !userEmail.value){
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  } else{
    localStorage.setItem('userName', username.value);
  };
});

window.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains('modal-show')){
      evt.preventDefault();
      feedbackPopup.classList.remove('modal-show');
      feedbackPopup.classList.remove('modal-error');
    }
    if (mapPopup.classList.contains('modal-show')){
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
    }
    if (addToCartPopup.classList.contains('modal-show')){
      evt.preventDefault();
      addToCartPopup.classList.remove('modal-show');
    }
  }
});

// ADD TO CART POPUP

const buyButton = document.querySelectorAll('.button-buy');
const addToCartPopup = document.querySelector('.modal-add-to-cart');
const addToCartPopupClose = document.querySelector('.modal-add-to-cart--close');
const continueShopping = document.querySelector('.continue-shopping');

for(let allToCartBtn of buyButton)
  allToCartBtn.addEventListener('click', function(allToCartBtn){
    allToCartBtn.preventDefault();
    addToCartPopup.classList.add('modal-show');
});

addToCartPopupClose.addEventListener('click', function(evt){
    evt.preventDefault();
    addToCartPopup.classList.remove('modal-show');
});

continueShopping.addEventListener('click', function(evt){
    evt.preventDefault();
    addToCartPopup.classList.remove('modal-show');
});

// MAIN SLIDER

const leftArrow = document.querySelector('.arrow-prev');
const rightArrow = document.querySelector('.arrow-next');
const dot1 = document.querySelector('.slider-dot-1');
const dot2 = document.querySelector('.slider-dot-2');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');

leftArrow.addEventListener("click", function () {
  slide1.classList.toggle("current-slide"), slide2.classList.toggle("current-slide"), dot1.classList.toggle("dot--current"), dot2.classList.toggle("dot--current");
});

rightArrow.addEventListener("click", function () {
  slide1.classList.toggle("current-slide"), slide2.classList.toggle("current-slide"), dot1.classList.toggle("dot--current"), dot2.classList.toggle("dot--current");
});

dot1.addEventListener("click", function () {
  dot1.classList.add("dot--current"), dot2.classList.remove("dot--current"), slide1.classList.add("current-slide"), slide2.classList.remove("current-slide");
});
dot2.addEventListener("click", function () {
  dot2.classList.add("dot--current"), dot1.classList.remove("dot--current"), slide2.classList.add("current-slide"), slide1.classList.remove("current-slide");
});

// TABS

const serviceBtn1 = document.querySelector('.service-btn__delivery');
const serviceBtn2 = document.querySelector('.service-btn__guarantee');
const serviceBtn3 = document.querySelector('.service-btn__credit');
const delivery = document.querySelector('.delivery__slide');
const guarantee = document.querySelector('.guarantee__slide');
const credit = document.querySelector('.credit__slide');

serviceBtn1.addEventListener('click', function(evt){
  evt.preventDefault(evt);
  serviceBtn1.classList.add('service-btn--active');
  delivery.classList.add('services-slider-item--active');
  serviceBtn2.classList.remove('service-btn--active');
  serviceBtn3.classList.remove('service-btn--active');
  guarantee.classList.remove('services-slider-item--active');
  credit.classList.remove('services-slider-item--active');
});

serviceBtn2.addEventListener('click', function(evt){
  evt.preventDefault(evt);
  serviceBtn2.classList.add('service-btn--active');
  guarantee.classList.add('services-slider-item--active');
  serviceBtn1.classList.remove('service-btn--active');
  serviceBtn3.classList.remove('service-btn--active');
  delivery.classList.remove('services-slider-item--active');
  credit.classList.remove('services-slider-item--active');
});

serviceBtn3.addEventListener('click', function(evt){
  evt.preventDefault(evt);
  serviceBtn3.classList.add('service-btn--active');
  credit.classList.add('services-slider-item--active');
  serviceBtn1.classList.remove('service-btn--active');
  serviceBtn2.classList.remove('service-btn--active');
  delivery.classList.remove('services-slider-item--active');
  guarantee.classList.remove('services-slider-item--active');
});
