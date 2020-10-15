import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.querySelector('#theme');
  constructor() {}

  ngOnInit(): void {}

  changeTheme(theme) {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
  }
}
