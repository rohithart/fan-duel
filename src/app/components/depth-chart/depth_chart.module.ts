import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { DepthChartComponent } from './depth_chart.component';

@NgModule({
  declarations: [DepthChartComponent],
  imports: [SharedModule],
  exports: [DepthChartComponent]
})
export class DepthChartModule {

}
