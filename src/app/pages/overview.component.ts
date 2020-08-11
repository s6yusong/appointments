import {Component, OnInit} from '@angular/core';
import {AppointmentsServieService} from "../services/appointments-servie.service";
import {select, Store} from "@ngrx/store";
import * as fromStore from "../store";
import {UtilsService} from "../services/utils.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private service: AppointmentsServieService, private store: Store<fromStore.AppointmentsState>, private utils: UtilsService) {}

  selectedDate: string[];
  tableData=[];
  selectionData: string[] = ['2018', '2019'];
  selectionTitle: string = 'Years';

  ngOnInit() {
    this.store.pipe(select(fromStore.getSelectedYears)).subscribe(data => {
      this.selectedDate = data;
      this.service.loadData().subscribe(data =>{
        this.tableData = this.utils.editData(data);
      });
    });
  }
}
