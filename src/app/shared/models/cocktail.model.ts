export interface DrinksModel {
  drinks: Array<CocktailModel>;
}
export interface CocktailModel {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
}
export class Drinks {

  constructor(category: string, drink: Array<CocktailModel>) {
    this.category = category;
    this.drink = drink;
  }
  category: string;
  drink: Array<CocktailModel>;
}
