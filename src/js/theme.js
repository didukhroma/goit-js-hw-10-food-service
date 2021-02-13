//-------------------LOCALE STORAGE
const keyLocalStorage = 'theme';
const themeLocalStorage = localStorage.getItem(keyLocalStorage);
//-------------------THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//-------------------REFS
const refs = {
  bodyRef: document.querySelector('body'),
  switcherRef: document.querySelector('#theme-switch-toggle'),
};
//-------------------FUNCTIONS
function addTheme({ LIGHT, DARK }, value) {
  let addClass = LIGHT;
  let removeClass = DARK;
  if (value === 'darkTheme') {
    addClass = DARK;
    removeClass = LIGHT;
  }
  refs.bodyRef.classList.add(addClass);
  refs.bodyRef.classList.remove(removeClass);
  localStorage.removeItem(keyLocalStorage);
  localStorage.setItem(keyLocalStorage, addClass);
}
//-----------------------------------------------
function themeHandler() {
  if (refs.bodyRef.classList.contains(Theme.LIGHT)) {
    addTheme(Theme, 'darkTheme');
  } else {
    addTheme(Theme);
  }
}
//-----------------------------------------------
function saveTheme() {
  if (themeLocalStorage === null || themeLocalStorage === Theme.LIGHT) {
    addTheme(Theme);
  } else if (themeLocalStorage === Theme.DARK) {
    addTheme(Theme, 'darkTheme');
    refs.switcherRef.checked = 'true';
  }
}
//-----------------------------------------------
function changeTheme() {
  refs.switcherRef.addEventListener('change', e => themeHandler(e));
}
//-----------------------------------------
saveTheme();
changeTheme();
