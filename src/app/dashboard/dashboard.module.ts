import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {NgChartsModule} from "ng2-charts";
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ExploreContainerComponentModule,
    NgChartsModule,
    ProgressBarModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
