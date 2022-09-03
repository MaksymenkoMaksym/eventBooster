import notiflix from 'notiflix'
import { refs } from '../refs';
import { onClickModalBuyBtn } from "./mini-modal"
import { writeNewPost } from '../geo/log'
import { auth } from '../geo/log'

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
  console.log(mini);
  refs.modalBuyBtn = document.querySelectorAll('.js-buy-btn');

  refs.modalBuyBtn.forEach(elem => {
    elem.addEventListener("click", () => {
      if (!auth.currentUser) {
        notiflix.Notify.warning("This option only for registered users! Please register!")
        return
      }
      writeNewPost(mini);
      onClickModalBuyBtn(mini);
    });

  });

}
