import { refs } from "../refs";
import { userBasket, ESC_KEY_CODE, onBasketShow, addToLocalStorage } from "./basket";
import { closeModal } from "../modal"
export { onClickModalBuyBtn }

function onClickModalBuyBtn(data) {
    refs.miniModal.classList.toggle("hidden");

    userBasket.addEvent(data);
    userBasket.increaseStandardQuantity()
    userBasket.isBasketEmpty = false;

    addToLocalStorage(userBasket);

    refs.miniModalBtnClose.addEventListener("click", removeListenersMiniModal);
    refs.miniModalBtnCart.addEventListener("click", onClickMiniModalBtnOpenBasket);

    window.addEventListener("keydown", onEscKeyPressOnClickBackdropMiniModal);
    refs.miniModalBackdrop.addEventListener("click", onEscKeyPressOnClickBackdropMiniModal);

    //показуємо над іконкою корзини загальну к-кість білетів
    refs.basketContainerHead.classList.remove("hidden")
    refs.basketNumHead.textContent = userBasket.totalQuantity;
}


function onEscKeyPressOnClickBackdropMiniModal(event) {
    if (event.code === ESC_KEY_CODE || event.currentTarget === event.target) {
        removeListenersMiniModal()
    }
}


function onClickMiniModalBtnOpenBasket(event) {
    removeListenersMiniModal();
    closeModal();
    onBasketShow();
}

function removeListenersMiniModal() {
    refs.miniModal.classList.toggle("hidden");
    refs.miniModalBackdrop.removeEventListener("click", onEscKeyPressOnClickBackdropMiniModal);
    refs.miniModalBtnClose.removeEventListener("click", removeListenersMiniModal);
    refs.miniModalBtnCart.removeEventListener("click", onClickMiniModalBtnOpenBasket);
    window.removeEventListener("keydown", onEscKeyPressOnClickBackdropMiniModal);
}



/*
<div class="mini-modal-backdrop"> 
  <div class="mini-modal"> 
    <div class="mini-modal__container"> 
      <button class="mini-modal__button"> GO TO CART </button> 
      <p class="mini-modal__text">Your ticket order will be available in the cart for 15 minutes.</p> 
      <button class="mini-modal__close" type="button"> CONTINUE BOOKING </button> 
     </div> 
  </div>
</div>
*/