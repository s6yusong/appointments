import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: String = '@yue song';

  sideBarOpened: Boolean = true;
  @Output() toggleNav: EventEmitter<any> = new EventEmitter<boolean>();
  toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.toggleNav.emit(this.sideBarOpened);
  }

  constructor() { }

  ngOnInit() {
  }

}
