import { Notify } from 'notiflix';
import { auth } from '../geo/log'
import { refs } from "../refs";
import { deleteTimer, timerDisplay } from './timer';
import { renderBasketMarkup } from "./basket_render";
import { readDataFromServer, removeAllEvents, removeEventFromDatabase } from '../geo/log'

export const ESC_KEY_CODE = "Escape";

refs.basketHead.addEventListener("click", onBasketShow);
refs.basketMarkupContainer.addEventListener("click", onClickDeleteButton);
refs.basketContinueBookingBtn.addEventListener("click", onBasketClose);
refs.basketBuyBtn.addEventListener("click", onClickBuyBtn);
refs.basketClearBtn.addEventListener("click", onClickClearBtn);

export async function onBasketShow() {
    let answer = null;
    if (auth.currentUser) {
        answer = await readDataFromServer(auth);
    }
    document.body.classList.toggle("no-scroll");
    refs.basketModal.classList.toggle("hidden");

    refs.basketQuantity.textContent = answer ? answer.length : 0;
    refs.basketNum.textContent = answer ? answer.length : 0;

    renderBasketMarkup(answer)

    refs.basketBackdrop.addEventListener("click", onClickBasketBackdrop)
    window.addEventListener("keydown", onEscKeyPressBasket);

    if (answer) {
        refs.basketContainer.classList.remove("hidden");
        onBasketFull(answer);
    } else { onBasketEmpty() }
}


function onBasketEmpty() {
    disabledElement(refs.basketBuyBtn);
    disabledElement(refs.basketClearBtn);

    refs.basketTextFull.classList.add("hidden");
    refs.basketTextEmpty.classList.remove("hidden");
    refs.basketQuantity.innerHTML = ""
    refs.basketNumHead.innerHTML = "";
    refs.basketMarkupContainer.innerHTML = "";
    if (!refs.basketContainer.classList.contains("hidden")) {
        refs.basketContainer.classList.add("hidden");
    }
    if (!refs.basketContainerHead.classList.contains("hidden")) {
        refs.basketContainerHead.classList.add("hidden");
    }
}


function onBasketFull(answer) {
    activeElement(refs.basketBuyBtn);
    activeElement(refs.basketClearBtn);
    refs.basketTextFull.classList.remove("hidden");
    refs.basketTextEmpty.classList.add("hidden");
    answer.length != 1 ? refs.basketTextTicket.textContent = "tickets" : refs.basketTextTicket.textContent = "ticket";
}

export function updateBasket(updatedAnswer) {
    if (!updatedAnswer) {
        onBasketEmpty();
        refs.basketContainerHead.classList.add("hidden");
        disabledElement(refs.basketBuyBtn);
        disabledElement(refs.basketClearBtn);
    } else {
        renderBasketMarkup(updatedAnswer);
        refs.basketQuantity.textContent = updatedAnswer.length;
        refs.basketNum.textContent = updatedAnswer.length;
        refs.basketNumHead.textContent = updatedAnswer.length;
        updatedAnswer.length != 1 ? refs.basketTextTicket.textContent = "tickets" : refs.basketTextTicket.textContent = "ticket";
        refs.basketContainerHead.classList.remove("hidden")
    }
}

function onClickBuyBtn() {
    window.open("https://next.privat24.ua/", '_blank')
    onBasketClose()
}

function onClickClearBtn() {
    refs.basketContainer.classList.add("hidden");
    refs.basketContainerHead.classList.add("hidden");
    removeAllEvents();
    refs.basketQuantity.innerHTML = 0
    refs.basketNumHead.innerHTML = 0
    refs.basketMarkupContainer.innerHTML = "";
    onBasketEmpty();
}

export function clearAfterSignOut() {
    refs.basketQuantity.innerHTML = 0;
    refs.basketNumHead.innerHTML = 0;
    refs.basketMarkupContainer.innerHTML = "";

    refs.basketContainerHead.classList.add("hidden")
    refs.basketContainer.classList.add("hidden")
    onBasketEmpty();
}


function onClickDeleteButton(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    const newPostKey = event.target.dataset.key;
    removeEventFromDatabase(auth, newPostKey)
        .then(() => Notify.success('Ticket deleted'));
}

//not interesing
function activeElement(element) {
    element.disabled = false;
    element.style.color = "#4c00fe";
    element.style.borderColor = "#4c00fe";
}

function disabledElement(element) {
    element.disabled = true;
    element.style.color = "grey";
    element.style.borderColor = "grey";
}

export function onClickBasketBackdrop(event) {
    if (event.currentTarget === event.target) {
        onBasketClose()
    }
}

export function onEscKeyPressBasket(event) {
    if (event.code === ESC_KEY_CODE) {
        onBasketClose()
    }
}

function onBasketClose() {
    refs.basketBackdrop.removeEventListener("click", onClickBasketBackdrop)
    window.removeEventListener("keydown", onEscKeyPressBasket);
    refs.basketModal.classList.toggle("hidden")
    document.body.classList.toggle("no-scroll");
}