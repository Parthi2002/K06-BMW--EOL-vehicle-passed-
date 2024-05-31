import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { K06MonitoringComponent } from './k06-monitoring.component';
import { K06MonitoringRoutingModule  } from './k06-monitoring-routes'
import { AngularMaterialModule } from '../../angular-material.module';



@NgModule({
  declarations: [K06MonitoringComponent],
  imports: [
    CommonModule,
    K06MonitoringRoutingModule,
    AngularMaterialModule
  ]
})
export class K06MonitoringModule { }
