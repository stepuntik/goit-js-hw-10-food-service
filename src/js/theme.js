const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-toggle');

// при первичной загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;

  body.className = Theme.LIGHT;

  if (currentTheme === Theme.DARK) {
    themeSwitch.checked = true;
    body.className = Theme.DARK;
  }
});

themeSwitch.addEventListener('change', switchTheme);

function switchTheme() {
  //   let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
  let newTheme = themeSwitch.checked ? Theme.DARK : Theme.LIGHT;

  body.className = newTheme;

  localStorage.setItem('theme', newTheme);
}
