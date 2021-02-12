//-------------------THEME
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//-------------------REFS
const bodyRef = document.querySelector('body');
const switcherRef = document.querySelector('#theme-switch-toggle ');
//-----------------------------------------
const themeLocalStorage = localStorage.getItem('theme');
bodyRef.classList.add(Theme.LIGHT);
//-----------------------------------------
switcherRef.addEventListener('change', e => {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
});
