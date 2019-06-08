import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [

    DashboardComponent,
    ConfigComponent,


  ],
  exports: [

    DashboardComponent,
    ConfigComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
