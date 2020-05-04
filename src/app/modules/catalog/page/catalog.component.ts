import {Component, OnDestroy, OnInit} from '@angular/core';
import {CocktailModel, Drinks, DrinksModel} from '../../../shared/models/cocktail.model';
import {Subscription} from 'rxjs';
import {CocktailService} from '../../../core/services/cocktail.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  categories = ['Ordinary Drink', 'Cocktail', 'Milk \/ Float \/ Shake', 'Cocoa', 'Shot',
    'Coffee \/ Tea', 'Homemade Liqueur', 'Punch \/ Party Drink', 'Beer', 'Soft Drink \/ Soda'];
  cocktails: CocktailModel[];
  subscriptions: Subscription = new Subscription();
  drinks: Array<Drinks> = [];
  constructor(
    private cocktailService: CocktailService
  ) {}
  ngOnInit(): void {
    for (const category of this.categories) {
      this.subscriptions.add(
        this.cocktailService.getCocktailsByCategory('', category).subscribe(
          (data: DrinksModel) => {
            this.cocktails = data.drinks;
            this.drinks.push(new Drinks(category, this.cocktails));
          }
        )
      );
    }
    this.drinks.sort();
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
