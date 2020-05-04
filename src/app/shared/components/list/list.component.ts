import {Component, Input, OnInit} from '@angular/core';
import {CocktailModel} from '../../models/cocktail.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: CocktailModel[];
  @Input() categoryTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
