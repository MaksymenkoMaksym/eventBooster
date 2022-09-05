import { Notify } from 'notiflix';
import { refs } from '../refs';
import { onClickModalBuyBtn } from "./mini-modal"
import { auth, writeNewPost, removeEventFromDatabase } from '../geo/log'


export function dataToCart(data) {
  const mini = {
    id: data.id,
    name: data.name,
    images: data.images,
    country: data._embedded.venues[0].country.name,
    city: data._embedded.venues[0].city.name,
    address: data._embedded.venues[0].address.line1,
    concertHall: data._embedded.venues[0].name,
  };
  refs.modalBuyBtn = document.querySelectorAll('.js-buy-btn');

  refs.modalBuyBtn.forEach(elem => {
    elem.addEventListener("click", () => {
      if (!auth.currentUser) {
        Notify.warning("This option only for registered users! Please register!")
        return
      }
      onClickModalBuyBtn(mini);
      //відсилаємо дані на сервер
      const newPostKey = writeNewPost(mini);
      //встановлюємо таймер на автовидалення події з сервера через  1 хв
      /*
       const delayToRemove = 60000;
       const timerId = setTimeout(() => {
         removeEventFromDatabase(auth, newPostKey)
           .then(() => Notify.success('Time is over. Event removed from basket'))
       }, delayToRemove, auth, newPostKey);
       */
    });

  });

}
