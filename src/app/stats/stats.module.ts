import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsPage } from './stats.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { StatsPageRoutingModule } from './stats-routing.module';
import {NgChartsModule} from "ng2-charts";
import {ProgressBarModule} from "angular-progress-bar";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    StatsPageRoutingModule,
    NgChartsModule,
    ProgressBarModule
  ],
  declarations: [StatsPage]
})
export class StatsPageModule {}
