import { Component, OnInit } from '@angular/core';
import { ScoreTableStore } from "../../core/stores/score-table.store";

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  constructor(
    public store: ScoreTableStore,
  ) { }

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

  ngOnInit(): void { }

}
