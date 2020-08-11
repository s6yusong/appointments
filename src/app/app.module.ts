import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HeaderComponent } from './components/header.component';
import { NavSidebarComponent } from './components/nav-sidebar.component';
import { OverviewComponent } from './pages/overview.component';
import { MonthViewComponent } from './pages/month-view.component';
import { DetailsViewComponent } from './pages/details-view.component';
import { AppointmentsTableComponent } from './components/appointments-table.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { MultiSelectComponent } from './components/multi-select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavSidebarComponent,
    OverviewComponent,
    MonthViewComponent,
    DetailsViewComponent,
    AppointmentsTableComponent,
    MultiSelectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('appointments', reducers),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
