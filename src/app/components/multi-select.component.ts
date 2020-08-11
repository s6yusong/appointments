import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import * as fromStore from "../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() dataList
  @Input() title
  @Input() selectedDate
  selectionData = new FormControl();
  selectedValue


  constructor(private store: Store<fromStore.AppointmentsState>) { }

  ngOnInit(): void {
    this.selectedValue = this.selectedDate;
  }
  getSelectedValue() {
    if (this.title === 'Years') {
      this.store.dispatch((new fromStore.ChangeYear(this.selectedValue)));
    } else {
      this.store.dispatch((new fromStore.ChangeMonth(this.selectedValue)));
    }

  }
}
