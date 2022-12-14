import notiflix, { Notify } from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  update,
  push,
  onValue,
  off,
} from 'firebase/database';
//
import { clearAfterSignOut, updateBasket } from '../basket/basket'; //clean basket
import { off } from 'process';
//Файл настройок для ФАЯБЕЙЗА з акаунту
const firebaseConfig = {
  apiKey: 'AIzaSyA1qR_n73lnbDIB96TfK_yMCuERhUDCeuA',
  authDomain: 'image-search-6ffc6.firebaseapp.com',
  databaseURL:
    'https://image-search-6ffc6-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'image-search-6ffc6',
  storageBucket: 'image-search-6ffc6.appspot.com',
  messagingSenderId: '994814055923',
  appId: '1:994814055923:web:2086f5ea88785c66926e86',
};
// Initialize Firebase в коді на сайті
const app = initializeApp(firebaseConfig);
// створння сутності для реєстрації
export const auth = getAuth(app);
// створння сутності для реєстрації через гугл
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
//створння сутності для доступ до БД
const database = getDatabase(app);
//шлях до БД
const dbRef = ref(database);
//
const userId = auth?.currentUser?.uid;
//==========================================================

//отримуємо доступ до кнопки входу в аккаунт і шапки сайту для створення дин. розмітки
const signOutBtn = document.querySelector('.js-sign-out');
const logBtn = document.querySelector('.js-sign');
const header = document.querySelector('header');
//слухаємо кнопку входу в аккаунт
logBtn.addEventListener('click', createForm);

// Динамічно створбємо форму реєстрації
function createForm() {
  // створюємо темплейт розмітки
  let tmp = getAuthForm();
  //додаєм розмітку
  header.insertAdjacentHTML('beforeend', tmp);
  //оримуємо доступ до створених динамічно елементів
  const refAuth = {
    signUp: document.querySelector('.js-signup-btn'),
    signIn: document.querySelector('.js-signin-btn'),
    authCloseBtn: document.querySelector('.js-auth-close'),
    authBlock: document.querySelector('.js-auth-backdrop'),
    googleSignBtn: document.querySelector('.js-signup-btn-google'),
  };
  //закриття модалки реєстрації по кліку на бекдроп, ескейп, кнопку-хрестик
  refAuth.authCloseBtn.addEventListener('click', () =>
    refAuth.authBlock.remove()
  );
  window.addEventListener('keydown', e =>
    e.code === 'Escape' ? refAuth.authBlock.remove() : null
  );
  refAuth.authBlock.addEventListener('click', e =>
    e.currentTarget === e.target ? refAuth.authBlock.remove() : null
  );
  //входим в аккаунт або рєструємся
  refAuth.signUp.addEventListener('click', signUpUser);
  refAuth.signIn.addEventListener('click', logInUser);
  refAuth.googleSignBtn.addEventListener('click', googleSignIn);
  // refAuth.googleSignBtn.addEventListener("click", githubAuth);
}

