import { Injectable } from "@angular/core";

import combinations from "../functions/combinations";

import Categories from "../models/Categories";
import Category from "../models/Category";
import PointArray from "../models/PointArray";
import { MatTableDataSource } from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class ScoreTableStore {

  public tortureTestRunning = false;

  public points: MatTableDataSource<PointArray> = new MatTableDataSource<PointArray>();

  public categories: Category[] = [
    new Category(0, Categories.GreatTreasures, 1, true, false),
    new Category(1, Categories.Spells, 2),
    new Category(2, Categories.Fame, 10, true),
    new Category(3, Categories.Notoriety, 20, true),
    new Category(4, Categories.Gold, 30, true),
  ];

  private generator: Generator<number[]> = combinations([0, 1, 2, 3, 4, 5], 5);

  public getPointsTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.points;
    return this.categories.reduce(reducer, 0);
  }

  public getBasicScoreTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.basicScore;
    return this.categories.reduce(reducer, 0);
  }

  public getBonusScoreTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.bonusScore;
    return this.categories.reduce(reducer, 0);
  }

  public getFinalScore(): number {
    return this.getBasicScoreTotal() + this.getBonusScoreTotal();
  }

  public setRandomValues() {
    let remaining = 5;
    this.categories
      .sort(() => (Math.random() < 0 ? -1 : 1))
      .forEach((category) => {
        const points = Math.floor(Math.random() * (remaining + 1));
        category.points = points;
        remaining -= points;
        if (category.hasOwned) {
          category.owned = Math.floor(
            (Math.random() * 8 - 2) * category.multiplier
          );
        }
        if (category.hasRecorded) {
          category.recorded = Math.floor(
            (Math.random() * 8 - 2) * category.multiplier
          );
        }
      });
  }

  toggleTortureTest() {
    const randomTime = () => {
      this.setRandomValues();
      if (this.tortureTestRunning) {
        const timeOut = Math.round(Math.random() * 150) + 50;
        setTimeout(randomTime, timeOut);
      }
    };
    if (this.tortureTestRunning) {
      this.tortureTestRunning = false;
    } else {
      this.tortureTestRunning = true;
      randomTime();
    }
  }

  calculateNext() {
    const { value, done } = this.generator.next();
    if (value && value.length && !done) {
      this.addPoints(value);
    }
  }

  calculateAll() {
    let go = true;
    do {
      const { value, done } = this.generator.next();
      go = !done;
      if (!done && value) {
        this.addPoints(value);
      }
    } while (go);
  }

  addPoints(pointArray: number[]) {
    this.points.data = [...this.points.data,
      new PointArray(this.points.data.length, pointArray, this.categories)
    ];
  }

}
