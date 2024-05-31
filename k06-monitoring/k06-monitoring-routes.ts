import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { K06MonitoringComponent } from './k06-monitoring.component';

const routes: Routes = [
  {
    path: '',
    component: K06MonitoringComponent,
    data: {
      title: 'k06Monitoring'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class K06MonitoringRoutingModule {}
