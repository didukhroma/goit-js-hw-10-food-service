//--------------------Import
import menu from '../JSON/menu.json';
import menuTemplate from '../template/menuItem.hbs';
//--------------------Refs
const listRef = document.querySelector('.js-menu');
//--------------------Add markup to HTML
const menuMarkup = menuTemplate(menu);
listRef.insertAdjacentHTML('beforeend', menuMarkup);
