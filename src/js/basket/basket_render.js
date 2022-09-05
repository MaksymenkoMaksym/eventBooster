import { refs } from "../refs";

export function renderBasketMarkup(data) {
  if (!data) {
    return
  }
  let markup = '';
  let uniqId = [];
  let uniqArrId = [];
  for (const el of data) {
    if (uniqId.includes(el.id)) {
      continue
    }
    uniqId.push(el.id);
    uniqArrId.push(el);
  }

  uniqArrId.forEach((item) => {
    let count = 0;
    let { name, images, country: nameCountry, city: nameCity, id: eventId, newPostKey } = item;

    data.forEach((value) => {
      if (value.id === item.id) {
        count += 1;
      }
    })

    markup += `<li class="event__item" data-id="${eventId}"><div class="event__container">
    <img src=${smallestPhoto(images)} class="event__img"><div class="event__box">
    <span class="event__quantity">x${count}</span>
    </div><div class="event__thumb">
    <p class="event__text">${name}</p>
    <div class="location__container">
      <svg class="location_icons" width="6" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M3 0C1.346 0 0 1.403 0 3.128 0 5.296 3.003 9 3.003 9S6 5.19 6 3.128C6 1.403 4.654 0 3 0Zm.905 4.044c-.25.26-.577.39-.905.39a1.25 1.25 0 0 1-.905-.39c-.5-.52-.5-1.367 0-1.887a1.246 1.246 0 0 1 1.81 0c.5.52.5 1.367 0 1.887Z"/></svg>
      <p class="location__text">${nameCity}, ${nameCountry}</p>
      </div></div>
      <button type="button" class="basket__button--close" data-key="${newPostKey}"> </button type="button">
      </li>`;
  })
  refs.basketMarkupContainer.innerHTML = markup;
}

function smallestPhoto(array) {
  let arr = array.filter((array) => {
    if (array.ratio === "3_2") return true;
    return false
  }).sort((a, b) => {
    if (a.width > b.width) return 1;
    return -1
  })
  return arr[0].url
}



