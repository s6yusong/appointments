import { Component, OnInit } from '@angular/core';
import {AppointmentsServieService} from "../services/appointments-servie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {

  constructor(private service: AppointmentsServieService, private route: ActivatedRoute) { }
  appointmentData: any;
  loading: boolean = true;
  errorMsg: string = '';
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.loadData().subscribe(response =>{
      this.appointmentData = this.getAppointment(response, id)[0];
      if (!this.appointmentData) {
        this.errorMsg = 'Appointment not found.'
      }
      this.loading = false;
    });
  }
  getAppointment(data, id) {
    return data.filter(item => item.id == id);
  }

}
