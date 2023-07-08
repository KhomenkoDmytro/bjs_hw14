document.addEventListener('DOMContentLoaded', () => {
  let themeMode = document.querySelector('.theme-mode');

  themeMode.addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'light');
    }
    changeThemeMode();
  });

  function changeThemeMode() {
    try {
      let body = document.querySelector('body');
      let refLight = document.querySelector('header .callback-ref > a');
      let iconLight = document.querySelector('header .callback-ref > a > i');
      if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        refLight.classList.add('light-ref');
        iconLight.classList.add('light-icon');
        themeMode.classList.add('light-ref');

        themeMode.textContent = 'Тема: день';
      } else {
        body.classList.remove('light-theme');
        refLight.classList.remove('light-ref');
        iconLight.classList.remove('light-icon');
        themeMode.classList.remove('light-ref');
        themeMode.textContent = 'Тема: ночь';
      }
    } catch {}
  }
  changeThemeMode();
});