//==================створюємо
//вхід юзера
function logInUser() {
  // першкоджаєм оновлення сторінки на подію сабміт(====*)
  event.preventDefault();
  // отримуємо значення інпутів форми
  const logForm = document.querySelector('.js-registration-form');
  const password = logForm.password.value;
  const email = logForm.email.value;
  // формула фаєрбейс для реєстрації по email, password
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      let uid = user.uid;
      // console.log(user);
      // ...
      notiflix.Notify.success(`User #${uid} logged`);
      //показуємо кнопку виходу і додаємо слухач
      signOutBtn.classList.remove('js-hidden');
      signOutBtn.addEventListener('click', userAway);
      //ховаємо кнопку входу і знімаємо слухач
      logBtn.removeEventListener('click', createForm);
      logBtn.classList.add('js-hidden');
      //закриваємо форму реєстрації
      document.querySelector('.js-auth-backdrop').remove();
      // console.log(user);
    })
    .catch(error => {
      notiflix.Notify.failure(`User not found`);
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//вихід юзера з аккаунту
function userAway(params) {
  signOut(auth)
    .then(() => {
      notiflix.Notify.info('Sign-out successful');
      //ховаємо кнопку виходу і знімаємо слухач
      signOutBtn.classList.add('js-hidden');
      signOutBtn.removeEventListener('click', userAway);
      //показуємо кнопку входу і додаємо слухач
      logBtn.addEventListener('click', createForm);
      logBtn.classList.remove('js-hidden');
      // Sign-out successful.

      clearAfterSignOut();
      off(ref(database, 'users/' + userId));
    })
    .catch(error => {
      notiflix.Notify.failure(`${error.message}`);
      // An error happened.
    });
}

//создание юзра
async function signUpUser() {
  try {
    event.preventDefault();
    //отримання даних з форми
    const logForm = document.querySelector('.js-registration-form');
    const password = logForm.password.value;
    const email = logForm.email.value;
    //створення юзера за допомогою мила і паролю
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    notiflix.Notify.success(`New accaunt created. Sign in please!`);
  } catch (error) {

    notiflix.Notify.failure(`${(error.code, error.message)}`);
  }
}

//===========================БД
// запис в базу даних повний перезапис всіх данних за значнням ключа
export function removeEventFromDatabase(auth, newPostKey) {
  const userId = auth?.currentUser?.uid;
  return set(ref(database, 'users/' + userId + '/' + newPostKey), null);
}
//
export function removeAllEvents() {
  const userId = auth?.currentUser?.uid;
  return set(ref(database, 'users/' + userId), null)
    .then(() => Notify.success('All events removed from basket'));
}
//читаєм базу данних - запрос на сервер
export async function readDataFromServer(auth) {
  try {
    const path = auth.currentUser.uid;
    const snapshot = await get(child(dbRef, `users/${path}`));

    if (snapshot.exists()) {
      return Promise.resolve(Object.values(snapshot.val()));
    }
  } catch (error) {
    console.log(error);
  }

}

//Доповнення інформації без витирання внесеної інформації
export function writeNewPost(mini) {
  try {
    const userId = auth?.currentUser?.uid;
    const db = getDatabase(app);
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), `users/`)).key;
    mini.newPostKey = newPostKey;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    // updates['/posts/' + newPostKey] = postData;
    updates['users/' + userId + '/' + newPostKey] = mini;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    update(ref(db), updates).then(() => Notify.success('Event added to basket'));
    return newPostKey;
  } catch (error) {
    Notify.failure(`${error.message}`)
  }
}



//=================================================
//створення розмітки форми по натиску
export function getAuthForm() {
  return `<div class="backdrop js-auth-backdrop">
  <!-- is-hidden -->
  <div class="reg-modal animate__animated animate__zoomInDown">
    <button type="button" class="modal__close-btn js-auth-close">
    x
    </button>
    <form class="registration__form js-registration-form" id="log-form">
      <div class="reg_textfield reg__float-label">
        <label class="registration__label" for="email">Email</label>
        <input
          type="email"
          class="registration__input"
          id="email"
          name="email"
          placeholder="Write your email"
          required
        />
      </div>
      <div class="reg_textfield reg__float-label">
        <label class="registration__label" for="password">Password</label>
        <input
          type="password"
          class="registration__input input__mar"
          id="password"
          name="password"
          placeholder="Write your password"
          required
        />
      </div>
      <button type="submit" class="modal__btn-sign-in js-signin-btn">
        <span class="signin__btn-text">Sign in</span>
      </button>
      <button type="button" class="modal__btn-sign-up js-signup-btn">
        <span class="signup__btn-text">Registration</span>
      </button>
      <button type="button" class="modal__btn-sign_google js-signup-btn-google">
        <span class="signup__btn-text">Sign in with Google</span>
      </button>
    </form>
  </div>
</div>`;
}
//слухач чи юзер авторизований чи ні
onAuthStateChanged(auth, user => {
  if (user) {
    logBtn.classList.add('js-hidden');
    signOutBtn.classList.remove('js-hidden');
    signOutBtn.addEventListener('click', userAway);
    //===== додаємо слухача БД по заданому шляху
    const userId = auth.currentUser.uid;
    const starCountRef = ref(database, 'users/' + userId);
    onValue(starCountRef, (snapshot) => {
      let data = null;
      if (snapshot.exists()) {
        data = Object.values(snapshot.val());
      }
      updateBasket(data)
    });
  } else {
    logBtn.addEventListener('click', createForm);
    logBtn.classList.remove('js-hidden');
    signOutBtn.classList.add('js-hidden');
  }
});

//ГУГЛ
function googleSignIn() {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      document.querySelector('.js-auth-backdrop').remove();
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
