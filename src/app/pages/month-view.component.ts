import { Component, OnInit } from '@angular/core';
import {AppointmentsServieService} from "../services/appointments-servie.service";
import {select, Store} from "@ngrx/store";
import * as fromStore from "../store";
import {UtilsService} from "../services/utils.service";

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  constructor(private service: AppointmentsServieService, private store: Store<fromStore.AppointmentsState>, private utils: UtilsService) {}

  selectedDate: string[];
  tableData=[];
  selectionData: string[] = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  selectionTitle: string = 'Month';

  ngOnInit() {
    this.store.pipe(select(fromStore.getSelectedMonth)).subscribe(data => {
      this.selectedDate = data;
      this.service.loadData().subscribe(data =>{
        this.tableData = this.utils.editData(data);
      });
    })
  }
}
