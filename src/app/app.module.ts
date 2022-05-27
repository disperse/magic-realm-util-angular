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
import { MatTableModule } from "@angular/material/table";
import { MobxAngularModule } from "mobx-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    RulesViewComponent,
    ScoreViewComponent,
    ScoreTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MobxAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
