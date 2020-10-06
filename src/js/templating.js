import menuItems from '../menu.json';
import menuItemsTpl from '../templates/menu.hbs';
import '../css/styles.css';

const refs = {
  menuContainer: document.querySelector('.js-menu'),
};

const markup = menuItems.map(menuItem => menuItemsTpl(menuItem)).join('');
refs.menuContainer.insertAdjacentHTML('beforeend', markup);
