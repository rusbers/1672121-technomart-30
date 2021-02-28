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
