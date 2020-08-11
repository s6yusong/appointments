import {Component, Input, OnInit} from '@angular/core';
import {Router, NavigationStart} from '@angular/router'
import {select, Store} from "@ngrx/store";
import * as fromStore from "../store";

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  @Input() opened: boolean;
  routeUrl: string;
  constructor(private router: Router, private store: Store<fromStore.AppointmentsState>) {
  }
  getSelectedClass(routeName) {
    if (this.routeUrl) {
      return this.routeUrl.indexOf(routeName) > 0 ? 'item-focus' : '';
    }
    return '';
  }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.routeUrl = val.url;
      }
    });
  }

}
