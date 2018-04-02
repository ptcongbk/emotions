import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
  MatToolbarModule, MatIconModule, MatProgressBarModule, MatSliderModule, 
  MatSelectModule, MatProgressSpinnerModule, MatTooltipModule, MatInputModule,
  MatSnackBarModule} from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import * as highchart from 'highcharts';
import * as highchartsHeatmap from 'highcharts/modules/heatmap';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { EmotionService } from './../services/emotion.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotionsComponent } from './emotions/emotions.component';

export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more'); // used for more category of charts
  //const exporting: any = require('highcharts/modules/exporting');
  hcm(hc);
  //highchartsHeatmap(hc);
  //exporting(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmotionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatButtonModule, MatToolbarModule, MatIconModule, MatProgressBarModule, MatSliderModule,
    MatSelectModule, MatProgressSpinnerModule, MatTooltipModule, MatInputModule,  MatSnackBarModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory },
    EmotionService,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
