import {Component, OnInit, ViewChild} from '@angular/core';
import { ScoreTableStore } from "../../core/stores/score-table.store";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-calculate-points',
  templateUrl: './calculate-points.component.html',
  styleUrls: ['./calculate-points.component.css']
})
export class CalculatePointsComponent implements OnInit {

  constructor(
    public store: ScoreTableStore,
  ) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.store.points.sort = this.sort;
  }

  public columnsToDisplay = [
    'greatTreasures',
    'spells',
    'fame',
    'notoriety',
    'gold',
    'totalScore',
  ];

  ngOnInit(): void {
  }

}
