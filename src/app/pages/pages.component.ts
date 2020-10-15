import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  linkTheme = document.querySelector('#theme');

  constructor() {}

  ngOnInit(): void {
    this.linkTheme.setAttribute('href', './assets/css/colors/default-dark');
    const urlTheme = localStorage.getItem('theme');
    this.linkTheme.setAttribute('href', urlTheme);
  }
}
