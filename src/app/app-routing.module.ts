import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './pages/overview.component'
import { MonthViewComponent } from './pages/month-view.component'
import { DetailsViewComponent } from './pages/details-view.component'


const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: OverviewComponent,
  },
  {
    path: 'month-view',
    component: MonthViewComponent,
  },
  {
    path: 'details-view/:id',
    component: DetailsViewComponent,
  },
  {
    path: '**',
    redirectTo: '/main'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
