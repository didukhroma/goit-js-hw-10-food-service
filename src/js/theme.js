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
if (themeLocalStorage === null) {
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
} else if (themeLocalStorage === 'dark-theme') {
  bodyRef.classList.add(Theme.DARK);
  switcherRef.checked = 'true';
}
//-----------------------------------------
switcherRef.addEventListener('change', e => {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    switcherRef.checked = 'true';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
