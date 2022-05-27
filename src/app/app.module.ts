import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { RulesViewComponent } from './rules-view/rules-view.component';
import { ScoreViewComponent } from './score-view/score-view.component';
import { ScoreTableComponent } from './score-view/score-table/score-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { CalculatePointsComponent } from './score-view/calculate-points/calculate-points.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    RulesViewComponent,
    ScoreViewComponent,
    ScoreTableComponent,
    CalculatePointsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
