import { Component, OnInit } from '@angular/core';
import { ScoreTableService } from "../../core/services/score-table.service";
import Category from "../../core/models/Category";
import { computed } from "mobx-angular";

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  constructor(
    private scoreTableService: ScoreTableService,
  ) { }

  public categories: Category[] = [];
  public columnsToDisplay = [
    'category',
    'points',
    'multiplier',
    'needed',
    'recorded',
    'owned',
    'total',
    'score',
    'basic',
    'bonus',
    'final',
  ];

  @computed get totalPoints() {
    return this.categories.reduce((pv, cv) => pv + cv.points, 0);
  }

  @computed get totalBasicScore() {
    return this.categories.reduce((pv, cv) => pv + cv.basicScore, 0);
  }

  @computed get totalBonusScore() {
    return this.categories.reduce((pv, cv) => pv + cv.bonusScore, 0);
  }

  @computed get totalFinalScore() {
    return this.totalBasicScore + this.totalBonusScore;
  }

  ngOnInit(): void {
    this.categories = this.scoreTableService.getCategories();
  }

}
