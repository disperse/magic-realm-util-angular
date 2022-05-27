import type Categories from "./Categories";

export default class Category {
  id: number;
  category: Categories;
  multiplier: number;
  hasRecorded: boolean;
  hasOwned: boolean;
  points: number;
  recorded: number;
  owned: number;

  constructor(
    id: number,
    category: Categories,
    multiplier: number,
    hasOwned?: boolean,
    hasRecorded?: boolean
  ) {
    this.id = id;
    this.category = category;
    this.multiplier = multiplier;
    this.hasRecorded = hasRecorded ?? true;
    this.hasOwned = hasOwned ?? false;
    this.points = 0;
    this.recorded = 0;
    this.owned = 0;
  }
  /* Class methods */
  private calcNeeded(points: number) {
    return points * this.multiplier;
  }
  private calcScore(points: number) {
    const score = this.recorded + this.owned - this.calcNeeded(points);
    return score < 0 ? score * 3 : score;
  }
  private calcBasicScore(points: number) {
    return Math.floor(this.calcScore(points) / this.multiplier);
  }
  private calcBonusScore(points: number) {
    return this.calcBasicScore(points) * points;
  }
  public calcFinalScore(points: number) {
    return this.calcBasicScore(points) + this.calcBonusScore(points);
  }
  /* Getters */
  public get needed() {
    return this.calcNeeded(this.points);
  }
  public get score() {
    return this.calcScore(this.points);
  }
  public get total() {
    return this.recorded + this.owned;
  }
  public get basicScore() {
    return this.calcBasicScore(this.points);
  }
  public get bonusScore() {
    return this.calcBonusScore(this.points);
  }
  public get finalScore() {
    return this.calcFinalScore(this.points);
  }
}
