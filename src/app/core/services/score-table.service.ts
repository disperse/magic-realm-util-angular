import { Injectable } from '@angular/core';
import Categories from "../models/Categories";
import Category from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class ScoreTableService {
  private categories = [
    new Category(0, Categories.GreatTreasures, 1, true, false),
    new Category(1, Categories.Spells, 2),
    new Category(2, Categories.Fame, 10, true),
    new Category(3, Categories.Notoriety, 20, true),
    new Category(4, Categories.Gold, 30, true),
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getPointsTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.points;
    return this.categories.reduce(reducer, 0);
  }

  getBasicScoreTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.basicScore;
    return this.categories.reduce(reducer, 0);
  }

  getBonusScoreTotal(): number {
    const reducer = (pv: number, cv: Category) => pv + cv.bonusScore;
    return this.categories.reduce(reducer, 0);
  }

  getFinalScore(): number {
    return this.getBasicScoreTotal() + this.getBonusScoreTotal();
  }
}
