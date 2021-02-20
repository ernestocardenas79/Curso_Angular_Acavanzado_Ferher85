import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  constructor() {
    console.log('settings Service');
    this.linkTheme.setAttribute('href', './assets/css/colors/default-dark');
    const urlTheme = localStorage.getItem('theme');
    this.linkTheme.setAttribute('href', urlTheme);
  }
  changeTheme(theme) {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach((elm) => {
      elm.classList.remove('working');
      const btnTheme = elm.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (currentTheme === btnThemeUrl) {
        elm.classList.add('working');
      }
    });
  }
}
