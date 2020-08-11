import {Component, Input, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import { Store, select } from '@ngrx/store';

import * as fromStore from '../store';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  styleUrls: ['./appointments-table.component.scss']
})
export class AppointmentsTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource;
  tableData=[];

  @Input() appointments;
  @Input() selectedDate;
  @Input() view;

  constructor(private store: Store<fromStore.AppointmentsState>, private utils: UtilsService) { }
  ngOnInit() {
    this.dataInit();
  }
  dataInit() {
    this.tableData = this.appointments ;
    this.dataSource = new MatTableDataSource(this.tableData);

    this.displayedColumns = ['subject', 'location', 'date', 'attendees', 'organizer']
    if (this.view === 'Year') {
      this.store.pipe(select(fromStore.getSelectedYears)).subscribe(data => {
        this.tableData = this.dateFilter(data);
        this.dataSource = new MatTableDataSource(this.tableData);
      })
    } else {
      this.store.pipe(select(fromStore.getSelectedMonth)).subscribe(data => {
        this.tableData = this.dateFilter(data);
        this.dataSource = new MatTableDataSource(this.tableData);
      })
    }
  }
  dateFilter(data) {
    const index = this.view === 'Year' ? 1 : 3;
    return this.appointments.filter(item => {
      const dateArr = item.date.date.split('/');
      const date = dateArr[dateArr.length - index];
      return this.view === 'Year' ? data.indexOf(date) > -1 : data.indexOf(this.utils.monthMap[date]) > -1
    })
  }

}
