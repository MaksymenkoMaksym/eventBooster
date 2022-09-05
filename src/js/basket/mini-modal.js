import { refs } from "../refs";
import { ESC_KEY_CODE, onBasketShow } from "./basket";
import { closeModal } from "../modal"

export function onClickModalBuyBtn(data) {
    //робимо мінімодал видимим
    refs.miniModal.classList.toggle("hidden");

    refs.miniModalBtnClose.addEventListener("click", removeListenersMiniModal);
    refs.miniModalBtnCart.addEventListener("click", onClickMiniModalBtnOpenBasket);

    window.addEventListener("keydown", onEscKeyPressOnClickBackdropMiniModal);
    refs.miniModalBackdrop.addEventListener("click", onEscKeyPressOnClickBackdropMiniModal);
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
