import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  sideBarOpened: Boolean = true;
  toggleNav(opened) {
    this.sideBarOpened = opened;
  }
}
